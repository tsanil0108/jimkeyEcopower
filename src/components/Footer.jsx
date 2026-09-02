import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from 'lucide-react'

import logo from '../assets/logo.png'

import {
  categories,
  company,
} from '../data/content'

import { Reveal } from './ui'

// lucide-react no longer ships brand/logo icons (trademark reasons),
// so these three are small inline SVGs instead of lucide imports.
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.36C16.14 4.31 15.02 4.2 13.7 4.2c-2.75 0-4.63 1.68-4.63 4.76V10.5H6.5v3h2.57V21h4.43Z" />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M22 12s0-3.2-.4-4.7a2.9 2.9 0 0 0-2-2C17.9 5 12 5 12 5s-5.9 0-7.6.3a2.9 2.9 0 0 0-2 2C2 8.8 2 12 2 12s0 3.2.4 4.7a2.9 2.9 0 0 0 2 2C6.1 19 12 19 12 19s5.9 0 7.6-.3a2.9 2.9 0 0 0 2-2C22 15.2 22 12 22 12Z"
      />
      <path fill="#0F172A" d="M10 9.5v5l4.5-2.5L10 9.5Z" />
    </svg>
  )
}

// TODO: replace with the real social page URLs
const socials = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="relative z-0 overflow-hidden bg-teal text-white">

      {/* Top padding just clears the HelpBanner card's overlap; the card's
          own negative margin already does most of the work. */}
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 sm:pt-16 lg:px-8 lg:pt-20">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">

          {/* =====================
              BRAND
          ====================== */}
          <Reveal className="sm:col-span-2 lg:col-span-4">

            <img
              src={logo}
              alt="Jimkey Ecopower"
              className="h-12 w-auto brightness-0 invert"
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              {company.tagline}
            </p>

            {/* Address / phone / email */}
            <div className="mt-6 space-y-4">

              <div className="flex gap-3">
                <span className="footer-icon">
                  <MapPin size={16} />
                </span>
                <p className="text-sm leading-6 text-white/55">
                  {company.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="footer-icon">
                  <Phone size={16} />
                </span>
                <a
                  href={`tel:+${company.whatsapp}`}
                  className="footer-link text-sm text-white/80"
                >
                  {company.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="footer-icon">
                  <Mail size={16} />
                </span>
                <a
                  href={`mailto:${company.email}`}
                  className="footer-link text-sm text-white/80"
                >
                  {company.email}
                </a>
              </div>

            </div>

            {/* Contact CTA */}
            <Link
              to="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-light"
            >
              Get In Touch

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>

          </Reveal>

          {/* =====================
              QUICK LINKS
          ====================== */}
          <Reveal delay={80} className="lg:col-span-2">

            <h4 className="text-base font-bold text-white">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-white/55">

              <li>
                <Link to="/" className="footer-link">Home</Link>
              </li>

              <li>
                <Link to="/about" className="footer-link">About Us</Link>
              </li>

              <li>
                <Link to="/products" className="footer-link">Products</Link>
              </li>

              <li>
                <Link to="/gallery" className="footer-link">Gallery / Media</Link>
              </li>

              <li>
                <Link to="/clients" className="footer-link">Clients</Link>
              </li>

              <li>
                <Link to="/contact" className="footer-link">Contact Us</Link>
              </li>

            </ul>

          </Reveal>

          {/* =====================
              MATERIALS
          ====================== */}
          <Reveal delay={140} className="lg:col-span-2">

            <h4 className="text-base font-bold text-white">
              Materials
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-white/55">

              {categories.map((c) => (
                <li key={c.id}>
                  <Link
                    to={`/products?category=${c.id}`}
                    className="footer-link"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}

            </ul>

          </Reveal>

          {/* =====================
              CONTACT
          ====================== */}
          <Reveal delay={200} className="lg:col-span-2">

            <h4 className="text-base font-bold text-white">
              Contact Us
            </h4>

            <div className="mt-5 space-y-2 text-sm leading-6 text-white/55">
              <p className="font-semibold text-white/80">Official Working Hours:</p>
              <p>Mon–Sat: 10 AM – 6 PM</p>
            </div>

          </Reveal>

          {/* =====================
              CONNECT WITH US
          ====================== */}
          <Reveal delay={260} className="lg:col-span-2">

            <h4 className="text-base font-bold text-white">
              Connect with us
            </h4>

            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-teal-light hover:text-navy-deep"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </Reveal>

        </div>

      </div>

      {/* =====================
          BOTTOM BAR
      ====================== */}
      <div className="relative border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:text-left lg:px-8">

          <span className="text-xs text-white/40 sm:text-sm">
            © {new Date().getFullYear()} Jimkey Ecopower. All rights reserved.
          </span>

          <span className="font-mono text-xs uppercase tracking-widest text-white/35">
            Mumbai, India
          </span>

        </div>

      </div>

    </footer>
  )
}