
import {
  ArrowRight,
  CheckCircle2,
  Recycle,
  Factory,
  FileCheck2,
  Truck,
  Leaf,
} from 'lucide-react'

import {
  PageBanner,
  SectionLabel,
  Reveal,
  Button,
} from '../components/ui'

import {
  aboutImg,
  vision,
  stats,
  workingSteps,
} from '../data/content'

import video1 from '../assets/products/video1.mp4'

const capabilities = [
  {
    icon: Recycle,
    title: 'Recovered Materials',
    text:
      'We work with recovered and alternative resources including used cooking oil, pyrolysis oil, carbon-rich materials, tallow oil and recycled steel wire.',
  },
  {
    icon: Factory,
    title: 'Industrial Supply',
    text:
      'Our focus is on connecting material availability with industrial demand while understanding form, volume, application and logistics requirements.',
  },
  {
    icon: FileCheck2,
    title: 'EPR & Waste Solutions',
    text:
      'Jimkey also supports businesses across EPR-related requirements and waste-management services for different regulated waste streams.',
  },
  {
    icon: Truck,
    title: 'Trade & Movement',
    text:
      'From supplier coordination to buyer requirements and material movement, we work toward practical and dependable circular supply chains.',
  },
]

const principles = [
  'Identify material that can be recovered or productively reused.',
  'Understand buyer specifications, quantity and application requirements.',
  'Coordinate suppliers, material movement and commercial communication.',
  'Encourage responsible recovery, recycling and circular resource use.',
]

