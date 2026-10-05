<<<<<<< HEAD

=======
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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
<<<<<<< HEAD
  stats,
=======
  visionMission,
  stats,
  valueProps,
  faqs,
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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

<<<<<<< HEAD
/* =====================================================
   CORE PILLARS
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

=======
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
const whyGradients = [
  'from-teal-dark via-teal to-teal-light',
  'from-amber-dark via-amber to-teal-light',
  'from-navy via-teal-dark to-teal',
  'from-teal via-amber-dark to-amber',
]

/* =====================================================
   PROCESS STEPS
<<<<<<< HEAD
=======
   Assess -> Recover -> Process -> Optimise -> Sustain
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
====================================================== */

const processSteps = [
  {
    n: '01',
    title: 'Assess',
<<<<<<< HEAD
    desc: 'We assess regulatory requirements, waste streams, material quality, and recovery opportunities.',
=======
    desc: 'We evaluate waste streams, material quality, recovery potential and operational requirements.',
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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
<<<<<<< HEAD
    desc: 'We develop a practical roadmap for environmental compliance, resource recovery, and sourcing.',
=======
    desc: 'We design a clear recovery roadmap, matching materials to the right buyers, routes and compliance needs.',
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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
<<<<<<< HEAD
    desc: 'We coordinate documentation, regulatory submissions, material sourcing, and recovery activities.',
=======
    desc: 'We move materials through sourcing, processing and logistics with quality checks at every stage.',
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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
<<<<<<< HEAD
    desc: 'We coordinate ongoing requirements and keep documentation, communication, and sourcing organized.',
=======
    desc: 'We monitor the entire supply chain during transaction, keeping performance and reporting on track.',
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
    icon: TrendingUp,
    dot: 'bg-amber-dark',
    iconBg: 'bg-amber-dark/10',
    iconColor: 'text-amber-dark',
    wave: 'fill-amber-dark/70',
    line: 'stroke-amber-dark/60',
  },
  {
    n: '05',
<<<<<<< HEAD
    title: 'Sustain',
    desc: 'We support long-term circular resource recovery and responsible environmental practices.',
=======
    title: 'Maintain',
    desc: 'We build long-term circular solutions that reduce waste and support a cleaner future.',
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
    icon: Leaf,
    dot: 'bg-navy',
    iconBg: 'bg-navy/10',
    iconColor: 'text-navy',
    wave: 'fill-navy/70',
    line: 'stroke-navy/60',
  },
]

<<<<<<< HEAD
const clientLogos = Object.values(
  import.meta.glob('../assets/brands/*.jpg', {
    eager: true,
    import: 'default',
  })
)
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [activeWhy, setActiveWhy] = useState(0)

  useEffect(() => {
<<<<<<< HEAD
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
=======
    api.getProducts()
      .then(setProducts)
      .catch(() => setProducts([]))
      .finally(() => setLoading(false))
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
<<<<<<< HEAD
      setActiveWhy((prev) => (prev + 1) % homePillars.length)
    }, 3800)

