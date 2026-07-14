import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import logo from '../assets/logo.png'
import { categories, company } from '../data/content'

const navLink =
  'text-[15px] font-semibold tracking-wide transition-colors hover:text-teal'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [activeCat, setActiveCat] = useState(categories[0].id)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-line">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="shrink-0">
          <img src={logo} alt="Jimkey Ecopower" className="h-14 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={navLink} style={({ isActive }) => ({ color: isActive ? '#159ed4' : '#0c2846' })}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLink} style={({ isActive }) => ({ color: isActive ? '#159ed4' : '#0c2846' })}>
            About Us
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className={`${navLink} flex items-center gap-1 text-navy`}>
              Products <ChevronDown size={15} className={`transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
            </button>

            {productsOpen && (
              <div className="absolute left-1/2 top-full flex w-[560px] -translate-x-1/2 overflow-hidden rounded-xl border border-line bg-white shadow-2xl">
                <ul className="w-56 border-r border-line bg-paper py-2">
                  {categories.map((cat) => (
                    <li key={cat.id}>
                      <Link
                        to={`/products?category=${cat.id}`}
                        onMouseEnter={() => setActiveCat(cat.id)}
                        className={`block px-4 py-3 text-sm font-semibold transition-colors ${
                          activeCat === cat.id ? 'bg-white text-teal' : 'text-navy hover:text-teal'
                        }`}
                      >
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <ul className="flex-1 py-2">
                  {categories
                    .find((c) => c.id === activeCat)
                    ?.subcategories.map((sub) => (
                      <li key={sub.id}>
                        <Link
                          to={`/products?subcategory=${sub.id}`}
                          className="block px-5 py-2.5 text-sm text-steel transition-colors hover:bg-paper hover:text-navy"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          <NavLink to="/gallery" className={navLink} style={({ isActive }) => ({ color: isActive ? '#159ed4' : '#0c2846' })}>
            Gallery/Media
          </NavLink>
          <NavLink to="/clients" className={navLink} style={({ isActive }) => ({ color: isActive ? '#159ed4' : '#0c2846' })}>
            Clients
          </NavLink>
          <NavLink to="/contact" className={navLink} style={({ isActive }) => ({ color: isActive ? '#159ed4' : '#0c2846' })}>
            Contact Us
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="tel:+919768008679" className="flex items-center gap-2 text-sm font-semibold text-navy">
            <Phone size={16} className="text-teal" /> {company.phone}
          </a>
        </div>

        <button className="text-navy lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-5 pb-5 lg:hidden">
          <div className="flex flex-col gap-1 pt-3">
            {[
              ['Home', '/'],
              ['About Us', '/about'],
              ['Products', '/products'],
              ['Gallery/Media', '/gallery'],
              ['Clients', '/clients'],
              ['Contact Us', '/contact'],
            ].map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-semibold text-navy hover:bg-paper hover:text-teal"
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
