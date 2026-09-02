
import { Link } from 'react-router-dom'
import {
  Phone,
  ArrowRight,
  MessageCircle,
  Sparkles,
} from 'lucide-react'

export default function HelpBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0F2E29]">

      {/* =========================
          TOP CURVE
      ========================== */}
      <svg
        className="absolute left-0 top-0 w-full"
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{ height: '80px' }}
        aria-hidden="true"
      >
        <path
          d="M0,100 C360,0 1080,0 1440,100 L1440,0 L0,0 Z"
          fill="#ffffff"
        />
      </svg>

      {/* =========================
          BACKGROUND GLOW
      ========================== */}
      <div className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full bg-[#2AA889]/20 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-[#7BE0B5]/10 blur-3xl" />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 opacity-[0.12] lg:block"
        style={{
          backgroundImage:
            'radial-gradient(circle, #7BE0B5 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[28%] top-32 hidden h-20 w-20 rounded-full border border-[#7BE0B5]/10 lg:block" />
      <div className="pointer-events-none absolute right-[31%] top-36 hidden h-10 w-10 rounded-full bg-[#7BE0B5]/5 lg:block" />

      {/* =========================
          CONTENT
      ========================== */}
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24">

        <div className="grid items-center gap-12 lg:grid-cols-[1.35fr_0.85fr] lg:gap-16">

          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#7BE0B5]/20 bg-[#7BE0B5]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#7BE0B5]">
              <Sparkles size={14} />
              We're here to help
            </div>

            {/* Heading */}
            <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:mx-0 lg:text-[3rem]">
              You've got a lot on your plate.
              <span className="block text-[#7BE0B5]">
                Let us take this one off.
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base lg:mx-0">
              Tell us what you need, and we'll take it from here —
              material, plant feedstock, or just a quick question.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col items-center gap-3 min-[420px]:flex-row lg:justify-start">

              {/* Contact Button */}
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2AA889] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2AA889]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#36B995] hover:shadow-xl hover:shadow-[#2AA889]/30 min-[420px]:w-auto sm:text-base"
              >
                Get In Touch

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              {/* Phone Button */}
              <a
                href="tel:+919768008679"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#7BE0B5]/40 hover:bg-white/10 min-[420px]:w-auto sm:text-base"
              >
                <Phone
                  size={17}
                  className="transition-transform duration-300 group-hover:scale-110"
                />

                Call Us Directly
              </a>

            </div>

          </div>

          {/* =========================
              RIGHT INFO CARD
          ========================== */}
          <div className="relative hidden lg:block">

            {/* Glow */}
            <div className="absolute -inset-4 rounded-[2rem] bg-[#2AA889]/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.055] p-7 shadow-2xl backdrop-blur-xl">

              {/* Card Header */}
              <div className="mb-6 flex items-center justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7BE0B5]">
                    Contact Support
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white">
                    Let's talk
                  </h3>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2AA889]/15 text-[#7BE0B5]">
                  <MessageCircle size={19} />
                </div>

              </div>

              {/* Phone */}
              <a
                href="tel:+919768008679"
                className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4 transition-all duration-300 hover:border-[#7BE0B5]/20 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2AA889]/15 text-[#7BE0B5]">
                  <Phone size={20} />
                </span>

                <div className="min-w-0">
                  <p className="text-xs text-white/45">
                    Call us directly
                  </p>

                  <p className="mt-1 text-sm font-bold text-white">
                    +91 97680 08679
                  </p>

                  <p className="mt-1 text-xs text-white/40">
                    Mon–Sat, 10am – 6pm
                  </p>
                </div>

                <ArrowRight
                  size={16}
                  className="ml-auto text-white/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#7BE0B5]"
                />
              </a>

              {/* Divider */}
              <div className="my-4 h-px bg-white/10" />

              {/* Response */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.035] p-4">

                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#2AA889]/15 text-[#7BE0B5]">
                  <MessageCircle size={20} />
                </span>

                <div>
                  <p className="text-sm font-bold text-white">
                    Quick Response
                  </p>

                  <p className="mt-1 text-xs leading-5 text-white/45">
                    Usually replies within a day
                  </p>
                </div>

              </div>

              {/* Bottom Status */}
              <div className="mt-5 flex items-center gap-2 text-xs text-white/40">

                <span className="h-2 w-2 rounded-full bg-[#7BE0B5] shadow-[0_0_10px_#7BE0B5]" />

                Our team is available to help

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