=======
      setActiveWhy((prev) => (prev + 1) % valueProps.length)
    }, 3800)
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
    return () => clearInterval(id)
  }, [])

  return (
    <div className="home-page w-full min-w-0 overflow-x-hidden">

      {/* =====================================================
<<<<<<< HEAD
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
              End-to-End Environmental Compliance &amp; Resource Recovery Solutions
              <span className="mt-2 block text-[#f2a574]">
                Built for Modern Industry.
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
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              </p>

            </div>

<<<<<<< HEAD
            <div className="mt-6 flex w-full flex-col gap-3 min-[480px]:w-auto min-[480px]:flex-row min-[480px]:flex-wrap">
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3

              <Button
                to="/products"
                variant="accent"
<<<<<<< HEAD
                className="w-full text-base min-[480px]:w-auto"
              >
                Our Solutions
=======
                className="w-full min-[480px]:w-auto text-base"
              >
                Explore Materials
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                <ArrowRight size={18} />
              </Button>

              <Button
<<<<<<< HEAD
                to="/contact"
                variant="outline"
                className="w-full border-white/60 bg-black/20 text-base text-white hover:bg-white hover:text-navy min-[480px]:w-auto"
              >
                Partner With Us
                <ArrowRight size={18} />
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              </Button>

            </div>

<<<<<<< HEAD
            <dl className="mt-8 grid w-full max-w-xl grid-cols-2 gap-x-5 gap-y-5 border-t border-white/25 pt-6 sm:grid-cols-4">

              {stats.map((s) => (
                <div key={s.label} className="min-w-0">
=======
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

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                  <dt className="font-display text-2xl font-bold text-[#f2a574] sm:text-3xl">
                    {s.value}
                  </dt>

<<<<<<< HEAD
                  <dd className="mt-1 font-mono text-[10px] uppercase leading-4 tracking-wider text-white/85 sm:text-[11px]">
                    {s.label}
                  </dd>
=======
                  <dd className="font-mono mt-1 text-[10px] uppercase leading-4 tracking-wider text-white/85 sm:text-[11px]">
                    {s.label}
                  </dd>

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                </div>
              ))}

            </dl>

          </div>

<<<<<<< HEAD
          <div
            className="fade-in hidden min-w-0 lg:flex lg:w-full lg:justify-end"
            style={{ animationDelay: '200ms' }}
          >
            <div className="w-full max-w-[360px] xl:max-w-[420px]">
=======
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

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              <CircularSeal
                variant="dark"
                className="float-y h-auto w-full"
              />
<<<<<<< HEAD
            </div>
          </div>

        </div>
=======

            </div>

          </div>

        </div>

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      </section>

      {/* =====================================================
          CLIENT LOGOS
      ====================================================== */}

<<<<<<< HEAD
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
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      ====================================================== */}

      <section className="bg-blue-dark py-14 sm:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-12 lg:px-8">

          <Reveal>

            <div className="relative">

              <img
                src={aboutImg}
<<<<<<< HEAD
                alt="Jimkey Ecopower environmental and resource recovery solutions"
                loading="lazy"
=======
                alt="Jimkey Ecopower"
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                className="aspect-[4/3] w-full rounded-2xl object-cover"
              />

              <div className="absolute -bottom-5 -right-3 hidden rounded-xl border border-line bg-white px-5 py-4 shadow-lg sm:block">
<<<<<<< HEAD
                <p className="font-mono text-[11px] uppercase tracking-widest text-steel">
                  Mumbai, India
                </p>
=======

                <p className="font-mono text-[11px] uppercase tracking-widest text-steel">
                  Mumbai, India
                </p>

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              </div>

            </div>

          </Reveal>

          <Reveal delay={120}>

            <SectionLabel dark>
              Who We Are
            </SectionLabel>

<<<<<<< HEAD
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
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
            </p>

            <Link
              to="/about"
<<<<<<< HEAD
              className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-base font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-light hover:shadow-lg sm:px-6"
            >
              Discover Jimkey
=======
              className="group/btn mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-base font-semibold text-navy transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-light hover:shadow-lg sm:px-6 sm:py-3"
            >
              Read More
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              <ArrowRight size={18} />
            </Link>

          </Reveal>

        </div>
<<<<<<< HEAD
      </section>

      {/* =====================================================
          SECTION 2: CORE PILLARS
      ====================================================== */}

      <section className="bg-blue-light py-14 sm:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
=======

      </section>

      {/* =====================================================
          SECTION 2: OUR FOUNDATION (Vision)
          Background: LIGHT BLUE
      ====================================================== */}

      <section className="py-14 sm:py-20 bg-blue-light">

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3

          <Reveal className="order-2 lg:order-1">

            <SectionLabel>
