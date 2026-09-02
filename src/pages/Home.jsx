import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Truck,
  FileCheck2,
  Leaf,
  Flame,
} from 'lucide-react'

import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

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
  categoryMeta,
} from '../data/content'

import {
  Button,
  SectionLabel,
  Reveal,
  ProductImage,
  Badge,
} from '../components/ui'

import { api } from '../lib/api'

const valueIcons = [
  ShieldCheck,
  Truck,
  FileCheck2,
  Leaf,
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

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">

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

      </section>

      {/* =====================================================
          WHY JIMKEY
      ====================================================== */}

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

      <section className="py-14 sm:py-20">

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
      ====================================================== */}

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

          <div className="mt-10 grid gap-5 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">

            {workingSteps.map(
              (s, i) => (
                <Reveal
                  key={s.n}
                  delay={i * 80}
                  className="rounded-2xl border border-line bg-paper p-5 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="font-mono mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
                    {s.n}
                  </div>

                  <h3 className="font-display mt-3 text-base font-bold text-navy">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-steel">
                    {s.desc}
                  </p>

                </Reveal>
              )
            )}

          </div>

        </div>

      </section>

      {/* =====================================================
          PRODUCTS & SERVICES
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">

        <Reveal className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end mb-12">

          <div>

            <SectionLabel>
              Traded Materials & Services
            </SectionLabel>

            <h2 className="font-display mt-4 text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
              Explore Our{' '}
              <span className="text-teal-dark">
                Products & Services
              </span>
            </h2>

          </div>

          <Button
            to="/products"
            variant="outline"
          >
            View All
          </Button>

        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">

          {products && products.length > 0 && (
            <Reveal
              delay={0}
            >

              <Link
                to={`/products/${products[0].id}`}
                className="premium-product-card group relative block h-full overflow-hidden rounded-3xl border border-line bg-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >

                {/* Background Glow Effect */}
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gradient-to-br from-amber-100/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>

                {/* Product Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">

                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(251,146,60,0.4),transparent)]"></div>
                  </div>

                  <ProductImage
                    product={products[0]}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Icon Badge */}
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-lg backdrop-blur transition-transform duration-500 group-hover:scale-110">
                    <Flame size={22} />
                  </div>

                  {/* Overlay Bar on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 transition-all duration-500 group-hover:h-2"></div>

                </div>

                {/* Content Container */}
                <div className="relative z-10 space-y-4 p-8 sm:p-9">

                  {/* Category Tag */}
                  <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1.5">
                    <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                    <span className="text-xs font-bold tracking-widest text-amber-700 uppercase">
                      Traded Material
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display group/title flex items-start justify-between gap-3 text-2xl font-bold leading-snug text-navy transition-colors duration-300">

                    <span className="min-w-0">
                      {products[0].name}
                    </span>

                    <ArrowUpRight
                      size={24}
                      className="shrink-0 rounded-full bg-amber-50 p-1.5 text-amber-600 transition-all duration-500 group-hover:bg-amber-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1"
                    />

                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-steel line-clamp-2">
                    {products[0].tagline}
                  </p>

                  {/* Badge */}
                  {products[0].form && (
                    <div className="pt-2 flex items-center gap-2">
                      <Badge tone="amber">
                        {products[0].form}
                      </Badge>
                      <span className="text-xs text-steel/60 font-medium">Premium Material</span>
                    </div>
                  )}

                  {/* CTA Text */}
                  <div className="pt-3 flex items-center gap-2 text-sm font-semibold text-amber-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span>Explore Details</span>
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </div>

                </div>

              </Link>

            </Reveal>
          )}

          {/* EPR SERVICE CARD - Premium Design */}
          <Reveal
            delay={100}
          >

            <Link
              to="/products?category=4"
              className="premium-service-card group relative block h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-br from-navy via-teal-dark to-navy-dark text-white transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Animated Background Elements */}
              <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br from-teal-400/20 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100"></div>
              <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-teal-500/10 to-transparent"></div>

              {/* Icon Section */}
              <div className="relative z-10 h-64 flex flex-col items-center justify-center space-y-4">

                <div className="relative">
                  {/* Animated Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-teal-400/30 transition-transform duration-700 group-hover:scale-125 group-hover:border-teal-300/50"></div>
                  
                  {/* Main Icon */}
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-teal-400/20 to-teal-500/10 text-6xl backdrop-blur transition-all duration-500 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-teal-400/40 group-hover:to-teal-500/20">
                    📋
                  </div>
                </div>

                <div className="space-y-2 text-center">
                  <div className="h-1 w-8 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto rounded-full transform scale-0 transition-transform duration-500 group-hover:scale-100"></div>
                  <p className="text-xs font-bold tracking-widest text-teal-200 uppercase">Compliance Solution</p>
                </div>

              </div>

              {/* Content Container */}
              <div className="relative z-10 space-y-4 px-8 pb-8 sm:px-9">

                {/* Service Badge */}
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 backdrop-blur-sm border border-white/20">
                  <div className="h-2 w-2 rounded-full bg-teal-400"></div>
                  <span className="text-xs font-bold tracking-widest text-teal-200 uppercase">Service</span>
                </div>

                {/* Title */}
                <h3 className="font-display flex items-start justify-between gap-3 text-2xl font-bold leading-snug text-white">

                  <span className="min-w-0">
                    Extended Producer Responsibility
                  </span>

                  <ArrowUpRight
                    size={24}
                    className="shrink-0 rounded-full bg-white/10 p-1.5 text-teal-300 transition-all duration-500 group-hover:bg-teal-400 group-hover:text-navy group-hover:translate-x-1 group-hover:-translate-y-1 backdrop-blur"
                  />

                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/80 line-clamp-2">
                  End-to-end EPR compliance support and services for regulatory excellence
                </p>

                {/* Features List */}
                <div className="pt-3 space-y-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="flex items-center gap-2 text-xs text-teal-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-400"></div>
                    <span>Comprehensive Compliance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-teal-200">
                    <div className="h-1.5 w-1.5 rounded-full bg-teal-400"></div>
                    <span>Expert Support Team</span>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4 flex items-center gap-2 text-sm font-semibold text-teal-300 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span>Discover Services</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>

              </div>

            </Link>

          </Reveal>

        </div>

      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}

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