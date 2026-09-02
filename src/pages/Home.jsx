import {
  ArrowRight,
  ShieldCheck,
  Truck,
  FileCheck2,
  Leaf,
  Search,
  Recycle,
  Settings2,
  TrendingUp,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import CircularSeal from '../components/CircularSeal'

import heroBg from '../assets/products/hero.png'

import {
  aboutImg,
  vision,
  visionMission,
  stats,
  valueProps,
  faqs,
} from '../data/content'

import {
  Button,
  SectionLabel,
  Reveal,
} from '../components/ui'

import { api } from '../lib/api'

const valueIcons = [
  ShieldCheck,
  Truck,
  FileCheck2,
  Leaf,
]

/* =====================================================
   SERVICES & SOLUTIONS — background images
   Drop your images into /public and update these two
   paths (or replace with an `import x from '../assets/...'`
   if you'd rather keep them inside src/assets).
====================================================== */

const productsCardBg = '/products-card-bg.jpg'
const servicesCardBg = '/services-card-bg.jpg'

const productBullets = [
  {
    label: 'Alternative Fuel Resource (AFR)',
    desc: 'Tyre pyrolysis oil, black carbon powder, UCO, tallow oil',
  },
  {
    label: 'Steel Wire',
    desc: 'Burnt & unburnt waste-tyre steel wire',
  },
  {
    label: 'Cleaning Chemicals',
    desc: 'Dishwash, degreaser & bathroom-care range',
  },
  {
    label: 'Quality Assurance',
    desc: 'Verified sourcing with consistent specification',
  },
]

const serviceBullets = [
  {
    label: 'EPR Compliance',
    desc: 'Plastic, battery, e-waste, used-oil & tyre obligations',
  },
  {
    label: 'Municipal Waste Management',
    desc: 'MSW collection & processing support',
  },
  {
    label: 'Industrial Waste Management',
    desc: 'On-site industrial waste handling',
  },
  {
    label: 'Reporting & Documentation',
    desc: 'Targets, records & regulatory filings',
  },
]

/* =====================================================
   PROCESS STEPS
   Assess -> Recover -> Process -> Optimise -> Sustain
====================================================== */

const processSteps = [
  {
    n: '01',
    title: 'Assess',
    desc: 'We evaluate waste streams, material quality, recovery potential and operational requirements.',
    icon: Search,
    dot: 'bg-amber-dark',
    iconBg: 'bg-amber-dark/10',
    iconColor: 'text-amber-dark',
    wave: 'fill-amber-dark/70',
    line: 'stroke-amber-dark/60',
  },
  {
    n: '02',
    title: 'Plan',
    desc: 'We design a clear recovery roadmap, matching materials to the right buyers, routes and compliance needs.',
    icon: Recycle,
    dot: 'bg-teal-dark',
    iconBg: 'bg-teal-dark/10',
    iconColor: 'text-teal-dark',
    wave: 'fill-teal-dark/70',
    line: 'stroke-teal-dark/60',
  },
  {
    n: '03',
    title: 'Execute',
    desc: 'We move materials through sourcing, processing and logistics with quality checks at every stage.',
    icon: Settings2,
    dot: 'bg-navy',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
    wave: 'fill-navy/70',
    line: 'stroke-navy/60',
  },
  {
    n: '04',
    title: 'Manage',
    desc: 'We monitor the entire supply chain during transaction, keeping performance and reporting on track.',
    icon: TrendingUp,
    dot: 'bg-amber-dark',
    iconBg: 'bg-amber-dark/10',
    iconColor: 'text-amber-dark',
    wave: 'fill-amber-dark/70',
    line: 'stroke-amber-dark/60',
  },
  {
    n: '05',
    title: 'Maintain',
    desc: 'We build long-term circular solutions that reduce waste and support a cleaner future.',
    icon: Leaf,
    dot: 'bg-navy',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
    wave: 'fill-navy/70',
    line: 'stroke-navy/60',
  },
]

const clientLogos =
  Object.values(
    import.meta.glob(
      '../assets/brands/*.jpg',
      {
        eager: true,
        import: 'default',
      }
    )
  )

/* =====================================================
   SECTION GLOW — soft light-green / light-blue backdrop
   used to alternate section backgrounds across the page,
   in the style of a faint gradient with drifting blobs
   and thin curved accent lines.
====================================================== */

function SectionGlow({ tone = 'green' }) {
  const isGreen = tone === 'green'

  const bgColor = isGreen
    ? '#d1fae5' /* light green */
    : '#dbeafe' /* light blue */

  const blobAColor = isGreen
    ? 'rgba(16,185,129,0.35)'
    : 'rgba(56,189,248,0.35)'

  const blobBColor = isGreen
    ? 'rgba(20,184,166,0.3)'
    : 'rgba(59,130,246,0.3)'

  const lineColor = isGreen
    ? 'rgba(13,148,136,0.35)'
    : 'rgba(2,132,199,0.35)'

  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ backgroundColor: bgColor }}
    >

      <div
        className="absolute -top-24 -right-16 h-72 w-72 rounded-full blur-3xl"
        style={{ backgroundColor: blobAColor }}
      />

      <div
        className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: blobBColor }}
      />

      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >

        <path
          d="M0,68 Q28,42 58,54 T100,28"
          fill="none"
          stroke={lineColor}
          strokeWidth="0.35"
        />

        <path
          d="M0,86 Q38,62 68,70 T100,48"
          fill="none"
          stroke={lineColor}
          strokeWidth="0.25"
          strokeDasharray="1.2,2"
        />

      </svg>

    </div>
  )
}

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    api.getProducts()
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="w-full min-w-0 overflow-x-hidden">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate w-full overflow-hidden bg-black text-white">

        <img
          src={heroBg}
          alt="Jimkey Ecopower industrial facility"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover

            object-[58%_center]

            sm:object-center
          "
        />

        {/* LEFT-ONLY GRADIENT */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0

            bg-gradient-to-r

            from-black/65
            via-black/28
            to-transparent

            sm:from-black/55

            lg:from-black/45
            lg:via-black/10
          "
        />

        <div
          className="
            relative
            mx-auto
            grid
            w-full
            max-w-7xl
            min-w-0

            grid-cols-1

            gap-8

            px-5
            py-10

            sm:px-6
            sm:py-14

            md:px-8
            md:py-16

            lg:min-h-[calc(100svh-80px)]
            lg:grid-cols-[1.1fr_0.9fr]
            lg:items-center
            lg:gap-12
            lg:py-20

            xl:gap-16
          "
        >

          {/* LEFT */}
          <div className="rise min-w-0 w-full max-w-full lg:max-w-3xl">

            <h1
              className="
                mt-0
                w-full
                max-w-full

                font-display
                font-bold
                text-white

                text-[34px]
                leading-[1.08]

                min-[380px]:text-[38px]

                sm:text-[46px]

                md:text-[54px]

                lg:max-w-3xl
                lg:text-[60px]

                xl:text-[64px]

                drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]
              "
            >
              Waste, re-traded as the{' '}

              <span className="text-[#f2a574]">
                fuel and feedstock
              </span>{' '}

              industry runs on.
            </h1>

            {/* DESCRIPTION */}
            <div
              className="
                mt-6
                w-full
                max-w-full

                rounded-2xl

                border
                border-white/10

                bg-black/25

                p-4

                backdrop-blur-[1px]

                sm:max-w-2xl
                sm:p-5
              "
            >

              <p className="text-[14px] leading-6 text-white/95 sm:text-[15px] sm:leading-7 md:text-base">
                Jimkey Ecopower connects industrial waste streams
                with productive end use by sourcing, verifying and
                moving alternative fuel resources, recovered oils,
                carbon materials and reclaimed steel.
              </p>

              <p className="mt-3 text-[14px] leading-6 text-white/85 sm:text-[15px] sm:leading-7 md:text-base">
                From material discovery and supplier coordination
                to logistics and buyer requirements, our focus is
                practical: keep useful resources in circulation and
                help industries build more efficient circular supply
                chains.
              </p>

            </div>

            {/* BUTTONS */}
            <div
              className="
                mt-6
                flex
                w-full
                flex-col
                gap-3

                min-[480px]:w-auto
                min-[480px]:flex-row
                min-[480px]:flex-wrap
              "
            >

              <Button
                to="/products"
                variant="accent"
                className="w-full min-[480px]:w-auto"
              >
                Explore Materials
                <ArrowRight size={16} />
              </Button>

              <Button
                to="/about"
                variant="outline"
                className="
                  w-full
                  border-white/60
                  bg-black/20
                  text-white

                  hover:bg-white
                  hover:text-navy

                  min-[480px]:w-auto
                "
              >
                About Jimkey
              </Button>

            </div>

            {/* STATS */}
            <dl
              className="
                mt-8
                grid
                w-full
                max-w-xl
                grid-cols-2
                gap-x-5
                gap-y-5

                border-t
                border-white/25
                pt-6

                sm:grid-cols-4
              "
            >

              {stats.map((s) => (
                <div
                  key={s.label}
                  className="min-w-0"
                >

                  <dt className="font-display text-xl font-bold text-[#f2a574] sm:text-2xl">
                    {s.value}
                  </dt>

                  <dd className="font-mono mt-1 text-[8px] uppercase leading-4 tracking-wider text-white/85 sm:text-[9px]">
                    {s.label}
                  </dd>

                </div>
              ))}

            </dl>

          </div>

          {/* DESKTOP SEAL ONLY */}
          <div
            className="
              fade-in
              hidden
              min-w-0

              lg:flex
              lg:w-full
              lg:justify-end
            "
            style={{
              animationDelay:
                '200ms',
            }}
          >

            <div className="w-full max-w-[360px] xl:max-w-[420px]">

              <CircularSeal
                variant="dark"
                className="float-y h-auto w-full"
              />

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CLIENT LOGOS
      ====================================================== */}

      <section className="marquee-row overflow-hidden border-b border-line bg-white py-5 sm:py-6">

        {/* Self-contained infinite scroll — always moves on its own */}
        <style>{`
          @keyframes clientLogosMarquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .client-logos-track {
            animation: clientLogosMarquee 26s linear infinite;
          }
          .client-logos-track:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="marquee-track client-logos-track flex w-max items-center gap-10 sm:gap-14">

          {[
            ...clientLogos,
            ...clientLogos,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-8 w-auto shrink-0 sm:h-10"
            />
          ))}

        </div>

      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="relative overflow-hidden py-14 sm:py-20">

        <SectionGlow tone="blue" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">

          <Reveal>

            <div className="relative">

              <img
                src={aboutImg}
                alt="Jimkey Ecopower"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />

              <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-line bg-white px-5 py-4 shadow-lg sm:block">

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

            <p className="mt-4 text-sm leading-7 text-steel sm:text-base">
              Jimkey Ecopower operates across alternative fuel
              resources, recovered materials, waste-management
              solutions and EPR-related services.
            </p>

            <p className="mt-4 text-sm leading-7 text-steel sm:text-base">
              Our material portfolio includes used cooking oil,
              pyrolysis oil, recovered carbon materials, tallow oil
              and recycled steel wire, alongside compliance and
              waste-management solutions.
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

        </div>

      </section>

      {/* =====================================================
          WHY JIMKEY
      ====================================================== */}

      <section className="relative overflow-hidden py-14 sm:py-20">

        <SectionGlow tone="green" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Why Jimkey
            </SectionLabel>

            <h2 className="font-display mx-auto mt-4 max-w-2xl text-2xl font-bold text-navy sm:text-3xl">
              Built for buyers who need it reliable
            </h2>

          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {valueProps.map((v, i) => {

              const Icon =
                valueIcons[i]

              return (
                <Reveal
                  key={v.title}
                  delay={i * 90}
                  className="rounded-2xl border border-line bg-paper p-5 transition-all hover:-translate-y-1 hover:shadow-lg sm:p-6"
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

      {/* =====================================================
          VISION
      ====================================================== */}

      <section className="relative overflow-hidden py-14 sm:py-20">

        <SectionGlow tone="blue" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">

          <Reveal className="order-2 space-y-7 lg:order-1">

            {visionMission.map((v, i) => (
              <div
                key={v.title}
                className="flex gap-4"
              >

                <span className="font-mono mt-0.5 shrink-0 text-xs font-semibold text-teal">
                  {String(
                    i + 1
                  ).padStart(
                    2,
                    '0'
                  )}
                </span>

                <div className="min-w-0 border-l-2 border-teal/30 pl-4">

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

      {/* =====================================================
          PROCESS
          Redesigned: numbered nodes + curved connectors +
          icon-circle cards with a colour wave accent, matching
          the "Our Way of Working" reference layout.
      ====================================================== */}

      <section className="relative overflow-hidden py-14 sm:py-20">

        <SectionGlow tone="green" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Process
            </SectionLabel>

            <h2 className="font-display mx-auto mt-4 max-w-3xl text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              Our Way of{' '}
              <span className="text-teal-dark">
                Working
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">
              A clear, responsible process that ensures quality,
              transparency and long-term value.
            </p>

          </Reveal>

          <div className="relative mt-20">

            {/* Self-contained animation for the automatic step-chase effect */}
            <style>{`
              @keyframes processNodePulse {
                0%, 6% {
                  transform: scale(1.18);
                  box-shadow: 0 0 0 8px rgba(27,134,158,0.18), 0 10px 22px rgba(16,42,67,0.25);
                }
                16%, 100% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(27,134,158,0);
                }
              }
            `}</style>

            {/* Curved connectors — desktop only, aligned to the
                5-column grid centres (10%, 30%, 50%, 70%, 90%).
                A small dot travels along this path forever, and
                each node below pulses in sequence as it passes. */}
            <svg
              className="pointer-events-none absolute inset-x-0 top-[26px] hidden h-20 w-full lg:block"
              viewBox="0 0 100 16"
              preserveAspectRatio="none"
            >
              {processSteps.slice(0, -1).map((s, i) => {

                const x1 = 10 + i * 20
                const x2 = 10 + (i + 1) * 20

                return (
                  <path
                    key={s.n}
                    d={`M ${x1} 9 Q ${(x1 + x2) / 2} -3 ${x2} 9`}
                    fill="none"
                    className={s.line}
                    strokeWidth="0.5"
                    strokeLinecap="round"
                  />
                )
              })}

              {/* traveling dot — loops the full route automatically */}
              <circle
                r="1.6"
                className="fill-white stroke-teal-dark"
                strokeWidth="0.6"
              >
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path={
                    processSteps
                      .slice(0, -1)
                      .map((s, i) => {
                        const x1 = 10 + i * 20
                        const x2 = 10 + (i + 1) * 20
                        const mid = (x1 + x2) / 2
                        return i === 0
                          ? `M ${x1} 9 Q ${mid} -3 ${x2} 9`
                          : `Q ${mid} -3 ${x2} 9`
                      })
                      .join(' ')
                  }
                />
              </circle>

            </svg>

            <div className="grid gap-10 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-7">

              {processSteps.map((s, i) => {

                const Icon = s.icon

                return (
                  <Reveal
                    key={s.n}
                    delay={i * 90}
                    className="relative flex flex-col items-center"
                  >

                    {/* number node — pulses automatically, in sequence */}
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-base font-bold text-white ring-4 ring-white ${s.dot}`}
                      style={{
                        animation: 'processNodePulse 6s ease-in-out infinite',
                        animationDelay: `${-(i * 1.2)}s`,
                      }}
                    >
                      {s.n}
                    </div>

                    {/* card */}
                    <div className="relative mt-6 w-full overflow-hidden rounded-2xl border border-line bg-paper p-7 pb-12 text-center transition-all hover:-translate-y-1 hover:shadow-lg">

                      <span
                        className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full ${s.iconBg} ${s.iconColor}`}
                      >
                        <Icon size={28} strokeWidth={1.75} />
                      </span>

                      <span
                        className={`mx-auto mt-5 block h-0.5 w-8 rounded-full ${s.dot}`}
                      />

                      <h3 className="font-display mt-4 text-lg font-bold text-navy sm:text-xl">
                        {s.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-steel">
                        {s.desc}
                      </p>

                      {/* wave accent */}
                      <svg
                        className="absolute inset-x-0 bottom-0 h-8 w-full"
                        viewBox="0 0 200 40"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,40 L0,26 Q100,2 200,20 L200,40 Z"
                          className={s.wave}
                        />
                      </svg>

                    </div>

                  </Reveal>
                )
              })}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SERVICES & SOLUTIONS
          Two-card layout: coloured top bar, numbered label,
          heading, bullet list and a full-card link — one card
          for Products, one for Services. Each card also carries
          a faint background image (see productsCardBg /
          servicesCardBg at the top of this file — drop your
          own image in /public and update those two paths).
      ====================================================== */}

      <section className="relative overflow-hidden py-14 sm:py-20">

        <SectionGlow tone="blue" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="mb-12">

            <SectionLabel>
              What We Offer
            </SectionLabel>

            <h2 className="font-display mt-4 max-w-2xl text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              Explore Our{' '}
              <span className="text-teal-dark">
                Services & Solutions
              </span>
            </h2>

          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

            {/* PRODUCTS CARD */}
            <Reveal delay={0}>

              <Link
                to="/products"
                className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-1.5 w-full bg-teal-dark" />

                {/* background image — swap the path in productsCardBg (top of file) */}
                <img
                  src={productsCardBg}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.12]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

                <div className="relative z-10 p-7 sm:p-9">

                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-teal-dark">
                    01 — We Trade
                  </p>

                  <h3 className="font-display mt-3 text-3xl font-black uppercase tracking-tight text-navy sm:text-4xl">
                    Products
                  </h3>

                  <div className="mt-4 h-px w-16 bg-line" />

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-steel sm:text-base">
                    Sourced, verified and moved — alternative fuel
                    resources, recovered oils, carbon materials and
                    reclaimed steel, ready for industrial use.
                  </p>

                  <ul className="mt-6 space-y-3">

                    {productBullets.map((b) => (
                      <li
                        key={b.label}
                        className="flex items-start gap-3 border-b border-line pb-3 text-sm last:border-b-0 last:pb-0"
                      >

                        <ArrowRight
                          size={14}
                          className="mt-1 shrink-0 text-teal-dark"
                        />

                        <span className="text-steel">
                          <strong className="font-semibold text-navy">
                            {b.label}
                          </strong>
                          {' — '}
                          {b.desc}
                        </span>

                      </li>
                    ))}

                  </ul>

                  <span className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-teal-dark/60 px-5 py-3 text-sm font-semibold text-teal-dark transition-colors duration-300 group-hover:bg-teal-dark group-hover:text-white">
                    View All Products
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>

                </div>

              </Link>

            </Reveal>

            {/* SERVICES CARD */}
            <Reveal delay={100}>

              <Link
                to="/products?category=4"
                className="group relative block h-full overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="h-1.5 w-full bg-amber-dark" />

                {/* background image — swap the path in servicesCardBg (top of file) */}
                <img
                  src={servicesCardBg}
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.07] transition-opacity duration-500 group-hover:opacity-[0.12]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />

                <div className="relative z-10 p-7 sm:p-9">

                  <p className="font-mono text-xs font-bold uppercase tracking-widest text-amber-dark">
                    02 — We Deliver
                  </p>

                  <h3 className="font-display mt-3 text-3xl font-black uppercase tracking-tight text-navy sm:text-4xl">
                    Services
                  </h3>

                  <div className="mt-4 h-px w-16 bg-line" />

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-steel sm:text-base">
                    End-to-end compliance and waste-management
                    support — from EPR obligations to municipal and
                    industrial waste handling.
                  </p>

                  <ul className="mt-6 space-y-3">

                    {serviceBullets.map((b) => (
                      <li
                        key={b.label}
                        className="flex items-start gap-3 border-b border-line pb-3 text-sm last:border-b-0 last:pb-0"
                      >

                        <ArrowRight
                          size={14}
                          className="mt-1 shrink-0 text-amber-dark"
                        />

                        <span className="text-steel">
                          <strong className="font-semibold text-navy">
                            {b.label}
                          </strong>
                          {' — '}
                          {b.desc}
                        </span>

                      </li>
                    ))}

                  </ul>

                  <span className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-amber-dark/60 px-5 py-3 text-sm font-semibold text-amber-dark transition-colors duration-300 group-hover:bg-amber-dark group-hover:text-white">
                    View All Services
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>

                </div>

              </Link>

            </Reveal>

          </div>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

      <section className="relative overflow-hidden py-14 sm:py-20">

        <SectionGlow tone="green" />

        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Good to know
            </SectionLabel>

            <h2 className="font-display mt-4 text-2xl font-bold text-navy sm:text-3xl">
              Frequently asked
            </h2>

          </Reveal>

          <div className="mt-8 divide-y divide-line rounded-2xl border border-line bg-paper">

            {faqs.map((f, i) => (
              <Reveal
                key={f.q}
                delay={i * 70}
                as="details"
                className="group p-5 open:bg-white sm:p-6"
              >

                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-navy sm:text-base">

                  <span className="min-w-0">
                    {f.q}
                  </span>

                  <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-xs">
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

    </div>
  )
}