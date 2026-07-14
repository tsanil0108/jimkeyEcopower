import { useParams, Link } from 'react-router-dom'
import { PageBanner, Button, ProductImage } from '../components/ui'
import { products, company } from '../data/content'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => String(p.id) === id) || products[0]
  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div>
      <PageBanner title={product.name} crumb={product.name} />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <ProductImage product={product} className="w-full min-h-[320px] rounded-2xl object-cover" />
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-dark">
              {product.tagline}
            </p>
            <h1 className="font-display mt-3 text-3xl font-bold text-navy">{product.name}</h1>
            <p className="mt-5 leading-relaxed text-steel">{product.description}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact">Enquire Now</Button>
              <Button href={`tel:${company.phone}`} variant="outline">Call {company.phone}</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy">Related Materials</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <Link key={p.id} to={`/products/${p.id}`} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-lg">
                <div className="h-44 overflow-hidden">
                  <ProductImage product={p} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-navy group-hover:text-teal-dark">{p.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}