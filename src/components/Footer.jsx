import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import logo from '../assets/logo.png'
import { categories } from '../data/content'

import MaterialStream from './MaterialStream'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white">
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />

      <div className="relative mx-auto max-w-7xl px-5 pt-14 lg:px-8">
        <MaterialStream variant="dark" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={logo} alt="Jimkey Ecopower" className="h-14 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm leading-relaxed text-white/55">
            Trading alternative fuel resources and championing circular-economy solutions.
          </p>
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-light">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            <li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="transition-colors hover:text-white">Products</Link></li>
            <li><Link to="/gallery" className="transition-colors hover:text-white">Gallery / Media</Link></li>
            <li><Link to="/clients" className="transition-colors hover:text-white">Clients</Link></li>
            <li><Link to="/contact" className="transition-colors hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-light">Materials</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/65">
            {categories.map((c) => (
              <li key={c.id}>
                <Link to={`/products?category=${c.id}`} className="transition-colors hover:text-white">{c.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-teal-light">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/65">
            <li className="flex gap-2.5"><MapPin size={18} className="mt-0.5 shrink-0 text-teal-light" /> Mumbai, India</li>
            <li className="flex gap-2.5"><Phone size={18} className="shrink-0 text-teal-light" /> <a href="tel:+919768008679" className="hover:text-white">+91 97680 08679</a></li>
            <li className="flex gap-2.5"><Mail size={18} className="shrink-0 text-teal-light" /> <a href="mailto:info@jimkey.in" className="hover:text-white">info@jimkey.in</a></li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10 py-5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 text-center text-xs text-white/40 sm:flex-row sm:text-left lg:px-8">
          <span>© {new Date().getFullYear()} Jimkey Ecopower. All rights reserved.</span>
          <span className="font-mono">Mumbai, India</span>
        </div>
      </div>
    </footer>
  )
}