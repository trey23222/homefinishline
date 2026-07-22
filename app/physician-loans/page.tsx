import type { Metadata } from 'next'
import TrustBar from '@/components/TrustBar'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Physician Loans San Antonio TX | Doctor Mortgage Loans | Trey Garza',
  description: 'Physician loan specialist in San Antonio, Texas. Low or no down payment, favorable student loan treatment, close before your start date. Trey Garza, NMLS# 2700813. For attending physicians, residents, fellows, and dentists.',
  keywords: ['physician loans San Antonio', 'doctor mortgage Texas', 'physician home loan San Antonio TX', 'resident physician mortgage', 'dentist home loan Texas'],
  openGraph: {
    title: 'Physician Loans San Antonio TX | Trey Garza',
    description: 'Low or no down payment doctor mortgages. Favorable student loan treatment. Close before your start date.',
    url: 'https://homefinishline.com/physician-loans',
  },
  alternates: { canonical: 'https://homefinishline.com/physician-loans' },
}

const eligibilityGroups = [
  { title: 'Attending Physicians (MD / DO)', desc: 'Fully licensed and practicing, whether newly attending or established' },
  { title: 'Medical Residents & Fellows', desc: 'In-training physicians with a signed employment or training contract' },
  { title: 'Dentists (DDS / DMD)', desc: 'Practicing dentists and new dental school graduates entering practice' },
  { title: 'New to Practice', desc: 'Thin credit history and limited employment history are commonly accommodated' },
]

const benefits = [
  { stat: '0–10%', label: 'Down Payment', desc: 'Many physician loan programs allow as little as 0% down, and rarely more than 10–15%, even on larger loan amounts.' },
  { stat: 'No PMI', label: 'No Monthly Insurance', desc: 'Unlike conventional loans under 20% down, physician loans typically waive monthly mortgage insurance entirely.' },
  { stat: 'Flexible', label: 'Student Loan Treatment', desc: 'Deferred and income-driven repayment student loans are often calculated more favorably than standard debt-to-income guidelines.' },
  { stat: 'Before Day 1', label: 'Close on Your Contract', desc: 'Close using a signed employment or offer letter before your start date — no need to wait on pay stubs.' },
  { stat: 'Higher', label: 'Loan Amounts', desc: 'Jumbo loan amounts are available without jumbo-level down payment requirements.' },
  { stat: 'Flexible', label: 'Credit History', desc: 'Newer credit files and limited traditional credit are commonly accommodated for residents and fellows just starting out.' },
]

const faqs = [
  {
    q: 'What is a physician loan and how is it different from a conventional loan?',
    a: 'A physician loan is a specialty mortgage program built around the unique financial profile of doctors and dentists — high future earning potential, significant student loan debt, and often a short or nontraditional employment history. Unlike conventional loans, physician loans typically allow low or no down payment without requiring monthly mortgage insurance, and they treat student loan debt and new employment contracts more favorably during underwriting.',
  },
  {
    q: 'Do I need a down payment?',
    a: 'Many physician loan programs offer 0% down for qualified borrowers, and most cap it well below the 20% conventional loans typically require to avoid mortgage insurance. Your exact down payment depends on loan amount, credit profile, and the specific program — we\'ll review your options during pre-approval.',
  },
  {
    q: 'How are my student loans treated?',
    a: 'Physician loan programs generally use a more favorable calculation for student loan debt than conventional guidelines — for example, using your actual income-driven repayment amount instead of a flat percentage of your total balance, or excluding loans in deferment. This is one of the biggest advantages over conventional financing for doctors carrying significant student debt.',
  },
  {
    q: 'Can I close before I start my new job?',
    a: 'Yes. One of the defining features of physician loans is the ability to close using a signed employment contract or offer letter, even before your start date and before you\'ve received your first paycheck. This is especially useful for residents and fellows transitioning into a new position or attending role.',
  },
  {
    q: 'Do I have to be a fully licensed, practicing attending to qualify?',
    a: 'No. Physician loan programs are generally available to attending physicians, medical residents, and fellows currently in training, as long as you have a signed contract confirming your position and start date.',
  },
  {
    q: 'Are dentists eligible for physician loan programs?',
    a: 'Yes. Most physician loan programs extend to dentists (DDS/DMD) in addition to MDs and DOs. If you\'re a new dental school graduate entering practice, your situation is very similar to a medical resident\'s and is handled the same way.',
  },
]