export default function About() {
  return (
    <div className="about-page">

      {/* HERO */}
      <PageBanner
        title="About Jimkey Ecopower"
        crumb="About Us"
        eyebrow="Circular Resources · Mumbai, India"
        video={video1}
        mediaPosition="center"
      />

      {/* ==================================================
          STORY
      =================================================== */}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:py-20 lg:px-8">

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

          <Reveal>

            <div className="relative">

              <img
                src={aboutImg}
                alt="Jimkey Ecopower operations"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-sm"
              />

              <div className="absolute -bottom-5 right-5 hidden rounded-xl border border-line bg-white px-5 py-4 shadow-lg sm:block">

                <p className="font-mono text-[10px] uppercase tracking-widest text-steel">
                  Based in Mumbai, India
                </p>

              </div>

            </div>

          </Reveal>

          <Reveal delay={100}>

            <SectionLabel>
              Our Story
            </SectionLabel>

            <h2 className="font-display mt-4 text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl">

              Turning waste streams into{' '}

              <span className="text-teal-dark">
                usable resources
              </span>

            </h2>

            <p className="mt-5 text-sm leading-7 text-steel sm:text-base sm:leading-8">
              Jimkey Ecopower operates at the
              intersection of industrial trade,
              resource recovery and circular-economy
              solutions. Our work is built around a
              simple idea: material that still has
              productive value should have a pathway
              back into industry wherever technically
              and commercially appropriate.
            </p>

            <p className="mt-4 text-sm leading-7 text-steel sm:text-base sm:leading-8">
              We trade and coordinate alternative
              fuel resources and recovered materials
              such as used cooking oil, recovered
              carbon materials, pyrolysis oil,
              tallow oil and recycled steel wire.
              These streams can serve as feedstock,
              fuel or secondary raw material
              depending on their quality,
              specifications and intended use.
            </p>

            <p className="mt-4 text-sm leading-7 text-steel sm:text-base sm:leading-8">
              Alongside material trading, Jimkey's
              broader portfolio includes EPR-related
              support, municipal and industrial
              waste-management solutions and selected
              industrial and cleaning products.
              Together, these activities help us work
              across different stages of the resource
              lifecycle — from waste generation and
              recovery to movement and productive use.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-line pt-6 sm:grid-cols-4">

              {stats.map((stat) => (
                <div key={stat.label}>

                  <dt className="font-display text-xl font-bold text-navy sm:text-2xl">
                    {stat.value}
                  </dt>

                  <dd className="font-mono mt-1 text-[9px] uppercase tracking-widest text-steel sm:text-[10px]">
                    {stat.label}
                  </dd>

                </div>
              ))}

            </dl>

          </Reveal>

        </div>
      </section>

      {/* ==================================================
          WHAT WE DO
      =================================================== */}

      <section className="bg-white py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="max-w-3xl">

            <SectionLabel>
              What We Work With
            </SectionLabel>

            <h2 className="font-display mt-4 text-2xl font-bold text-navy sm:text-3xl">
              A practical circular-economy portfolio
            </h2>

            <p className="mt-4 text-sm leading-7 text-steel sm:text-base">
              Our activities span material recovery,
              industrial supply, compliance-linked
              services and waste-management
              solutions.
            </p>

          </Reveal>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {capabilities.map(
              ({
                icon: Icon,
                title,
                text,
              }, index) => (

                <Reveal
                  key={title}
                  delay={index * 80}
                  className="h-full rounded-2xl border border-line bg-paper p-5 transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg sm:p-6"
                >

                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal-dark">

                    <Icon size={20} />

                  </span>

                  <h3 className="font-display mt-4 text-base font-bold text-navy">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-steel">
                    {text}
                  </p>

                </Reveal>
              )
            )}

          </div>

        </div>

      </section>

      {/* ==================================================
          VISION / APPROACH
      =================================================== */}

      <section className="py-14 sm:py-20">

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-14 lg:px-8">

          <Reveal>

            <img
              src={vision}
              alt="Jimkey Ecopower vision"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />

          </Reveal>

          <Reveal delay={100}>

            <SectionLabel>
              Our Approach
            </SectionLabel>

            <h2 className="font-display mt-4 text-2xl font-bold leading-tight text-navy sm:text-3xl">
              Recovery is only valuable when the
              material finds a useful next life
            </h2>

            <p className="mt-4 text-sm leading-7 text-steel sm:text-base sm:leading-8">
              Circularity is more than collecting
              waste. It requires suitable recovery,
              clear material specifications,
              dependable movement and an end user
              capable of putting the recovered
              resource back to productive use.
            </p>

            <div className="mt-6 space-y-4">

              {principles.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-teal-dark"
                  />

                  <p className="text-sm leading-7 text-steel">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </Reveal>

        </div>

      </section>

      {/* ==================================================
          MISSION / VISION
      =================================================== */}

      <section className="bg-white py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2">

            <Reveal className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white sm:p-9">

              <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />

              <div className="relative">

                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-teal-light">

                  <Leaf size={21} />

                </span>

                <p className="font-mono mt-5 text-[10px] uppercase tracking-widest text-teal-light">
                  Our Vision
                </p>

                <h3 className="font-display mt-2 text-xl font-bold sm:text-2xl">
                  Keep useful materials in productive
                  circulation
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/70">
                  We aim to contribute to a resource
                  system where recoverable waste is
                  increasingly treated as a valuable
                  industrial input rather than simply
                  discarded.
                </p>

              </div>

            </Reveal>

            <Reveal
              delay={100}
              className="rounded-3xl border border-line bg-paper p-7 sm:p-9"
            >

              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal/10 text-teal-dark">

                <Recycle size={21} />

              </span>

              <p className="font-mono mt-5 text-[10px] uppercase tracking-widest text-teal-dark">
                Our Mission
              </p>

              <h3 className="font-display mt-2 text-xl font-bold text-navy sm:text-2xl">
                Connect recovery with real industrial
                demand
              </h3>

              <p className="mt-4 text-sm leading-7 text-steel">
                Our mission is to build practical
                links between suppliers, recyclers,
                processors and industrial buyers
                while supporting responsible
                material recovery and movement.
              </p>

            </Reveal>

          </div>

        </div>

      </section>

      {/* ==================================================
          PROCESS
      =================================================== */}

      <section className="py-14 sm:py-20">

        <div className="mx-auto max-w-7xl px-5 lg:px-8">

          <Reveal className="text-center">

            <SectionLabel>
              Process
            </SectionLabel>

            <h2 className="font-display mt-4 text-2xl font-bold text-navy sm:text-3xl">
              How Material Moves With Us
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-steel sm:text-base">
              From identifying a resource to getting
              it closer to the right end use, our
              process is designed around coordination
              and clarity.
            </p>

          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-5 min-[450px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">

            {workingSteps.map(
              (step, index) => (

                <Reveal
                  key={step.n}
                  delay={index * 80}
                  className="rounded-2xl border border-line bg-paper p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg sm:p-6"
                >

                  <div className="font-mono mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">

                    {step.n}

                  </div>

                  <h3 className="font-display mt-3 text-base font-bold text-navy">

                    {step.title}

                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-steel">

                    {step.desc}

                  </p>

                </Reveal>
              )
            )}

          </div>

        </div>

      </section>


    </div>
  )
}