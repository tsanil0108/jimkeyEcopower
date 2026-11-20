import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import {
  Menu,
  X,
  ChevronDown,
  Phone,
  ArrowUpRight,
} from 'lucide-react'

import logo from '../assets/logo.png'
import { company } from '../data/content'

const navLink = ({ isActive }) =>
  `relative whitespace-nowrap text-[13px] font-semibold tracking-wide transition-colors
   hover:text-teal-dark
   ${
     isActive
       ? 'text-teal-dark'
       : 'text-navy'
   }`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }

    onScroll()

    window.addEventListener('scroll', onScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => {
    setOpen(false)
    setSolutionsOpen(false)
  }

  return (
    <header
      className={`
        fixed inset-x-0 top-0 z-[9999]
        w-full border-b bg-paper/95 backdrop-blur-xl
        transition-shadow duration-300
        ${
          scrolled
            ? 'border-line shadow-[0_5px_24px_rgba(20,51,42,0.10)]'
            : 'border-transparent'
        }
      `}
    >

      {/* HEADER */}
      <div className="
        mx-auto flex h-[72px] w-full max-w-7xl
        items-center justify-between gap-3 px-4
        sm:h-[76px] sm:px-5
        lg:h-[80px] lg:px-8
      ">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex min-w-0 shrink-0 items-center"
        >
          <img
            src={logo}
            alt="Jimkey Ecopower"
            className="
              h-[46px] w-auto max-w-[205px] object-contain
              min-[380px]:max-w-[230px]
              sm:h-[50px] sm:max-w-[260px]
              lg:h-[54px] lg:max-w-none
            "
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="
          hidden min-w-0 items-center gap-4
          lg:flex xl:gap-6
        ">

          <NavLink to="/" className={navLink} end>
            Home
          </NavLink>

          {/* SOLUTIONS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >

            <button
              type="button"
              className="
                flex items-center gap-1
                text-[13px] font-semibold tracking-wide
                text-navy transition-colors
                hover:text-teal-dark
              "
              onClick={() =>
                setSolutionsOpen((value) => !value)
              }
            >
              Solutions

              <ChevronDown
                size={14}
                className={`transition-transform ${
                  solutionsOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* DROPDOWN */}
            <div
              className={`
                absolute left-1/2 top-full
                w-[240px] -translate-x-1/2 pt-4
                transition-all duration-200
                ${
                  solutionsOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                }
              `}
            >

              <div className="
                overflow-hidden rounded-2xl
                border border-line bg-white
                shadow-[0_24px_60px_-20px_rgba(20,51,42,0.25)]
              ">

                <Link
                  to="/services"
                  onClick={() => setSolutionsOpen(false)}
                  className="
                    group flex items-center justify-between
                    px-5 py-4 text-sm font-semibold
                    text-navy transition-colors
                    hover:bg-paper hover:text-teal-dark
                  "
                >
                  Services

                  <ArrowUpRight
                    size={15}
                    className="text-teal opacity-0 group-hover:opacity-100"
                  />
                </Link>

                <div className="h-px bg-line" />

                <Link
                  to="/products"
                  onClick={() => setSolutionsOpen(false)}
                  className="
                    group flex items-center justify-between
                    px-5 py-4 text-sm font-semibold
                    text-navy transition-colors
                    hover:bg-paper hover:text-teal-dark
                  "
                >
                  Products

                  <ArrowUpRight
                    size={15}
                    className="text-teal opacity-0 group-hover:opacity-100"
                  />
                </Link>

              </div>
            </div>
          </div>

          <NavLink to="/gallery" className={navLink}>
            Gallery/Media
          </NavLink>

          <NavLink to="/clients" className={navLink}>
            Clients
          </NavLink>

          <NavLink to="/blog" className={navLink}>
            Blog
          </NavLink>

          <NavLink to="/contact" className={navLink}>
            Contact Us
          </NavLink>

        </nav>

        {/* DESKTOP RIGHT */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">

          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2 font-mono text-[11px] font-semibold text-navy"
          >
            <span className="
              flex h-8 w-8 items-center justify-center
              rounded-full bg-teal/10 text-teal-dark
            ">
              <Phone size={14} />
            </span>

            <span className="hidden xl:inline">
              {company.phone}
            </span>
          </a>

          <Link
            to="/contact"
            className="
              whitespace-nowrap rounded-full
              bg-teal px-4 py-2.5
              text-[13px] font-semibold text-white
              transition-all hover:-translate-y-0.5
              hover:bg-teal-dark hover:shadow-lg
            "
          >
            Get a Quote
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="
            flex h-10 w-10 shrink-0 items-center
            justify-center rounded-full text-navy
            hover:bg-navy/5 lg:hidden
          "
        >
          {open ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          border-t border-line bg-paper
          transition-all duration-300 lg:hidden
          ${
            open
              ? 'max-h-[calc(100svh-72px)] opacity-100'
              : 'max-h-0 overflow-hidden opacity-0'
          }
        `}
      >

        <div className="
          max-h-[calc(100svh-72px)]
          overflow-y-auto px-4 py-4
        ">

          <div className="flex flex-col gap-1">

            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) => `
                rounded-xl px-4 py-3 text-[15px] font-semibold
                ${
                  isActive
                    ? 'bg-teal/10 text-teal-dark'
                    : 'text-navy hover:bg-white'
                }
              `}
            >
              Home
            </NavLink>

            {/* MOBILE SOLUTIONS */}
            <div>

              <button
                type="button"
                onClick={() =>
                  setSolutionsOpen((value) => !value)
                }
                className="
                  flex w-full items-center justify-between
                  rounded-xl px-4 py-3
                  text-[15px] font-semibold text-navy
                  hover:bg-white
                "
              >
                Solutions

                <ChevronDown
                  size={17}
                  className={`transition-transform ${
                    solutionsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {solutionsOpen && (

                <div className="
                  ml-4 mt-1 flex flex-col gap-1
                  border-l-2 border-teal/20 pl-3
                ">

                  <Link
                    to="/services"
                    onClick={closeMenu}
                    className="
                      rounded-lg px-4 py-3
                      text-sm font-medium text-steel
                      hover:bg-white hover:text-teal-dark
                    "
                  >
                    Services
                  </Link>

                  <Link
                    to="/products"
                    onClick={closeMenu}
                    className="
                      rounded-lg px-4 py-3
                      text-sm font-medium text-steel
                      hover:bg-white hover:text-teal-dark
                    "
                  >
                    Products
                  </Link>

                </div>
              )}

            </div>

            {[
              ['Gallery/Media', '/gallery'],
              ['Clients', '/clients'],
              ['Blog', '/blog'],
              ['Contact Us', '/contact'],
            ].map(([label, to]) => (

              <NavLink
                key={to}
                to={to}
                onClick={closeMenu}
                className={({ isActive }) => `
                  rounded-xl px-4 py-3
                  text-[15px] font-semibold
                  ${
                    isActive
                      ? 'bg-teal/10 text-teal-dark'
                      : 'text-navy hover:bg-white'
                  }
                `}
              >
                {label}
              </NavLink>

            ))}

            {/* PHONE */}
            <a
              href={`tel:${company.phone}`}
              className="
                mt-3 flex items-center justify-center
                gap-2 rounded-full bg-navy
                px-5 py-3 text-sm font-semibold text-white
              "
            >
              <Phone size={15} />
              {company.phone}
            </a>

            {/* QUOTE */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="
                mt-2 flex items-center justify-center
                rounded-full bg-teal px-5 py-3
                text-sm font-semibold text-white
              "
            >
              Get a Quote
            </Link>

          </div>
        </div>
      </div>

    </header>
  )
}