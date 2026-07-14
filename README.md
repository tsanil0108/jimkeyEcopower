# Jimkey Ecopower — React Frontend

React + Vite + Tailwind CSS (v4) frontend for jimkey.in, built from the real
CodeIgniter site content (home, about, products, gallery, clients, contact,
login/register) and styled to match the live site's navy/teal brand, with
polish inspired by zerotrash.in and choudhary-group.com.

## What's included
- Home, About, Products (category/subcategory filter + detail page),
  Gallery, Clients, Contact
- Login / Register screens (UI only — kept off the main nav, same as the
  live site; ready to wire up once the backend API is ready)
- Real copy, addresses, phone/email, and product data pulled from the
  uploaded CodeIgniter backup + database
- Reusable Navbar (with the AFR / Steel Wire mega-dropdown), Footer, and a
  signature "Material Stream" flow diagram (Collect → Process → Recover →
  Reuse) tying the design back to the actual trading business

## Not included yet (next phase)
- Backend integration — forms currently just show a local success state
- Agent / MLM dashboard (Downline, Pair Matching, Partnership) — covered
  separately in the UI/UX design PDF; same design tokens can extend into it

## Getting started
```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
```

## Project structure
```
src/
  components/   Navbar, Footer, FloatingContact, MaterialStream, ui.jsx
  pages/        Home, About, Products, ProductDetail, Gallery, Clients,
                Contact, Login, Register
  data/         content.js — all real copy, products & categories
  assets/       logo, product photos, gallery photos, client logos
```

## Design system
- Colors: navy (#0C2846), teal (#159ED4), paper (#F6F8FA), steel (#566779)
- Type: Plus Jakarta Sans (display), Inter (body), IBM Plex Mono (labels)
- Products dropdown mirrors the live mega-menu: category list on the left,
  subcategory flyout on the right
