import { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowUpRight, Search, X, LayoutGrid } from 'lucide-react'
import { PageBanner, ProductImage, Reveal, Badge } from '../components/ui'
import { categories, products, categoryMeta } from '../data/content'
import video2 from '../assets/products/vodeo2.mp4'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const categoryParam = params.get('category')
  const subParam = params.get('subcategory')
  const [query, setQuery] = useState('')

  const activeCategory = categories.find((c) => String(c.id) === categoryParam)

  const filtered = useMemo(() => {
    let list = products
    if (subParam) list = list.filter((p) => String(p.subCategoryId) === subParam)
    else if (categoryParam) list = list.filter((p) => String(p.categoryId) === categoryParam)
    if (query.trim()) {
      const q = query.trim().toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q))
    }
    return list
  }, [categoryParam, subParam, query])

  function selectCategory(id) {
    if (id === null) setParams({})
    else setParams({ category: String(id) })
  }

  return (
    <div>
      <PageBanner
        title="Products"
        crumb="Products"
        eyebrow={`${products.length} Materials Across ${categories.length} Categories`}
        video={video2}
      />

      <section className="border-b border-line bg-white/80 py-6 backdrop-blur lg:sticky lg:top-[73px] lg:z-30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-xs">
              <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-steel" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search materials…"
                className="w-full rounded-full border border-line bg-paper py-2.5 pl-10 pr-9 text-sm outline-none transition-colors focus:border-teal"
              />
              {query && (
                <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-steel hover:text-navy" aria-label="Clear search">
                  <X size={14} />
                </button>
              )}
            </div>
            <p className="font-mono shrink-0 text-xs uppercase tracking-widest text-steel">
              {filtered.length} material{filtered.length !== 1 && 's'} found
            </p>
          </div>

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            <button
              onClick={() => selectCategory(null)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                !categoryParam ? 'border-navy bg-navy text-white' : 'border-line text-navy hover:border-teal/40 hover:text-teal-dark'
              }`}
            >
              <LayoutGrid size={14} /> All Materials
            </button>
            {categories.map((c) => {
              const Icon = categoryMeta[c.id]?.icon
              const active = categoryParam === String(c.id)
              return (
                <button
                  key={c.id}
                  onClick={() => selectCategory(c.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? 'border-navy bg-navy text-white' : 'border-line text-navy hover:border-teal/40 hover:text-teal-dark'
                  }`}
                >
                  {Icon && <Icon size={14} />} {c.name}
                </button>
              )
            })}
          </div>

          {activeCategory && (
            <div className="mt-3 flex flex-wrap gap-2 border-t border-line pt-3">
              <Link
                to={`/products?category=${activeCategory.id}`}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  !subParam ? 'bg-teal/10 text-teal-dark' : 'text-steel hover:text-navy'
                }`}
              >
                All {activeCategory.name}
              </Link>
              {activeCategory.subcategories.map((s) => (
                <Link
                  key={s.id}
                  to={`/products?subcategory=${s.id}`}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    subParam === String(s.id) ? 'bg-teal/10 text-teal-dark' : 'text-steel hover:text-navy'
                  }`}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-line bg-paper-soft/50 py-20 text-center">
            <p className="font-display text-lg font-bold text-navy">No materials match "{query}"</p>
            <p className="mt-2 text-sm text-steel">Try a different search term, or browse by category above.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p, i) => {
              const meta = categoryMeta[p.categoryId]
              const Icon = meta?.icon
              return (
                <Reveal key={p.id} delay={Math.min(i, 6) * 60}>
                  <Link
                    to={`/products/${p.id}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    <div className="relative h-52 overflow-hidden">
                      <ProductImage product={p} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
                        {Icon && (
                          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur">
                            <Icon size={15} />
                          </span>
                        )}
                        {p.form && (
                          <span className="font-mono rounded-full bg-navy/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
                            {p.form}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="font-display flex items-center justify-between font-bold text-navy group-hover:text-teal-dark">
                        {p.name}
                        <ArrowUpRight size={16} className="shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                      </h3>
                      <p className="mt-1 text-sm text-steel">{p.tagline}</p>
                      <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-steel/80">{p.description}</p>
                      <div className="mt-4 flex items-center gap-2 border-t border-line pt-3">
                        <Badge tone={meta?.accent || 'teal'}>{categories.find((c) => c.id === p.categoryId)?.name}</Badge>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        )}
      </section>
    </div>
  )
}