import { Link } from 'react-router-dom'
import { Lock, Mail } from 'lucide-react'
import logo from '../assets/logo.png'
import { Button, Reveal } from '../components/ui'

export default function Login() {
  return (
    <div className="grain-bg flex min-h-[calc(100vh-64px)] items-center justify-center bg-paper px-5 py-16">
      <Reveal className="w-full max-w-md rounded-2xl border border-line bg-white p-8 shadow-[0_24px_60px_-24px_rgba(20,51,42,0.2)] sm:p-10">
        <img src={logo} alt="Jimkey Ecopower" className="mx-auto h-14 w-auto" />
        <h1 className="font-display mt-6 text-center text-2xl font-bold text-navy">Agent / Admin Login</h1>
        <p className="mt-2 text-center text-sm text-steel">Sign in to access your dashboard</p>

        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <Mail className="absolute left-3.5 top-3.5 text-steel" size={18} />
            <input required type="email" placeholder="Email or Username" className="w-full rounded-lg border border-line py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-teal" />
          </div>
          <div className="relative">
            <Lock className="absolute left-3.5 top-3.5 text-steel" size={18} />
            <input required type="password" placeholder="Password" className="w-full rounded-lg border border-line py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-teal" />
          </div>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-steel">
              <input type="checkbox" className="accent-teal" /> Remember me
            </label>
            <a href="#" className="text-teal-dark hover:underline">Forgot password?</a>
          </div>
          <Button as="button" variant="accent" className="w-full">Login</Button>
        </form>

        <p className="mt-6 text-center text-sm text-steel">
          Don't have an account?{' '}
          <Link to="/register" className="font-semibold text-teal-dark hover:underline">Register</Link>
        </p>
      </Reveal>
    </div>
  )
}
