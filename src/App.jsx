
import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HelpBanner from './components/HelpBanner'
import FloatingContact from './components/FloatingContact'

import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import Gallery from './pages/Gallery'
import Clients from './pages/Clients'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import AdminDashboard from './pages/AdminDashboard'
import ForgotPassword from './pages/ForgotPassword'


// Automatically scroll to top whenever route changes
function ScrollToTop() {
  const { pathname, search } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    })
  }, [pathname, search])

  return null
}


export default function App() {
  return (
    <div className="app-shell">

      {/* Global Scroll Reset */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      <main className="app-main">

        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Solutions */}
          <Route path="/solutions" element={<Products />} />

          {/* Existing Products URL support */}
          <Route path="/products" element={<Products />} />

          {/* Product Details */}
          <Route path="/products/:id" element={<ProductDetail />} />

          {/* Gallery & Media */}
          <Route path="/gallery" element={<Gallery />} />

          {/* Clients */}
          <Route path="/clients" element={<Clients />} />

          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Authentication */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          {/* Admin */}
          <Route path="/admin" element={<AdminDashboard />} />

        </Routes>

      </main>

      {/* Common Sections */}
      <HelpBanner />

      <Footer />

      <FloatingContact />

    </div>
  )
}
