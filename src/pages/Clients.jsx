import { PageBanner, Reveal } from '../components/ui'
import video2 from '../assets/products/vodeo2.mp4'

const clients = import.meta.glob('../assets/brands/*.jpg', { eager: true, import: 'default' })
const clientImages = Object.values(clients)

export default function Clients() {
  return (
    <div>
      <PageBanner title="Our Clients" crumb="Clients" eyebrow={`${clientImages.length}+ Partners`} video={video2} />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <p className="max-w-2xl text-steel">
          We're proud to work alongside a growing network of clients across the alternative fuel
          resource and circular economy space.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {clientImages.map((img, i) => (
            <Reveal
              key={i}
              delay={Math.min(i, 8) * 50}
              className="flex h-28 items-center justify-center rounded-xl border border-line bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg"
            >
              <img src={img} alt={`Client ${i + 1}`} loading="lazy" className="max-h-full max-w-full object-contain" />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}