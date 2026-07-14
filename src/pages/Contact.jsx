import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { PageBanner, Button, Reveal } from '../components/ui'
import { company } from '../data/content'
import video2 from '../assets/products/vodeo2.mp4'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  const infoCards = [
    { icon: Phone, title: 'Call Here', value: company.phone, href: `tel:${company.phone}` },
    { icon: Mail, title: 'Mail Here', value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, title: 'Visit Here', value: company.address },
  ]

  return (
    <div>
      <PageBanner title="Contact Us" crumb="Contact" eyebrow="We reply within a business day" video={video2} />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {infoCards.map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 90}
              className="rounded-2xl border border-line bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal-dark">
                <c.icon size={22} />
              </span>
              <h3 className="font-display mt-3 font-bold text-navy">{c.title}</h3>
              {c.href ? (
                <a href={c.href} className="mt-1 block text-sm text-steel hover:text-teal-dark">{c.value}</a>
              ) : (
                <p className="mt-1 text-sm text-steel">{c.value}</p>
              )}
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
            <p className="mt-2 text-sm text-steel">
              Fill out the form and our team will get back to you shortly. (Form submission will connect
              to the backend once it's ready.)
            </p>

            {sent ? (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-teal/30 bg-teal/10 p-6 text-sm font-medium text-teal-dark">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                Thanks — your message has been noted. We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Your Name *" className="rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
                  <input required type="email" placeholder="Your Email *" className="rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
                </div>
                <input required maxLength={10} placeholder="Mobile Number *" className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
                <textarea required rows={5} placeholder="Your Message *" className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
                <Button as="button" variant="accent" className="w-full sm:w-auto">
                  Send Message <Send size={15} />
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="Jimkey Ecopower location"
              className="h-full min-h-[320px] w-full grayscale-[15%]"
              loading="lazy"
              src="https://www.google.com/maps?q=Sureflo+Techcon+Limited,+19.1216232,72.8658525&z=16&output=embed"
            />
          </Reveal>
        </div>
      </section>
    </div>
  )
}