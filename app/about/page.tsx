import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'About Trey Garza | VA Loan Specialist San Antonio TX',
  description: 'Trey Garza is a Licensed Texas Loan Officer and VA Loan Specialist at Efinity Mortgage in San Antonio, TX. NMLS# 2700813. Serving veterans, self-employed borrowers, and first-time buyers.',
  keywords: ['Trey Garza loan officer', 'Efinity Mortgage San Antonio', 'VA loan specialist San Antonio', 'mortgage officer NMLS 2700813'],
  openGraph: {
    title: 'About Trey Garza | VA Loan Specialist San Antonio TX',
    description: 'Licensed Texas Loan Officer. NMLS# 2700813. Efinity Mortgage, San Antonio TX.',
    url: 'https://homefinishline.com/about',
  },
  alternates: { canonical: 'https://homefinishline.com/about' },
}

const credentials = [
  { label: 'License', value: 'Texas Licensed Mortgage Loan Officer' },
  { label: 'NMLS#', value: '2700813' },
  { label: 'Company', value: 'Efinity Mortgage (NMLS# 1043983)' },
  { label: 'Location', value: 'San Antonio, TX' },
  { label: 'Specialties', value: 'VA Loans · Self-Employed · First-Time Buyers' },
  { label: 'Programs', value: 'FHA · VA · USDA · Conventional · DPA' },
]

