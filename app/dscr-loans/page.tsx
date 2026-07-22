import type { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'DSCR Loans San Antonio TX | Rental Property Financing | Trey Garza',
  description: 'DSCR loan specialist in San Antonio, Texas. Qualify on rental income, not personal income. No tax returns or W-2s, LLC ownership allowed. Trey Garza, NMLS# 2700813.',
  keywords: ['DSCR loans San Antonio', 'rental property loan Texas', 'investment property mortgage San Antonio', 'DSCR loan Texas', 'LLC mortgage San Antonio'],
  openGraph: {
    title: 'DSCR Loans San Antonio TX | Trey Garza',
    description: 'Qualify on the property\'s rental income, not your personal income. No tax returns, LLC ownership welcome.',
    url: 'https://homefinishline.com/dscr-loans',
  },
  alternates: { canonical: 'https://homefinishline.com/dscr-loans' },
}

const eligibilityGroups = [
  { title: 'Real Estate Investors', desc: 'Buying a single rental property or growing a larger portfolio' },
  { title: 'Self-Employed Buyers', desc: 'Whose tax returns don\'t reflect their true purchasing power' },
  { title: 'LLC & Entity Buyers', desc: 'Purchasing or holding title through a business entity' },
  { title: 'Out-of-State Investors', desc: 'Purchasing rental property in Texas from anywhere in the country' },
]

const benefits = [
  { stat: 'Rental Income', label: 'Qualifies the Loan', desc: 'The property\'s projected or in-place rental income qualifies the loan — not your personal income or tax returns.' },
  { stat: 'No', label: 'Tax Returns or W-2s', desc: 'No personal income documentation required, and no debt-to-income calculation against your personal finances.' },
  { stat: 'LLC OK', label: 'Entity Ownership Allowed', desc: 'Close in the name of an LLC or other business entity — ideal for investors building a portfolio.' },
  { stat: '20–25%', label: 'Typical Down Payment', desc: 'Most DSCR programs require 20–25% down, depending on the property and your DSCR ratio.' },
  { stat: '3–6 mo', label: 'Reserve Requirements', desc: 'Lenders typically require 3–6 months of reserves on hand, verified by bank statements.' },
  { stat: 'No Cap', label: 'Portfolio Growth', desc: 'Unlike many conventional investment programs, there\'s typically no limit on the number of financed properties.' },
]

const faqs = [
  {
    q: 'What is a DSCR loan?',
    a: 'DSCR stands for Debt Service Coverage Ratio. It\'s a loan program designed for rental property investors that qualifies the loan based on the property\'s rental income relative to its mortgage payment — rather than your personal income, employment, or tax returns.',
  },
  {
    q: 'How is the DSCR ratio calculated?',
    a: 'DSCR is calculated by dividing the property\'s gross rental income (actual or projected via an appraiser\'s rent schedule) by its total monthly debt obligation (principal, interest, taxes, insurance, and any HOA dues). A ratio of 1.0 means the rent exactly covers the payment; most lenders prefer 1.0–1.25 or higher, though some programs allow lower ratios with a larger down payment.',
  },
  {
    q: 'Do I need to show personal income or tax returns?',
    a: 'No. DSCR loans don\'t require personal income documentation, W-2s, pay stubs, or tax returns. This makes them especially useful for self-employed investors and business owners whose tax returns understate their actual purchasing power.',
  },
  {
    q: 'Can I buy the property in my LLC?',
    a: 'Yes. DSCR loans are commonly closed in the name of an LLC or other business entity, which is one of the main reasons investors use them — it keeps the property separate from personal liability and supports a scalable portfolio strategy.',
  },
  {
    q: 'What down payment and reserves should I expect?',
    a: 'Most DSCR programs require 20–25% down depending on the property type, your DSCR ratio, and credit profile, along with 3–6 months of reserves in the bank to cover the mortgage payment. Stronger DSCR ratios and credit can sometimes reduce these requirements.',
  },
  {
    q: 'Who is a DSCR loan for?',
    a: 'DSCR loans are built for real estate investors purchasing rental property — whether it\'s your first rental or the tenth property in a growing portfolio — and for self-employed buyers whose personal tax returns don\'t reflect their real income.',
  },
]

const process = [
  { step: 1, title: 'Get Pre-Qualified', desc: 'Share the property (or target property type) and its expected rent. I\'ll walk through DSCR program options and typical terms upfront.' },
  { step: 2, title: 'Run the DSCR Ratio', desc: 'We calculate the property\'s rental income against its estimated monthly payment to confirm which programs it qualifies for.' },
  { step: 3, title: 'Find or Confirm the Property', desc: 'Shop with confidence knowing which price range and rent levels keep your DSCR ratio strong.' },
  { step: 4, title: 'Appraisal & Rent Schedule', desc: 'An appraiser confirms the property\'s value and provides a market rent schedule used to finalize your DSCR ratio.' },
  { step: 5, title: 'Underwriting', desc: 'Your file is reviewed against DSCR guidelines — entity documents (if applicable), reserves, credit, and the property\'s numbers.' },
  { step: 6, title: 'Close & Start Collecting Rent', desc: 'Close in your name or your LLC, get your keys, and place your tenant. Typical timeline from offer to closing: 30–45 days.' },
]

