import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  FileCheck2,
  Leaf,
} from 'lucide-react'

import { Link } from 'react-router-dom'

import CircularSeal from '../components/CircularSeal'

import heroBg from '../assets/products/hero.png'

import {
  aboutImg,
  vision,
  workingSteps,
  visionMission,
  stats,
  valueProps,
  faqs,
  products,
  categoryMeta,
} from '../data/content'

import {
  Button,
  SectionLabel,
  Reveal,
  ProductImage,
  Badge,
} from '../components/ui'

const valueIcons = [
  ShieldCheck,
  Truck,
  FileCheck2,
  Leaf,
]

const clientLogos = Object.values(
  import.meta.glob(
    '../assets/brands/*.jpg',
    {
      eager: true,
      import: 'default',
    }
  )
)

export default function Home() {
  return (
    <div className="overflow-x-clip">

      {/* ==================================================
          HERO
      =================================================== */}
{/* ==================================================
    HERO
=================================================== */}

<section className="relative isolate overflow-hidden bg-black text-white">

  {/* FULL CLEAR BACKGROUND IMAGE */}
  <img
    src={heroBg}
    alt="Jimkey Ecopower industrial facility"
    className="absolute inset-0 h-full w-full object-cover object-center"
  />

  {/* ONLY LEFT-SIDE TEXT READABILITY PANEL */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-black/62 via-black/28 to-transparent md:w-[70%] lg:w-[62%]" />

  {/* LIGHT BOTTOM FADE */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/18 to-transparent" />

  <div className="relative mx-auto grid min-h-[calc(100svh-73px)] max-w-7xl items-center gap-10 px-5 py-14 sm:min-h-[620px] sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:px-8 lg:py-24">

    {/* LEFT */}
    <div className="rise max-w-3xl">

      <SectionLabel dark>
        Manifest No. JEP–2026 · Alternative Fuel Resources
      </SectionLabel>

      <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.35rem,8vw,4rem)] font-bold leading-[1.03] text-white drop-shadow-[0_3px_12px_rgba(0,0,0,0.85)]">

        Waste, re-traded as the{' '}

        <span className="text-[#f2a574]">
          fuel and feedstock
        </span>{' '}

        industry runs on.

      </h1>

      <div className="mt-5 max-w-2xl rounded-2xl border border-white/10 bg-black/20 p-4 backdrop-blur-[1px] sm:p-5">

        <p className="text-sm leading-7 text-white/95 sm:text-base sm:leading-8">
          Jimkey Ecopower connects industrial waste streams with productive
          end use by sourcing, verifying and moving alternative fuel
          resources, recovered oils, carbon materials and reclaimed steel.
        </p>

        <p className="mt-3 text-sm leading-7 text-white/85 sm:text-base">
          From material discovery and supplier coordination to logistics
          and buyer requirements, our focus is practical: keep useful
          resources in circulation and help industries build more efficient
          circular supply chains.
        </p>

      </div>

      <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">

        <Button
          to="/products"
          variant="accent"
          className="w-full min-[420px]:w-auto"
        >
          Explore Materials
          <ArrowRight size={16} />
        </Button>

        <Button
          to="/about"
          variant="outline"
          className="w-full border-white/70 bg-black/20 text-white backdrop-blur-sm hover:bg-white hover:text-navy min-[420px]:w-auto"
        >
          About Jimkey
        </Button>

      </div>

      <dl className="mt-9 grid max-w-xl grid-cols-2 gap-x-5 gap-y-5 border-t border-white/30 pt-7 sm:mt-12 sm:grid-cols-4">

        {stats.map((s) => (
          <div key={s.label}>

            <dt className="font-display text-xl font-bold text-[#f2a574] drop-shadow-[0_2px_6px_rgba(0,0,0,0.85)] sm:text-2xl">
              {s.value}
            </dt>

            <dd className="font-mono mt-1 text-[9px] uppercase tracking-widest text-white/90 sm:text-[10px]">
              {s.label}
            </dd>

          </div>
        ))}

      </dl>

    </div>

    {/* RIGHT SEAL */}
    <div
      className="fade-in mx-auto flex w-full max-w-[220px] justify-center sm:max-w-[260px] lg:max-w-none lg:justify-end"
      style={{
        animationDelay: '200ms',
      }}
    >
      <CircularSeal
        variant="dark"
        className="float-y drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]"
      />
    </div>

  </div>
</section>

      {/* ==================================================
          CLIENT LOGOS
      =================================================== */}

      <section className="marquee-row overflow-hidden border-b border-line bg-white py-5 sm:py-6">

        <div className="marquee-track flex w-max items-center gap-10 sm:gap-14">

          {[
            ...clientLogos,
            ...clientLogos,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-8 w-auto shrink-0 grayscale opacity-50 transition-opacity hover:opacity-100 sm:h-10"
            />
          ))}

        </div>
      </section>

      {/* ==================================================
          ABOUT SNAPSHOT
      =================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

          <Reveal>

            <div className="relative overflow-visible">

              <img
                src={aboutImg}
                alt="Jimkey Ecopower"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />

              <div className="absolute -bottom-5 -right-5 hidden rounded-xl border border-line bg-white px-5 py-4 shadow-lg sm:block">

                <p className="font-mono text-[10px] uppercase tracking-widest text-steel">
                  Mumbai, India
                </p>

              </div>

            </div>

          </Reveal>

          <Reveal delay={120}>

            <SectionLabel>
              Who We Are
            </SectionLabel>

            <h2 className="font-display mt-4 text-2xl font-bold leading-tight text-navy sm:text-3xl">

              Circular trade built around{' '}

              <span className="text-teal-dark">
                useful resources
              </span>

            </h2>

            <p className="mt-4 text-sm leading-7 text-steel sm:text-base sm:leading-8">
              Jimkey Ecopower operates across
              alternative fuel resources, recovered
              materials, waste-management solutions
              and EPR-related services. We work to
              connect recoverable material with
              industries that can use it productively.
            </p>

            <p className="mt-4 text-sm leading-7 text-steel sm:text-base sm:leading-8">
              Our material portfolio includes used
              cooking oil, pyrolysis oil, recovered
              carbon materials, tallow oil and
              recycled steel wire, alongside
              compliance and waste-management
              solutions for businesses.
            </p>

            <Button
              to="/about"
              className="mt-6"
            >
              Read More
              <ArrowRight size={16} />
            </Button>

          </Reveal>

        </div>

      </section>

      {/* ==================================================
          WHY JIMKEY
      =================================================== */}

      <section className="bg-white py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Why Jimkey
            </SectionLabel>

            <h2 className="font-display mx-auto mt-4 max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
              Built for buyers who need it reliable
            </h2>

          </Reveal>

          <div className="mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">

            {valueProps.map((v, i) => {

              const Icon = valueIcons[i]

              return (
                <Reveal
                  key={v.title}
                  delay={i * 90}
                  className="rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg sm:p-6"
                >

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal-dark">

                    <Icon size={20} />

                  </span>

                  <h3 className="font-display mt-4 text-base font-bold text-navy">
                    {v.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-steel">
                    {v.desc}
                  </p>

                </Reveal>
              )
            })}

          </div>
        </div>
      </section>

      {/* ==================================================
          VISION / MISSION
      =================================================== */}

      <section className="py-14 sm:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">

          <Reveal className="order-2 space-y-7 lg:order-1">

            {visionMission.map((v, i) => (
              <div
                key={v.title}
                className="flex gap-4"
              >

                <span className="font-mono mt-0.5 shrink-0 text-xs font-semibold text-teal">
                  {String(i + 1).padStart(
                    2,
                    '0'
                  )}
                </span>

                <div className="border-l-2 border-teal/30 pl-4">

                  <h3 className="font-display text-lg font-bold text-navy">
                    {v.title}
                  </h3>

                  <p className="mt-1.5 text-sm leading-relaxed text-steel">
                    {v.desc}
                  </p>

                </div>
              </div>
            ))}

          </Reveal>

          <Reveal
            delay={120}
            className="order-1 lg:order-2"
          >

            <img
              src={vision}
              alt="Vision and mission"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />

          </Reveal>

        </div>

      </section>

      {/* ==================================================
          PROCESS
      =================================================== */}

      <section className="bg-white py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Process
            </SectionLabel>

            <h2 className="font-display mt-4 text-2xl font-bold text-navy sm:text-3xl">
              Our Way of Working
            </h2>

          </Reveal>

          <div className="relative mt-10 sm:mt-14">

            <div className="absolute left-0 right-0 top-5 hidden h-px bg-line lg:block" />

            <div className="grid grid-cols-1 gap-5 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">

              {workingSteps.map((s, i) => (
                <Reveal
                  key={s.n}
                  delay={i * 80}
                  className="relative rounded-2xl border border-line bg-paper p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg sm:p-6"
                >

                  <div className="font-mono relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {s.n}
                  </div>

                  <h3 className="font-display mt-3 text-base font-bold text-navy">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-steel">
                    {s.desc}
                  </p>

                </Reveal>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* ==================================================
          PRODUCTS
      =================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">

        <Reveal className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">

          <div>

            <SectionLabel>
              Traded Materials
            </SectionLabel>

            <h2 className="font-display mt-4 text-2xl font-bold text-navy sm:text-3xl">

              Explore{' '}

              <span className="text-teal-dark">
                Jimkey Ecopower
              </span>{' '}

              Products

            </h2>

          </div>

          <Button
            to="/products"
            variant="outline"
          >
            View All
          </Button>

        </Reveal>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">

          {products
            .slice(0, 3)
            .map((p, i) => {

              const meta =
                categoryMeta[p.categoryId]

              const Icon = meta?.icon

              return (
                <Reveal
                  key={p.id}
                  delay={i * 100}
                >

                  <Link
                    to={`/products/${p.id}`}
                    className="group block h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >

                    <div className="relative h-48 overflow-hidden sm:h-52">

                      <ProductImage
                        product={p}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {Icon && (
                        <span className="absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-navy shadow-sm backdrop-blur">

                          <Icon size={15} />

                        </span>
                      )}

                    </div>

                    <div className="p-5">

                      <h3 className="font-display flex items-start justify-between gap-4 font-bold text-navy group-hover:text-teal-dark">

                        <span>
                          {p.name}
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="mt-1 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                        />

                      </h3>

                      <p className="mt-1 text-sm text-steel">
                        {p.tagline}
                      </p>

                      {p.form && (
                        <div className="mt-3">

                          <Badge
                            tone={
                              meta?.accent ||
                              'teal'
                            }
                          >
                            {p.form}
                          </Badge>

                        </div>
                      )}

                    </div>
                  </Link>

                </Reveal>
              )
            })}

        </div>
      </section>

      {/* ==================================================
          FAQ
      =================================================== */}

      <section className="bg-white py-14 sm:py-20">

        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Good to know
            </SectionLabel>

            <h2 className="font-display mt-4 text-2xl font-bold text-navy sm:text-3xl">
              Frequently asked
            </h2>

          </Reveal>

          <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-paper sm:mt-10">

            {faqs.map((f, i) => (
              <Reveal
                key={f.q}
                delay={i * 70}
                as="details"
                className="group p-5 open:bg-white sm:p-6"
              >

                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-navy sm:text-base">

                  {f.q}

                  <span className="shrink-0 rounded-full border border-line px-2 py-0.5 font-mono text-xs text-steel transition-transform group-open:rotate-45 group-open:border-teal group-open:text-teal">
                    +
                  </span>

                </summary>

                <p className="mt-3 text-sm leading-relaxed text-steel">
                  {f.a}
                </p>

              </Reveal>
            ))}

          </div>
        </div>
      </section>

      {/* ==================================================
          CTA
      =================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">

        <Reveal className="relative overflow-hidden rounded-3xl bg-navy px-5 py-10 text-center text-white sm:px-14 sm:py-14">

          <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />

          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-teal/25 blur-3xl" />

          <h2 className="font-display relative mx-auto max-w-2xl text-2xl font-bold sm:text-3xl">
            Have material to move, or a plant
            that needs feedstock?
          </h2>

          <p className="relative mx-auto mt-3 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Tell us the material, volume and
            timeline — we'll take it from there.
          </p>

          <div className="relative mt-7 flex flex-col justify-center gap-3 min-[420px]:flex-row min-[420px]:flex-wrap sm:mt-8">

            <Button
              to="/contact"
              variant="accent"
              className="w-full min-[420px]:w-auto"
            >
              Get in Touch
              <ArrowRight size={16} />
            </Button>

            <Button
              href="tel:+919768008679"
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white hover:text-navy min-[420px]:w-auto"
            >
              Call Us Directly
            </Button>

          </div>

        </Reveal>
      </section>

    </div>
  )
}