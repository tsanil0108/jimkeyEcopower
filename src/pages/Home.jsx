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
import './Home.css'

import heroBg from '../assets/products/hero.png'
import productsCardPhoto from '../assets/products/pyrolysis-oil.jpg'
import servicesCardPhoto from '../assets/products/Industry Waste Management.png'

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

const whyGradients = [
  'from-teal-dark via-teal to-teal-light',
  'from-amber-dark via-amber to-teal-light',
  'from-navy via-teal-dark to-teal',
  'from-teal via-amber-dark to-amber',
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

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeWhy, setActiveWhy] = useState(0)

  useEffect(() => {
    api.getProducts()
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setActiveWhy((prev) => (prev + 1) % valueProps.length)
    }, 3800)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="home-page w-full min-w-0 overflow-x-hidden">

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

                text-[40px]
                leading-[1.08]

                min-[380px]:text-[44px]

                sm:text-[52px]

                md:text-[60px]

                lg:max-w-3xl
                lg:text-[68px]

                xl:text-[72px]

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

              <p className="text-[16px] leading-7 text-white/95 sm:text-[17px] sm:leading-8 md:text-lg">
                Jimkey Ecopower connects industrial waste streams
                with productive end use by sourcing, verifying and
                moving alternative fuel resources, recovered oils,
                carbon materials and reclaimed steel.
              </p>

              <p className="mt-3 text-[16px] leading-7 text-white/85 sm:text-[17px] sm:leading-8 md:text-lg">
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
                className="w-full min-[480px]:w-auto text-base"
              >
                Explore Materials
                <ArrowRight size={18} />
              </Button>

              <Button
                to="/about"
                variant="outline"
                className="
                  w-full
                  border-white/60
                  bg-black/20
                  text-white
                  text-base

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

                  <dt className="font-display text-2xl font-bold text-[#f2a574] sm:text-3xl">
                    {s.value}
                  </dt>

                  <dd className="font-mono mt-1 text-[10px] uppercase leading-4 tracking-wider text-white/85 sm:text-[11px]">
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

        <div className="marquee-track flex w-max items-center gap-10 sm:gap-14">

          {[
            ...clientLogos,
            ...clientLogos,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-8 w-auto shrink-0 opacity-90 transition-opacity hover:opacity-100 sm:h-10"
            />
          ))}

        </div>

      </section>

      {/* =====================================================
          SECTION 1: WHO WE ARE (About)
          Background: DARK BLUE
      ====================================================== */}

      <section className="bg-blue-dark py-14 sm:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">

          <Reveal>

            <div className="relative">

              <img
                src={aboutImg}
                alt="Jimkey Ecopower"
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />

              <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-line bg-white px-5 py-4 shadow-lg sm:block">

                <p className="font-mono text-[11px] uppercase tracking-widest text-steel">
                  Mumbai, India
                </p>

              </div>

            </div>

          </Reveal>

          <Reveal delay={120}>

            <SectionLabel dark>
              Who We Are
            </SectionLabel>

            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Circular trade built around{' '}

              <span className="text-teal-light">
                useful resources
              </span>
            </h2>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Jimkey Ecopower operates across alternative fuel
              resources, recovered materials, waste-management
              solutions and EPR-related services.
            </p>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Our material portfolio includes used cooking oil,
              pyrolysis oil, recovered carbon materials, tallow oil
              and recycled steel wire, alongside compliance and
              waste-management solutions.
            </p>

            <Link
              to="/about"
              className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-light hover:shadow-lg sm:px-6 sm:py-3"
            >
              Read More
              <ArrowRight size={18} />
            </Link>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          SECTION 2: OUR FOUNDATION (Vision)
          Background: LIGHT BLUE
      ====================================================== */}

      <section className="py-14 sm:py-20 bg-blue-light">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">

          <Reveal className="order-2 lg:order-1">

            <SectionLabel>
              Our Foundation
            </SectionLabel>

            <div className="relative mt-6 space-y-9 pl-12">

              <span className="absolute left-4 top-1 bottom-1 w-px bg-navy/25" />

              {visionMission.map((v, i) => (
                <div
                  key={v.title}
                  className="relative"
                >

                  <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy font-mono text-sm font-bold text-white ring-4 ring-blue-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="font-display text-xl font-bold text-navy">
                    {v.title}
                  </h3>

                  <p className="mt-1.5 text-base leading-relaxed text-navy/75">
                    {v.desc}
                  </p>

                </div>
              ))}

            </div>

          </Reveal>

          <Reveal
            delay={120}
            className="order-1 lg:order-2"
          >

            <div className="relative">

              <div className="absolute -inset-3 -z-10 rounded-2xl bg-navy/10" />

              <img
                src={vision}
                alt="Vision and mission"
                className="aspect-[4/3] w-full rounded-2xl border-4 border-navy object-cover shadow-lg"
              />

            </div>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          SECTION 3: SERVICES & SOLUTIONS
          Background: DARK BLUE
      ====================================================== */}

      <section className="bg-blue-dark py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="mb-12">

            <SectionLabel dark>
              What We Offer
            </SectionLabel>

            <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              Explore Our{' '}
              <span className="text-teal-light">
                Services & Solutions
              </span>
            </h2>

          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

            {/* SERVICES CARD */}
            <Reveal delay={0}>

              <Link
                to="/products?category=4"
                className="group relative flex h-[420px] w-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[460px]"
              >

                <img
                  src={servicesCardPhoto}
                  alt="Waste management and EPR compliance services"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/10" />

                <div className="relative z-10 mt-auto flex flex-col p-7 sm:p-9">

                  <p className="font-mono text-sm font-bold uppercase tracking-widest text-amber">
                    We Deliver
                  </p>

                  <h3 className="font-display mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                    Services
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                    End-to-end compliance and waste-management
                    support — from EPR obligations to municipal and
                    industrial waste handling.
                  </p>

                  <span className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 px-5 py-3 text-base font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-navy">
                    View All Services
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>

                </div>

              </Link>

            </Reveal>

            {/* PRODUCTS CARD */}
            <Reveal delay={100}>

              <Link
                to="/products"
                className="group relative flex h-[420px] w-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[460px]"
              >

                <img
                  src={productsCardPhoto}
                  alt="Alternative fuel resources and recovered materials"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/10" />

                <div className="relative z-10 mt-auto flex flex-col p-7 sm:p-9">

                  <p className="font-mono text-sm font-bold uppercase tracking-widest text-teal-light">
                    We Trade
                  </p>

                  <h3 className="font-display mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                    Products
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
                    Sourced, verified and moved — alternative fuel
                    resources, recovered oils, carbon materials and
                    reclaimed steel, ready for industrial use.
                  </p>

                  <span className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 px-5 py-3 text-base font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-navy">
                    View All Products
                    <ArrowRight
                      size={18}
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
          SECTION 4: OUR WAY OF WORKING (Process)
          Background: LIGHT BLUE
      ====================================================== */}

      <section className="bg-blue-light py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Process
            </SectionLabel>

            <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl font-bold text-navy sm:text-5xl md:text-6xl">
              Our Way of{' '}
              <span className="text-teal-dark">
                Working
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-steel sm:text-xl">
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
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold text-white ring-4 ring-blue-light ${s.dot}`}
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

                      <h3 className="font-display mt-4 text-xl font-bold text-navy sm:text-2xl">
                        {s.title}
                      </h3>

                      <p className="mt-3 text-base leading-relaxed text-steel">
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
          SECTION 5: WHY JIMKEY
          Background: DARK BLUE
          Auto-cycling expandable cards — one card is active
          (wider, shows image + description) at a time and the
          set advances automatically; click any card to jump to
          it, hover pauses the cycle.
      ====================================================== */}

      <section className="bg-blue-dark py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel dark>
              Why Jimkey
            </SectionLabel>

            <h2 className="font-display mx-auto mt-4 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Built for buyers who need it reliable
            </h2>

          </Reveal>

          <div
            className="mt-12 flex flex-col gap-4 sm:h-[420px] sm:flex-row"
          >

            {valueProps.map((v, i) => {

              const Icon =
                valueIcons[i]

              const isActive =
                i === activeWhy

              return (
                <button
                  key={v.title}
                  type="button"
                  onClick={() => setActiveWhy(i)}
                  aria-pressed={isActive}
                  className={`
                    group relative flex flex-col overflow-hidden rounded-2xl
                    border border-line bg-white text-left shadow-sm
                    transition-[flex-grow,box-shadow] duration-700 ease-in-out
                    ${isActive
                      ? 'shadow-lg sm:flex-[3]'
                      : 'hover:shadow-md sm:flex-[1]'}
                  `}
                >

                  {isActive ? (
                    <>

                      <div
                        className={`relative h-36 w-full shrink-0 overflow-hidden bg-gradient-to-br sm:h-44 ${whyGradients[i]}`}
                      >

                        <div className="absolute -left-6 -top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
                        <div className="absolute -bottom-10 right-4 h-28 w-28 rounded-full bg-navy/25 blur-2xl" />

                      </div>

                      <div className="flex flex-1 flex-col p-6 sm:p-7">

                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal/10 text-teal-dark">
                          <Icon size={18} />
                        </span>

                        <h3 className="font-display mt-4 text-2xl font-bold text-navy sm:text-3xl">
                          {v.title}
                        </h3>

                        <p className="mt-2 text-base leading-relaxed text-steel">
                          {v.desc}
                        </p>

                      </div>

                    </>
                  ) : (
                    <div className="flex h-full flex-row items-center justify-between gap-4 p-6 sm:flex-col sm:items-start sm:justify-between sm:p-6">

                      <span className="font-display text-4xl font-bold text-navy/10 sm:text-5xl">
                        {String(i + 1).padStart(2, '0')}.
                      </span>

                      <div className="text-right sm:text-left">

                        <span className="ml-auto flex h-8 w-8 items-center justify-center rounded-lg bg-teal/10 text-teal-dark sm:ml-0">
                          <Icon size={16} />
                        </span>

                        <h3 className="font-display mt-3 text-base font-bold text-navy">
                          {v.title}
                        </h3>

                      </div>

                    </div>
                  )}

                </button>
              )
            })}

          </div>

        </div>

      </section>

      {/* =====================================================
          SECTION 6: FAQ (Frequently Asked)
          Background: LIGHT BLUE
      ====================================================== */}

      <section className="bg-blue-light py-14 sm:py-20">

        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Good to know
            </SectionLabel>

            <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl">
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

                <summary className="font-display flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-navy sm:text-lg">

                  <span className="min-w-0">
                    {f.q}
                  </span>

                  <span className="shrink-0 rounded-full border border-line px-2 py-0.5 text-xs">
                    +
                  </span>

                </summary>

                <p className="mt-3 text-base leading-relaxed text-steel">
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