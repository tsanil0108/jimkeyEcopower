import { PageBanner } from '../components/ui'
import { gallery } from '../data/content'

export default function Gallery() {
  return (
    <div>
      <PageBanner title="Gallery / Media" crumb="Gallery" />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-line">
              <img
                src={img}
                alt={`Jimkey Ecopower gallery ${i + 1}`}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
