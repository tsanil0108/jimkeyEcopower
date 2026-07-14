import { Link } from 'react-router-dom'
import { ImageOff } from 'lucide-react'

export function SectionLabel({ children }) {
  return (
    <span className="font-mono inline-block rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal-dark">
      {children}
    </span>
  )
}

export function Button({ as = 'link', to, href, children, variant = 'primary', className = '', ...rest }) {
  const base = 'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors'
  const styles = {
    primary: 'bg-navy text-white hover:bg-teal',
    outline: 'border border-navy text-navy hover:bg-navy hover:text-white',
    ghost: 'text-teal hover:text-teal-dark',
  }
  const cls = `${base} ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (as === 'button') return <button type="submit" className={cls} {...rest}>{children}</button>
  return <a href={href} className={cls} {...rest}>{children}</a>
}

export function PageBanner({ title, crumb }) {
  return (
    <div className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h1 className="font-display text-3xl font-bold sm:text-4xl">{title}</h1>
        <div className="mt-3 flex items-center gap-2 text-sm text-white/60">
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
    <div className={`rounded-2xl border border-line bg-white p-6 shadow-sm ${className}`}>
      {children}
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
    return <img src={product.image} alt={product.name} className={className} />
  }
  return (
    <div className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy to-teal-dark text-center text-white ${className}`}>
      <ImageOff size={28} className="text-white/60" />
      <span className="font-display px-4 text-sm font-bold">{product.name}</span>
      <span className="text-[11px] text-white/50">Photo coming soon</span>
    </div>
  )
}