export default function DSCRLoansPage() {
  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white text-center py-16 px-8"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&w=1600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(10, 22, 40, 0.65)' }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="hero-badge">Real Estate Investors · Rental Properties · San Antonio TX</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            San Antonio&apos;s DSCR<br />
            <span className="text-gold-light">Loan Specialist</span>
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Qualify on the property, not your paycheck. DSCR loans use the rental income a property generates to qualify the loan — no tax returns, no W-2s, LLC ownership welcome.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Check My Options →
            </a>
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
          <div className="section-label">DSCR Loan Benefits</div>
          <h2 className="section-title">Financing Built Around the Property, Not Your Paycheck</h2>
          <p className="section-sub">
            DSCR loans were designed for real estate investors and self-employed buyers whose personal income picture doesn&apos;t reflect their real purchasing power.
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

      {/* DSCR vs CONVENTIONAL INVESTMENT COMPARISON */}
      <section className="py-16 bg-white border-t border-b border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Side by Side</div>
          <h2 className="section-title">DSCR Loan vs Conventional Investment Loan</h2>
          <p className="section-sub">The difference comes down to what qualifies the loan — the property, or you personally.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[500px]">
              <thead>
                <tr style={{ background: '#0D2240', color: '#fff' }}>
                  <th className="p-3 text-left font-semibold">Item</th>
                  <th className="p-3 text-center font-semibold text-gold-light">DSCR Loan</th>
                  <th className="p-3 text-center font-semibold">Conventional Investment</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Qualifying Income', 'Property rental income (DSCR ratio)', 'Borrower personal income / DTI'],
                  ['Tax Returns / W-2s', 'Not required', 'Required'],
                  ['Entity Ownership', 'LLC / Corp allowed', 'Individual borrower typically required'],
                  ['Down Payment', '20–25% typical', '15–25%'],
                  ['Financed Property Limit', 'Typically unlimited', 'Usually capped (around 10)'],
                  ['Documentation Speed', 'Often faster', 'Slower — full income underwriting'],
                ].map(([item, dscr, conv], i) => (
                  <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="p-3 font-medium text-navy">{item}</td>
                    <td className="p-3 text-center font-semibold text-[#2A7A4B]">{dscr}</td>
                    <td className="p-3 text-center text-[color:var(--text-mid)]">{conv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[color:var(--text-muted)] mt-3">
            * Example figures. Actual rates, payments, and terms vary by lender, property, and DSCR ratio.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label">Who It&apos;s For</div>
              <h2 className="section-title">Who Qualifies for a DSCR Loan?</h2>
              <p className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-6">
                DSCR eligibility is based on the property&apos;s numbers, not a personal income file. The following groups are generally well suited to DSCR financing.
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
              <div className="text-xs font-semibold tracking-widest uppercase text-gold-light mb-4">DSCR Loan At a Glance</div>
              {[
                ['Qualifying Income', 'Property cash flow (DSCR ratio)'],
                ['Tax Returns / W-2s', 'Not required'],
                ['Entity Ownership', 'LLC / Corp allowed'],
                ['Down Payment', '20–25% typical'],
                ['Reserves', '3–6 months typical'],
                ['Property Type', 'Non-owner-occupied rental'],
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
                  Start My DSCR Loan Pre-Approval →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 100%)' }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-gold-light text-xs font-semibold tracking-widest uppercase mb-3">Free Resource</div>
              <h2 className="font-playfair text-3xl font-bold text-white mb-4 leading-tight">
                Get My DSCR Loan Guide
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Everything a real estate investor needs to know before buying rental property in San Antonio — DSCR basics, entity ownership, down payment and reserve expectations.
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  'How the DSCR ratio is calculated',
                  'LLC and entity ownership requirements',
                  'Down payment and reserve expectations',
                  'What documents you\'ll need to get pre-qualified',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-white/80">
                    <span className="text-gold-light mt-0.5 flex-shrink-0">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <LeadForm
                formType="dscr"
                title="Get My DSCR Loan Guide"
                subtitle="Delivered instantly. No spam, ever."
                ctaLabel="Send My Free Guide →"
                darkMode={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white border-t border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">The Process</div>
          <h2 className="section-title">How the DSCR Loan Process Works</h2>
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
          <div className="section-label">DSCR Loan FAQ</div>
          <h2 className="section-title">Common DSCR Loan Questions</h2>
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
              Ready to Grow Your Rental Portfolio?
            </h2>
            <p className="text-sm text-[color:var(--text-muted)] max-w-md">
              A 10-minute call is all it takes to run your numbers and confirm which DSCR program fits. No obligation, no pressure.
            </p>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy"
            >
              Start My Pre-Approval →
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
