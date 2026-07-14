import { useState } from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'
import { PageBanner, Button } from '../components/ui'
import { company } from '../data/content'

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
      <PageBanner title="Contact Us" crumb="Contact" />

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {infoCards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-line bg-white p-7 text-center shadow-sm">
              <c.icon className="mx-auto text-teal" size={28} />
              <h3 className="font-display mt-3 font-bold text-navy">{c.title}</h3>
              {c.href ? (
                <a href={c.href} className="mt-1 block text-sm text-steel hover:text-teal-dark">{c.value}</a>
              ) : (
                <p className="mt-1 text-sm text-steel">{c.value}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold text-navy">Send us a message</h2>
            <p className="mt-2 text-sm text-steel">
              Fill out the form and our team will get back to you shortly. (Form submission will connect
              to the backend once it's ready.)
            </p>

            {sent ? (
              <div className="mt-6 rounded-xl border border-teal/30 bg-teal/10 p-6 text-sm font-medium text-teal-dark">
                Thanks — your message has been noted. We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required placeholder="Your Name *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none focus:border-teal" />
                  <input required type="email" placeholder="Your Email *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none focus:border-teal" />
                </div>
                <input required maxLength={10} placeholder="Mobile Number *" className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:border-teal" />
                <textarea required rows={5} placeholder="Your Message *" className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none focus:border-teal" />
                <Button as="button" className="w-full sm:w-auto">Send Message</Button>
              </form>
            )}
          </div>

          <div className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="Jimkey Ecopower location"
              className="h-full min-h-[320px] w-full"
              loading="lazy"
              src="https://www.google.com/maps?q=Andheri+East,+Mumbai&output=embed"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
