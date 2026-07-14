import { PageBanner } from '../components/ui'

const clients = import.meta.glob('../assets/brands/*.jpg', { eager: true, import: 'default' })
const clientImages = Object.values(clients)

export default function Clients() {
  return (
    <div>
      <PageBanner title="Our Clients" crumb="Clients" />
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <p className="max-w-2xl text-steel">
          We're proud to work alongside a growing network of clients across the alternative fuel
          resource and circular economy space.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {clientImages.map((img, i) => (
            <div
              key={i}
              className="flex h-28 items-center justify-center rounded-xl border border-line bg-white p-4 shadow-sm"
            >
              <img src={img} alt={`Client ${i + 1}`} className="max-h-full max-w-full object-contain" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
