import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Trey Garza | VA Loan Specialist San Antonio TX',
  description: 'Contact Trey Garza, Licensed Texas Loan Officer at Efinity Mortgage. Book a call, start a pre-approval, or send a message. NMLS# 2700813, San Antonio TX.',
  keywords: ['contact Trey Garza mortgage', 'VA loan officer San Antonio contact', 'mortgage San Antonio TX'],
  openGraph: {
    title: 'Contact Trey Garza | VA Loan Specialist San Antonio TX',
    description: 'Book a call or send a message to Trey Garza, your San Antonio mortgage specialist.',
    url: 'https://homefinishline.com/contact',
  },
  alternates: { canonical: 'https://homefinishline.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white text-center py-14 px-8"
        style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 60%, #1e4d7a 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="hero-badge">San Antonio · Texas</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            Let&apos;s Talk
          </h1>
          <p className="text-white/80 text-base max-w-lg mx-auto leading-relaxed">
            Whether you&apos;re ready to start the process or just have questions, reach out. I respond personally within a few hours on business days.
          </p>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_300px] gap-10">
            {/* Contact options */}
            <div>
              <div className="section-label">Get in Touch</div>
              <h2 className="section-title">Choose Your Path</h2>

              <div className="flex flex-col gap-4 mb-10">
                <a
                  href="https://calendly.com/trey-garza-efinitymortgage/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-navy rounded-xl p-5 no-underline group hover:bg-navy-mid transition-colors"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-gold-light text-xl flex-shrink-0">
                    📅
                  </div>
                  <div className="flex-1">
                    <div className="font-playfair font-bold text-white text-base">Book a Free 30-Min Call</div>
                    <div className="text-xs text-white/60 mt-0.5">Schedule directly on Calendly — pick a time that works for you</div>
                  </div>
                  <span className="text-white/60 group-hover:text-white transition-colors">→</span>
                </a>

                <a
                  href="https://treygarza.floify.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white border border-[color:var(--border)] rounded-xl p-5 no-underline group hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-navy text-xl flex-shrink-0">
                    📋
                  </div>
                  <div className="flex-1">
                    <div className="font-playfair font-bold text-navy text-base">Start Your Pre-Approval</div>
                    <div className="text-xs text-[color:var(--text-muted)] mt-0.5">Apply online through our secure portal — takes about 10 minutes</div>
                  </div>
                  <span className="text-[color:var(--text-muted)] group-hover:text-navy transition-colors">→</span>
                </a>

                <a
                  href="mailto:trey.garza@homefinishline.com"
                  className="flex items-center gap-4 bg-white border border-[color:var(--border)] rounded-xl p-5 no-underline group hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center text-navy text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div className="flex-1">
                    <div className="font-playfair font-bold text-navy text-base">Email Directly</div>
                    <div className="text-xs text-[color:var(--text-muted)] mt-0.5">trey.garza@homefinishline.com — I respond personally</div>
                  </div>
                  <span className="text-[color:var(--text-muted)] group-hover:text-navy transition-colors">→</span>
                </a>
              </div>

              <div className="section-label">Send a Message</div>
              <h3 className="font-playfair text-xl font-bold text-navy mb-5">Or Fill Out the Form</h3>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="sticky top-28 flex flex-col gap-5">
              <div className="bg-white border border-[color:var(--border)] rounded-xl p-6">
                <div className="section-label mb-3">Contact Info</div>
                <div className="flex flex-col gap-3">
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-0.5">Email</div>
                    <a href="mailto:trey.garza@homefinishline.com" className="text-sm text-[color:var(--text-mid)] no-underline hover:text-navy transition-colors">trey.garza@homefinishline.com</a>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-0.5">Location</div>
                    <div className="text-sm text-[color:var(--text-muted)]">San Antonio, Texas</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-0.5">Company</div>
                    <div className="text-sm text-[color:var(--text-muted)]">Efinity Mortgage<br />NMLS# 1043983</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-navy uppercase tracking-wide mb-0.5">License</div>
                    <div className="text-sm text-[color:var(--text-muted)]">NMLS# 2700813<br />Texas Licensed Loan Officer</div>
                  </div>
                </div>
              </div>

              <div className="bg-cream border border-[color:var(--border)] rounded-xl p-5">
                <div className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-3">Response Time</div>
                <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">
                  I typically respond to emails and form submissions within a few hours on business days. For fastest response, book a call directly on Calendly.
                </p>
              </div>

              <div className="bg-white border border-[color:var(--border)] rounded-xl p-5">
                <div className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-3">Follow Trey</div>
                <div className="flex flex-col gap-2">
                  {[
                    { href: 'https://www.instagram.com/mortgageguytrey/', label: 'Instagram' },
                    { href: 'https://www.facebook.com/profile.php?id=61578618664880', label: 'Facebook' },
                    { href: 'https://www.tiktok.com/@mortgage.guy.trey', label: 'TikTok' },
                    { href: 'https://youtube.com/@mortgageguytrey', label: 'YouTube' },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[color:var(--text-muted)] no-underline hover:text-navy transition-colors">
                      → {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
