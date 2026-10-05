import { Link } from 'react-router-dom'
import {
  Phone,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

import { Reveal } from './ui'

export default function HelpBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EAF7F0] to-paper pt-10 pb-12 sm:pt-12 sm:pb-14 lg:pb-16">

      {/* =========================
          SUBTLE ARC BACKDROP (matches reference: soft gradient + a
          couple of faint orbit lines, no busy dot-grid)
      ========================== */}
      <svg
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-40 sm:block"
        viewBox="0 0 500 500"
        preserveAspectRatio="xMaxYMin meet"
        aria-hidden="true"
      >
        <circle cx="80" cy="500" r="260" fill="none" stroke="#7BE0B5" strokeWidth="1" />
        <circle cx="80" cy="500" r="200" fill="none" stroke="#7BE0B5" strokeWidth="1" strokeDasharray="4 6" />
      </svg>

      <div className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-teal-light/20 blur-3xl" />

      {/* =========================
          JAGGED WAVE DIVIDER
          An uneven "diving" curve (not a smooth arc) that reveals the
          dark navy footer color rising up from the bottom, on an angle.
      ========================== */}
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full"
        viewBox="0 0 1440 240"
        preserveAspectRatio="none"
        style={{ height: '140px' }}
        aria-hidden="true"
      >
        <path
          d="M0,240 L0,150 C120,40 220,190 360,110 C520,20 640,170 800,90 C960,10 1100,150 1260,70 C1340,30 1400,60 1440,30 L1440,240 Z"
          fill="var(--color-teal)"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

        {/* =========================
            FLOATING GREEN CARD
            Scroll-reveal fade+lift on entry, gentle hover-lift, and a
            negative bottom margin that pulls the Footer up so it
            visually overlaps/sits behind the lower half of this card.
        ========================== */}
        <Reveal
          className="group relative -mb-12 w-full overflow-hidden rounded-[2rem] bg-[#2AA889] px-5 py-8 text-center shadow-2xl shadow-[#2AA889]/30 transition-transform duration-500 hover:-translate-y-1 sm:-mb-16 sm:px-10 sm:py-10 lg:px-16"
        >

          {/* Decorative glow — drifts subtly for a bit of life */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 animate-[pulse_6s_ease-in-out_infinite] rounded-full bg-white/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 animate-[pulse_7s_ease-in-out_infinite] rounded-full bg-black/10 blur-3xl" />

          {/* Badge */}
          <div className="relative inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-white">
            <Sparkles size={14} className="animate-pulse" />
            We're here to help
          </div>

          {/* Heading */}
          <h2 className="relative mx-auto mt-4 max-w-4xl text-lg font-extrabold leading-[1.2] text-white sm:whitespace-nowrap sm:text-2xl lg:text-3xl">
            You've got a lot on your plate. Let us take this one off.
          </h2>

          {/* Description */}
          <p className="relative mx-auto mt-4 max-w-xl text-sm leading-6 text-white/85 sm:text-base">
            Tell us what you need, and we'll take it from here.
          </p>

          {/* Buttons */}
          <div className="relative mt-6 flex flex-col items-center justify-center gap-3 min-[420px]:flex-row">

            <a
              href="tel:+919768008679"
              className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#2AA889] min-[420px]:w-auto sm:text-base"
            >
              <Phone size={16} className="transition-transform duration-300 group-hover/btn:rotate-12" />
              Call Us
            </a>

            <Link
              to="/contact"
              className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#2AA889] min-[420px]:w-auto sm:text-base"
            >
              Contact Us
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </Link>

          </div>

        </Reveal>

      </div>

    </section>
  )
}