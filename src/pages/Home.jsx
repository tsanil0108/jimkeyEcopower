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
  stats,
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
   CORE PILLARS (WHY JIMKEY) — with expandable details
====================================================== */

const homePillars = [
  {
    title: 'Verified Compliance & Material Quality',
    desc: 'Every legal submission is rigorously vetted for compliance, and every consignment of recovered material is selected to meet industrial specifications.',
  },
  {
    title: 'Pan-India Advisory & Sourcing',
    desc: 'Our sourcing and advisory network helps businesses coordinate regulatory requirements and access recovered resources across multiple states and industries.',
  },
  {
    title: 'Seamless Regulatory Liaisoning',
    desc: 'We simplify government approvals, authorizations, and SPCB/CPCB documentation so your team can focus on core business growth.',
  },
  {
    title: 'Measurable Environmental Impact',
    desc: 'Our practical, audit-ready sustainability strategies support waste reduction, resource recovery, and corporate environmental compliance targets.',
  },
]

/* =====================================================
   CORE PILLARS — VISION & MISSION
====================================================== */

const homeVisionMission = [
  {
    title: 'The Vision and Mission',
    desc: 'To advance alternative fuel resources and circular trade while promoting the principles of a circular economy and sustainable industrial growth.',
  },
  {
    title: 'Circular Resource Recovery',
    desc: 'We bridge environmental responsibility with economic value by supplying verified, industrial-grade recovered fuels and raw materials.',
  },
  {
    title: 'Transparent Strategic Liaisoning',
    desc: 'We coordinate regulatory processes with government authorities through clear documentation, dependable communication, and measurable outcomes.',
  },
]

/* =====================================================
   FREQUENTLY ASKED QUESTIONS
====================================================== */

const homeFaqs = [
  {
    q: 'What core environmental compliance services does Jimkey provide?',
    a: 'We offer end-to-end environmental compliance solutions, including EPR (Extended Producer Responsibility) fulfilment, CTE/CTO approvals, SPCB/CPCB registrations and renewals, authorization management, and corporate sustainability consulting.',
  },
  {
    q: 'What recovered products and materials do you supply?',
    a: 'We supply industrial-grade recovered resources, including waste tyres, tyre unburnt steel wire, tyre burnt steel wire, pyrolysis oil, recovered carbon materials, and RDF for suitable industrial and alternative-energy applications.',
  },
  {
    q: 'How does Jimkey support businesses with SPCB/CPCB regulations?',
    a: 'We support businesses through initial assessments, documentation, regulatory filings, liaisoning, and renewal coordination with State Pollution Control Boards and the Central Pollution Control Board.',
  },
  {
    q: 'What industries do you partner with?',
    a: 'We work with manufacturers, industrial plants, recycling enterprises, and commercial businesses seeking environmental compliance support, waste management solutions, or sustainable alternative feedstocks.',
  },
]

/* =====================================================
   PROCESS STEPS
====================================================== */

const processSteps = [
  {
    n: '01',
    title: 'Assess',
    desc: 'We assess regulatory requirements, waste streams, material quality, and recovery opportunities.',
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
    desc: 'We develop a practical roadmap for environmental compliance, resource recovery, and sourcing.',
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
    desc: 'We coordinate documentation, regulatory submissions, material sourcing, and recovery activities.',
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
    desc: 'We coordinate ongoing requirements and keep documentation, communication, and sourcing organized.',
    icon: TrendingUp,
    dot: 'bg-amber-dark',
    iconBg: 'bg-amber-dark/10',
    iconColor: 'text-amber-dark',
    wave: 'fill-amber-dark/70',
    line: 'stroke-amber-dark/60',
  },
  {
    n: '05',
    title: 'Sustain',
    desc: 'We support long-term circular resource recovery and responsible environmental practices.',
    icon: Leaf,
    dot: 'bg-navy',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
    wave: 'fill-navy/70',
    line: 'stroke-navy/60',
  },
]

