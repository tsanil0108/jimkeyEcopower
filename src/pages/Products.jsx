import { useMemo, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { PageBanner, ProductImage } from '../components/ui'
import { categories, products } from '../data/content'

export default function Products() {
  const [params, setParams] = useSearchParams()
  const categoryParam = params.get('category')
  const subParam = params.get('subcategory')
  const [active, setActive] = useState({ category: categoryParam, sub: subParam })

  const filtered = useMemo(() => {
    if (subParam) return products.filter((p) => String(p.subCategoryId) === subParam)
    if (categoryParam) return products.filter((p) => String(p.categoryId) === categoryParam)
    return products
  }, [categoryParam, subParam])

  return (
    <div>
      <PageBanner title="Products" crumb="Products" />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-6">
            <div>
              <button
                onClick={() => setParams({})}
                className={`mb-2 w-full rounded-lg px-3 py-2 text-left text-sm font-semibold ${
                  !categoryParam && !subParam ? 'bg-navy text-white' : 'text-navy hover:bg-paper'
                }`}
              >
                All Materials
              </button>
              {categories.map((c) => (
                <div key={c.id} className="mb-3">
                  <Link
                    to={`/products?category=${c.id}`}
                    className={`block rounded-lg px-3 py-2 text-sm font-bold ${
                      categoryParam === String(c.id) ? 'bg-teal/10 text-teal-dark' : 'text-navy'
                    }`}
                  >
                    {c.name}
                  </Link>
                  <div className="ml-3 mt-1 space-y-1 border-l border-line pl-3">
                    {c.subcategories.map((s) => (
                      <Link
                        key={s.id}
                        to={`/products?subcategory=${s.id}`}
                        className={`block rounded-lg px-2 py-1.5 text-sm ${
                          subParam === String(s.id) ? 'font-semibold text-teal-dark' : 'text-steel hover:text-navy'
                        }`}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <div>
            <p className="mb-6 text-sm text-steel">{filtered.length} material{filtered.length !== 1 && 's'} found</p>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <Link
                  key={p.id}
                  to={`/products/${p.id}`}
                  className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-lg"
                >
                  <div className="h-52 overflow-hidden">
                    <ProductImage product={p} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-navy group-hover:text-teal-dark">{p.name}</h3>
                    <p className="mt-1 text-sm text-steel">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}