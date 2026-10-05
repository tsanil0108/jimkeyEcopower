import { useState } from 'react'

import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react'

import {
  PageBanner,
  Button,
  Reveal,
} from '../components/ui'

import { company } from '../data/content'
import { api } from '../lib/api'

import video2 from '../assets/products/vodeo2.mp4'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  })

  // Update form fields
  function update(field) {
    return (e) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }))
    }
  }

  // Submit form
  async function handleSubmit(e) {
    e.preventDefault()

    setError('')
    setLoading(true)

    try {
      await api.submitLead({
        ...form,
        source: 'Contact Page',
      })

      setSent(true)

      setForm({
        name: '',
        email: '',
        mobile: '',
        message: '',
      })
    } catch (err) {
      console.error(err)

      setError(
        err?.message ||
          'Could not send your message. Please try again.'
      )
    } finally {
      setLoading(false)
    }
  }

  // Contact information cards
  const infoCards = [
    {
      icon: Phone,
      title: 'Call Here',
      value: company.phone,
      href: `tel:${company.phone}`,
    },
    {
      icon: Mail,
      title: 'Mail Here',
      value: company.email,
      href: `mailto:${company.email}`,
    },
    {
      icon: MapPin,
      title: 'Visit Here',
      value: company.address,
      href: null,
    },
  ]

  return (
    <div className="w-full overflow-x-hidden">

      {/* =========================
          HERO
      ========================== */}
      <PageBanner
        title="Contact Us"
        crumb="Contact"
        eyebrow="We reply within a business day"
        video={video2}
        mediaPosition="center"
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <section className="mx-auto w-full max-w-7xl px-5 py-12 sm:py-16 lg:px-8 lg:py-20">

        {/* =========================
            INFO CARDS
        ========================== */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {infoCards.map((card, index) => {
            const Icon = card.icon

            return (
              <Reveal
                key={card.title}
                delay={index * 90}
                className="rounded-2xl border border-line bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg sm:p-7"
              >
                {/* ICON */}
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-teal/10 text-teal-dark">
                  <Icon size={22} />
                </span>

                {/* TITLE */}
                <h3 className="font-display mt-3 text-base font-bold text-navy">
                  {card.title}
                </h3>

                {/* VALUE */}
                {card.href ? (
                  <a
                    href={card.href}
                    className="mt-2 block break-words text-base leading-7 text-steel transition-colors hover:text-teal-dark"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="mt-2 break-words text-base leading-7 text-steel">
                    {card.value}
                  </p>
                )}
              </Reveal>
            )
          })}

        </div>

        {/* =========================
            FORM + MAP
        ========================== */}
        <div className="mt-12 grid gap-10 lg:mt-14 lg:grid-cols-2 lg:items-stretch lg:gap-12">

          {/* =========================
              LEFT - CONTACT FORM
          ========================== */}
          <Reveal className="min-w-0">

            {/* HEADING */}
            <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
              Send us a message
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 max-w-xl text-base leading-7 text-steel sm:text-lg">
              Tell us what material, waste stream, service or business
              requirement you would like to discuss. Our team will get
              back to you as soon as possible.
            </p>

            {/* =========================
                SUCCESS MESSAGE
            ========================== */}
            {sent ? (
              <div className="mt-7 flex items-start gap-3 rounded-2xl border border-teal/30 bg-teal/10 p-5 text-base text-teal-dark sm:p-6">

                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0"
                />

                <div className="contact-page">

                  <p className="font-semibold">
                    Message sent successfully.
                  </p>

                  <p className="mt-1 text-base leading-7">
                    Thanks — your message has been noted.
                    We'll be in touch soon.
                  </p>

                  {/* SEND ANOTHER MESSAGE */}
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false)
                      setError('')
                    }}
                    className="mt-4 font-semibold text-teal-dark underline underline-offset-4 hover:no-underline"
                  >
                    Send another message
                  </button>

                </div>
              </div>
            ) : (

              /* =========================
                 FORM
              ========================== */
              <form
                onSubmit={handleSubmit}
                className="mt-7 space-y-4"
              >

                {/* ERROR MESSAGE */}
                {error && (
                  <div className="flex items-start gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-base text-red-600">

                    <AlertCircle
                      size={16}
                      className="mt-0.5 shrink-0"
                    />

                    <span>
                      {error}
                    </span>

                  </div>
                )}

                {/* =========================
                    NAME + EMAIL
                ========================== */}
                <div className="grid gap-4 sm:grid-cols-2">

                  {/* NAME */}
                  <div className="min-w-0">
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your Name *"
                      autoComplete="name"
                      className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-navy outline-none transition-colors placeholder:text-steel/70 focus:border-teal"
                    />
                  </div>

                  {/* EMAIL */}
                  <div className="min-w-0">
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="Your Email *"
                      autoComplete="email"
                      className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-navy outline-none transition-colors placeholder:text-steel/70 focus:border-teal"
                    />
                  </div>

                </div>

                {/* =========================
                    MOBILE
                ========================== */}
                <div className="w-full">

                  <input
                    required
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={form.mobile}
                    onChange={(e) => {
                      const value = e.target.value
                        .replace(/\D/g, '')
                        .slice(0, 10)

                      setForm((prev) => ({
                        ...prev,
                        mobile: value,
                      }))
                    }}
                    placeholder="Mobile Number *"
                    autoComplete="tel"
                    className="w-full rounded-xl border border-line bg-white px-4 py-3.5 text-base text-navy outline-none transition-colors placeholder:text-steel/70 focus:border-teal"
                  />

                </div>

                {/* =========================
                    MESSAGE
                ========================== */}
                <div className="w-full">

                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Your Message *"
                    className="min-h-[150px] w-full resize-y rounded-xl border border-line bg-white px-4 py-3.5 text-base leading-7 text-navy outline-none transition-colors placeholder:text-steel/70 focus:border-teal"
                  />

                </div>

                {/* =========================
                    SUBMIT BUTTON
                ========================== */}
                <div className="pt-1">

                  <Button
                    as="button"
                    type="submit"
                    variant="accent"
                    className="w-full sm:w-auto"
                    disabled={loading}
                  >

                    {loading ? (
                      <>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={15} />
                      </>
                    )}

                  </Button>

                </div>

              </form>
            )}

          </Reveal>

          {/* =========================
              RIGHT - GOOGLE MAP
          ========================== */}
          <Reveal
            delay={120}
            className="min-h-[360px] overflow-hidden rounded-2xl border border-line bg-white shadow-sm sm:min-h-[430px] lg:min-h-full"
          >

            <iframe
              title="Jimkey Ecopower location"
              loading="lazy"
              src="https://www.google.com/maps?q=Andheri+East,+Mumbai&output=embed"
              className="h-full min-h-[360px] w-full border-0 sm:min-h-[430px]"
              referrerPolicy="no-referrer-when-downgrade"
            />

          </Reveal>

        </div>

      </section>
    </div>
  )
}