const process = [
  { step: 1, title: 'Get Pre-Approved', desc: 'Submit your application along with your signed employment or training contract. I review your specific program terms and issue a pre-approval within 1–3 business days.' },
  { step: 2, title: 'Find Your Home', desc: 'Shop with confidence knowing your pre-approval already accounts for your student loans and upcoming start date.' },
  { step: 3, title: 'Make an Offer', desc: 'Your pre-approval letter shows sellers you\'re a serious, qualified buyer — even before your first paycheck from your new position.' },
  { step: 4, title: 'Appraisal', desc: 'A licensed appraiser confirms the home\'s value. Typically takes 7–14 days depending on the market.' },
  { step: 5, title: 'Underwriting', desc: 'Your file is reviewed against physician loan program guidelines, including your contract terms and student loan repayment status.' },
  { step: 6, title: 'Close & Get Your Keys', desc: 'Close on schedule — even if that\'s before your official start date. Typical timeline from offer to closing: 30–45 days.' },
]

export default function PhysicianLoansPage() {
  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white text-center py-16 px-8"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80")', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0" style={{ background: 'rgba(10, 22, 40, 0.65)' }} />
        <div className="relative max-w-3xl mx-auto">
          <div className="hero-badge">Physicians · Residents · Fellows · Dentists · San Antonio TX</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            San Antonio&apos;s Physician<br />
            <span className="text-gold-light">Loan Specialist</span>
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            A physician loan is built around your career, not your last two pay stubs. Low or no down payment, favorable student loan treatment, and the ability to close before your start date.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Check My Eligibility →
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
          <div className="section-label">Physician Loan Benefits</div>
          <h2 className="section-title">A Mortgage Built Around Your Career Path</h2>
          <p className="section-sub">
            Physician loan programs exist because doctors and dentists don&apos;t fit the standard mortgage box — high future earnings, significant student debt, and a nontraditional employment timeline.
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

      {/* PHYSICIAN vs CONVENTIONAL COMPARISON */}
      <section className="py-16 bg-white border-t border-b border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Side by Side</div>
          <h2 className="section-title">Physician Loan vs Conventional: The Real Differences</h2>
          <p className="section-sub">On a $450,000 home. The difference shows up in your down payment and your DTI.</p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm min-w-[500px]">
              <thead>
                <tr style={{ background: '#0D2240', color: '#fff' }}>
                  <th className="p-3 text-left font-semibold">Item</th>
                  <th className="p-3 text-center font-semibold text-gold-light">Physician Loan</th>
                  <th className="p-3 text-center font-semibold">Conventional (5% down)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Down Payment', '$0–$45,000 (0–10%)', '$22,500'],
                  ['Monthly PMI / MI', 'None', '~$225/mo'],
                  ['Student Loan Treatment', 'IBR / deferred often reduced', 'Full payment or 1% of balance'],
                  ['Employment Start', 'Contract accepted pre-start', 'Pay stubs required'],
                  ['Credit History', 'Flexible / thin file OK', 'Established history typical'],
                  ['Property Type', 'Primary residence', 'Primary, second home, investment'],
                ].map(([item, phys, conv], i) => (
                  <tr key={item} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="p-3 font-medium text-navy">{item}</td>
                    <td className="p-3 text-center font-semibold text-[#2A7A4B]">{phys}</td>
                    <td className="p-3 text-center text-[color:var(--text-mid)]">{conv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[color:var(--text-muted)] mt-3">
            * Example figures. Actual rates, payments, and terms vary by lender, program, credit profile, and loan amount.
          </p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label">Eligibility</div>
              <h2 className="section-title">Who Qualifies for a Physician Loan?</h2>
              <p className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-6">
                Physician loan eligibility is based on your profession and employment contract, not just your current pay history. The following groups are generally eligible, though specific program requirements vary by lender.
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
              <div className="text-xs font-semibold tracking-widest uppercase text-gold-light mb-4">Physician Loan At a Glance</div>
              {[
                ['Down Payment', 'As Low as 0%'],
                ['Monthly MI', 'None (most programs)'],
                ['Student Loan Treatment', 'Favorable DTI calculation'],
                ['Contract Close', 'Yes — before start date'],
                ['Loan Limits', 'Higher than conventional'],
                ['Credit History', 'Flexible for residents/fellows'],
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
                  Start My Physician Loan Pre-Approval →
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
                Get My Physician Loan Guide
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Everything a physician, resident, fellow, or dentist needs to know before buying in San Antonio — program comparisons, student loan treatment, and how to close before your start date.
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Physician loan program comparison',
                  'How student loan debt is calculated',
                  'Closing on a contract before your start date',
                  'What documents you\'ll need to get pre-approved',
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
                formType="physician"
                title="Get My Physician Loan Guide"
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
          <h2 className="section-title">How the Physician Loan Process Works</h2>
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
          <div className="section-label">Physician Loan FAQ</div>
          <h2 className="section-title">Common Physician Loan Questions</h2>
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
              Ready to Use Your Physician Loan Benefit?
            </h2>
            <p className="text-sm text-[color:var(--text-muted)] max-w-md">
              A 10-minute call is all it takes to confirm your eligibility and walk through your options. No obligation, no pressure.
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
