import { ArrowUpRight } from 'lucide-react'
import { PageBanner, SectionLabel, Reveal } from '../components/ui'
import {
  aboutImg,

  
  stats,
  workingSteps,
} from '../data/content'
import video1 from '../assets/products/video1.mp4'

export default function About() {
  return (
    <div>
      <PageBanner
        title="About Us"
        eyebrow="Since 2021 · Mumbai, India"
        video={video1}
      />

      {/* Our Story */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={aboutImg}
              alt="About Jimkey Ecopower"
              className="w-full rounded-2xl object-cover"
            />
          </Reveal>

          <Reveal delay={100}>
            <SectionLabel>Our Story</SectionLabel>

            <h2 className="font-display mt-4 text-3xl font-bold text-navy">
              Welcome to{' '}
              <span className="text-teal-dark">Jimkey Ecopower</span>
            </h2>

            <p className="mt-4 leading-7 text-steel">
              We are a global engineering firm specialising in industrial
              filtration, diffused aeration and robotic sludge management
              services for various sectors. Leveraging expertise and
              innovation, we provide customised solutions for water,
              wastewater and sludge challenges. Our commitment lies in
              advancing technology for safety, efficiency and environmental
              responsibility.
            </p>

            <p className="mt-4 leading-7 text-steel">
              At Jimkey, we trade in alternative fuel resources such as UCO,
              carbon black, pyrolytic oil, tallow oil and waste tyres.
             
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-display text-2xl font-bold text-navy">
                    {stat.value}
                  </dt>

                  <dd className="font-mono mt-1 text-[10px] uppercase tracking-widest text-steel">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="text-center">
            <SectionLabel>Process</SectionLabel>

            <h2 className="font-display mt-4 text-3xl font-bold text-navy">
              How Material Moves With Us
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {workingSteps.map((step, index) => (
              <Reveal
                key={step.n}
                delay={index * 80}
                className="rounded-2xl border border-line bg-paper p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg"
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
            ))}
          </div>
        </div>
      </section>

      {/* Group Companies */}

    </div>
  )
}