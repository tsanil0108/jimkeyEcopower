import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'
import logo from '../assets/logo.png'
import { company, categories, groupCompanies } from '../data/content'
import MaterialStream from './MaterialStream'

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto max-w-7xl px-5 pt-14 lg:px-8">
        <MaterialStream variant="dark" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <img src={logo} alt="Jimkey Ecopower" className="h-14 w-auto brightness-0 invert" />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Trading alternative fuel resources and championing circular economy solutions since 2021.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-teal-light">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery / Media</Link></li>
            <li><Link to="/clients" className="hover:text-white">Clients</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-teal-light">Materials</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {categories.flatMap((c) => c.subcategories).map((s) => (
              <li key={s.id}>
                <Link to={`/products?subcategory=${s.id}`} className="hover:text-white">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-teal-light">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            <li className="flex gap-2.5"><MapPin size={18} className="mt-0.5 shrink-0 text-teal" /> {company.address}</li>
            <li className="flex gap-2.5"><Phone size={18} className="shrink-0 text-teal" /> <a href={`tel:${company.phone}`} className="hover:text-white">{company.phone}</a></li>
            <li className="flex gap-2.5"><Mail size={18} className="shrink-0 text-teal" /> <a href={`mailto:${company.email}`} className="hover:text-white">{company.email}</a></li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            {groupCompanies.map((g) => (
              <a key={g.name} href={g.url} target="_blank" rel="noreferrer" className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/60 hover:border-teal hover:text-white">
                {g.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Jimkey Ecopower. All rights reserved.
      </div>
    </footer>
  )
}
