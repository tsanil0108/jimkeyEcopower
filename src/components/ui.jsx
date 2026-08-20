import { Link } from 'react-router-dom'
import { ImageOff } from 'lucide-react'

import Reveal from './Reveal'
import { resolveMediaUrl } from '../lib/api'

export function SectionLabel({
  children,
  dark = false,
}) {
  return (
    <span
      className={`
        font-mono
        inline-flex
        max-w-full
        items-center
        gap-2
        rounded-full
        border
        px-3
        py-1
        text-[9px]
        font-semibold
        uppercase
        tracking-wider

        sm:text-[11px]

        ${
          dark
            ? 'border-white/30 bg-black/20 text-[#f2a574] backdrop-blur-sm'
            : 'border-teal/25 bg-teal/10 text-teal-dark'
        }
      `}
    >
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-current" />

      <span className="min-w-0 truncate">
        {children}
      </span>
    </span>
  )
}

export function Button({
  as = 'link',
  to,
  href,
  children,
  variant = 'primary',
  className = '',
  ...rest
}) {
  const base =
    'group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-offset-4 sm:px-6 sm:py-3'

  const styles = {
    primary:
      'bg-navy text-white hover:-translate-y-0.5 hover:shadow-lg',

    accent:
      'bg-teal text-white hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-lg',

    outline:
      'border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-white',

    ghost:
      'text-teal-dark hover:text-navy',
  }

  const cls =
    `${base} ${styles[variant]} ${className}`

  if (to) {
    return (
      <Link
        to={to}
        className={cls}
        {...rest}
      >
        {children}
      </Link>
    )
  }

  if (as === 'button') {
    return (
      <button
        type="submit"
        className={cls}
        {...rest}
      >
        {children}
      </button>
    )
  }

  return (
    <a
      href={href}
      className={cls}
      {...rest}
    >
      {children}
    </a>
  )
}

/* =========================================================
   COMMON RESPONSIVE PAGE HERO
========================================================= */

export function PageBanner({
  title,
  crumb,
  eyebrow,
  video,
  image,
  mediaPosition = 'center',
}) {
  const hasMedia =
    Boolean(video || image)

  return (
    <section
      className="
        relative
        isolate
        w-full
        overflow-hidden
        bg-[#111]
        text-white
      "
    >

      <div
        className="
          relative
          flex
          min-h-[300px]
          w-full
          items-end
          overflow-hidden

          sm:min-h-[350px]
          md:min-h-[390px]
          lg:min-h-[430px]
        "
      >

        {/* VIDEO */}
        {video && (
          <video
            key={video}
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
            style={{
              objectPosition:
                mediaPosition,
            }}
          />
        )}

        {/* IMAGE */}
        {!video && image && (
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "
            style={{
              objectPosition:
                mediaPosition,
            }}
          />
        )}

        {/* NO-MEDIA FALLBACK */}
        {!hasMedia && (
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a1a1a,#090909)]" />
        )}

        {/*
          No full dark overlay.

          Only bottom fade where text sits.
        */}
        {hasMedia && (
          <div
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-[62%]

              bg-gradient-to-t
              from-black/65
              via-black/20
              to-transparent
            "
          />
        )}

        {/* CONTENT */}
        <div
          className="
            relative
            z-10
            mx-auto
            w-full
            max-w-7xl

            px-5
            pb-8
            pt-20

            sm:pb-10

            md:pb-12

            lg:px-8
            lg:pb-14
          "
        >

          <div className="min-w-0 max-w-4xl">

            {eyebrow && (
              <SectionLabel dark>
                {eyebrow}
              </SectionLabel>
            )}

            <h1
              className="
                mt-4
                max-w-full
                break-words

                font-display
                font-bold
                leading-[1.06]
                text-white

                text-[clamp(2rem,10vw,3.75rem)]

                drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]
              "
            >
              {title}
            </h1>

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-2

                font-mono
                text-[10px]
                text-white/85

                sm:text-xs
              "
            >

              <Link
                to="/"
                className="hover:text-white"
              >
                Home
              </Link>

              <span>/</span>

              <span className="text-[#f2a574]">
                {crumb || title}
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export function Card({
  children,
  className = '',
}) {
  return (
    <div
      className={`rounded-2xl border border-line bg-white p-5 shadow-[0_1px_2px_rgba(20,51,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(20,51,42,0.18)] sm:p-6 ${className}`}
    >
      {children}
    </div>
  )
}

export function Badge({
  children,
  tone = 'teal',
  className = '',
}) {
  const tones = {
    teal:
      'bg-teal/10 text-teal-dark border-teal/20',

    amber:
      'bg-amber/10 text-amber-dark border-amber/20',

    navy:
      'bg-navy/8 text-navy border-navy/15',
  }

  return (
    <span
      className={`font-mono inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

export function StatBlock({
  value,
  label,
}) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-navy sm:text-3xl">
        {value}
      </p>

      <p className="font-mono mt-1 text-[10px] uppercase tracking-widest text-steel sm:text-[11px]">
        {label}
      </p>
    </div>
  )
}

export function ProductImage({
  product,
  className = '',
}) {
  const src =
    resolveMediaUrl(
      product.imageUrl
    ) || product.image

  if (src) {
    return (
      <img
        src={src}
        alt={product.name}
        className={className}
        loading="lazy"
      />
    )
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,var(--color-navy),var(--color-navy-deep))] text-center text-white ${className}`}
    >

      <ImageOff
        size={26}
        className="text-white/50"
      />

      <span className="font-display px-4 text-sm font-bold">
        {product.name}
      </span>

      <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
        Photo coming soon
      </span>

    </div>
  )
}

export { Reveal }