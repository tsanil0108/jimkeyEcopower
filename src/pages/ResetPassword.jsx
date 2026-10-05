import { useState } from 'react'

import {
  Link,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'

import {
  Lock,
  Eye,
  EyeOff,
  AlertCircle,
  CheckCircle2,
} from 'lucide-react'

import logo from '../assets/logo.png'

import {
  Button,
  Reveal,
} from '../components/ui'

import { api } from '../lib/api'

export default function ResetPassword() {
  const navigate =
    useNavigate()

  const [searchParams] =
    useSearchParams()

  const token =
    searchParams.get('token') || ''

  const [password, setPassword] =
    useState('')

  const [
    confirmPassword,
    setConfirmPassword,
  ] = useState('')

  const [
    showPassword,
    setShowPassword,
  ] = useState(false)

  const [error, setError] =
    useState('')

  const [success, setSuccess] =
    useState(false)

  const [loading, setLoading] =
    useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    setError('')

    if (!token) {
      setError(
        'Password reset link is invalid.'
      )

      return
    }

    if (password.length < 8) {
      setError(
        'Password must be at least 8 characters.'
      )

      return
    }

    if (
      password !==
      confirmPassword
    ) {
      setError(
        'Passwords do not match.'
      )

      return
    }

    setLoading(true)

    try {

      await api.resetPassword({
        token,
        password,
      })

      setSuccess(true)

      setTimeout(() => {
        navigate('/login')
      }, 2000)

    } catch (err) {

      setError(
        err.message ||
          'Unable to reset password.'
      )

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grain-bg flex min-h-[calc(100svh-72px)] items-center justify-center bg-paper px-5 py-12">

      <Reveal className="w-full max-w-md rounded-2xl border border-line bg-white p-6 shadow-[0_24px_60px_-24px_rgba(20,51,42,0.2)] sm:p-10">

        <img
          src={logo}
          alt="Jimkey Ecopower"
          className="mx-auto h-14 w-auto"
        />

        <h1 className="font-display mt-6 text-center text-2xl font-bold text-navy">
          Create New Password
        </h1>

        <p className="mt-2 text-center text-sm text-steel">
          Choose a new password for your account.
        </p>

        {error && (
          <div className="mt-6 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">

            <AlertCircle
              size={17}
              className="mt-0.5 shrink-0"
            />

            {error}

          </div>
        )}

        {success ? (
          <div className="mt-7">

            <div className="flex items-start gap-3 rounded-xl border border-teal/30 bg-teal/10 p-5 text-sm text-teal-dark">

              <CheckCircle2
                size={20}
                className="shrink-0"
              />

              <div>
                <p className="font-semibold">
                  Password changed successfully
                </p>

                <p className="mt-1">
                  Redirecting you to login…
                </p>
              </div>

            </div>

            <Link
              to="/login"
              className="mt-6 block text-center text-sm font-semibold text-teal-dark hover:underline"
            >
              Login Now
            </Link>

          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-4"
          >

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-steel"
              />

              <input
                required
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
                placeholder="New Password"
                className="w-full rounded-lg border border-line py-3 pl-11 pr-12 text-sm outline-none focus:border-teal"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    (v) => !v
                  )
                }
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-steel hover:text-navy"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

            <div className="relative">

              <Lock
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-steel"
              />

              <input
                required
                type={
                  showPassword
                    ? 'text'
                    : 'password'
                }
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(
                    e.target.value
                  )
                }
                placeholder="Confirm New Password"
                className="w-full rounded-lg border border-line py-3 pl-11 pr-4 text-sm outline-none focus:border-teal"
              />

            </div>

            <Button
              as="button"
              variant="accent"
              className="w-full"
              disabled={loading}
            >
              {loading
                ? 'Updating…'
                : 'Reset Password'}
            </Button>

          </form>
        )}

      </Reveal>

    </div>
  )
}