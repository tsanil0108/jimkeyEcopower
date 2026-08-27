import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingContact from './components/FloatingContact'

import Home from './pages/Home'
import About from './pages/About'
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

export default function App() {
  return (
    <div className="app-shell">

      <Navbar />

      {/*
        Navbar fixed hai.

        Mobile: 72px
        Small: 76px
        Desktop: 80px
      */}
      <main className="app-main">

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/products/:id"
            element={<ProductDetail />}
          />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/clients"
            element={<Clients />}
          />

          <Route
            path="/blog"
            element={<Blog />}
          />

          <Route
            path="/blog/:id"
            element={<BlogPost />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route path="/forgot-password" element={<ForgotPassword />} />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="/admin"
            element={<AdminDashboard />}
          />
        </Routes>

      </main>

      <Footer />

      <FloatingContact />

    </div>
  )
}