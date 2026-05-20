import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'

export const metadata: Metadata = {
  title: 'Self-Employed Mortgage Texas | Bank Statement Loans | Trey Garza',
  description: 'Self-employed mortgage specialist in San Antonio, TX. Bank statement loans, 1099 borrowers, business owners. Trey Garza, NMLS# 2700813. Qualify using real cash flow, not tax returns.',
  keywords: ['self-employed mortgage Texas', 'bank statement loan San Antonio', '1099 mortgage Texas', 'self-employed home loan San Antonio', 'business owner mortgage Texas'],
  openGraph: {
    title: 'Self-Employed Mortgage Texas | Bank Statement Loans | Trey Garza',
    description: 'Bank statement loans and self-employed mortgage solutions in San Antonio, TX. Qualify using real cash flow.',
    url: 'https://homefinishline.com/self-employed',
  },
  alternates: { canonical: 'https://homefinishline.com/self-employed' },
}

const painPoints = [
  {
    problem: '"My write-offs are too high."',
    solution: 'Bank statement loans use your actual deposits — 12–24 months of bank statements — not your taxed-down income. Your write-offs are a feature, not a disqualifier.',
  },
  {
    problem: '"My income fluctuates month to month."',
    solution: 'We average your deposits over 12–24 months for a stable income figure. Irregular income is normal for business owners and is factored in appropriately.',
  },
  {
    problem: '"I\'ve been self-employed less than 2 years."',
    solution: "Some programs are available after 12 months of self-employment history, particularly if you were in the same industry before going independent. Let's look at your specific situation.",
  },
  {
    problem: '"Traditional lenders keep turning me down."',
    solution: "Traditional bank requirements don't account for how business owners actually generate income. Portfolio and bank statement programs are specifically designed for your situation.",
  },
]

const qualifyingDocs = [
  { title: 'Bank Statement Loan', docs: ['12–24 months personal bank statements', '12–24 months business bank statements (if applicable)', 'Business license or CPA letter verifying self-employment', 'Government-issued ID'] },
  { title: 'Traditional Self-Employed (2+ yr)', docs: ['2 years personal tax returns (1040)', '2 years business tax returns (if applicable)', 'Year-to-date P&L statement (CPA prepared)', 'Last 2 months bank statements'] },
]

const loanOptions = [
  {
    name: 'Bank Statement Loan',
    badge: 'Most Popular for Self-Employed',
    badgeColor: '#7A5A0F',
    badgeBg: '#FBF3E2',
    desc: 'Uses 12–24 months of bank deposits to calculate qualifying income. Ideal for business owners and 1099 earners with strong cash flow but significant write-offs.',
    specs: [
      ['Down Payment', 'As low as 10%'],
      ['Credit Score', '620+ typical'],
      ['Income Doc', '12–24 mo bank statements'],
      ['Tax Returns', 'Not required'],
      ['Loan Amounts', 'Up to $3M'],
    ],
  },
  {
    name: 'Conventional (2-Year History)',
    badge: 'Strong Credit + 2 Yrs SE History',
    badgeColor: '#0D2240',
    badgeBg: '#EBF0F8',
    desc: 'If you have 2+ years of self-employment history and your tax returns show qualifying income (after add-backs), conventional financing may offer better rates.',
    specs: [
      ['Down Payment', '3–20%'],
      ['Credit Score', '680+ ideal'],
      ['Income Doc', '2 yrs tax returns'],
      ['Tax Returns', 'Required'],
      ['DTI Limit', 'Up to 50%'],
    ],
  },
  {
    name: 'FHA (Self-Employed)',
    badge: 'More Flexible DTI',
    badgeColor: '#2A7A4B',
    badgeBg: '#EBF5EF',
    desc: 'FHA allows higher debt-to-income ratios and more flexible guidelines. With 2 years of tax returns showing qualifying income, FHA can work well for self-employed buyers.',
    specs: [
      ['Down Payment', '3.5% (580+ score)'],
      ['Credit Score', '580+'],
      ['Income Doc', '2 yrs tax returns'],
      ['DTI Limit', 'Up to 57%'],
      ['Mortgage Insurance', 'Required (MIP)'],
    ],
  },
]

const faqs = [
  {
    q: 'What is a bank statement loan?',
    a: 'A bank statement loan is a non-QM (non-qualified mortgage) program that calculates your income using your bank deposits — typically 12 or 24 months of statements — rather than tax returns. This is specifically designed for self-employed borrowers, business owners, and 1099 contractors whose tax returns understate their actual income due to legitimate business deductions.',
  },
  {
    q: 'How long do I need to be self-employed to qualify?',
    a: 'Most programs require at least 24 months of self-employment history, particularly for conventional and FHA loans. Some bank statement programs accept 12 months of history, especially if you were in the same industry before going independent. Your specific timeline is something we\'ll review during pre-approval.',
  },
  {
    q: 'Will I get a higher interest rate on a bank statement loan?',
    a: 'Bank statement loans (non-QM) typically carry slightly higher rates than conventional Fannie/Freddie loans because they\'re portfolio products held by the lender rather than sold to the secondary market. However, for borrowers who can\'t qualify conventionally, the trade-off is worthwhile. As your tax return income picture improves over time, refinancing to conventional is always an option.',
  },
  {
    q: 'Do my business and personal bank statements both count?',
    a: 'It depends on the program and your business structure. For sole proprietors and single-member LLCs, personal statements are typically used. For corporations, business statements may be used with an expense factor applied. A CPA letter confirming your ownership percentage and business expenses is usually required.',
  },
]

