import { useParams, Link } from 'react-router-dom'
import { Recycle, Phone, Mail, Tag } from 'lucide-react'
import { PageBanner, Button, ProductImage, Reveal, Badge } from '../components/ui'
import { products, company, categories, categoryMeta } from '../data/content'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => String(p.id) === id) || products[0]
  const related = products.filter((p) => p.id !== product.id && p.categoryId === product.categoryId).slice(0, 3)
  const fallbackRelated = products.filter((p) => p.id !== product.id).slice(0, 3)
  const relatedList = related.length ? related : fallbackRelated
  const category = categories.find((c) => c.id === product.categoryId)
  const meta = categoryMeta[product.categoryId]
  const Icon = meta?.icon

  return (
    <div>
      <PageBanner
        title={product.name}
        crumb={product.name}
        eyebrow={category?.name || 'Material'}
        image={product.image}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl">
              <ProductImage product={product} className="min-h-[320px] w-full object-cover" />
              <div className="absolute left-4 top-4 flex gap-2">
                {Icon && (
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur">
                    <Icon size={16} />
                  </span>
                )}
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
              const rMeta = categoryMeta[p.categoryId]
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
                        <Badge tone={rMeta?.accent || 'teal'}>{p.form || 'Material'}</Badge>
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