'use client'

import { useState } from 'react'

const programs = [
  {
    id: 'prog1',
    icon: { bg: '#EBF0F8', color: '#0D2240', label: '1st' },
    title: 'My First Texas Home',
    sub: 'TDHCA · For first-time buyers · Up to 5% DPA',
    body: "The flagship Texas program. My First Texas Home offers a 30-year, below-market-rate mortgage bundled with up to 5% of the loan amount in down payment and closing cost assistance. The assistance is a forgivable second lien — stay in the home for 3 years and the balance is completely forgiven.",
    specs: [
      { label: 'Who qualifies', value: "First-time buyers or buyers who haven't owned in 3 years" },
      { label: 'Assistance amount', value: 'Up to 5% of loan amount' },
      { label: 'Repayment', value: 'Forgivable after 3 years' },
      { label: 'Income limits', value: 'Yes, varies by county and household size' },
      { label: 'Loan types', value: 'FHA, VA, USDA, Conventional' },
      { label: 'Homebuyer ed', value: 'Required (free online options available)' },
    ],
    defaultOpen: true,
  },
  {
    id: 'prog2',
    icon: { bg: '#FBF3E2', color: '#7A5A0F', label: 'HST' },
    title: 'Home Sweet Texas',
    sub: 'TDHCA · Low-to-moderate income · Up to 5% DPA',
    body: "Very similar to My First Texas Home, but with income limits calibrated for low-to-moderate income buyers. Also offers up to 5% in down payment and closing cost assistance as a forgivable second lien. Available to both first-time and repeat buyers in some cases.",
    specs: [
      { label: 'Income focus', value: 'Low to moderate income households' },
      { label: 'Assistance amount', value: 'Up to 5% of loan amount' },
      { label: 'Repayment', value: 'Forgivable after 3 years' },
      { label: 'Loan types', value: 'FHA, VA, USDA, Conventional' },
    ],
  },
  {
    id: 'prog3',
    icon: { bg: '#EBF5EF', color: '#2A7A4B', label: 'MCH' },
    title: 'My Choice Texas Home',
    sub: 'TDHCA · First-time AND repeat buyers · Up to 5% DPA',
    body: "My Choice Texas Home is the repeat-buyer-friendly version of TDHCA's lineup. If you've owned a home before, you still qualify here. Same structure — up to 5% DPA, 30-year low-rate mortgage, forgivable lien — just without the first-time buyer restriction.",
    specs: [
      { label: 'Who qualifies', value: 'First-time AND repeat buyers' },
      { label: 'Assistance amount', value: 'Up to 5% of loan amount' },
      { label: 'Repayment', value: 'Forgivable after 3 years' },
      { label: 'Loan types', value: 'FHA, VA, USDA, Conventional' },
    ],
  },
  {
    id: 'prog4',
    icon: { bg: '#FBF3E2', color: '#C9A84C', label: '★' },
    title: 'Homes for Texas Heroes',
    sub: 'TSAHC · Teachers · Nurses · First Responders · Veterans',
    body: "TSAHC's flagship program is designed specifically for the people who serve Texas communities. Up to 5% in down payment assistance, available as either a grant (zero repayment) or a forgivable second lien. The grant option makes this one of the strongest programs available — no second lien, no three-year waiting period.",
    heroes: ['K-12 Teachers', 'School Librarians', 'School Counselors', 'School Nurses', 'Nursing Faculty', 'Police Officers', 'Correctional Officers', 'Firefighters', 'EMS Personnel', 'Veterans', 'Active-Duty Military'],
    specs: [
      { label: 'Assistance type', value: 'Grant (no repayment) or forgivable lien' },
      { label: 'Assistance amount', value: 'Up to 5% of loan amount' },
      { label: 'Loan types', value: 'FHA, VA, USDA, Conventional' },
      { label: 'Admin by', value: 'TSAHC, Texas State Affordable Housing Corp.' },
    ],
  },
]

const faqs = [
  {
    q: 'Do I have to be a first-time buyer to qualify?',
    a: "Not for all programs. My Choice Texas Home and some TSAHC programs are open to repeat buyers. \"First-time buyer\" for TDHCA purposes means you haven't owned a principal residence in the last three years — so even if you've owned before, you may still qualify.",
  },
  {
    q: 'What happens if I sell or refinance before 3 years?',
    a: 'If you have a forgivable second lien (not a grant), selling or refinancing before the 3-year mark typically requires repayment of the outstanding assistance balance. The balance decreases over time. If you received a grant, there\'s no repayment under any circumstances.',
  },
  {
    q: 'Does DPA affect my interest rate?',
    a: 'DPA programs typically come bundled with the lender\'s rate for that program — it\'s often slightly above the lowest available market rate, but still competitive, especially given that you\'re receiving 3–5% in cash assistance. The net benefit almost always outweighs the marginal rate difference.',
  },
  {
    q: 'How do I apply for Texas DPA?',
    a: "You don't apply directly to TDHCA or TSAHC — you apply through a participating lender (like me). I submit your full file and handle the DPA layer on your behalf. Start with a pre-approval so we know which programs you qualify for before you start shopping.",
  },
]

