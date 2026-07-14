import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo.png'
import { categories, categoryMeta, company } from '../data/content'

const links = [
  ['Home', '/'],
  ['About Us', '/about'],
  ['Products', '/products'],
  ['Gallery/Media', '/gallery'],
  ['Clients', '/clients'],
  ['Contact Us', '/contact'],
]

const navLink = ({ isActive }) =>
  `relative text-[14px] font-semibold tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-teal after:transition-all after:duration-300 hover:text-teal-dark hover:after:w-full ${
    isActive ? 'text-teal-dark after:w-full' : 'text-navy'
  }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [activeCat, setActiveCat] = useState(categories[0].id)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-paper/90 backdrop-blur transition-shadow duration-300 ${
        scrolled ? 'border-line shadow-[0_1px_0_rgba(20,51,42,0.05)]' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Jimkey Ecopower" className="h-12 w-auto sm:h-14" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          <NavLink to="/" className={navLink} end>Home</NavLink>
          <NavLink to="/about" className={navLink}>About Us</NavLink>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link to="/products" className={`${navLink({ isActive: false })} flex items-center gap-1`}>
              Products
              <ChevronDown size={14} className={`transition-transform duration-300 ${productsOpen ? 'rotate-180 text-teal' : ''}`} />
            </Link>

            <div
              className={`absolute left-1/2 top-full w-[600px] -translate-x-1/2 pt-3 transition-all duration-250 ${
                productsOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
              }`}
            >
              <div className="flex overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-20px_rgba(20,51,42,0.25)]">
                <ul className="w-60 border-r border-line bg-paper-soft/60 py-3">
                  <li className="px-4 pb-2 font-mono text-[10px] uppercase tracking-widest text-steel">Categories</li>
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        to={`/products?category=${cat.id}`}
                        onMouseEnter={() => setActiveCat(cat.id)}
                        className={`block border-l-2 px-4 py-2.5 text-sm font-semibold transition-colors ${
                          activeCat === cat.id ? 'border-teal bg-white text-teal-dark' : 'border-transparent text-navy hover:border-teal/40 hover:text-teal-dark'
                        }`}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex-1 py-3">
                  <li className="px-5 pb-2 font-mono text-[10px] uppercase tracking-widest text-steel">Materials</li>
                  {categories
                    .find((c) => c.id === activeCat)
                    ?.subcategories.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          to={`/products?subcategory=${sub.id}`}
                          className="flex items-center justify-between px-5 py-2.5 text-sm text-steel transition-colors hover:bg-paper hover:text-navy"
                        >
                          {sub.name}
                          <ArrowUpRight size={14} className="text-teal opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>

          <NavLink to="/gallery" className={navLink}>Gallery/Media</NavLink>
          <NavLink to="/clients" className={navLink}>Clients</NavLink>
          <NavLink to="/contact" className={navLink}>Contact Us</NavLink>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${company.phone}`} className="flex items-center gap-2 font-mono text-xs font-semibold text-navy">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/10 text-teal-dark"><Phone size={14} /></span>
            {company.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-teal-dark hover:shadow-lg hover:shadow-teal/25"
          >
            Get a Quote
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-line bg-paper transition-[max-height] duration-300 ease-out lg:hidden ${
          open ? 'max-h-[70vh] overflow-y-auto' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {links.map(([label, to], i) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : '0ms' }}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2.5 text-[15px] font-semibold transition-all duration-300 ${
                  open ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                } ${isActive ? 'bg-teal/10 text-teal-dark' : 'text-navy hover:bg-white'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <a href={`tel:${company.phone}`} className="mt-3 flex items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">
            <Phone size={15} /> {company.phone}
          </a>
        </div>
      </div>
    </header>
  )
}