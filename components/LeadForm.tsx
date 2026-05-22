'use client'

import { useState } from 'react'

interface LeadFormProps {
  formType?: 'guide' | 'zoom' | 'zoom_register' | 'contact'
  title?: string
  subtitle?: string
  ctaLabel?: string
  showPhone?: boolean
  darkMode?: boolean
}

export default function LeadForm({
  formType = 'guide',
  title = 'Get Your Free Home Buyer Guide',
  subtitle = 'Delivered instantly to your inbox. No spam, no pressure.',
  ctaLabel = 'Send My Free Guide →',
  showPhone = false,
  darkMode = false,
}: LeadFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setError('')

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, form_type: formType }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Something went wrong. Please try again or email trey.garza@homefinishline.com directly.')
    }
  }

  const inputClass = `w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-colors border ${
    darkMode
      ? 'bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-gold-light focus:bg-white/15'
      : 'bg-cream border-[color:var(--border)] text-[color:var(--text)] placeholder-[color:var(--text-muted)] focus:border-navy focus:bg-white'
  }`

  const labelClass = `block text-xs font-semibold uppercase tracking-wide mb-1.5 ${
    darkMode ? 'text-white/70' : 'text-navy'
  }`

  if (status === 'success') {
    return (
      <div className={`rounded-xl p-6 text-center ${darkMode ? 'bg-white/10 border border-white/20' : 'bg-cream border border-[color:var(--border)]'}`}>
        <div className="text-3xl mb-3">🎉</div>
        <div className={`font-playfair text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-navy'}`}>
          You&apos;re all set!
        </div>
        <p className={`text-sm ${darkMode ? 'text-white/70' : 'text-[color:var(--text-muted)]'}`}>
          Check your inbox, your guide is on the way. If you have questions in the meantime, reach out at{' '}
          <a href="mailto:trey.garza@homefinishline.com" className="text-gold-dark underline">
            trey.garza@homefinishline.com
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      {(title || subtitle) && (
        <div className="mb-1">
          {title && (
            <div className={`font-playfair text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-navy'}`}>
              {title}
            </div>
          )}
          {subtitle && (
            <p className={`text-xs ${darkMode ? 'text-white/65' : 'text-[color:var(--text-muted)]'}`}>{subtitle}</p>
          )}
        </div>
      )}

      <div>
        <label className={labelClass}>First Name</label>
        <input
          type="text"
          className={inputClass}
          placeholder="Your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label className={labelClass}>Email Address</label>
        <input
          type="email"
          className={inputClass}
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {showPhone && (
        <div>
          <label className={labelClass}>Phone Number</label>
          <input
            type="tel"
            className={inputClass}
            placeholder="(210) 555-0000"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      )}

      {error && (
        <p className="text-red-400 text-xs bg-red-900/20 border border-red-400/20 rounded-lg px-3 py-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-gold-dark text-white font-semibold text-sm py-3 px-6 rounded-lg transition-all hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed mt-1"
      >
        {status === 'loading' ? 'Sending...' : ctaLabel}
      </button>

      <p className={`text-[10px] text-center ${darkMode ? 'text-white/40' : 'text-[color:var(--text-muted)]'}`}>
        No spam. Unsubscribe any time.
      </p>
    </form>
  )
}
