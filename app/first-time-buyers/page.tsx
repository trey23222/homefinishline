import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import MortgageCalculator from '@/components/MortgageCalculator'
import LoanProgramTabs from '@/components/LoanProgramTabs'
import DPAPrograms from '@/components/DPAPrograms'
import FAQAccordion from '@/components/FAQAccordion'

export const metadata: Metadata = {
  title: 'First-Time Home Buyer San Antonio TX | Resources & Guide | Trey Garza',
  description: 'Free first-time home buyer resources for San Antonio and Texas. Loan programs, down payment assistance, buying process, FAQ, and mortgage calculator. Trey Garza, NMLS# 2700813.',
  keywords: ['first time home buyer San Antonio TX', 'first time buyer mortgage Texas', 'down payment assistance San Antonio', 'FHA loan San Antonio', 'USDA loan Texas'],
  openGraph: {
    title: 'First-Time Home Buyer Resources San Antonio TX | Trey Garza',
    description: 'Everything a first-time buyer in San Antonio needs: loan programs, DPA, buying process, calculator, FAQ.',
    url: 'https://homefinishline.com/first-time-buyers',
  },
  alternates: { canonical: 'https://homefinishline.com/first-time-buyers' },
}

export default function FirstTimeBuyersPage() {
  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white text-center py-16 px-8"
        style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 60%, #1e4d7a 100%)' }}
      >
        <div className="relative max-w-3xl mx-auto">
          <div className="hero-badge">Free First-Time Buyer Resources · San Antonio, TX</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            Everything You Need to Cross the{' '}
            <span className="text-gold-light">Finish Line</span>
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Loan programs, down payment assistance, honest answers, all in one place. No jargon, no pressure. Just a clear path to your keys.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Start My Free Pre-Approval →
            </a>
            <a href="#loan-programs" className="btn-outline-white">
              Browse Loan Programs
            </a>
          </div>
        </div>
      </header>

      <TrustBar />

      {/* QUICK NAV */}
      <nav
        className="bg-white/95 backdrop-blur-sm border-b border-[color:var(--border)] sticky top-16 z-40"
        style={{ boxShadow: '0 2px 12px rgba(13,34,64,0.07)' }}
      >
        <div
          className="max-w-5xl mx-auto w-full overflow-x-auto [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* w-max lets the row grow wider than the viewport so overflow-x-auto can scroll it.
              min-w-full keeps it full-width on desktop when all tabs fit. */}
          <div className="flex flex-nowrap gap-1 py-1 px-6 w-max min-w-full">
            {[
              { href: '#loan-programs', label: 'Loan Programs' },
              { href: '#down-payment-assistance', label: 'Down Payment Help' },
              { href: '#process', label: 'The Process' },
              { href: '#faq', label: 'FAQ' },
              { href: '#calculator', label: 'Calculator' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-[color:var(--text-muted)] px-4 py-3 no-underline rounded-md transition-all hover:text-navy hover:bg-navy/5 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-dark rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* LOAN PROGRAMS */}
      <section id="loan-programs" className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Loan Programs</div>
          <h2 className="section-title">Find the Right Loan for Your Situation</h2>
          <p className="section-sub">
            FHA, VA, USDA, Conventional, and Down Payment Assistance — compared clearly so you know exactly where you stand.
          </p>
          <LoanProgramTabs />

          {/* Quick compare table */}
          <div className="mt-12">
            <div className="section-label">Quick Reference</div>
            <h3 className="font-playfair text-xl font-bold text-navy mb-5">All Programs Side by Side</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr style={{ background: '#0D2240', color: '#fff' }}>
                    <th className="p-3 text-left font-semibold">Program</th>
                    <th className="p-3 text-center font-semibold">Down Payment</th>
                    <th className="p-3 text-center font-semibold">Min. Credit</th>
                    <th className="p-3 text-center font-semibold">Mortgage Insurance</th>
                    <th className="p-3 text-center font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prog: 'FHA', dp: '3.5%', credit: '580', mi: 'Required (life of loan)', best: 'Lower credit scores' },
                    { prog: 'VA', dp: '$0', credit: 'Flexible', mi: 'None', best: 'Veterans & military', highlight: true },
                    { prog: 'USDA', dp: '$0', credit: '640', mi: '0.35%/yr annual', best: 'Rural/suburban areas', highlight: false },
                    { prog: 'Conventional', dp: '3–20%', credit: '620', mi: 'Drops at 80% LTV', best: 'Strong credit 680+', highlight: false },
                    { prog: 'Texas DPA', dp: 'Up to 5% covered', credit: '620', mi: 'Depends on base loan', best: 'Limited savings', highlight: false },
                  ].map((row, i) => (
                    <tr key={row.prog} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'} style={{ borderBottom: '1px solid var(--border)' }}>
                      <td className="p-3 font-semibold text-navy">{row.prog}</td>
                      <td className={`p-3 text-center font-semibold ${row.dp === '$0' || row.dp.includes('5% covered') ? 'text-[#2A7A4B]' : ''}`}>{row.dp}</td>
                      <td className="p-3 text-center">{row.credit}</td>
                      <td className={`p-3 text-center ${row.mi === 'None' ? 'text-[#2A7A4B] font-semibold' : ''}`}>{row.mi}</td>
                      <td className="p-3 text-center text-[color:var(--text-muted)]">{row.best}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* DOWN PAYMENT ASSISTANCE */}
      <section id="down-payment-assistance" className="py-16 bg-white border-t border-b border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Texas DPA</div>
          <h2 className="section-title">Down Payment Assistance Programs</h2>
          <p className="section-sub">
            Up to 5% toward your down payment and closing costs — programs most Texas buyers don&apos;t know they already qualify for.
          </p>
          <DPAPrograms />
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_260px] gap-10 items-start">
            <div>
              <div className="section-label">The Process</div>
              <h2 className="section-title">9 Steps to Closing Day</h2>
              <p className="section-sub">
                A typical transaction takes 30–45 days from accepted offer to keys. Here&apos;s what each step involves.
              </p>

              <div className="relative pl-12">
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[color:var(--border)]" />

                {[
                  { step: 1, title: 'Check Your Credit & Budget', time: 'Before you start shopping', body: 'Pull your credit report for free at AnnualCreditReport.com. Review all three bureaus — Experian, Equifax, TransUnion. Dispute any errors now, because fixing them after you apply can delay everything. At the same time, map out your monthly budget: income, existing debts, and how much mortgage payment you\'re comfortable carrying.', tip: "You don't need perfect credit to buy. FHA accepts 580+. But knowing your number before we talk saves time and sets realistic expectations." },
                  { step: 2, title: 'Get Pre-Approved', time: '1–3 days', body: "Pre-approval is the most important step before you start touring homes. I'll verify your income, review your assets, pull your credit, and issue a letter confirming the loan amount you qualify for. This is a real underwritten review, not a soft estimate. In San Antonio's market, sellers won't take your offer seriously without it.", tip: "Pre-approval also tells us which loan program fits best — FHA, VA, USDA, conventional — and whether you qualify for Texas down payment assistance. Start here." },
                  { step: 3, title: 'Find a Real Estate Agent', time: 'Before or during pre-approval', body: "A buyer's agent represents you, not the seller, and their commission is typically paid by the seller. Interview a couple of agents, find someone who knows the neighborhoods you're targeting, and make sure they communicate the way you prefer. Your agent and your loan officer need to work well together; I'm happy to recommend agents I've closed deals with." },
                  { step: 4, title: 'Shop for Homes', time: 'Days to weeks', body: "With your pre-approval in hand, you're a serious buyer. Make a list of must-haves versus nice-to-haves before you start touring — it's easy to get emotionally attached to features that are outside your budget. Stick to homes priced at or below your pre-approval amount, accounting for closing costs and moving expenses.", tip: "Don't open new credit cards, take out new loans, or make large cash withdrawals while you're shopping. Your financial picture needs to stay stable until you close." },
                  { step: 5, title: 'Make an Offer', time: 'When you find the right home', body: "Your agent writes a purchase offer based on comparable sales, market conditions, and your goals. Once the seller accepts, or you reach an agreement through negotiation, you're officially under contract. You'll typically submit earnest money (usually 1% of the purchase price) to show you're serious. The closing clock starts here." },
                  { step: 6, title: 'Home Inspection', time: 'Within 7–10 days of contract', body: "Hire a licensed home inspector — your own, not the seller's. They'll examine the structure, roof, HVAC, plumbing, electrical, and more. Depending on what they find, you can request repairs, ask for a price reduction, or walk away (during the option period) if the issues are serious.", tip: "Never skip the inspection to make your offer more attractive. Even on new construction. It's $400–600 that can save you tens of thousands." },
                  { step: 7, title: 'Appraisal & Loan Processing', time: 'Days 7–25 of contract', body: 'A licensed appraiser ordered by the lender visits the property and confirms its value is at or above the purchase price. Simultaneously, I submit your full loan file to underwriting. The underwriter reviews every document — income, assets, employment, credit — and may issue conditions requiring additional documentation.', tip: 'Respond to any document requests within 24 hours. Slow responses are the #1 cause of delayed closings. I\'ll give you a full checklist upfront so nothing is a surprise.' },
                  { step: 8, title: 'Clear to Close', time: 'Days 25–35 of contract', body: "When underwriting approves your file, you receive your Clear to Close — the best words in the homebuying process. Three days before closing you'll receive your Closing Disclosure, which shows your final loan terms, monthly payment, and exact amount you need to bring to closing." },
                  { step: 9, title: 'Closing Day 🎉', time: 'Day 30–45', body: "You sit down at the title company, sign a stack of documents, wire your closing funds, and receive your keys. The whole signing typically takes 45–90 minutes. From that moment forward, you're a homeowner.", tip: 'Do a final walkthrough of the property the day before or morning of closing to confirm the condition matches what you agreed to.', highlight: true },
                ].map((item) => (
                  <div key={item.step} className="relative mb-8 last:mb-0">
                    <div className="absolute -left-[36px] top-4 w-8 h-8 bg-navy rounded-full flex items-center justify-center text-gold-light font-playfair font-bold text-sm border-2 border-cream z-10">
                      {item.step}
                    </div>
                    <div className={`bg-white border rounded-xl p-6 hover:shadow-md transition-shadow ${item.highlight ? 'border-t-4 border-gold-dark' : 'border-[color:var(--border)]'}`}>
                      <h3 className="font-playfair text-base font-bold text-navy mb-1">{item.title}</h3>
                      <span className="inline-block bg-cream-dark text-[color:var(--text-muted)] text-xs font-semibold px-2 py-0.5 rounded mb-3">{item.time}</span>
                      <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">{item.body}</p>
                      {item.tip && (
                        <div className="mt-3 pl-3 border-l-2 border-gold-dark bg-cream rounded-r-lg p-2.5 text-xs text-[color:var(--text-mid)]">
                          <strong className="text-navy">Trey&apos;s tip:</strong> {item.tip}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="md:sticky md:top-28 flex flex-col gap-5">
              <div className="bg-white border border-[color:var(--border)] rounded-xl p-6">
                <h3 className="font-playfair text-base font-bold text-navy mb-4">Documents You&apos;ll Need</h3>
                {[
                  'Last 2 years W-2s or 1099s',
                  'Last 2 years tax returns',
                  'Last 30 days pay stubs',
                  'Last 2 months bank statements',
                  'Government-issued photo ID',
                  'Social Security number',
                  'VA certificate of eligibility (if VA)',
                  'Gift letter (if using gifted funds)',
                ].map((doc) => (
                  <div key={doc} className="flex items-start gap-2.5 py-2 border-b border-[color:var(--border)] last:border-0 text-xs text-[color:var(--text-mid)]">
                    <div className="w-4 h-4 border border-[color:var(--border)] rounded mt-0.5 flex-shrink-0" />
                    {doc}
                  </div>
                ))}
              </div>

              <div className="bg-navy rounded-xl p-6 text-white">
                <div className="text-xs font-semibold tracking-widest uppercase text-gold-light mb-3">Typical Timeline</div>
                {[
                  ['Pre-approval', '1–3 days'],
                  ['Home search', 'Varies'],
                  ['Under contract → close', '30–45 days'],
                  ['Fastest possible', '21 days'],
                ].map(([label, value]) => (
                  <div key={label} className="flex justify-between py-2.5 border-b border-white/10 last:border-0 text-sm">
                    <span className="text-white/65">{label}</span>
                    <span className={value === '21 days' ? 'text-gold-light font-semibold' : 'font-semibold'}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white border-t border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-[1fr_260px] gap-10 items-start">
            <div>
              <div className="section-label">FAQ</div>
              <h2 className="section-title">Your Mortgage Questions, Answered</h2>
              <p className="section-sub">
                First-time buyers ask these questions every day. Here&apos;s what you actually need to know.
              </p>
              <FAQAccordion />
            </div>

            {/* Sidebar */}
            <div className="sticky top-28 flex flex-col gap-5">
              <div className="bg-navy rounded-xl p-6 text-white">
                <div className="font-playfair text-base font-bold mb-2">Still have a question?</div>
                <p className="text-sm text-white/65 mb-4 leading-snug">I answer every email personally, usually within a few hours on business days.</p>
                <a
                  href="mailto:trey.garza@homefinishline.com"
                  className="block bg-gold-dark text-white text-center py-2.5 px-4 rounded-lg font-semibold text-sm no-underline mb-2 hover:bg-gold-light transition-colors"
                >
                  Email Trey →
                </a>
                <a
                  href="https://calendly.com/trey-garza-efinitymortgage/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 text-white text-center py-2.5 px-4 rounded-lg font-semibold text-sm no-underline hover:bg-white/20 transition-colors"
                >
                  Schedule a Call
                </a>
              </div>

              <div className="bg-white border border-[color:var(--border)] rounded-xl p-5">
                <div className="text-xs font-semibold text-gold-dark tracking-widest uppercase mb-3">Related Resources</div>
                {[
                  { href: '#loan-programs', label: 'Compare Loan Programs' },
                  { href: '#down-payment-assistance', label: 'Texas DPA Programs' },
                  { href: '#process', label: 'The Buying Process' },
                  { href: '#calculator', label: 'Mortgage Calculator' },
                ].map((link) => (
                  <a key={link.label} href={link.href} className="flex items-center gap-2 py-2 border-b border-[color:var(--border)] last:border-0 text-sm text-[color:var(--text-mid)] no-underline hover:text-navy transition-colors">
                    → {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className="py-16 border-t border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Free Tool</div>
          <h2 className="section-title">Estimate Your Monthly Mortgage Payment</h2>
          <p className="section-sub">
            Adjust home price, down payment, rate, and term. See your full payment breakdown instantly.
          </p>
          <MortgageCalculator />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[color:var(--border)] bg-cream-dark">
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-navy mb-1.5">
              Questions Are Free. So Is Pre-Approval.
            </h2>
            <p className="text-sm text-[color:var(--text-muted)] max-w-md">
              Start the process today — no cost, no obligation, no pressure.
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
              href="mailto:trey.garza@homefinishline.com"
              className="btn-outline-navy"
            >
              Email Trey
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
