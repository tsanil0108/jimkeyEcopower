import { PageBanner, SectionLabel } from '../components/ui'
import video2 from '../assets/products/vodeo2.mp4'

const clients = import.meta.glob('../assets/brands/*.jpg', { eager: true, import: 'default' })
const clientImages = Object.values(clients)

const mid = Math.ceil(clientImages.length / 2)
const rowA = clientImages.slice(0, mid)
const rowB = clientImages.slice(mid)

function LogoCard({ img, i }) {
  return (
    <div
      key={i}
      className="flex h-24 w-52 shrink-0 items-center justify-center rounded-xl border border-line bg-white p-4 shadow-sm grayscale transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg hover:grayscale-0"
    >
      <img src={img} alt={`Client ${i + 1}`} loading="lazy" className="max-h-full max-w-full object-contain" />
    </div>
  )
}

export default function Clients() {
  return (
    <div>
      <PageBanner title="Our Clients" crumb="Clients" eyebrow={`${clientImages.length}+ Partners`} video={video2} />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SectionLabel>Trading Partners</SectionLabel>
        <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold text-navy">
          Names the material moves between
        </h2>
        <p className="mt-4 max-w-2xl text-steel">
          We're proud to work alongside a growing network of clients across the alternative fuel
          resource and circular economy space.
        </p>
      </section>

      <div className="space-y-6 py-4">
        <div className="marquee-row marquee-fade overflow-hidden">
          <div className="marquee-track flex w-max items-center gap-6 px-6">
            {[...rowA, ...rowA].map((img, i) => (
              <LogoCard key={`a-${i}`} img={img} i={i} />
            ))}
          </div>
        </div>

        <div className="marquee-row marquee-fade overflow-hidden">
          <div className="marquee-track-reverse flex w-max items-center gap-6 px-6">
            {[...rowB, ...rowB].map((img, i) => (
              <LogoCard key={`b-${i}`} img={img} i={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}