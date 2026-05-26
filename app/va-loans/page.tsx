import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'VA Loans San Antonio TX | VA Loan Specialist | Trey Garza',
  description: 'Expert VA loan guidance in San Antonio, Texas. $0 down, no PMI, no loan limits. Trey Garza, VA Loan Specialist at Efinity Mortgage. NMLS# 2700813. Serving all San Antonio veterans.',
  keywords: ['VA loans San Antonio', 'VA loan specialist San Antonio TX', 'VA home loan Texas', 'veterans home loan San Antonio', '$0 down mortgage San Antonio'],
  openGraph: {
    title: 'VA Loans San Antonio TX | Trey Garza VA Loan Specialist',
    description: '$0 down, no PMI, no loan limits. Expert VA loan guidance in San Antonio, TX.',
    url: 'https://homefinishline.com/va-loans',
  },
  alternates: { canonical: 'https://homefinishline.com/va-loans' },
}

const eligibilityGroups = [
  { title: 'Active-Duty Service Members', desc: '90+ consecutive days of active service' },
  { title: 'Veterans', desc: 'Honorably discharged after minimum service period' },
  { title: 'National Guard / Reserve', desc: '6+ years service, or 90 days active duty under Title 10' },
  { title: 'Surviving Spouses', desc: 'Unremarried surviving spouses of veterans who died in service or from service-connected disability' },
]

const benefits = [
  { stat: '$0', label: 'Down Payment', desc: 'Buy with zero money down. No savings required for the down payment.' },
  { stat: 'No PMI', label: 'No Monthly Insurance', desc: 'No monthly mortgage insurance ever. Saves $150–400/month vs FHA.' },
  { stat: '2.15%', label: 'One-Time Funding Fee', desc: 'First-use fee rolled into the loan. Waived for disability-rated veterans.' },
  { stat: 'None', label: 'No Loan Limits', desc: 'Full entitlement means no cap on purchase price for qualified buyers.' },
  { stat: 'Low', label: 'Competitive Rates', desc: 'VA loans typically carry lower interest rates than conventional loans.' },
  { stat: '∞', label: 'Reusable Benefit', desc: 'Use your VA benefit multiple times throughout your life.' },
]

const faqs = [
  {
    q: 'Do I have to pay a funding fee?',
    a: 'Most borrowers pay a one-time VA funding fee of 2.15% (first use) or 3.3% (subsequent use) of the loan amount, which is typically rolled into the loan. However, veterans with a service-connected disability rating of 10% or higher are completely exempt from the funding fee. Active duty service members who have received the Purple Heart are also exempt.',
  },
  {
    q: 'Can I use my VA loan benefit more than once?',
    a: 'Yes, the VA loan benefit is reusable. You can use it again after paying off your previous VA loan, or even simultaneously if you have remaining entitlement. Many veterans in San Antonio have used their VA benefit two or three times as they\'ve upgraded or relocated.',
  },
  {
    q: 'Is there a minimum credit score for a VA loan?',
    a: 'The VA itself doesn\'t set a minimum credit score. Most lenders, including Efinity Mortgage, typically look for a 620+ score, though exceptions exist based on the full picture of your file. In practice, VA guidelines are more flexible than conventional loans, and I\'ll review your specific situation during pre-approval.',
  },
  {
    q: 'Can I buy any type of property with a VA loan?',
    a: 'VA loans are for primary residences only — you must intend to live in the home. You can purchase single-family homes, condos (VA-approved), townhomes, and multi-family properties up to 4 units (you must occupy one unit). The property must meet VA Minimum Property Requirements (MPRs), which ensure the home is safe, sound, and sanitary.',
  },
  {
    q: 'How do I get my Certificate of Eligibility (COE)?',
    a: 'I can pull your COE for you electronically in most cases directly through VA\'s system during the pre-approval process. You can also request it yourself at VA.gov. If you have your DD-214 (discharge document), that\'s the primary document we\'ll need.',
  },
  {
    q: 'How is a VA loan different in San Antonio specifically?',
    a: 'San Antonio is one of the strongest VA loan markets in the country, home to Joint Base San Antonio, Fort Sam Houston, Lackland AFB, and Randolph AFB. Many sellers here are very familiar with VA loans and accept them readily. The appraisal process (VA appraisal vs conventional) can take a few extra days, but our team manages this timeline closely.',
  },
]

