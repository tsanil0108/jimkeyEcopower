import './AdminDashboard.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Plus, Trash2, Pencil, X, LogOut, Package, Inbox, Phone, Mail, Loader2, ImagePlus, CheckCircle2,
  Newspaper, Eye, EyeOff,
} from 'lucide-react'
import { PageBanner, Button } from '../components/ui'
import { api, getSession, clearSession, resolveMediaUrl } from '../lib/api'

const emptyForm = {
  id: null, name: '', tagline: '', form: '', description: '', imageUrl: '',
  categoryId: '', subcategoryId: '',
}

const emptyBlogForm = {
  id: null, title: '', content: '', excerpt: '', imageUrl: '',
  author: '', category: '', tags: '', published: false,
}

export default function AdminDashboard() {
  const navigate = useNavigate()
  const session = getSession()

  const [tab, setTab] = useState('products')
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [leads, setLeads] = useState([])
  const [blogs, setBlogs] = useState([])
  const [blogCategories, setBlogCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState(emptyForm)
  const [saving, setSaving] = useState(false)
  const [uploading, setUploading] = useState(false)

  const [showBlogForm, setShowBlogForm] = useState(false)
  const [blogFormData, setBlogFormData] = useState(emptyBlogForm)
  const [savingBlog, setSavingBlog] = useState(false)
  const [uploadingBlog, setUploadingBlog] = useState(false)

  const [newBlogCategory, setNewBlogCategory] = useState('')
  const [editingBlogCategoryId, setEditingBlogCategoryId] = useState(null)
  const [editingBlogCategoryName, setEditingBlogCategoryName] = useState('')
  const [savingBlogCategory, setSavingBlogCategory] = useState(false)

  useEffect(() => {
    if (!session || session.role !== 'ADMIN') {
      navigate('/login')
      return
    }
    loadAll()
  }, [])

  async function loadAll() {
    setLoading(true)
    setError('')
    try {
      const [cats, prods, leadPage, blogPage, blogCats] = await Promise.all([
        api.getCategories(),
        api.getProducts(),
        api.getLeads(0, 50),
        api.getAdminBlogs(0, 50),
        api.getBlogCategories(),
      ])
      setCategories(cats)
      setProducts(prods)
      setLeads(leadPage.content || [])
      setBlogs(blogPage.content || [])
      setBlogCategories(Array.isArray(blogCats) ? blogCats : [])
    } catch (err) {
      setError(err.message || 'Could not load dashboard data')
    } finally {
      setLoading(false)
    }
  }

  function logout() {
    clearSession()
    navigate('/login')
  }

  function openCreate() {
    setFormData(emptyForm)
    setShowForm(true)
  }

  function openEdit(p) {
    setFormData({
      id: p.id, name: p.name, tagline: p.tagline || '', form: p.form || '',
      description: p.description || '', imageUrl: p.imageUrl || '',
      categoryId: p.categoryId || '', subcategoryId: p.subcategoryId || '',
    })
    setShowForm(true)
  }

  function update(field) {
    return (e) => setFormData((f) => ({ ...f, [field]: e.target.value }))
  }

  const activeCategory = categories.find((c) => String(c.id) === String(formData.categoryId))

  async function handleImageChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploading(true)
    setError('')
    try {
      const res = await api.uploadImage(file)
      setFormData((f) => ({ ...f, imageUrl: res.url }))
    } catch (err) {
      setError(err.message || 'Image upload failed')
    } finally {
      setUploading(false)
    }
  }

  async function handleSave(e) {
    e.preventDefault()
    setSaving(true)
    setError('')
    try {
      const payload = {
        name: formData.name,
        tagline: formData.tagline,
        form: formData.form,
        description: formData.description,
        imageUrl: formData.imageUrl || null,
        categoryId: Number(formData.categoryId),
        subcategoryId: formData.subcategoryId ? Number(formData.subcategoryId) : null,
      }
      if (formData.id) {
        await api.updateProduct(formData.id, payload)
      } else {
        await api.createProduct(payload)
      }
      setShowForm(false)
      await loadAll()
    } catch (err) {
      setError(err.message || 'Could not save product')
    } finally {
      setSaving(false)
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this product? This cannot be undone.')) return
    try {
      await api.deleteProduct(id)
      setProducts((list) => list.filter((p) => p.id !== id))
    } catch (err) {
      setError(err.message || 'Could not delete product')
    }
  }

  function openBlogCreate() {
    setBlogFormData(emptyBlogForm)
    setShowBlogForm(true)
  }

  function openBlogEdit(b) {
    setBlogFormData({
      id: b.id, title: b.title, content: b.content || '', excerpt: b.excerpt || '',
      imageUrl: b.imageUrl || '', author: b.author || '', category: b.category || '',
      tags: Array.isArray(b.tags) ? b.tags.join(', ') : (b.tags || ''),
      published: !!b.published,
    })
    setShowBlogForm(true)
  }

  function updateBlogField(field) {
    return (e) => setBlogFormData((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleBlogImageChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setUploadingBlog(true)
    setError('')
    try {
      const res = await api.uploadImage(file)
      setBlogFormData((f) => ({ ...f, imageUrl: res.url }))
    } catch (err) {
      setError(err.message || 'Blog image upload failed')
    } finally {
      setUploadingBlog(false)
    }
  }

  async function handleBlogSave(e) {
    e.preventDefault()
    setSavingBlog(true)
    setError('')
    try {
      const payload = {
        title: blogFormData.title,
        content: blogFormData.content,
        excerpt: blogFormData.excerpt || null,
        imageUrl: blogFormData.imageUrl || null,
        author: blogFormData.author,
        category: blogFormData.category || null,
        tags: blogFormData.tags || null,
        published: blogFormData.published,
      }
      if (blogFormData.id) {
        await api.updateBlog(blogFormData.id, payload)
      } else {
        await api.createBlog(payload)
      }
      setShowBlogForm(false)
      await loadAll()
    } catch (err) {
      setError(err.message || 'Could not save blog')
    } finally {
      setSavingBlog(false)
    }
  }

  async function handleBlogDelete(id) {
    if (!confirm('Delete this blog post? This cannot be undone.')) return
    try {
      await api.deleteBlog(id)
      setBlogs((list) => list.filter((b) => b.id !== id))
    } catch (err) {
      setError(err.message || 'Could not delete blog')
    }
  }

  async function handleBlogPublishToggle(blog) {
    try {
      if (!blog.published) {
        await api.publishBlog(blog.id)
        await loadAll()
      } else {
        await api.unpublishBlog(blog.id)
        await loadAll()
      }
    } catch (err) {
      setError(err.message || 'Could not update publish status')
    }
  }

  async function handleCreateBlogCategory(e) {
    e.preventDefault()
    const name = newBlogCategory.trim()
    if (!name) return
    setSavingBlogCategory(true)
    setError('')
    try {
      await api.createBlogCategory({ name })
      setNewBlogCategory('')
      await loadAll()
    } catch (err) {
      setError(err.message || 'Could not create blog category')
    } finally {
      setSavingBlogCategory(false)
    }
  }

  function startEditBlogCategory(category) {
    setEditingBlogCategoryId(category.id)
    setEditingBlogCategoryName(category.name)
  }

  async function handleUpdateBlogCategory(id) {
    const name = editingBlogCategoryName.trim()
    if (!name) return
    setSavingBlogCategory(true)
    setError('')
    try {
      await api.updateBlogCategory(id, { name })
      setEditingBlogCategoryId(null)
      setEditingBlogCategoryName('')
      await loadAll()
    } catch (err) {
      setError(err.message || 'Could not update blog category')
    } finally {
      setSavingBlogCategory(false)
    }
  }

  async function handleDeleteBlogCategory(id) {
    if (!confirm('Delete this blog category? Existing blog posts will keep their category text.')) return
    try {
      await api.deleteBlogCategory(id)
      await loadAll()
    } catch (err) {
      setError(err.message || 'Could not delete blog category')
    }
  }

  async function toggleHandled(lead) {
    try {
      const updated = await api.markLeadHandled(lead.id, !lead.handled)
      setLeads((list) => list.map((l) => (l.id === lead.id ? updated : l)))
    } catch (err) {
      setError(err.message || 'Could not update lead')
    }
  }

  if (!session || session.role !== 'ADMIN') return null

  return (
    <div className="admin-page">
      <PageBanner title="Admin Dashboard" crumb="Admin" eyebrow={`Signed in as ${session.name || session.email}`} />

      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-2">
            <button
              onClick={() => setTab('products')}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                tab === 'products' ? 'border-navy bg-navy text-white' : 'border-line text-navy hover:border-teal/40'
              }`}
            >
              <Package size={15} /> Products ({products.length})
            </button>
            <button
              onClick={() => setTab('leads')}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                tab === 'leads' ? 'border-navy bg-navy text-white' : 'border-line text-navy hover:border-teal/40'
              }`}
            >
              <Inbox size={15} /> Leads ({leads.length})
            </button>
            <button
              onClick={() => setTab('blogs')}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                tab === 'blogs' ? 'border-navy bg-navy text-white' : 'border-line text-navy hover:border-teal/40'
              }`}
            >
              <Newspaper size={15} /> Blogs ({blogs.length})
            </button>
          </div>
          <button onClick={logout} className="flex items-center gap-2 text-sm font-semibold text-steel hover:text-navy">
            <LogOut size={15} /> Logout
          </button>
        </div>

        {error && (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>
        )}

        {loading ? (
          <div className="mt-16 flex items-center justify-center gap-2 text-steel">
            <Loader2 size={18} className="animate-spin" /> Loading…
          </div>
        ) : tab === 'products' ? (
          <div className="mt-8">
            <div className="flex justify-end">
              <Button as="button" variant="accent" onClick={openCreate}>
                <Plus size={16} /> Add Product
              </Button>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="border-b border-line bg-paper text-xs uppercase tracking-wide text-steel">
                  <tr>
                    <th className="px-5 py-3">Product</th>
                    <th className="px-5 py-3">Category</th>
                    <th className="px-5 py-3">Form</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {products.map((p) => (
                    <tr key={p.id} className="hover:bg-paper/60">
                      <td className="px-5 py-3 font-semibold text-navy">{p.name}</td>
                      <td className="px-5 py-3 text-steel">{p.categoryName}</td>
                      <td className="px-5 py-3 text-steel">{p.form || '—'}</td>
                      <td className="px-5 py-3">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => openEdit(p)} className="rounded-full p-2 text-steel hover:bg-teal/10 hover:text-teal-dark" aria-label="Edit">
                            <Pencil size={15} />
                          </button>
                          <button onClick={() => handleDelete(p.id)} className="rounded-full p-2 text-steel hover:bg-red-50 hover:text-red-600" aria-label="Delete">
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {products.length === 0 && (
                    <tr><td colSpan={4} className="px-5 py-10 text-center text-steel">No products yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : tab === 'leads' ? (
          <div className="mt-8 space-y-4">
            {leads.length === 0 && (
              <p className="rounded-2xl border border-dashed border-line bg-paper-soft/50 py-16 text-center text-steel">
                No enquiries yet.
              </p>
            )}
            {leads.map((lead) => (
              <div key={lead.id} className={`rounded-2xl border p-5 ${lead.handled ? 'border-line bg-white' : 'border-teal/30 bg-teal/5'}`}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-display font-bold text-navy">{lead.name}</p>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-steel">
                      <a href={`mailto:${lead.email}`} className="flex items-center gap-1.5 hover:text-teal-dark"><Mail size={13} /> {lead.email}</a>
                      <a href={`tel:${lead.mobile}`} className="flex items-center gap-1.5 hover:text-teal-dark"><Phone size={13} /> {lead.mobile}</a>
                    </div>
                    {lead.source && <p className="mt-1 font-mono text-[10px] uppercase tracking-widest text-teal-dark">{lead.source}</p>}
                  </div>
                  <button
                    onClick={() => toggleHandled(lead)}
                    className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                      lead.handled ? 'border-line text-steel hover:border-navy hover:text-navy' : 'border-teal bg-teal text-white'
                    }`}
                  >
                    <CheckCircle2 size={13} /> {lead.handled ? 'Handled' : 'Mark handled'}
                  </button>
                </div>
                {lead.message && <p className="mt-3 text-sm leading-relaxed text-steel">{lead.message}</p>}
                <p className="mt-3 font-mono text-[10px] uppercase tracking-widest text-steel/60">
                  {new Date(lead.createdAt).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8">
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-start">
              <div className="rounded-2xl border border-line bg-white p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-display font-bold text-navy">Blog Categories</p>
                    <p className="mt-1 text-xs text-steel">Add, edit or delete categories used by blog posts.</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-steel">{blogCategories.length} categories</span>
                </div>

                <form onSubmit={handleCreateBlogCategory} className="mt-4 flex gap-2">
                  <input
                    value={newBlogCategory}
                    onChange={(e) => setNewBlogCategory(e.target.value)}
                    placeholder="New blog category"
                    className="min-w-0 flex-1 rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal"
                  />
                  <button
                    type="submit"
                    disabled={savingBlogCategory || !newBlogCategory.trim()}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
                  >
                    <Plus size={14} /> Add
                  </button>
                </form>

                <div className="mt-4 flex flex-wrap gap-2">
                  {blogCategories.map((category) => (
                    <div key={category.id} className="flex items-center gap-1 rounded-full border border-line bg-paper px-3 py-1.5">
                      {editingBlogCategoryId === category.id ? (
                        <>
                          <input
                            autoFocus
                            value={editingBlogCategoryName}
                            onChange={(e) => setEditingBlogCategoryName(e.target.value)}
                            className="w-36 bg-transparent text-xs font-semibold text-navy outline-none"
                          />
                          <button type="button" onClick={() => handleUpdateBlogCategory(category.id)} className="text-teal-dark" aria-label="Save category">
                            <CheckCircle2 size={13} />
                          </button>
                          <button type="button" onClick={() => setEditingBlogCategoryId(null)} className="text-steel" aria-label="Cancel edit">
                            <X size={13} />
                          </button>
                        </>
                      ) : (
                        <>
                          <span className="text-xs font-semibold text-navy">{category.name}</span>
                          <button type="button" onClick={() => startEditBlogCategory(category)} className="ml-1 text-steel hover:text-teal-dark" aria-label="Edit category">
                            <Pencil size={12} />
                          </button>
                          <button type="button" onClick={() => handleDeleteBlogCategory(category.id)} className="text-steel hover:text-red-600" aria-label="Delete category">
                            <Trash2 size={12} />
                          </button>
                        </>
                      )}
                    </div>
                  ))}
                  {blogCategories.length === 0 && <span className="text-xs text-steel">No blog categories yet.</span>}
                </div>
              </div>

              <Button as="button" type="button" variant="accent" onClick={openBlogCreate}>
                <Plus size={16} /> Add Blog Post
              </Button>
            </div>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="border-b border-line bg-paper text-xs uppercase tracking-wide text-steel">
                  <tr>
                    <th className="px-5 py-3">Title</th>
                    <th className="px-5 py-3">Author</th>
                    <th className="px-5 py-3">Category</th>
                    <th className="px-5 py-3">Status</th>
                    <th className="px-5 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {blogs.map((b) => (
                    <tr key={b.id} className="hover:bg-paper/60">
                      <td className="px-5 py-3 font-semibold text-navy">{b.title}</td>
                      <td className="px-5 py-3 text-steel">{b.author}</td>
                      <td className="px-5 py-3 text-steel">{b.category || '—'}</td>
                      <td className="px-5 py-3">
                        <button
                          onClick={() => handleBlogPublishToggle(b)}
                          className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                            b.published ? 'border-teal bg-teal/10 text-teal-dark' : 'border-line text-steel hover:border-navy hover:text-navy'
                          }`}
                        >
                          {b.published ? <Eye size={12} /> : <EyeOff size={12} />}
                          {b.published ? 'Published' : 'Draft'}
                        </button>
                      </td>
                      <td className="px-5 py-3">
                        <div className="flex justify-end gap-2">
                          <button onClick={() => openBlogEdit(b)} className="rounded-full p-2 text-steel hover:bg-teal/10 hover:text-teal-dark" aria-label="Edit">
                            <Pencil size={15} />
                          </button>
                          <button onClick={() => handleBlogDelete(b.id)} className="rounded-full p-2 text-steel hover:bg-red-50 hover:text-red-600" aria-label="Delete">
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                  {blogs.length === 0 && (
                    <tr><td colSpan={5} className="px-5 py-10 text-center text-steel">No blog posts yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>

      {showForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/50 px-4 py-8 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-navy">{formData.id ? 'Edit Product' : 'Add Product'}</h2>
              <button onClick={() => setShowForm(false)} className="rounded-full p-1.5 text-steel hover:bg-paper"><X size={18} /></button>
            </div>

            <form onSubmit={handleSave} className="mt-6 space-y-4">
              <input required value={formData.name} onChange={update('name')} placeholder="Product Name *" className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal" />
              <input value={formData.tagline} onChange={update('tagline')} placeholder="Tagline" className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal" />
              <div className="grid gap-4 sm:grid-cols-2">
                <select required value={formData.categoryId} onChange={(e) => setFormData((f) => ({ ...f, categoryId: e.target.value, subcategoryId: '' }))} className="rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal">
                  <option value="">Category *</option>
                  {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
                <select value={formData.subcategoryId} onChange={update('subcategoryId')} className="rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal">
                  <option value="">Subcategory (optional)</option>
                  {activeCategory?.subcategories?.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
                </select>
              </div>
              <input value={formData.form} onChange={update('form')} placeholder="Form (e.g. Liquid, Powder, Service)" className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal" />
              <textarea rows={4} value={formData.description} onChange={update('description')} placeholder="Description" className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal" />

              <div>
                <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-teal-dark">
                  <ImagePlus size={16} /> {uploading ? 'Uploading…' : 'Upload product photo'}
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} disabled={uploading} />
                </label>
                {formData.imageUrl && (
                  <p className="mt-1 truncate text-xs text-steel">{formData.imageUrl}</p>
                )}
              </div>

              <div className="flex gap-3 pt-2">
                <Button as="button" variant="accent" className="flex-1" disabled={saving || uploading}>
                  {saving ? 'Saving…' : formData.id ? 'Save Changes' : 'Create Product'}
                </Button>
                <Button as="button" type="button" variant="outline" onClick={() => setShowForm(false)}>Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showBlogForm && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-navy/50 px-4 py-8 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-bold text-navy">{blogFormData.id ? 'Edit Blog Post' : 'Add Blog Post'}</h2>
              <button onClick={() => setShowBlogForm(false)} className="rounded-full p-1.5 text-steel hover:bg-paper"><X size={18} /></button>
            </div>

            <form onSubmit={handleBlogSave} className="mt-6 space-y-4">
              <input required value={blogFormData.title} onChange={updateBlogField('title')} placeholder="Blog Title *" className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal" />
              <div className="grid gap-4 sm:grid-cols-2">
                <input required value={blogFormData.author} onChange={updateBlogField('author')} placeholder="Author *" className="rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal" />
                <select required value={blogFormData.category} onChange={updateBlogField('category')} className="rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal">
                  <option value="">Blog Category *</option>
                  {blogCategories.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
                </select>
              </div>
              <input value={blogFormData.tags} onChange={updateBlogField('tags')} placeholder="Tags (comma separated)" className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal" />
              <textarea rows={2} value={blogFormData.excerpt} onChange={updateBlogField('excerpt')} placeholder="Excerpt (optional — auto-generated if left blank)" className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal" />
              <textarea required rows={8} value={blogFormData.content} onChange={updateBlogField('content')} placeholder="Content * (min 50 characters)" className="w-full rounded-lg border border-line px-4 py-2.5 text-sm outline-none focus:border-teal" />

              <div>
                <label className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-teal-dark">
                  <ImagePlus size={16} /> {uploadingBlog ? 'Uploading…' : 'Upload cover image'}
                  <input type="file" accept="image/*" className="hidden" onChange={handleBlogImageChange} disabled={uploadingBlog} />
                </label>
                {blogFormData.imageUrl && (
                  <div className="mt-2 flex items-center gap-3">
                    <img src={resolveMediaUrl(blogFormData.imageUrl)} alt="Cover preview" className="h-14 w-14 rounded-lg border border-line object-cover" />
                    <p className="truncate text-xs text-steel">{blogFormData.imageUrl}</p>
                  </div>
                )}
              </div>

              <label className="flex items-center gap-2 text-sm font-semibold text-navy">
                <input
                  type="checkbox"
                  checked={blogFormData.published}
                  onChange={(e) => setBlogFormData((f) => ({ ...f, published: e.target.checked }))}
                  className="h-4 w-4 rounded border-line text-teal focus:ring-teal"
                />
                Publish immediately
              </label>

              <div className="flex gap-3 pt-2">
                <Button as="button" variant="accent" className="flex-1" disabled={savingBlog || uploadingBlog}>
                  {savingBlog ? 'Saving…' : blogFormData.id ? 'Save Changes' : 'Create Blog Post'}
                </Button>
                <Button as="button" type="button" variant="outline" onClick={() => setShowBlogForm(false)}>Cancel</Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}