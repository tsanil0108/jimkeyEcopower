import { Expand } from 'lucide-react'
import { PageBanner, Reveal } from '../components/ui'
import { gallery } from '../data/content'
import video2 from '../assets/products/vodeo2.mp4'

export default function Gallery() {
  return (
    <div>
      <PageBanner title="Gallery / Media" crumb="Gallery" eyebrow="On the Ground" video={video2} />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {gallery.map((img, i) => (
            <Reveal key={i} delay={Math.min(i, 6) * 60} className="group relative overflow-hidden rounded-2xl border border-line">
              <img
                src={img}
                alt={`Jimkey Ecopower gallery ${i + 1}`}
                loading="lazy"
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-300 group-hover:bg-navy/30">
                <Expand size={22} className="text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}