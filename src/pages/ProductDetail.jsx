import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Recycle, Phone, Mail, Tag, Loader2 } from 'lucide-react'
import { PageBanner, Button, ProductImage, Reveal, Badge } from '../components/ui'
import { company } from '../data/content'
import { api, resolveMediaUrl } from '../lib/api'
import { getCategoryIcon } from '../lib/icons'

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [categories, setCategories] = useState([])
  const [relatedList, setRelatedList] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    setError('')
    Promise.all([api.getProduct(id), api.getCategories()])
      .then(async ([prod, cats]) => {
        if (cancelled) return
        setProduct(prod)
        setCategories(cats)
        const sameCategory = await api.getProducts({ categoryId: prod.categoryId })
        const related = sameCategory.filter((p) => p.id !== prod.id).slice(0, 3)
        if (related.length) {
          setRelatedList(related)
        } else {
          const all = await api.getProducts()
          setRelatedList(all.filter((p) => p.id !== prod.id).slice(0, 3))
        }
      })
      .catch((err) => !cancelled && setError(err.message || 'Could not load this product'))
      .finally(() => !cancelled && setLoading(false))
    return () => { cancelled = true }
  }, [id])

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center gap-2 text-steel">
        <Loader2 size={18} className="animate-spin" /> Loading…
      </div>
    )
  }

  if (error || !product) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-24 text-center">
        <p className="font-display text-lg font-bold text-navy">Could not load this product</p>
        <p className="mt-2 text-sm text-steel">{error || 'It may have been removed.'}</p>
        <Link to="/products" className="mt-6 inline-block font-semibold text-teal-dark hover:underline">Back to Products</Link>
      </div>
    )
  }

  const category = categories.find((c) => c.id === product.categoryId)
  const Icon = getCategoryIcon(category?.icon)

  return (
    <div>
      <PageBanner
        title={product.name}
        crumb={product.name}
        eyebrow={category?.name || 'Material'}
        image={resolveMediaUrl(product.imageUrl)}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <ProductImage product={product} className="min-h-[320px] w-full object-cover" />
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur">
                  <Icon size={16} />
                </span>
                {product.form && (
                  <span className="font-mono flex items-center rounded-full bg-navy/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                    {product.form}
                  </span>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="font-mono inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-dark">
              <Recycle size={14} /> {product.tagline}
            </p>
            <h1 className="font-display mt-3 text-3xl font-bold text-navy">{product.name}</h1>
            <p className="mt-5 leading-relaxed text-steel">{product.description}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" variant="accent">Enquire Now</Button>
              <Button href={`tel:${company.phone}`} variant="outline">Call {company.phone}</Button>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-line">
              <div className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-3 sm:divide-y-0">
                <div className="bg-paper p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-steel">Category</p>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-navy">
                    <Tag size={13} className="text-teal-dark" /> {category?.name || '—'}
                  </p>
                </div>
                <div className="bg-paper p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-steel">Form</p>
                  <p className="mt-1 text-sm font-semibold text-navy">{product.form || '—'}</p>
                </div>
                <div className="bg-paper p-4">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-steel">Reference</p>
                  <p className="mt-1 text-sm font-semibold text-navy">JEP-{product.id}</p>
                </div>
                <div className="col-span-2 bg-paper p-4 sm:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-steel">Enquiries</p>
                  <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold text-navy">
                    <a href={`mailto:${company.email}`} className="flex items-center gap-1.5 hover:text-teal-dark">
                      <Mail size={13} className="text-teal-dark" /> {company.email}
                    </a>
                    <a href={`tel:${company.phone}`} className="flex items-center gap-1.5 hover:text-teal-dark">
                      <Phone size={13} className="text-teal-dark" /> {company.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="flex items-end justify-between gap-4">
            <h2 className="font-display text-2xl font-bold text-navy">Related Materials</h2>
            <Link to="/products" className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-dark hover:text-navy">
              View All
            </Link>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedList.map((p, i) => {
              const rCat = categories.find((c) => c.id === p.categoryId)
              return (
                <Reveal key={p.id} delay={i * 90}>
                  <Link
                    to={`/products/${p.id}`}
                    className="group block overflow-hidden rounded-2xl border border-line bg-paper shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    <div className="h-44 overflow-hidden">
                      <ProductImage product={p} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-bold text-navy group-hover:text-teal-dark">{p.name}</h3>
                      <div className="mt-2">
                        <Badge tone={rCat?.accent || 'teal'}>{p.form || 'Material'}</Badge>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}