import { PageBanner, SectionLabel } from '../components/ui'
import { aboutImg, groupCompanies } from '../data/content'

export default function About() {
  return (
    <div>
      <PageBanner title="About Us" />

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={aboutImg} alt="About Jimkey Ecopower" className="w-full rounded-2xl" />
          <div>
            <h2 className="font-display text-3xl font-bold text-navy">
              Welcome to <span className="text-teal-dark">Jimkey Ecopower</span>
            </h2>
            <p className="mt-4 text-steel">
              We are a global engineering firm specializing in industrial filtration, diffused aeration
              and robotic sludge management services for various sectors. Leveraging expertise and
              innovation, we provide customized solutions for water, wastewater and sludge challenges.
              Our commitment lies in advancing technology for safety, efficiency and environmental
              responsibility.
            </p>
            <p className="mt-4 text-steel">
              At Jimkey we are in trading of alternative fuel resources such as UCO, carbon black,
              pyrolytic oil, tallow oil and waste tyres. Additionally, Jimkey has partnered with Korean
              and Thailand manufacturers for branding and sale of cosmetics and food products in India.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="text-center">
            <SectionLabel>Our Network</SectionLabel>
            <h2 className="font-display mt-4 text-3xl font-bold text-navy">Our Group Companies</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {groupCompanies.map((g) => (
              <a
                key={g.name}
                href={g.url}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-white p-10 text-center shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="font-display flex h-16 w-16 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                  {g.name.slice(0, 2).toUpperCase()}
                </span>
                <span className="font-display font-bold text-navy">{g.name}</span>
                <span className="text-xs text-teal-dark">{g.url.replace('https://', '')}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