const values = [
  {
    icon: '★',
    title: 'Veterans First',
    desc: "San Antonio is a military city, and the VA loan is the most powerful home buying benefit in existence. I make sure every veteran I work with knows exactly how to use it — and doesn't leave anything on the table.",
  },
  {
    icon: '✦',
    title: 'Straight Talk, Always',
    desc: "I'll tell you what you qualify for honestly, even if that means waiting a few months to improve your position. No false promises, no pressure to close before you're ready.",
  },
  {
    icon: '◎',
    title: 'The Whole Picture',
    desc: "Mortgage isn't just a transaction — it's usually the biggest financial decision you'll make. I take time to explain every option, every trade-off, and what makes sense for your specific situation.",
  },
  {
    icon: '⟳',
    title: 'Fast, Responsive',
    desc: "I answer my emails and calls. When you submit a document request, I respond within hours, not days. I know how stressful the process can feel, and clear communication is how I take the stress out of it.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white py-16 px-8"
        style={{ backgroundImage: 'url("/images/about-hero.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(10, 22, 40, 0.68)' }} />
        <div className="relative max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[1fr_280px] gap-10 items-center">
            <div>
              <div className="hero-badge">Licensed Texas Loan Officer · NMLS# 2700813</div>
              <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
                Hi, I&apos;m Trey Garza
              </h1>
              <p className="text-white/80 text-base leading-relaxed mb-6">
                I&apos;m a Licensed Mortgage Loan Officer at Efinity Mortgage in San Antonio, Texas, specializing in VA loans for our veteran community and helping self-employed borrowers and first-time buyers get to the closing table.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://calendly.com/trey-garza-efinitymortgage/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Book a Call →
                </a>
                <a
                  href="https://treygarza.floify.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-white"
                >
                  Start Pre-Approval
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <img
                  src="/images/headshot.png"
                  alt="Trey Garza"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/30"
                />
              </div>
              <div className="bg-white/10 border border-white/20 rounded-xl p-6">
                {credentials.map(({ label, value }) => (
                  <div key={label} className="flex justify-between py-2.5 border-b border-white/10 last:border-0 text-sm">
                    <span className="text-white/60">{label}</span>
                    <span className="font-semibold text-white text-right">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <TrustBar />

      {/* STORY */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label">My Story</div>
              <h2 className="section-title">Why I Specialize in VA Loans</h2>
              <div className="flex flex-col gap-4 text-sm text-[color:var(--text-mid)] leading-relaxed">
                <p>
                  San Antonio is one of the most military-connected cities in the country. Joint Base San Antonio, Fort Sam Houston, Lackland AFB, Randolph AFB — the military presence here is significant, and so is the veteran community that&apos;s built roots in this city.
                </p>
                <p>
                  What I see regularly: veterans who have earned one of the best financial benefits available — the VA home loan — and don&apos;t fully understand what they have. No down payment. No monthly mortgage insurance. Competitive rates. No loan limits for most buyers with full entitlement. It&apos;s genuinely the best loan program in existence.
                </p>
                <p>
                  My mission with every veteran client is simple: make sure they walk away knowing every advantage they have, understand how to use it, and close on a home that sets them up for long-term financial success.
                </p>
                <p>
                  Beyond VA loans, I work regularly with self-employed borrowers and first-time buyers. The mortgage process has a reputation for being confusing and stressful. My job is to change that experience — clear communication, honest answers, no runaround.
                </p>
                <p>
                  I also work with professionals and move-up buyers across San Antonio, from physicians and residents financing their first home to homeowners ready to trade up to their next one.
                </p>
              </div>
            </div>

            <div>
              <div className="section-label">What I Do Differently</div>
              <div className="flex flex-col gap-4">
                {values.map((v) => (
                  <div key={v.title} className="bg-white border border-[color:var(--border)] rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-gold-light text-sm flex-shrink-0">
                        {v.icon}
                      </div>
                      <div>
                        <div className="font-semibold text-navy text-sm mb-1">{v.title}</div>
                        <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO I HELP */}
      <section className="py-16 bg-white border-t border-b border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Who I Help</div>
          <h2 className="section-title">My Three Core Audiences</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                bg: '#FBF3E2',
                color: '#7A5A0F',
                title: 'Veterans & Active-Duty Military',
                desc: "If you've served or are currently serving, the VA loan is almost certainly your best option. I specialize in helping San Antonio's veteran community navigate the benefit they've earned.",
                link: '/va-loans',
                cta: 'VA Loan Details',
              },
              {
                bg: '#EBF0F8',
                color: '#0D2240',
                title: 'Self-Employed Borrowers',
                desc: 'Business owners, 1099 contractors, freelancers — bank statement loan programs use your actual cash flow, not your write-offs. Your income is real, your qualification should be too.',
                link: '/self-employed',
                cta: 'Self-Employed Options',
              },
              {
                bg: '#EBF5EF',
                color: '#2A7A4B',
                title: 'First-Time Home Buyers',
                desc: "If you're buying for the first time, you don't know what you don't know. I walk you through every step, every option, and every tool — so nothing catches you off guard.",
                link: '/first-time-buyers',
                cta: 'First-Time Buyer Resources',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl p-6 flex flex-col" style={{ background: item.bg }}>
                <h3 className="font-playfair text-base font-bold mb-2" style={{ color: item.color }}>{item.title}</h3>
                <p className="text-sm text-[color:var(--text-mid)] leading-relaxed flex-1 mb-4">{item.desc}</p>
                <Link
                  href={item.link}
                  className="text-sm font-semibold no-underline transition-colors"
                  style={{ color: item.color }}
                >
                  {item.cta} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Connect</div>
          <h2 className="section-title">Follow Along</h2>
          <p className="section-sub">I share mortgage tips, San Antonio real estate insights, and homebuying guides across social media.</p>
          <div className="flex gap-3 flex-wrap">
            {[
              { href: 'https://www.instagram.com/mortgageguytrey/', label: 'Instagram @mortgageguytrey' },
              { href: 'https://www.facebook.com/profile.php?id=61578618664880', label: 'Facebook' },
              { href: 'https://www.tiktok.com/@mortgage.guy.trey', label: 'TikTok @mortgage.guy.trey' },
              { href: 'https://youtube.com/@mortgageguytrey', label: 'YouTube @mortgageguytrey' },
              { href: 'https://www.facebook.com/share/g/15cqQTdjeNu/', label: 'Facebook Group' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-[color:var(--border)] rounded-lg px-4 py-2.5 text-sm font-medium text-navy no-underline hover:border-navy hover:shadow-sm transition-all"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[color:var(--border)] bg-cream-dark">
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-navy mb-1.5">
              Ready to Talk?
            </h2>
            <p className="text-sm text-[color:var(--text-muted)] max-w-md">
              Book a free 30-minute call. No obligation, just an honest conversation about where you stand and what your options are.
            </p>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <a
              href="https://calendly.com/trey-garza-efinitymortgage/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy"
            >
              Book a Free Call →
            </a>
            <Link href="/contact" className="btn-outline-navy">
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
