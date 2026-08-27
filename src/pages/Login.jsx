import './Login.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Lock, Mail, AlertCircle } from 'lucide-react'
import logo from '../assets/logo.png'
import { Button, Reveal } from '../components/ui'
import { api, saveSession } from '../lib/api'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await api.login({ email: form.email, password: form.password })
      saveSession(res)
      if (res.role === 'ADMIN') {
        navigate('/admin')
      } else {
        navigate('/')
      }
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page grain-bg flex min-h-[calc(100vh-64px)] items-center justify-center bg-paper px-5 py-16">
      <Reveal className="w-full max-w-md rounded-2xl border border-line bg-white p-8 shadow-[0_24px_60px_-24px_rgba(20,51,42,0.2)] sm:p-10">
        <img src={logo} alt="Jimkey Ecopower" className="mx-auto h-14 w-auto" />
        <h1 className="font-display mt-6 text-center text-2xl font-bold text-navy">Agent / Admin Login</h1>
        <p className="mt-2 text-center text-sm text-steel">Sign in to access your dashboard</p>

        {error && (
          <div className="mt-6 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            <AlertCircle size={16} className="shrink-0" /> {error}
          </div>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 text-steel" size={18} />
            <input
              required
              type="email"
              value={form.email}
              onChange={update('email')}
              placeholder="Email or Username"
              className="w-full rounded-lg border border-line py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-teal"
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-3.5 text-steel" size={18} />
            <input
              required
              type="password"
              value={form.password}
              onChange={update('password')}
              placeholder="Password"
              className="w-full rounded-lg border border-line py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-teal"
            />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-steel">
              <input type="checkbox" className="accent-teal" /> Remember me
            </label>
            <a href="#" className="text-teal-dark hover:underline">Forgot password?</a>
          </div>
          <Button as="button" variant="accent" className="w-full" disabled={loading}>
            {loading ? 'Signing in…' : 'Login'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-steel">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-teal-dark hover:underline">Register</Link>
        </p>
      </Reveal>
    </div>
  )
}
