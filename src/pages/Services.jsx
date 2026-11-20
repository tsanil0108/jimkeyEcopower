import { PageBanner, Reveal } from '../components/ui'

export default function Services() {
  return (
    <div className="services-page">

      <PageBanner
        title="Our Services"
        crumb="Services"
        eyebrow="Solutions for a Sustainable Future"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <Reveal>
          <div className="max-w-3xl">

            <p className="font-mono text-xs uppercase tracking-widest text-teal-dark">
              Our Expertise
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold text-navy">
              Comprehensive Environmental & Recycling Solutions
            </h2>

            <p className="mt-5 leading-relaxed text-steel">
              Explore our range of specialised services designed
              to support sustainable operations, resource recovery
              and responsible waste management.
            </p>

          </div>
        </Reveal>

        {/* ADD SERVICES CONTENT HERE */}

      </section>

    </div>
  )
}