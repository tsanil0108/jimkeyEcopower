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

import MaterialStream from './MaterialStream'

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-teal text-white">

      {/* Background Texture */}
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />

      {/* Decorative Glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-teal-light/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-navy/30 blur-3xl" />

      {/* Material Stream */}
      <div className="relative mx-auto max-w-7xl px-5 pt-10 lg:px-8">
        <MaterialStream variant="dark" />
      </div>

      {/* Main Footer */}
      <div className="relative mx-auto max-w-7xl px-5 pb-12 pt-10 lg:px-8">

        <div className="grid gap-8 lg:grid-cols-12">

          {/* =====================
              BRAND
          ====================== */}
          <div className="lg:col-span-4">

            <div className="footer-brand-card rounded-3xl border border-white/10 bg-navy/25 p-7 backdrop-blur-sm sm:p-8">

              <img
                src={logo}
                alt="Jimkey Ecopower"
                className="h-14 w-auto brightness-0 invert"
              />

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/60 sm:text-base">
                Trading alternative fuel resources and championing
                circular-economy solutions for a cleaner and more
                sustainable future.
              </p>

              {/* Contact CTA */}
              <Link
                to="/contact"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-light hover:text-white"
              >
                Get In Touch

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

            </div>

          </div>

          {/* =====================
              QUICK LINKS
          ====================== */}
          <div className="lg:col-span-2">

            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-light">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-white/60">

              <li>
                <Link
                  to="/about"
                  className="footer-link"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="footer-link"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="footer-link"
                >
                  Gallery / Media
                </Link>
              </li>

              <li>
                <Link
                  to="/clients"
                  className="footer-link"
                >
                  Clients
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="footer-link"
                >
                  Contact Us
                </Link>
              </li>

            </ul>

          </div>

          {/* =====================
              MATERIALS
          ====================== */}
          <div className="lg:col-span-2">

            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-light">
              Materials
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-white/60">

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

          </div>

          {/* =====================
              CONTACT
          ====================== */}
          <div className="lg:col-span-4">

            <h4 className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-teal-light">
              Get In Touch
            </h4>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">

              {/* Address */}
              <div className="flex gap-3">

                <span className="footer-icon">
                  <MapPin size={17} />
                </span>

                <p className="text-sm leading-6 text-white/60">
                  {company.address}
                </p>

              </div>

              {/* Phone */}
              <div className="mt-5 flex items-center gap-3">

                <span className="footer-icon">
                  <Phone size={17} />
                </span>

                <a
                  href="tel:+919768008679"
                  className="footer-link text-sm"
                >
                  +91 97680 08679
                </a>

              </div>

              {/* Email */}
              <div className="mt-5 flex items-center gap-3">

                <span className="footer-icon">
                  <Mail size={17} />
                </span>

                <a
                  href="mailto:info@jimkey.in"
                  className="footer-link text-sm"
                >
                  info@jimkey.in
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================
          BOTTOM BAR
      ====================== */}
      <div className="relative border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:text-left lg:px-8">

          <span className="text-xs text-white/40 sm:text-sm">
            © {new Date().getFullYear()} Jimkey Ecopower.
            All rights reserved.
          </span>

          <span className="font-mono text-xs uppercase tracking-widest text-white/35">
            Mumbai, India
          </span>

        </div>

      </div>

    </footer>
  )
}