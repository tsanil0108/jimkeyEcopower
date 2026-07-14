import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Button, Reveal } from '../components/ui'

export default function Register() {
  return (
    <div className="grain-bg flex min-h-[calc(100vh-64px)] items-center justify-center bg-paper px-5 py-16">
      <Reveal className="w-full max-w-lg rounded-2xl border border-line bg-white p-8 shadow-[0_24px_60px_-24px_rgba(20,51,42,0.2)] sm:p-10">
        <img src={logo} alt="Jimkey Ecopower" className="mx-auto h-14 w-auto" />
        <h1 className="font-display mt-6 text-center text-2xl font-bold text-navy">Create an Account</h1>
        <p className="mt-2 text-center text-sm text-steel">Register as an agent to join the Jimkey network</p>

        <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required placeholder="Full Name *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
            <input required type="tel" maxLength={10} placeholder="Mobile Number *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
          </div>
          <input required type="email" placeholder="Email Address *" className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
          <input placeholder="Sponsor / Referral Code (optional)" className="w-full rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
          <div className="grid gap-4 sm:grid-cols-2">
            <input required type="password" placeholder="Password *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
            <input required type="password" placeholder="Confirm Password *" className="rounded-lg border border-line px-4 py-3 text-sm outline-none transition-colors focus:border-teal" />
          </div>
          <label className="flex items-start gap-2 text-sm text-steel">
            <input required type="checkbox" className="mt-1 accent-teal" />
            I agree to the terms & conditions and privacy policy
          </label>
          <Button as="button" variant="accent" className="w-full">Register</Button>
        </form>

        <p className="mt-6 text-center text-sm text-steel">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-teal-dark hover:underline">Login</Link>
        </p>
      </Reveal>
    </div>
  )
}
