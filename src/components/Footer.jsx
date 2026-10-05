<<<<<<< HEAD

=======
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
import { Link } from 'react-router-dom'
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from 'lucide-react'

import logo from '../assets/logo.png'

import {
<<<<<<< HEAD
=======
  categories,
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
  company,
} from '../data/content'

import { Reveal } from './ui'

<<<<<<< HEAD
// Facebook Icon
=======
// lucide-react no longer ships brand/logo icons (trademark reasons),
// so these three are small inline SVGs instead of lucide imports.
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.46 1.5-1.46H16.5V4.36C16.14 4.31 15.02 4.2 13.7 4.2c-2.75 0-4.63 1.68-4.63 4.76V10.5H6.5v3h2.57V21h4.43Z" />
    </svg>
  )
}

<<<<<<< HEAD
// Instagram Icon
function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle
        cx="16.9"
        cy="7.1"
        r="0.9"
        fill="currentColor"
        stroke="none"
      />
=======
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.9" cy="7.1" r="0.9" fill="currentColor" stroke="none" />
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
    </svg>
  )
}

<<<<<<< HEAD
// YouTube Icon
=======
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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

<<<<<<< HEAD
// Replace # with your actual social profile URLs when available.
=======
// TODO: replace with the real social page URLs
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
const socials = [
  { icon: FacebookIcon, href: '#', label: 'Facebook' },
  { icon: InstagramIcon, href: '#', label: 'Instagram' },
  { icon: YoutubeIcon, href: '#', label: 'YouTube' },
]

<<<<<<< HEAD
// Footer solutions list
const footerSolutions = [
  'EPR & Compliance Consulting',
  'SPCB / CPCB Liaisoning',
  'Waste Management & Approvals',
  'Recovered Oils & Carbon Materials',
  'Tyre Steel & Alternative Feedstocks',
]

=======
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
export default function Footer() {
  return (
    <footer className="relative z-0 overflow-hidden bg-teal text-white">

<<<<<<< HEAD
=======
      {/* Top padding just clears the HelpBanner card's overlap; the card's
          own negative margin already does most of the work. */}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-14 sm:pt-16 lg:px-8 lg:pt-20">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-12">

<<<<<<< HEAD
          {/* BRAND & CONTACT DETAILS */}
=======
          {/* =====================
              BRAND
          ====================== */}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
          <Reveal className="sm:col-span-2 lg:col-span-4">

            <img
              src={logo}
              alt="Jimkey Ecopower"
              className="h-12 w-auto brightness-0 invert"
            />

<<<<<<< HEAD
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/80">
              Pioneering Integrated Sustainability, Environmental
              Compliance, and Resource Recovery.
            </p>

            {/* Existing address, phone and email retained */}
=======
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
              {company.tagline}
            </p>

            {/* Address / phone / email */}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
            <div className="mt-6 space-y-4">

              <div className="flex gap-3">
                <span className="footer-icon">
                  <MapPin size={16} />
                </span>
<<<<<<< HEAD

                <p className="text-sm leading-6 text-white/80">
=======
                <p className="text-sm leading-6 text-white/55">
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                  {company.address}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="footer-icon">
                  <Phone size={16} />
                </span>
<<<<<<< HEAD

                <a
                  href={`tel:+${company.whatsapp}`}
                  className="footer-link text-sm text-white/90"
=======
                <a
                  href={`tel:+${company.whatsapp}`}
                  className="footer-link text-sm text-white/80"
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                >
                  {company.phone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="footer-icon">
                  <Mail size={16} />
                </span>
<<<<<<< HEAD

                <a
                  href={`mailto:${company.email}`}
                  className="footer-link text-sm text-white/90"
=======
                <a
                  href={`mailto:${company.email}`}
                  className="footer-link text-sm text-white/80"
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
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

<<<<<<< HEAD
          {/* QUICK LINKS */}
=======
          {/* =====================
              QUICK LINKS
          ====================== */}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
          <Reveal delay={80} className="lg:col-span-2">

            <h4 className="text-base font-bold text-white">
              Quick Links
            </h4>

<<<<<<< HEAD
            <ul className="mt-5 space-y-3 text-sm text-white/80">

              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/products?category=4" className="footer-link">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/products" className="footer-link">
                  Products
                </Link>
              </li>

              <li>
                <Link to="/contact" className="footer-link">
                  Contact Us
                </Link>
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              </li>

            </ul>

          </Reveal>

<<<<<<< HEAD
          {/* SOLUTIONS & COMPLIANCE */}
          <Reveal delay={140} className="lg:col-span-3">

            <h4 className="text-base font-bold text-white">
              Solutions &amp; Compliance
            </h4>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/80">

              {footerSolutions.map((solution) => (
                <li key={solution}>
                  <Link
                    to="/products"
                    className="footer-link"
                  >
                    {solution}
=======
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
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                  </Link>
                </li>
              ))}

            </ul>

          </Reveal>

<<<<<<< HEAD
          {/* CONTACT & WORKING HOURS */}
          <Reveal delay={200} className="lg:col-span-1">
=======
          {/* =====================
              CONTACT
          ====================== */}
          <Reveal delay={200} className="lg:col-span-2">
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3

            <h4 className="text-base font-bold text-white">
              Contact Us
            </h4>

<<<<<<< HEAD
            <div className="mt-5 space-y-2 text-sm leading-6 text-white/80">

              <p className="font-semibold text-white">
                Official Working Hours:
              </p>

              <p>
                Mon–Sat: 10 AM – 6 PM
              </p>

=======
            <div className="mt-5 space-y-2 text-sm leading-6 text-white/55">
              <p className="font-semibold text-white/80">Official Working Hours:</p>
              <p>Mon–Sat: 10 AM – 6 PM</p>
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
            </div>

          </Reveal>

<<<<<<< HEAD
          {/* SOCIAL MEDIA */}
=======
          {/* =====================
              CONNECT WITH US
          ====================== */}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
          <Reveal delay={260} className="lg:col-span-2">

            <h4 className="text-base font-bold text-white">
              Connect with us
            </h4>

            <div className="mt-5 flex items-center gap-3">
<<<<<<< HEAD

=======
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
<<<<<<< HEAD
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/90 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-teal-light hover:text-navy-deep"
=======
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-teal-light hover:text-navy-deep"
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
                >
                  <Icon size={18} />
                </a>
              ))}
<<<<<<< HEAD

=======
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
            </div>

          </Reveal>

        </div>

      </div>

<<<<<<< HEAD
      {/* BOTTOM BAR */}
      <div className="relative border-t border-white/15">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:text-left lg:px-8">

          <span className="text-xs text-white/75 sm:text-sm">
            © {new Date().getFullYear()} Jimkey Ecopower. All rights reserved.
          </span>

          <span className="font-mono text-xs uppercase tracking-widest text-white/70">
=======
      {/* =====================
          BOTTOM BAR
      ====================== */}
      <div className="relative border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:text-left lg:px-8">

          <span className="text-xs text-white/40 sm:text-sm">
            © {new Date().getFullYear()} Jimkey Ecopower. All rights reserved.
          </span>

          <span className="font-mono text-xs uppercase tracking-widest text-white/35">
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
            Mumbai, India
          </span>

        </div>

      </div>

    </footer>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 4aebd9073412c13c2625fb1cc85a74a9a49138a3