const process = [
  { step: 1, title: 'Get Pre-Approved', desc: 'Submit your application. I pull your COE, verify income, review credit, and issue a pre-approval letter within 1–3 business days.' },
  { step: 2, title: 'Find Your Home', desc: 'Shop with confidence knowing exactly what you qualify for and that your VA loan will be accepted. I\'ll recommend agents who know the VA process.' },
  { step: 3, title: 'Make an Offer', desc: 'Your pre-approval letter shows sellers you\'re serious. In San Antonio, VA offers are widely accepted and respected.' },
  { step: 4, title: 'VA Appraisal', desc: 'A VA-assigned appraiser confirms the home\'s value and meets VA Minimum Property Requirements. Typically takes 7–14 days.' },
  { step: 5, title: 'Underwriting', desc: 'Your full file is reviewed. I manage the process and respond to any conditions promptly to keep your timeline on track.' },
  { step: 6, title: 'Close & Get Your Keys', desc: 'Sign your documents, receive your keys, and move in. Typical timeline from offer to closing: 30–45 days.' },
]

export default function VALoansPage() {
  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white text-center py-16 px-8"
        style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 60%, #1e4d7a 100%)' }}
      >
        <div className="relative max-w-3xl mx-auto">
          <div className="hero-badge">Military · Veterans · Surviving Spouses · San Antonio TX</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            San Antonio&apos;s VA Loan<br />
            <span className="text-gold-light">Specialist</span>
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            The VA loan is the best home loan program ever created. $0 down, no monthly mortgage insurance, competitive rates. If you&apos;ve served, you&apos;ve earned it — let&apos;s use it.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Check My VA Eligibility →
            </a>
            <Link href="/va-loan-quiz" className="btn-outline-white">
              Take the Eligibility Quiz
            </Link>
            <a
              href="https://calendly.com/trey-garza-efinitymortgage/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              Talk to Trey
            </a>
          </div>
        </div>
      </header>

      <TrustBar />

      {/* BENEFITS GRID */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">VA Loan Benefits</div>
          <h2 className="section-title">Why the VA Loan Wins Every Time</h2>
          <p className="section-sub">
            No other loan program comes close. Here&apos;s what makes the VA loan the most powerful home buying benefit available.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b) => (
              <div key={b.label} className="bg-white border border-[color:var(--border)] rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="font-playfair text-3xl font-bold text-navy mb-1">{b.stat}</div>
                <div className="text-xs font-semibold uppercase tracking-wider text-gold-dark mb-2">{b.label}</div>
                <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VA vs CONVENTIONAL COMPARISON */}
      <section className="py-16 bg-white border-t border-b border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Side by Side</div>
          <h2 className="section-title">VA Loan vs Conventional: The Real Numbers</h2>
          <p className="section-sub">On a $350,000 home with 5% down. The difference is hundreds per month.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[500px]">
              <thead>
                <tr style={{ background: '#0D2240', color: '#fff' }}>
                  <th className="p-3 text-left font-semibold">Item</th>
                  <th className="p-3 text-center font-semibold text-gold-light">VA Loan</th>
                  <th className="p-3 text-center font-semibold">Conventional (5% down)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Down Payment', '$0', '$17,500'],
                  ['Monthly PMI / MI', 'None', '~$175/mo'],
                  ['Upfront Fee', '2.15% (rolled in)', 'None'],
                  ['Min Credit Score', 'Flexible (620 typical)', '620+'],
                  ['Income Limits', 'None', 'None'],
                  ['Loan Limit', 'None (full entitlement)', '$806,500 conforming'],
                  ['Property Type', 'Primary residence', 'Primary, second home, investment'],
                ].map(([item, va, conv], i) => (
                  <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="p-3 font-medium text-navy">{item}</td>
                    <td className="p-3 text-center font-semibold text-[#2A7A4B]">{va}</td>
                    <td className="p-3 text-center text-[color:var(--text-mid)]">{conv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[color:var(--text-muted)] mt-3">
            * Example figures. Actual rates and payments vary by credit score, loan amount, and market conditions.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label">Eligibility</div>
              <h2 className="section-title">Who Qualifies for a VA Loan?</h2>
              <p className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-6">
                VA eligibility is based on your service history. The following groups are generally eligible, though specific requirements vary. I&apos;ll pull your Certificate of Eligibility (COE) electronically during pre-approval — it takes minutes.
              </p>
              <div className="flex flex-col gap-3">
                {eligibilityGroups.map((group) => (
                  <div key={group.title} className="bg-[#FBF3E2] rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className="text-[#C9A84C] mt-0.5 flex-shrink-0 font-bold">→</span>
                      <div>
                        <div className="font-semibold text-navy text-sm">{group.title}</div>
                        <div className="text-xs text-[color:var(--text-muted)] mt-0.5">{group.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-xl p-7 text-white">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold-light mb-4">VA Loan At a Glance</div>
              {[
                ['Down Payment', '$0 Required'],
                ['Monthly MI', 'None'],
                ['Funding Fee (first use)', '2.15%'],
                ['Disability Exemption', 'Yes — fee waived'],
                ['Income Limits', 'None'],
                ['Loan Limit', 'None (full entitlement)'],
                ['Min Credit Score', '620 typical (flexible)'],
                ['Property Type', 'Primary residence'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between py-2.5 border-b border-white/10 text-sm last:border-0">
                  <span className="text-white/65">{label}</span>
                  <span className="font-semibold text-white">{value}</span>
                </div>
              ))}
              <div className="mt-5">
                <a
                  href="https://treygarza.floify.com/apply"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gold-dark text-white font-semibold text-sm py-3 rounded-lg no-underline transition-colors hover:bg-gold-light"
                >
                  Start My VA Pre-Approval →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white border-t border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">The Process</div>
          <h2 className="section-title">How the VA Loan Process Works</h2>
          <p className="section-sub">From application to keys — a clear, 6-step walkthrough.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {process.map((p) => (
              <div key={p.step} className="bg-cream border border-[color:var(--border)] rounded-xl p-6">
                <div className="w-9 h-9 bg-navy rounded-full flex items-center justify-center text-gold-light font-playfair font-bold text-base mb-4">
                  {p.step}
                </div>
                <h3 className="font-playfair text-base font-bold text-navy mb-2">{p.title}</h3>
                <p className="text-xs text-[color:var(--text-mid)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">VA Loan FAQ</div>
          <h2 className="section-title">Common VA Loan Questions</h2>
          <div className="max-w-3xl flex flex-col gap-0 border border-[color:var(--border)] rounded-xl overflow-hidden">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className={`p-5 ${i < faqs.length - 1 ? 'border-b border-[color:var(--border)]' : ''}`}
              >
                <div className="font-semibold text-navy text-sm mb-2">{faq.q}</div>
                <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[color:var(--border)] bg-cream-dark">
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-navy mb-1.5">
              Ready to Use Your VA Benefit?
            </h2>
            <p className="text-sm text-[color:var(--text-muted)] max-w-md">
              A 10-minute call is all it takes to confirm your eligibility and figure out your options. No obligation, no pressure.
            </p>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy"
            >
              Start My VA Pre-Approval →
            </a>
            <a
              href="https://calendly.com/trey-garza-efinitymortgage/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-navy"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