const clientLogos = Object.values(
  import.meta.glob('../assets/brands/*.jpg', {
    eager: true,
    import: 'default',
  })
)

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // index of the expanded "Why" card (always one open)
  const [activeWhy, setActiveWhy] = useState(0)

  useEffect(() => {
    let mounted = true

    api.getProducts()
      .then((data) => {
        if (mounted) setProducts(data)
      })
      .catch(() => {
        if (mounted) setProducts([])
      })
      .finally(() => {
        if (mounted) setLoading(false)
      })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div className="home-page w-full min-w-0 overflow-x-hidden">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="home-hero relative isolate w-full overflow-hidden bg-black text-white">

        <img
          src={heroBg}
          alt="Jimkey Ecopower industrial resource recovery facility"
          className="absolute inset-0 h-full w-full object-cover object-[58%_center] sm:object-center"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />

        <div className="relative mx-auto grid w-full max-w-7xl min-w-0 grid-cols-1 gap-8 px-5 py-12 sm:px-6 sm:py-16 md:px-8 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12 lg:py-20 xl:gap-16">

          <div className="rise min-w-0 w-full max-w-full lg:max-w-3xl">

            <SectionLabel dark>
              Our Solution
            </SectionLabel>

            <h1 className="mt-5 w-full max-w-3xl font-display text-[36px] font-bold leading-[1.12] text-white drop-shadow-lg min-[380px]:text-[40px] sm:text-[50px] md:text-[58px] lg:text-[64px] xl:text-[70px]">
              End-to-End Environmental Compliance &amp;
              <span className="mt-2 block text-[#f2a574]">
                 Resource Recovery Solutions
              </span>
            </h1>

            <div className="mt-6 w-full rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur-sm sm:max-w-2xl sm:p-5">

              <p className="text-base leading-7 text-white/95 sm:text-lg sm:leading-8">
                Jimkey Ecopower simplifies environmental compliance,
                liaisoning, and sustainable waste management for modern
                industries.
              </p>

              <p className="mt-3 text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                From navigating complex regulatory frameworks such as
                EPR, CTE, and CTO to supplying verified recovered
                materials, we deliver seamless, audit-ready sustainability
                solutions.
              </p>

            </div>

            <div className="mt-6 flex w-full flex-col gap-3 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:flex-wrap">

              <Button
                to="/products"
                variant="accent"
                className="w-full text-base min-[480px]:w-auto"
              >
                Our Solutions
                <ArrowRight size={18} />
              </Button>

              <Button
                to="/contact"
                variant="outline"
                className="w-full border-white/60 bg-black/20 text-base text-white hover:bg-white hover:text-navy min-[480px]:w-auto"
              >
                Partner With Us
                <ArrowRight size={18} />
              </Button>

            </div>

            <dl className="mt-8 grid w-full max-w-xl grid-cols-2 gap-x-5 gap-y-5 border-t border-white/25 pt-6 sm:grid-cols-4">

              {stats.map((s) => (
                <div key={s.label} className="min-w-0">
                  <dt className="font-display text-2xl font-bold text-[#f2a574] sm:text-3xl">
                    {s.value}
                  </dt>

                  <dd className="mt-1 font-mono text-[10px] uppercase leading-4 tracking-wider text-white/85 sm:text-[11px]">
                    {s.label}
                  </dd>
                </div>
              ))}

            </dl>

          </div>

          <div
            className="fade-in hidden min-w-0 lg:flex lg:w-full lg:justify-end"
            style={{ animationDelay: '200ms' }}
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

      {clientLogos.length > 0 && (
        <section className="marquee-row overflow-hidden border-b border-line bg-white py-5 sm:py-6">

          <div className="marquee-track flex w-max items-center gap-10 sm:gap-14">

            {[...clientLogos, ...clientLogos].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Jimkey Ecopower partner"
                loading="lazy"
                className="h-8 w-auto shrink-0 opacity-90 transition-opacity hover:opacity-100 sm:h-10"
              />
            ))}

          </div>

        </section>
      )}

      {/* =====================================================
          SECTION 1: ABOUT JIMKEY
      ====================================================== */}

      <section className="bg-blue-dark py-14 sm:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">

          <Reveal>

            <div className="relative">

              <img
                src={aboutImg}
                alt="Jimkey Ecopower environmental and resource recovery solutions"
                loading="lazy"
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

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
              Driving Sustainable Growth Through Compliance &amp; Circularity
            </h2>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Jimkey Ecopower is your trusted, single-window partner
              for environmental compliance and waste management. We
              guide businesses through regulatory requirements, helping
              them manage SPCB/CPCB compliance, EPR fulfilment, and
              end-to-end sustainability consulting.
            </p>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Alongside strategic advisory, we help close the loop on
              industrial waste by supplying recovered materials,
              including waste tyres, tyre steel wire, pyrolysis oil,
              recovered carbon, and other industrial resources.
              Our integrated approach supports resource efficiency
              throughout your supply chain.
            </p>

            <Link
              to="/about"
              className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-base font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-light hover:shadow-lg sm:px-6"
            >
              Discover Jimkey
              <ArrowRight size={18} />
            </Link>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          SECTION 2: CORE PILLARS
      ====================================================== */}

      <section className="bg-blue-light py-14 sm:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">

          <Reveal className="order-2 lg:order-1">

            <SectionLabel>
              Core Pillars
            </SectionLabel>

            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Our Commitment to Responsible Industry
            </h2>

            <p className="mt-4 max-w-xl text-base leading-7 text-navy/75 sm:text-lg">
              We connect environmental responsibility, regulatory
              coordination, and circular resource recovery to help
              businesses move towards more sustainable operations.
            </p>

            <div className="relative mt-8 space-y-8 pl-12">

              <span className="absolute bottom-1 left-4 top-1 w-px bg-navy/25" />

              {homeVisionMission.map((item, i) => (
                <div key={item.title} className="relative">

                  <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy font-mono text-sm font-bold text-white ring-4 ring-blue-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-base leading-7 text-navy/75">
                    {item.desc}
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
                alt="Jimkey Ecopower vision, circular economy and sustainability"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-2xl border-4 border-navy object-cover shadow-lg"
              />

            </div>

          </Reveal>

        </div>
      </section>

      {/* =====================================================
          SECTION 3: SERVICES AND PRODUCTS
      ====================================================== */}

      <section className="bg-blue-dark py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="mb-10">

            <SectionLabel dark>
              Our Expertise
            </SectionLabel>

            <h2 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Integrated Sustainability Solutions for Modern Industry
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-7 text-white/75 sm:text-lg">
              From environmental compliance and regulatory support
              to industrial material recovery, Jimkey Ecopower brings
              essential sustainability solutions together under one roof.
            </p>

          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

            {/* SERVICES CARD */}

            <Reveal delay={0}>

              <Link
                to="/products?category=4"
                className="group relative flex min-h-[440px] w-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[460px]"
              >

                <img
                  src={servicesCardPhoto}
                  alt="Environmental compliance and waste management services"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/10" />

                <div className="relative z-10 mt-auto flex flex-col p-6 sm:p-9">

                  <p className="font-mono text-sm font-bold uppercase tracking-widest text-amber">
                    Our Expertise
                  </p>

                  <h3 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                    Services
                  </h3>

                  <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
                    Full-spectrum environmental compliance and strategic
                    consulting, from EPR fulfilment and regulatory
                    registrations to comprehensive SPCB/CPCB liaisoning.
                  </p>

                  <span className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 px-5 py-3 text-base font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-navy">
                    Explore Services
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
                className="group relative flex min-h-[440px] w-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[460px]"
              >

                <img
                  src={productsCardPhoto}
                  alt="Pyrolysis oil and recovered industrial resources"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/75 to-navy-deep/10" />

                <div className="relative z-10 mt-auto flex flex-col p-6 sm:p-9">

                  <p className="font-mono text-sm font-bold uppercase tracking-widest text-teal-light">
                    Circular Resource Recovery
                  </p>

                  <h3 className="mt-3 font-display text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
                    Products
                  </h3>

                  <p className="mt-4 text-base leading-7 text-white/90 sm:text-lg">
                    High-grade recovered materials and alternative energy
                    resources, including waste tyres, tyre unburnt steel
                    wire, tyre burnt steel wire, pyrolysis oil, recovered
                    carbon, and RDF.
                  </p>

                  <span className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/70 px-5 py-3 text-base font-semibold text-white transition-colors duration-300 group-hover:bg-white group-hover:text-navy">
                    View Products
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
          SECTION 4: OUR PROCESS
      ====================================================== */}

      <section className="bg-blue-light py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Our Approach
            </SectionLabel>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              A Clear Path to Compliance &amp; Circularity
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-steel sm:text-lg">
              A structured approach to regulatory coordination,
              responsible resource recovery, and long-term sustainability.
            </p>

          </Reveal>

          <div className="relative mt-14 sm:mt-20">

            <style>{`
              @keyframes processNodePulse {
                0%, 6% {
                  transform: scale(1.12);
                  box-shadow: 0 0 0 7px rgba(27,134,158,0.16),
                              0 10px 22px rgba(16,42,67,0.2);
                }
                16%, 100% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(27,134,158,0);
                }
              }
            `}</style>

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

              <circle
                r="1.6"
                className="fill-white stroke-teal-dark"
                strokeWidth="0.6"
              >
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  rotate="auto"
                  path={processSteps
                    .slice(0, -1)
                    .map((s, i) => {
                      const x1 = 10 + i * 20
                      const x2 = 10 + (i + 1) * 20
                      const mid = (x1 + x2) / 2

                      return i === 0
                        ? `M ${x1} 9 Q ${mid} -3 ${x2} 9`
                        : `Q ${mid} -3 ${x2} 9`
                    })
                    .join(' ')}
                />
              </circle>

            </svg>

            <div className="grid gap-8 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">

              {processSteps.map((s, i) => {
                const Icon = s.icon

                return (
                  <Reveal
                    key={s.n}
                    delay={i * 90}
                    className="relative flex flex-col items-center"
                  >

                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold text-white ring-4 ring-blue-light ${s.dot}`}
                      style={{
                        animation: 'processNodePulse 6s ease-in-out infinite',
                        animationDelay: `${-(i * 1.2)}s`,
                      }}
                    >
                      {s.n}
                    </div>

                    <div className="relative mt-6 w-full overflow-hidden rounded-2xl border border-line bg-paper p-6 pb-12 text-center transition-all hover:-translate-y-1 hover:shadow-lg sm:p-7 sm:pb-12">

                      <span className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${s.iconBg} ${s.iconColor}`}>
                        <Icon size={27} strokeWidth={1.75} />
                      </span>

                      <span className={`mx-auto mt-5 block h-0.5 w-8 rounded-full ${s.dot}`} />

                      <h3 className="mt-4 font-display text-xl font-bold text-navy sm:text-2xl">
                        {s.title}
                      </h3>

                      <p className="mt-3 text-sm leading-6 text-steel sm:text-base sm:leading-relaxed">
                        {s.desc}
                      </p>

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
          SECTION 5: WHY JIMKEY — HORIZONTAL EXPANDING CARDS
      ====================================================== */}

      <section className="home-why-section">

        <div className="home-why-container">

          <Reveal className="home-why-header">

            <SectionLabel dark>
              Why Jimkey Ecopower
            </SectionLabel>

            <h2>
              Built for Organizations That Value
              <br className="home-why-desktop-break" />{' '}
              Compliance, Quality, and Reliability
            </h2>

            <p>
              We combine regulatory support, responsible sourcing, and
              practical sustainability strategies to help industries
              navigate complex requirements with greater confidence.
            </p>

          </Reveal>

          <div className="home-why-grid">

            {homePillars.map((item, i) => {
              const Icon = valueIcons[i]
              const isOpen = i === activeWhy

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveWhy(i)}
                  aria-expanded={isOpen}
                  aria-label={item.title}
                  className={`home-why-card home-why-card--${i + 1} ${isOpen ? 'is-open' : ''}`}
                >

                  <span className="home-why-card-number">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span className="home-why-card-icon">
                    <Icon size={24} />
                  </span>

                  {/* title shown vertically when the card is collapsed */}
                  <span className="home-why-card-vtitle">
                    {item.title}
                  </span>

                  {/* content slides in from the right when expanded */}
                  <span className="home-why-card-body">
                    <span className="home-why-card-body-inner">
                      <span className="home-why-card-content">
                        <span className="home-why-card-heading">
                          {item.title}
                        </span>
                        <span className="home-why-card-text">
                          {item.desc}
                        </span>
                      </span>
                    </span>
                  </span>

                </button>
              )
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          SECTION 6: FAQ
      ====================================================== */}

      <section className="bg-blue-light py-14 sm:py-20">

        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Good to Know
            </SectionLabel>

            <h2 className="mt-4 font-display text-3xl font-bold text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-steel sm:text-lg">
              Find answers about our environmental compliance services,
              recovered materials, and regulatory support.
            </p>

          </Reveal>

          <div className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper">

            {homeFaqs.map((item, i) => (
              <Reveal
                key={item.q}
                delay={i * 70}
                as="details"
                className="group p-5 transition-colors open:bg-white sm:p-6"
              >

                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base font-bold text-navy sm:text-lg">

                  <span className="min-w-0 leading-7">
                    {item.q}
                  </span>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-lg font-normal text-teal-dark transition-transform group-open:rotate-45">
                    +
                  </span>

                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-steel sm:text-base sm:leading-7">
                  {item.a}
                </p>

              </Reveal>
            ))}

          </div>

          <Reveal className="mt-8 text-center">

            <p className="text-base leading-7 text-steel">
              Need help with a specific compliance or resource recovery
              requirement?
            </p>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal-dark"
            >
              Talk to Our Team
              <ArrowRight size={18} />
            </Link>

          </Reveal>

        </div>
      </section>

    </div>
  )
}