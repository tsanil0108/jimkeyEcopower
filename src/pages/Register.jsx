import './Register.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'
import logo from '../assets/logo.png'
import { Button, Reveal } from '../components/ui'
import { api, saveSession } from '../lib/api'

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', mobile: '', email: '', referralCode: '', password: '', confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      const res = await api.register({
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        password: form.password,
        referralCode: form.referralCode || undefined,
      })
      saveSession(res)
      navigate('/')
    } catch (err) {
      setError(err.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="register-page grain-bg flex min-h-[calc(100vh-64px)] items-center justify-center bg-paper px-5 py-16">
      <Reveal className="w-full max-w-lg rounded-2xl border border-line bg-white p-8 shadow-[0_24px_60px_-24px_rgba(20,51,42,0.2)] sm:p-10">
        <img src={logo} alt="Jimkey Ecopower" className="mx-auto h-14 w-auto" />
        <h1 className="font-display mt-6 text-center text-2xl font-bold text-navy">Create an Account</h1>
        <p className="mt-2 text-center text-sm text-steel">Register as an agent to join the Jimkey network</p>

        {error && (
          <div className="mt-6 flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
            <AlertCircle size={16} className="shrink-0" /> {error}
          </div>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required value={form.name} onChange={update('name')} placeholder="Full Name *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
            <input required type="tel" maxLength={10} value={form.mobile} onChange={update('mobile')} placeholder="Mobile Number *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
          </div>
          <input required type="email" value={form.email} onChange={update('email')} placeholder="Email Address *" className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
          <input value={form.referralCode} onChange={update('referralCode')} placeholder="Sponsor / Referral Code (optional)" className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input required type="password" value={form.password} onChange={update('password')} placeholder="Password *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
            <input required type="password" value={form.confirmPassword} onChange={update('confirmPassword')} placeholder="Confirm Password *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
          </div>
          <label className="flex items-start gap-2 text-sm text-steel">
            <input required type="checkbox" className="mt-1 accent-teal" />
            I agree to the terms & conditions and privacy policy
          </label>
          <Button as="button" variant="accent" className="w-full" disabled={loading}>
            {loading ? 'Creating account…' : 'Register'}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-steel">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-teal-dark hover:underline">Login</Link>
        </p>
      </Reveal>
    </div>
  )
}
