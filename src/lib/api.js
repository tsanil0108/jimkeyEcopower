export const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

/** Resolves a possibly-relative backend URL (e.g. "/uploads/x.jpg") to an absolute one. */
export function resolveMediaUrl(url) {
  if (!url) return null
  if (url.startsWith('http://') || url.startsWith('https://')) return url
  return `${BASE_URL}${url}`
}

function getToken() {
  return localStorage.getItem('jimkey_token')
}

export function getSession() {
  const token = localStorage.getItem('jimkey_token')
  const name = localStorage.getItem('jimkey_name')
  const email = localStorage.getItem('jimkey_email')
  const role = localStorage.getItem('jimkey_role')
  if (!token) return null
  return { token, name, email, role }
}

export function saveSession({ token, name, email, role }) {
  localStorage.setItem('jimkey_token', token)
  localStorage.setItem('jimkey_name', name || '')
  localStorage.setItem('jimkey_email', email || '')
  localStorage.setItem('jimkey_role', role || '')
}

export function clearSession() {
  localStorage.removeItem('jimkey_token')
  localStorage.removeItem('jimkey_name')
  localStorage.removeItem('jimkey_email')
  localStorage.removeItem('jimkey_role')
}

/**
 * Core request helper. Throws an Error with a readable message on failure
 * (picks up the backend's { message } error body when present).
 */
async function request(path, { method = 'GET', body, auth = false, isMultipart = false } = {}) {
  const headers = {}
  if (!isMultipart) headers['Content-Type'] = 'application/json'
  if (auth) {
    const token = getToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    body: body ? (isMultipart ? body : JSON.stringify(body)) : undefined,
  })

  if (res.status === 204) return null

  let data = null
  try {
    data = await res.json()
  } catch {
    // no body
  }

  if (!res.ok) {
    const message = data?.message || `Request failed (${res.status})`
    throw new Error(message)
  }
  return data
}

export const api = {
  // Public
  getCategories: () => request('/api/categories'),
  getProducts: (params = {}) => {
    const qs = new URLSearchParams(params).toString()
    return request(`/api/products${qs ? `?${qs}` : ''}`)
  },
  getProduct: (id) => request(`/api/products/${id}`),
  submitLead: (payload) => request('/api/leads', { method: 'POST', body: payload }),
  login: (payload) => request('/api/auth/login', { method: 'POST', body: payload }),
  register: (payload) => request('/api/auth/register', { method: 'POST', body: payload }),

  // Admin (JWT required)
  createProduct: (payload) => request('/api/admin/products', { method: 'POST', body: payload, auth: true }),
  updateProduct: (id, payload) => request(`/api/admin/products/${id}`, { method: 'PUT', body: payload, auth: true }),
  deleteProduct: (id) => request(`/api/admin/products/${id}`, { method: 'DELETE', auth: true }),
  uploadImage: (file) => {
    const form = new FormData()
    form.append('file', file)
    return request('/api/admin/uploads', { method: 'POST', body: form, auth: true, isMultipart: true })
  },
  getLeads: (page = 0, size = 20) => request(`/api/admin/leads?page=${page}&size=${size}`, { auth: true }),
  markLeadHandled: (id, handled) =>
    request(`/api/admin/leads/${id}/handled?handled=${handled}`, { method: 'PATCH', auth: true }),
  createCategory: (payload) => request('/api/admin/categories', { method: 'POST', body: payload, auth: true }),
  createSubcategory: (payload) =>
    request('/api/admin/categories/subcategories', { method: 'POST', body: payload, auth: true }),
}