export default function DPAPrograms() {
  const [open, setOpen] = useState<string>('prog1')

  return (
    <div>
      {/* Intro stats */}
      <div className="grid md:grid-cols-[1fr_260px] gap-8 mb-10">
        <div>
          <p className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-3">
            Texas down payment assistance programs are funded by state housing agencies, not private lenders. The goal is to make homeownership accessible for working Texans who have good income and can afford a mortgage payment, but haven&apos;t had time to save a large down payment.
          </p>
          <p className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-3">
            The assistance comes in two forms: a <strong className="text-navy">grant</strong> (never repaid) or a <strong className="text-navy">forgivable second lien</strong> (forgiven after 3 years if you stay in the home). Either way, it covers your down payment, your closing costs, or both.
          </p>
          <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">
            These programs pair with an FHA, VA, USDA, or conventional mortgage — your DPA assistance sits on top of your main loan, handled entirely behind the scenes.
          </p>
        </div>
        <div className="bg-navy rounded-xl p-6 text-white">
          <div className="text-xs font-semibold tracking-widest uppercase text-gold-light mb-4">At a Glance</div>
          {[
            { num: 'Up to 5%', label: 'of loan amount toward down payment' },
            { num: '$0', label: 'repayment required on grant option' },
            { num: '4', label: 'major programs available in Texas' },
          ].map((item) => (
            <div key={item.num} className="pb-3.5 mb-3.5 border-b border-white/10 last:border-0 last:pb-0 last:mb-0">
              <div className="font-playfair text-3xl font-bold">{item.num}</div>
              <div className="text-xs text-white/60 mt-0.5">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Programs accordion */}
      <div className="section-label mb-4">The Programs</div>
      <h3 className="font-playfair text-xl font-bold text-navy mb-6">Texas DPA Programs Explained</h3>
      <div className="flex flex-col gap-3">
        {programs.map((prog) => (
          <div key={prog.id} className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden">
            <button
              className="w-full flex items-center gap-4 p-6 text-left cursor-pointer bg-transparent border-none hover:bg-cream transition-colors"
              onClick={() => setOpen(open === prog.id ? '' : prog.id)}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center font-playfair font-bold text-lg flex-shrink-0"
                style={{ background: prog.icon.bg, color: prog.icon.color }}
              >
                {prog.icon.label}
              </div>
              <div className="flex-1">
                <div className="font-playfair text-base font-bold text-navy">{prog.title}</div>
                <div className="text-xs text-[color:var(--text-muted)] mt-0.5">{prog.sub}</div>
              </div>
              <span className={`text-[color:var(--text-muted)] transition-transform text-lg ${open === prog.id ? 'rotate-180' : ''}`}>▾</span>
            </button>

            {open === prog.id && (
              <div className="px-6 pb-6 border-t border-[color:var(--border)]">
                <p className="text-sm text-[color:var(--text-mid)] leading-relaxed my-4">{prog.body}</p>

                {prog.heroes && (
                  <div className="mb-4">
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold-dark mb-3">Who Qualifies as a Texas Hero</div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {prog.heroes.map((h) => (
                        <div key={h} className="flex items-center gap-2 bg-cream rounded-lg px-3 py-2 text-xs text-[color:var(--text-mid)]">
                          <span className="text-gold-dark">★</span>
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  {prog.specs.map((spec) => (
                    <div key={spec.label} className="bg-cream rounded-lg px-3 py-2.5">
                      <div className="text-[10px] font-semibold uppercase text-navy tracking-wide mb-1">{spec.label}</div>
                      <div className="text-xs text-[color:var(--text-mid)]">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* DPA FAQ */}
      <div className="mt-10">
        <div className="section-label mb-4">Common Questions</div>
        <h3 className="font-playfair text-xl font-bold text-navy mb-5">DPA Questions, Answered</h3>
        <div className="border border-[color:var(--border)] rounded-xl overflow-hidden">
          {faqs.map((faq, i) => (
            <div key={faq.q} className={`p-5 ${i < faqs.length - 1 ? 'border-b border-[color:var(--border)]' : ''}`}>
              <div className="font-semibold text-navy text-sm mb-2">{faq.q}</div>
              <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
