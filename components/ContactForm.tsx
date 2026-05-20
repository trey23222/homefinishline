'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, form_type: 'contact' }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full px-3 py-2.5 border border-[color:var(--border)] rounded-lg text-sm bg-cream text-[color:var(--text)] outline-none transition-colors focus:border-navy focus:bg-white'

  if (status === 'success') {
    return (
      <div className="bg-[#EBF5EF] border border-[#2A7A4B]/20 rounded-xl p-6 text-center">
        <div className="text-2xl mb-2">✓</div>
        <div className="font-playfair font-bold text-navy text-base mb-1">Message received!</div>
        <p className="text-sm text-[color:var(--text-muted)]">I&apos;ll be in touch within a few hours on business days.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-navy mb-1.5">Name *</label>
          <input
            type="text"
            className={inputClass}
            placeholder="Your name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            required
          />
        </div>
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wide text-navy mb-1.5">Email *</label>
          <input
            type="email"
            className={inputClass}
            placeholder="you@email.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-navy mb-1.5">Phone</label>
        <input
          type="tel"
          className={inputClass}
          placeholder="(210) 555-0000"
          value={form.phone}
          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wide text-navy mb-1.5">Message *</label>
        <textarea
          className={`${inputClass} min-h-[120px] resize-y`}
          placeholder="What's on your mind? I'll get back to you personally."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          required
        />
      </div>
      {status === 'error' && (
        <p className="text-red-600 text-xs bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          Something went wrong. Please email trey.garza@homefinishline.com directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-navy disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}
