import { Link } from 'react-router-dom'
import { ImageOff } from 'lucide-react'
import Reveal from './Reveal'

export function SectionLabel({ children, dark = false }) {
  return (
    <span
      className={`font-mono inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-widest ${
        dark ? 'border-white/25 bg-white/10 text-teal-light' : 'border-teal/25 bg-teal/10 text-teal-dark'
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  )
}

export function Button({ as = 'link', to, href, children, variant = 'primary', className = '', ...rest }) {
  const base =
    'group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-offset-4'
  const styles = {
    primary: 'bg-navy text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-navy/20',
    accent: 'bg-teal text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal/30 hover:bg-teal-dark',
    outline: 'border border-navy/30 text-navy hover:border-navy hover:bg-navy hover:text-white',
    ghost: 'text-teal-dark hover:text-navy',
  }
  const cls = `${base} ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (as === 'button') return <button type="submit" className={cls} {...rest}>{children}</button>
  return <a href={href} className={cls} {...rest}>{children}</a>
}

export function PageBanner({ title, crumb, eyebrow, video, image }) {
  return (
    <div className="relative overflow-hidden bg-navy py-28 text-white sm:py-36">
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {!video && image && (
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className={`absolute inset-0 ${image && !video ? 'bg-navy/50' : 'bg-navy/25'}`} />
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-30" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {eyebrow && <SectionLabel dark>{eyebrow}</SectionLabel>}
        <h1 className="font-display mt-4 text-3xl font-bold sm:text-4xl lg:text-5xl">{title}</h1>
        <div className="mt-4 flex items-center gap-2 font-mono text-xs text-white/50">
          <Link to="/" className="hover:text-white">Home</Link>
          <span>/</span>
          <span className="text-teal-light">{crumb || title}</span>
        </div>
      </div>
    </div>
  )
}

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl border border-line bg-white p-6 shadow-[0_1px_2px_rgba(20,51,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-16px_rgba(20,51,42,0.18)] ${className}`}>
      {children}
    </div>
  )
}

export function Badge({ children, tone = 'teal', className = '' }) {
  const tones = {
    teal: 'bg-teal/10 text-teal-dark border-teal/20',
    amber: 'bg-amber/10 text-amber-dark border-amber/20',
    navy: 'bg-navy/8 text-navy border-navy/15',
  }
  return (
    <span className={`font-mono inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}

export function StatBlock({ value, label }) {
  return (
    <div>
      <p className="font-display text-2xl font-bold text-navy sm:text-3xl">{value}</p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-steel">{label}</p>
    </div>
  )
}

/**
 * Renders a product photo, or a clean placeholder (product name + icon) when
 * no real photo has been supplied yet — swap in a real image path in
 * data/content.js and this will automatically show it instead.
 */
export function ProductImage({ product, className = '' }) {
  if (product.image) {
    return <img src={product.image} alt={product.name} className={className} loading="lazy" />
  }
  return (
    <div className={`flex flex-col items-center justify-center gap-2 bg-[linear-gradient(135deg,var(--color-navy),var(--color-navy-deep))] text-center text-white ${className}`}>
      <ImageOff size={26} className="text-white/50" />
      <span className="font-display px-4 text-sm font-bold">{product.name}</span>
      <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">Photo coming soon</span>
    </div>
  )
}

export { Reveal }