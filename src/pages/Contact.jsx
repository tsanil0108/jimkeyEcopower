import { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import { PageBanner, Button, Reveal } from '../components/ui'
import { company } from '../data/content'
import { api } from '../lib/api'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' })

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await api.submitLead({ ...form, source: 'Contact Page' })
      setSent(true)
    } catch (err) {
      setError(err.message || 'Could not send your message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const infoCards = [
    { icon: Phone, title: 'Call Here', value: company.phone, href: `tel:${company.phone}` },
    { icon: Mail, title: 'Mail Here', value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, title: 'Visit Here', value: company.address },
  ]

  return (
    <div>
      <PageBanner title="Contact Us" crumb="Contact" eyebrow="We reply within a business day" />

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
              Fill out the form and our team will get back to you shortly.
            </p>

            {sent ? (
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-teal/30 bg-teal/10 p-6 text-sm font-medium text-teal-dark">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
                Thanks — your message has been noted. We'll be in touch soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {error && (
                  <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle size={16} className="shrink-0" /> {error}
                  </div>
                )}
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required value={form.name} onChange={update('name')} placeholder="Your Name *" className="rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
                  <input required type="email" value={form.email} onChange={update('email')} placeholder="Your Email *" className="rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
                </div>
                <input required maxLength={10} value={form.mobile} onChange={update('mobile')} placeholder="Mobile Number *" className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
                <textarea required rows={5} value={form.message} onChange={update('message')} placeholder="Your Message *" className="w-full rounded-lg border border-line bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
                <Button as="button" variant="accent" className="w-full sm:w-auto" disabled={loading}>
                  {loading ? 'Sending…' : 'Send Message'} <Send size={15} />
                </Button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-2xl border border-line">
            <iframe
              title="Jimkey Ecopower location"
              className="h-full min-h-[320px] w-full grayscale-[15%]"
              loading="lazy"
              src="https://www.google.com/maps?q=Andheri+East,+Mumbai&output=embed"
            />
          </Reveal>
        </div>
      </section>
    </div>
  )
}
