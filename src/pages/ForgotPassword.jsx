import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft } from 'lucide-react'
import { api } from '../lib/api'
import './ForgotPassword.css'

export default function ForgotPassword(){
  const [email,setEmail]=useState('')
  const [message,setMessage]=useState('')
  const [error,setError]=useState('')
  const [loading,setLoading]=useState(false)
  async function submit(e){e.preventDefault();setError('');setMessage('');setLoading(true);try{await api.forgotPassword?.(email);setMessage('If this email is registered, password reset instructions have been sent.')}catch(err){setError(err.message||'Could not process request.')}finally{setLoading(false)}}
  return <div className="forgot-password-page flex items-center justify-center px-5 py-16"><div className="auth-card w-full max-w-md p-7 sm:p-9"><Link to="/login" className="inline-flex items-center gap-2 text-sm font-semibold text-teal-dark"><ArrowLeft size={15}/>Back to login</Link><h1 className="font-display mt-6 text-3xl font-bold text-navy">Forgot password?</h1><p className="mt-2 text-sm leading-6 text-steel">Enter your registered email address to receive reset instructions.</p><form onSubmit={submit} className="mt-7 space-y-4"><div className="relative"><Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-steel"/><input type="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-xl border border-line bg-white py-3.5 pl-10 pr-4 outline-none focus:border-teal"/></div>{error&&<p className="text-sm text-red-600">{error}</p>}{message&&<p className="text-sm text-teal-dark">{message}</p>}<button disabled={loading} className="w-full rounded-xl bg-teal px-5 py-3.5 font-semibold text-white transition hover:bg-teal-dark disabled:opacity-60">{loading?'Sending…':'Send reset link'}</button></form></div></div>
}