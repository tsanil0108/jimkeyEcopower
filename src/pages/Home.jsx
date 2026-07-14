import { ArrowRight, ArrowUpRight, ShieldCheck, Truck, FileCheck2, Leaf } from 'lucide-react'
import { Link } from 'react-router-dom'
import CircularSeal from '../components/CircularSeal'
import heroBg from '../assets/products/hero.png'
import {
  aboutImg,
  vision,
  workingSteps,
  visionMission,
  products,
  stats,
  valueProps,
  faqs,
  categoryMeta,
} from '../data/content'
import { Button, SectionLabel, Reveal, ProductImage, Badge } from '../components/ui'

const valueIcons = [ShieldCheck, Truck, FileCheck2, Leaf]

const clientLogos = Object.values(
  import.meta.glob('../assets/brands/*.jpg', { eager: true, import: 'default' })
)

export default function Home() {
  return (
    <div className="overflow-x-clip">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-navy bg-cover bg-center text-white"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-navy/80" />
        <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal/25 blur-[100px]" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-amber/15 blur-[90px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
          <div className="rise">
            <SectionLabel dark>Manifest No. JEP–2026 · Alternative Fuel Resources</SectionLabel>
            <h1 className="font-display mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              Waste, re-traded as the <span className="text-teal-light">fuel and feedstock</span> industry runs on.
            </h1>
            <p className="mt-5 max-w-xl text-white/70">
              Jimkey Ecopower sources, verifies and moves alternative fuel resources, recovered oils
              and reclaimed steel wire from supplier to plant — closing the loop between industrial
              waste and industrial input.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/products" variant="accent">
                Explore Materials <ArrowRight size={16} />
              </Button>
              <Button to="/about" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-navy">
                About Jimkey
              </Button>
            </div>

            <dl className="mt-12 grid max-w-md grid-cols-2 gap-x-6 gap-y-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-teal-light">{s.value}</dt>
                  <dd className="font-mono mt-1 text-[10px] uppercase tracking-widest text-white/50">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="fade-in flex justify-center lg:justify-end" style={{ animationDelay: '200ms' }}>
            <CircularSeal variant="dark" className="float-y" />
          </div>
        </div>

        <div className="dotted-rule relative h-px w-full opacity-0" />
      </section>

      {/* Marquee of client logos */}
      <section className="marquee-row overflow-hidden border-b border-line bg-white py-6">
        <div className="marquee-track flex w-max items-center gap-14">
          {[...clientLogos, ...clientLogos].map((img, i) => (
            <img key={i} src={img} alt="" className="h-10 w-auto shrink-0 grayscale opacity-50 transition-opacity hover:opacity-100" />
          ))}
        </div>
      </section>

      {/* About snapshot */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <img src={aboutImg} alt="Jimkey Ecopower" className="w-full rounded-2xl" />
              <div className="absolute -bottom-5 -right-5 hidden rounded-xl border border-line bg-white px-5 py-4 shadow-lg sm:block">
                <p className="font-display text-xl font-bold text-navy">Est. 2021</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-steel">Mumbai, India</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy">
              Welcome to <span className="text-teal-dark">Jimkey Ecopower</span>
            </h2>
            <p className="mt-4 text-justify text-steel">
              We are a global engineering firm specialising in industrial filtration, diffused aeration
              and robotic sludge management across sectors. Leveraging expertise and innovation, we
              deliver customised solutions for water, wastewater and sludge challenges — advancing
              technology for safety, efficiency and environmental responsibility.
            </p>
            <p className="mt-4 text-justify text-steel">
              At Jimkey, we trade alternative fuel resources such as UCO, carbon black, pyrolytic oil,
              tallow oil and waste tyres. We've also partnered with Korean and Thailand manufacturers for
              branding and sale of cosmetics and food products in India.
            </p>
            <Button to="/about" className="mt-6">Read More <ArrowRight size={16} /></Button>
          </Reveal>
        </div>
      </section>

      {/* Why Jimkey */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center">
            <SectionLabel>Why Jimkey</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy">Built for buyers who need it reliable</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {valueProps.map((v, i) => {
              const Icon = valueIcons[i]
              return (
                <Reveal key={v.title} delay={i * 90} className="rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal-dark">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-display mt-4 text-base font-bold text-navy">{v.title}</h3>
                  <p className="mt-2 text-justify text-sm leading-relaxed text-steel">{v.desc}</p>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="order-2 space-y-7 lg:order-1">
            {visionMission.map((v, i) => (
              <div key={v.title} className="flex gap-4">
                <span className="font-mono mt-0.5 shrink-0 text-xs font-semibold text-teal">{String(i + 1).padStart(2, '0')}</span>
                <div className="border-l-2 border-teal/30 pl-4">
                  <h3 className="font-display text-lg font-bold text-navy">{v.title}</h3>
                  <p className="mt-1.5 text-justify text-sm text-steel">{v.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={120} className="order-1 lg:order-2">
            <img src={vision} alt="Vision and mission" className="w-full rounded-2xl" />
          </Reveal>
        </div>
      </section>

      {/* Way of working */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center">
            <SectionLabel>Process</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy">Our Way of Working</h2>
          </Reveal>
          <div className="relative mt-14">
            <div className="absolute left-0 right-0 top-5 hidden h-px bg-line lg:block" />
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
              {workingSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 80} className="relative rounded-2xl border border-line bg-paper p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg">
                  <div className="font-mono relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {s.n}
                  </div>
                  <h3 className="font-display mt-3 text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-steel">{s.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>Traded Materials</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy">
              Explore <span className="text-teal-dark">Jimkey Ecopower</span> Products
            </h2>
          </div>
          <Button to="/products" variant="outline">View All</Button>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p, i) => {
            const meta = categoryMeta[p.categoryId]
            const Icon = meta?.icon
            return (
              <Reveal key={p.id} delay={i * 100}>
                <Link
                  to={`/products/${p.id}`}
                  className="group block overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                >
                  <div className="relative h-52 overflow-hidden">
                    <ProductImage product={p} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    {Icon && (
                      <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur">
                        <Icon size={15} />
                      </span>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display flex items-center justify-between font-bold text-navy group-hover:text-teal-dark">
                      {p.name}
                      <ArrowUpRight size={16} className="opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>
                    <p className="mt-1 text-sm text-steel">{p.tagline}</p>
                    {p.form && (
                      <div className="mt-3">
                        <Badge tone={meta?.accent || 'teal'}>{p.form}</Badge>
                      </div>
                    )}
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="text-center">
            <SectionLabel>Good to know</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy">Frequently asked</h2>
          </Reveal>
          <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-paper">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 70} as="details" className="group p-6 open:bg-white">
                <summary className="font-display flex cursor-pointer list-none items-center justify-between text-base font-bold text-navy">
                  {f.q}
                  <span className="ml-4 shrink-0 rounded-full border border-line px-2 py-0.5 font-mono text-xs text-steel transition-transform group-open:rotate-45 group-open:border-teal group-open:text-teal">+</span>
                </summary>
                <p className="mt-3 text-justify text-sm leading-relaxed text-steel">{f.a}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy px-8 py-14 text-center text-white sm:px-14">
          <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal/25 blur-3xl" />
          <h2 className="font-display relative mx-auto max-w-2xl text-2xl font-bold sm:text-3xl">
            Have material to move, or a plant that needs feedstock?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/65">
            Tell us the material, the volume, and the timeline — we'll take it from there.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="accent">Get in Touch <ArrowRight size={16} /></Button>
            <Button href="tel:+919768008679" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-navy">
              Call Us Directly
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  )
}