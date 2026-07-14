import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button, SectionLabel } from '../components/ui'
import MaterialStream from '../components/MaterialStream'
import { aboutImg, vision, workingSteps, visionMission, products } from '../data/content'
import heroBg from '../assets/products/hero.png'

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-navy text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,158,212,0.25),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <SectionLabel>Alternative Fuel Resources · Circular Economy</SectionLabel>
            <h1 className="font-display mt-5 text-4xl font-extrabold leading-tight sm:text-5xl">
              Welcome to <span className="text-teal-light">Jimkey Ecopower</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-white/80">
              Pioneering the future of sustainable energy and circular economy.
            </p>
            <p className="mt-4 max-w-xl text-white/60">
              Jimkey Ecopower was conceived with a bold vision to reshape the energy landscape by
              harnessing the potential of alternative fuels while fostering a circular economy.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/about" className="bg-teal hover:bg-teal-dark">
                Read More <ArrowRight size={16} />
              </Button>
              <Button to="/products" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-navy">
                Explore Materials
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <MaterialStream variant="dark" />
          </div>
        </div>
      </section>

      {/* About snapshot */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={aboutImg} alt="Jimkey Ecopower" className="w-full rounded-2xl" />
          <div>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy">
              Welcome to <span className="text-teal-dark">Jimkey Ecopower</span>
            </h2>
            <p className="mt-4 text-steel">
              We are a global engineering firm specializing in industrial filtration, diffused aeration,
              and robotic sludge management services across sectors. Leveraging expertise and innovation,
              we deliver customized solutions for water, wastewater and sludge challenges — advancing
              technology for safety, efficiency and environmental responsibility.
            </p>
            <p className="mt-4 text-steel">
              At Jimkey, we trade alternative fuel resources such as UCO, carbon black, pyrolytic oil,
              tallow oil and waste tyres. We've also partnered with Korean and Thailand manufacturers for
              branding and sale of cosmetics and food products in India.
            </p>
            <Button to="/about" className="mt-6">Read More <ArrowRight size={16} /></Button>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div className="space-y-7 lg:order-1 order-2">
            {visionMission.map((v) => (
              <div key={v.title} className="border-l-2 border-teal pl-5">
                <h3 className="font-display text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-1.5 text-sm text-steel">{v.desc}</p>
              </div>
            ))}
          </div>
          <img src={vision} alt="Vision and mission" className="order-1 w-full rounded-2xl lg:order-2" />
        </div>
      </section>

      {/* Way of working */}
      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <SectionLabel>Process</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy">Our Way of Working</h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {workingSteps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm">
                <div className="font-mono mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                  {s.n}
                </div>
                <h3 className="font-display mt-3 text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-steel">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>Traded Materials</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy">
              Explore <span className="text-teal-dark">Jimkey Ecopower</span> Products
            </h2>
          </div>
          <Button to="/products" variant="outline">View All</Button>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <Link key={p.id} to={`/products/${p.id}`} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-shadow hover:shadow-lg">
              <div className="h-52 overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-navy group-hover:text-teal-dark">{p.name}</h3>
                <p className="mt-1 text-sm text-steel">{p.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}