export default function SelfEmployedPage() {
  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white text-center py-16 px-8"
        style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 60%, #1e4d7a 100%)' }}
      >
        <div className="relative max-w-3xl mx-auto">
          <div className="hero-badge">Business Owners · 1099 · Contractors · Freelancers</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            Self-Employed?<br />
            <span className="text-gold-light">You Can Still Buy a Home.</span>
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Your write-offs reduce your taxes — not your ability to qualify. Bank statement loan programs are built for exactly your situation. Let&apos;s use your real cash flow to get you approved.
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

      {/* PAIN POINTS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">The Real Problem</div>
          <h2 className="section-title">Why Self-Employed Buyers Get Stuck</h2>
          <p className="section-sub">
            Traditional mortgage guidelines were designed for W-2 employees. Here&apos;s what self-employed borrowers actually run into — and how we solve it.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {painPoints.map((item) => (
              <div key={item.problem} className="bg-white border border-[color:var(--border)] rounded-xl p-6">
                <div className="text-sm font-semibold text-navy mb-1 font-playfair">{item.problem}</div>
                <div className="w-8 h-0.5 bg-gold-dark mb-3" />
                <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN OPTIONS */}
      <section className="py-16 bg-white border-t border-b border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Your Options</div>
          <h2 className="section-title">Loan Programs for Self-Employed Borrowers</h2>
          <p className="section-sub">
            The right program depends on your tax return picture, how long you&apos;ve been self-employed, and your cash flow. Here are the main paths.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {loanOptions.map((loan) => (
              <div key={loan.name} className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden flex flex-col">
                <div className="p-6 flex-1">
                  <div
                    className="inline-block text-xs font-semibold px-2.5 py-1 rounded mb-3"
                    style={{ background: loan.badgeBg, color: loan.badgeColor }}
                  >
                    {loan.badge}
                  </div>
                  <h3 className="font-playfair text-base font-bold text-navy mb-2">{loan.name}</h3>
                  <p className="text-xs text-[color:var(--text-mid)] leading-relaxed mb-4">{loan.desc}</p>
                  <div className="bg-cream rounded-lg p-3">
                    {loan.specs.map(([label, value]) => (
                      <div key={label} className="flex justify-between py-1.5 border-b border-[color:var(--border)] last:border-0 text-xs">
                        <span className="text-[color:var(--text-muted)]">{label}</span>
                        <span className="font-semibold text-navy">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="section-label">Documentation</div>
              <h2 className="section-title">What Documents Will You Need?</h2>
              <p className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-6">
                The documentation required depends on which loan program fits your situation. Here&apos;s a general breakdown. During pre-approval, I&apos;ll give you a specific checklist based on your exact situation.
              </p>
              <div className="flex flex-col gap-5">
                {qualifyingDocs.map((docGroup) => (
                  <div key={docGroup.title} className="bg-white border border-[color:var(--border)] rounded-xl p-5">
                    <h4 className="font-semibold text-navy text-sm mb-3">{docGroup.title}</h4>
                    <ul className="flex flex-col gap-2">
                      {docGroup.docs.map((doc) => (
                        <li key={doc} className="flex items-start gap-2 text-xs text-[color:var(--text-mid)]">
                          <span className="text-[#2A7A4B] mt-0.5 flex-shrink-0">✓</span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-navy rounded-xl p-7 text-white">
              <div className="text-xs font-semibold tracking-widest uppercase text-gold-light mb-1">Trey&apos;s Note</div>
              <h3 className="font-playfair text-xl font-bold mb-4">Your Write-Offs Are an Asset, Not a Problem</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                I work with self-employed borrowers regularly. The most common frustration I hear is: &ldquo;I make good money, but on paper my income looks low.&rdquo;
              </p>
              <p className="text-sm text-white/70 leading-relaxed mb-4">
                Bank statement programs solve this completely. We use your actual deposits — what actually hits your account — to calculate qualifying income. Your CPA is maximizing your deductions for a reason; your mortgage shouldn&apos;t punish you for that.
              </p>
              <p className="text-sm text-white/70 leading-relaxed mb-6">
                If you&apos;re unsure whether you&apos;ll qualify, the best thing to do is have a 10-minute conversation. I can usually tell you where you stand in the first call.
              </p>
              <a
                href="https://calendly.com/trey-garza-efinitymortgage/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gold-dark text-white font-semibold text-sm py-3 rounded-lg no-underline transition-colors hover:bg-gold-light"
              >
                Book a Free 10-Min Call →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white border-t border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">FAQ</div>
          <h2 className="section-title">Self-Employed Mortgage Questions</h2>
          <div className="max-w-3xl flex flex-col border border-[color:var(--border)] rounded-xl overflow-hidden">
            {faqs.map((faq, i) => (
              <div key={faq.q} className={`p-5 ${i < faqs.length - 1 ? 'border-b border-[color:var(--border)]' : ''}`}>
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
              Let&apos;s Figure Out Your Options
            </h2>
            <p className="text-sm text-[color:var(--text-muted)] max-w-md">
              Most self-employed buyers are closer to qualifying than they think. A quick conversation tells you exactly where you stand.
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
              Book a Free Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