<<<<<<< HEAD
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
=======
              Our Foundation
            </SectionLabel>

            <div className="relative mt-6 space-y-9 pl-12">

              <span className="absolute left-4 top-1 bottom-1 w-px bg-navy/25" />

              {visionMission.map((v, i) => (
                <div
                  key={v.title}
                  className="relative"
                >
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3

                  <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-navy font-mono text-sm font-bold text-white ring-4 ring-blue-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>

<<<<<<< HEAD
                  <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xl text-base leading-7 text-navy/75">
                    {item.desc}
=======
                  <h3 className="font-display text-xl font-bold text-navy">
                    {v.title}
                  </h3>

                  <p className="mt-1.5 text-base leading-relaxed text-navy/75">
                    {v.desc}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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
<<<<<<< HEAD
                alt="Jimkey Ecopower vision, circular economy and sustainability"
                loading="lazy"
=======
                alt="Vision and mission"
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                className="aspect-[4/3] w-full rounded-2xl border-4 border-navy object-cover shadow-lg"
              />

            </div>

          </Reveal>

        </div>
<<<<<<< HEAD
      </section>

      {/* =====================================================
          SECTION 3: SERVICES AND PRODUCTS
=======

      </section>

      {/* =====================================================
          SECTION 3: SERVICES & SOLUTIONS
          Background: DARK BLUE
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      ====================================================== */}

      <section className="bg-blue-dark py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

<<<<<<< HEAD
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

=======
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

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">

            {/* SERVICES CARD */}
<<<<<<< HEAD

=======
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
            <Reveal delay={0}>

              <Link
                to="/products?category=4"
<<<<<<< HEAD
                className="group relative flex min-h-[440px] w-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[460px]"
=======
                className="group relative flex h-[420px] w-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[460px]"
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              >

                <img
                  src={servicesCardPhoto}
<<<<<<< HEAD
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
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>

                </div>

              </Link>

            </Reveal>

            {/* PRODUCTS CARD */}
<<<<<<< HEAD

=======
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
            <Reveal delay={100}>

              <Link
                to="/products"
<<<<<<< HEAD
                className="group relative flex min-h-[440px] w-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[460px]"
=======
                className="group relative flex h-[420px] w-full flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[460px]"
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              >

                <img
                  src={productsCardPhoto}
<<<<<<< HEAD
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
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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
<<<<<<< HEAD
      </section>

      {/* =====================================================
          SECTION 4: OUR PROCESS
=======

      </section>

      {/* =====================================================
          SECTION 4: OUR WAY OF WORKING (Process)
          Background: LIGHT BLUE
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      ====================================================== */}

      <section className="bg-blue-light py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
<<<<<<< HEAD
              Our Approach
            </SectionLabel>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              A Clear Path to Compliance &amp; Circularity
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-steel sm:text-lg">
              A structured approach to regulatory coordination,
              responsible resource recovery, and long-term sustainability.
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
            </p>

          </Reveal>

<<<<<<< HEAD
          <div className="relative mt-14 sm:mt-20">

            <style>{`
              @keyframes processNodePulse {
                0%, 6% {
                  transform: scale(1.12);
                  box-shadow: 0 0 0 7px rgba(27,134,158,0.16),
                              0 10px 22px rgba(16,42,67,0.2);
=======
          <div className="relative mt-20">

            {/* Self-contained animation for the automatic step-chase effect */}
            <style>{`
              @keyframes processNodePulse {
                0%, 6% {
                  transform: scale(1.18);
                  box-shadow: 0 0 0 8px rgba(27,134,158,0.18), 0 10px 22px rgba(16,42,67,0.25);
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                }
                16%, 100% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(27,134,158,0);
                }
              }
            `}</style>

<<<<<<< HEAD
=======
            {/* Curved connectors — desktop only, aligned to the
                5-column grid centres (10%, 30%, 50%, 70%, 90%).
                A small dot travels along this path forever, and
                each node below pulses in sequence as it passes. */}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
            <svg
              className="pointer-events-none absolute inset-x-0 top-[26px] hidden h-20 w-full lg:block"
              viewBox="0 0 100 16"
              preserveAspectRatio="none"
            >
<<<<<<< HEAD

              {processSteps.slice(0, -1).map((s, i) => {
=======
              {processSteps.slice(0, -1).map((s, i) => {

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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

<<<<<<< HEAD
=======
              {/* traveling dot — loops the full route automatically */}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              <circle
                r="1.6"
                className="fill-white stroke-teal-dark"
                strokeWidth="0.6"
              >
                <animateMotion
                  dur="6s"
                  repeatCount="indefinite"
                  rotate="auto"
<<<<<<< HEAD
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
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                />
              </circle>

            </svg>

<<<<<<< HEAD
            <div className="grid gap-8 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">

              {processSteps.map((s, i) => {
=======
            <div className="grid gap-10 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-7">

              {processSteps.map((s, i) => {

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                const Icon = s.icon

                return (
                  <Reveal
                    key={s.n}
                    delay={i * 90}
                    className="relative flex flex-col items-center"
                  >

<<<<<<< HEAD
=======
                    {/* number node — pulses automatically, in sequence */}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                    <div
                      className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold text-white ring-4 ring-blue-light ${s.dot}`}
                      style={{
                        animation: 'processNodePulse 6s ease-in-out infinite',
                        animationDelay: `${-(i * 1.2)}s`,
                      }}
                    >
                      {s.n}
                    </div>

<<<<<<< HEAD
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

=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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
<<<<<<< HEAD
=======

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      </section>

      {/* =====================================================
          SECTION 5: WHY JIMKEY
<<<<<<< HEAD
=======
          Background: DARK BLUE
          Auto-cycling expandable cards — one card is active
          (wider, shows image + description) at a time and the
          set advances automatically; click any card to jump to
          it, hover pauses the cycle.
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      ====================================================== */}

      <section className="bg-blue-dark py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel dark>
<<<<<<< HEAD
              Why Jimkey Ecopower
            </SectionLabel>

            <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-bold text-white sm:text-4xl">
              Built for Organizations That Value Compliance, Quality, and Reliability
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
              We combine regulatory support, responsible sourcing, and
              practical sustainability strategies to help industries
              navigate complex requirements with greater confidence.
            </p>

          </Reveal>

          <div className="mt-10 grid gap-4 sm:mt-12 sm:h-[420px] sm:grid-cols-4">

            {homePillars.map((item, i) => {
              const Icon = valueIcons[i]
              const isActive = i === activeWhy

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveWhy(i)}
                  aria-pressed={isActive}
                  className={`group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-line bg-white text-left shadow-sm transition-all duration-500 ${isActive ? 'sm:col-span-1 sm:shadow-lg' : 'hover:shadow-md'}`}
                >

                  <div className={`relative flex h-28 shrink-0 items-center justify-between overflow-hidden bg-gradient-to-br p-5 sm:h-36 ${whyGradients[i]}`}>

                    <span className="font-display text-4xl font-bold text-white/75 sm:text-5xl">
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-sm">
                      <Icon size={24} />
                    </span>

                    <div className="pointer-events-none absolute -bottom-10 -right-5 h-28 w-28 rounded-full bg-white/15 blur-2xl" />

                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">

                    <h3 className="font-display text-lg font-bold leading-snug text-navy sm:text-xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-steel sm:text-base sm:leading-relaxed">
                      {item.desc}
                    </p>

                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-teal-dark">
                      {isActive ? 'Selected' : 'Learn More'}
                      <ArrowRight size={16} />
                    </span>

                  </div>
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3

                </button>
              )
            })}

          </div>

        </div>
<<<<<<< HEAD
      </section>

      {/* =====================================================
          SECTION 6: FAQ
=======

      </section>

      {/* =====================================================
          SECTION 6: FAQ (Frequently Asked)
          Background: LIGHT BLUE
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      ====================================================== */}

      <section className="bg-blue-light py-14 sm:py-20">

        <div className="mx-auto max-w-4xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
<<<<<<< HEAD
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
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                    +
                  </span>

                </summary>

<<<<<<< HEAD
                <p className="mt-4 max-w-3xl text-sm leading-7 text-steel sm:text-base sm:leading-7">
                  {item.a}
=======
                <p className="mt-3 text-base leading-relaxed text-steel">
                  {f.a}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                </p>

              </Reveal>
            ))}

          </div>

<<<<<<< HEAD
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
=======
        </div>

>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      </section>

    </div>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
