  // export const BASE_URL =
  //   import.meta.env.VITE_API_URL || ''

  export const BASE_URL =
    import.meta.env.VITE_API_URL ||
    'http://localhost:8080'

  /**
   * Resolves a possibly-relative backend URL
   * e.g. "/uploads/x.jpg"
   * to an absolute backend URL.
   */
  export function resolveMediaUrl(url) {
    if (!url) return null

    if (
      url.startsWith('http://') ||
      url.startsWith('https://')
    ) {
      return url
    }

    return `${BASE_URL}${url}`
  }

  function getToken() {
    return localStorage.getItem('jimkey_token')
  }

  export function getSession() {
    const token =
      localStorage.getItem('jimkey_token')

    const name =
      localStorage.getItem('jimkey_name')

    const email =
      localStorage.getItem('jimkey_email')

    const role =
      localStorage.getItem('jimkey_role')

    if (!token) {
      return null
    }

    return {
      token,
      name,
      email,
      role,
    }
  }

  export function saveSession({
    token,
    name,
    email,
    role,
  }) {
    localStorage.setItem(
      'jimkey_token',
      token
    )

    localStorage.setItem(
      'jimkey_name',
      name || ''
    )

    localStorage.setItem(
      'jimkey_email',
      email || ''
    )

    localStorage.setItem(
      'jimkey_role',
      role || ''
    )
  }

  export function clearSession() {
    localStorage.removeItem(
      'jimkey_token'
    )

    localStorage.removeItem(
      'jimkey_name'
    )

    localStorage.removeItem(
      'jimkey_email'
    )

    localStorage.removeItem(
      'jimkey_role'
    )
  }

  /**
   * Core API request helper.
   */
  async function request(
    path,
    {
      method = 'GET',
      body,
      auth = false,
      isMultipart = false,
    } = {}
  ) {
    const headers = {}

    if (!isMultipart) {
      headers['Content-Type'] =
        'application/json'
    }

    if (auth) {
      const token = getToken()

      if (token) {
        headers['Authorization'] =
          `Bearer ${token}`
      }
    }

    const res = await fetch(
      `${BASE_URL}${path}`,
      {
        method,
        headers,

        body: body
          ? isMultipart
            ? body
            : JSON.stringify(body)
          : undefined,
      }
    )

    if (res.status === 204) {
      return null
    }

    let data = null

    try {
      data = await res.json()
    } catch {
      // response may not contain JSON
    }

    if (!res.ok) {
      const message =
        data?.message ||
        data?.error ||
        `Request failed (${res.status})`

      throw new Error(message)
    }

    return data
  }

  export const api = {

    // ==================================================
    // PUBLIC CATEGORY
    // ==================================================

    getCategories: () =>
      request('/api/categories'),

    // ==================================================
    // PUBLIC PRODUCTS
    // ==================================================

    getProducts: (params = {}) => {
      const qs =
        new URLSearchParams(
          params
        ).toString()

      return request(
        `/api/products${
          qs ? `?${qs}` : ''
        }`
      )
    },

    getProduct: (id) =>
      request(
        `/api/products/${id}`
      ),

    // ==================================================
    // PUBLIC LEADS
    // ==================================================

    submitLead: (payload) =>
      request('/api/leads', {
        method: 'POST',
        body: payload,
      }),

    // ==================================================
    // AUTH
    // ==================================================

    login: (payload) =>
      request('/api/auth/login', {
        method: 'POST',
        body: payload,
      }),

    register: (payload) =>
      request('/api/auth/register', {
        method: 'POST',
        body: payload,
      }),

    /**
     * Forgot Password
     * Step 1:
     * Send 6-digit OTP to registered email.
     *
     * payload:
     * {
     *   email: "user@gmail.com"
     * }
     */
    forgotPassword: (payload) =>
      request(
        '/api/auth/forgot-password',
        {
          method: 'POST',
          body: payload,
        }
      ),

    /**
     * Forgot Password
     * Step 2:
     * Verify email OTP.
     *
     * payload:
     * {
     *   email: "user@gmail.com",
     *   otp: "123456"
     * }
     *
     * backend response:
     * {
     *   message: "...",
     *   resetToken: "..."
     * }
     */
    verifyResetOtp: (payload) =>
      request(
        '/api/auth/verify-reset-otp',
        {
          method: 'POST',
          body: payload,
        }
      ),

    /**
     * Forgot Password
     * Step 3:
     * Set new password after OTP verification.
     *
     * payload:
     * {
     *   resetToken: "...",
     *   password: "NewPassword123"
     * }
     */
    resetPassword: (payload) =>
      request(
        '/api/auth/reset-password',
        {
          method: 'POST',
          body: payload,
        }
      ),

    // ==================================================
    // PUBLIC BLOG
    // ==================================================

    getBlogs: (
      page = 0,
      size = 100
    ) =>
      request(
        `/api/blogs?page=${page}&size=${size}`
      ),

    getBlogById: (id) =>
      request(
        `/api/blogs/${id}`
      ),

    getBlogsByCategory: (
      category,
      page = 0,
      size = 100
    ) =>
      request(
        `/api/blogs/category/${encodeURIComponent(
          category
        )}?page=${page}&size=${size}`
      ),

    searchBlogs: (
      query,
      page = 0,
      size = 100
    ) =>
      request(
        `/api/blogs/search?q=${encodeURIComponent(
          query
        )}&page=${page}&size=${size}`
      ),

    // ==================================================
    // PUBLIC BLOG CATEGORIES
    // ==================================================

    getBlogCategories: () =>
      request(
        '/api/blog-categories'
      ),

    // ==================================================
    // ADMIN PRODUCTS
    // ==================================================

    createProduct: (payload) =>
      request(
        '/api/admin/products',
        {
          method: 'POST',
          body: payload,
          auth: true,
        }
      ),

    updateProduct: (
      id,
      payload
    ) =>
      request(
        `/api/admin/products/${id}`,
        {
          method: 'PUT',
          body: payload,
          auth: true,
        }
      ),

    deleteProduct: (id) =>
      request(
        `/api/admin/products/${id}`,
        {
          method: 'DELETE',
          auth: true,
        }
      ),

    // ==================================================
    // PRODUCT IMAGE UPLOAD
    // ==================================================

    uploadImage: (file) => {
      const form =
        new FormData()

      form.append(
        'file',
        file
      )

      return request(
        '/api/admin/uploads',
        {
          method: 'POST',
          body: form,
          auth: true,
          isMultipart: true,
        }
      )
    },

    // ==================================================
    // ADMIN LEADS
    // ==================================================

    getLeads: (
      page = 0,
      size = 20
    ) =>
      request(
        `/api/admin/leads?page=${page}&size=${size}`,
        {
          auth: true,
        }
      ),

    markLeadHandled: (
      id,
      handled
    ) =>
      request(
        `/api/admin/leads/${id}/handled?handled=${handled}`,
        {
          method: 'PATCH',
          auth: true,
        }
      ),

    // ==================================================
    // PRODUCT CATEGORY ADMIN
    // ==================================================

    createCategory: (
      payload
    ) =>
      request(
        '/api/admin/categories',
        {
          method: 'POST',
          body: payload,
          auth: true,
        }
      ),

    createSubcategory: (
      payload
    ) =>
      request(
        '/api/admin/categories/subcategories',
        {
          method: 'POST',
          body: payload,
          auth: true,
        }
      ),

    deleteCategory: (id) =>
      request(
        `/api/admin/categories/${id}`,
        {
          method: 'DELETE',
          auth: true,
        }
      ),

    deleteSubcategory: (id) =>
      request(
        `/api/admin/categories/subcategories/${id}`,
        {
          method: 'DELETE',
          auth: true,
        }
      ),

    // ==================================================
    // ADMIN BLOGS
    // ==================================================

    getAdminBlogs: (
      page = 0,
      size = 50
    ) =>
      request(
        `/api/admin/blogs?page=${page}&size=${size}`,
        {
          auth: true,
        }
      ),

    getAdminBlogById: (
      id
    ) =>
      request(
        `/api/admin/blogs/${id}`,
        {
          auth: true,
        }
      ),

    getAdminBlogDrafts: (
      page = 0,
      size = 50
    ) =>
      request(
        `/api/admin/blogs/drafts?page=${page}&size=${size}`,
        {
          auth: true,
        }
      ),

    createBlog: (
      payload
    ) =>
      request(
        '/api/admin/blogs',
        {
          method: 'POST',
          body: payload,
          auth: true,
        }
      ),

    updateBlog: (
      id,
      payload
    ) =>
      request(
        `/api/admin/blogs/${id}`,
        {
          method: 'PUT',
          body: payload,
          auth: true,
        }
      ),

    publishBlog: (id) =>
      request(
        `/api/admin/blogs/${id}/publish`,
        {
          method: 'PATCH',
          auth: true,
        }
      ),

    unpublishBlog: (id) =>
      request(
        `/api/admin/blogs/${id}/unpublish`,
        {
          method: 'PATCH',
          auth: true,
        }
      ),

    deleteBlog: (id) =>
      request(
        `/api/admin/blogs/${id}`,
        {
          method: 'DELETE',
          auth: true,
        }
      ),

    // ==================================================
    // BLOG IMAGE UPLOAD
    // ==================================================

    uploadBlogImage: (
      file
    ) => {
      const form =
        new FormData()

      form.append(
        'file',
        file
      )

      return request(
        '/api/admin/uploads',
        {
          method: 'POST',
          body: form,
          auth: true,
          isMultipart: true,
        }
      )
    },

    // ==================================================
    // BLOG CATEGORY ADMIN
    // ==================================================

    createBlogCategory: (
      payload
    ) =>
      request(
        '/api/admin/blog-categories',
        {
          method: 'POST',
          body: payload,
          auth: true,
        }
      ),

    updateBlogCategory: (
      id,
      payload
    ) =>
      request(
        `/api/admin/blog-categories/${id}`,
        {
          method: 'PUT',
          body: payload,
          auth: true,
        }
      ),

    deleteBlogCategory: (
      id
    ) =>
      request(
        `/api/admin/blog-categories/${id}`,
        {
          method: 'DELETE',
          auth: true,
        }
      ),
  }