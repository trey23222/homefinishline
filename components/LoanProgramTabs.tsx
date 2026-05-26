'use client'

import { useState } from 'react'

type Spec = [string, string, boolean]

interface Program {
  id: string
  label: string
  tag: string | null
  header: { bg: string; title: string; sub: string }
  badge: { bg: string; color: string; text: string }
  title: string
  tagline: string
  body: string[]
  whoTitle: string
  whoBg?: string
  who: string[]
  pros: string[]
  cons: string[]
  specs: Spec[]
}

const programs: Program[] = [
  {
    id: 'fha',
    label: 'FHA',
    tag: 'Most Common',
    header: { bg: '#0D2240', title: 'FHA Loan, At a Glance', sub: 'Key numbers for 2026' },
    badge: { bg: '#EBF0F8', color: '#0D2240', text: 'Government-Backed · FHA' },
    title: 'FHA Loan',
    tagline: 'The most popular path into homeownership for first-time buyers — flexible credit, low down payment.',
    body: [
      'FHA loans are backed by the Federal Housing Administration, which means lenders take on less risk, and pass that flexibility along to you. If your credit isn\'t perfect or your savings are limited, FHA is almost always the conversation starter.',
      'The trade-off is mortgage insurance. You\'ll pay an upfront MIP (1.75% of the loan amount, rolled into your loan) plus an annual premium. On a $250,000 loan, that\'s about $4,375 upfront and roughly $137/month. Unlike conventional loans, FHA mortgage insurance doesn\'t automatically drop off when you hit 20% equity — you\'d need to refinance to remove it.',
    ],
    whoTitle: 'Who This Works Best For',
    who: [
      'Credit score between 580–639 (lower scores = higher down payment required)',
      'Limited savings, need the lowest possible down payment',
      'Higher debt-to-income ratio that conventional lenders won\'t approve',
      'First-time buyer who wants maximum flexibility to qualify',
    ],
    pros: [
      'Only 3.5% down with 580+ credit score',
      'More flexible debt-to-income guidelines',
      'Gift funds allowed for down payment',
      'Available across Texas statewide',
      'Can be combined with Texas DPA programs',
    ],
    cons: [
      'Mortgage insurance required (MIP) for life of loan in most cases',
      'Loan limits vary by county',
      'Property must meet FHA condition standards',
      'Slightly higher total cost vs conventional if credit is strong',
    ],
    specs: [
      ['Min. Down Payment', '3.5%', true],
      ['Min. Credit Score', '580', false],
      ['Mortgage Insurance', 'Required (MIP)', false],
      ['Upfront MIP', '1.75% of loan', false],
      ['Annual MIP', '~0.55%/yr', false],
      ['DTI Limit', 'Up to 57%', false],
      ['Bexar Co. Loan Limit', '$524,225', false],
    ],
  },
  {
    id: 'va',
    label: 'VA',
    tag: 'Best for Veterans',
    header: { bg: '#7A5A0F', title: 'VA Loan, At a Glance', sub: 'Key numbers for 2026' },
    badge: { bg: '#FBF3E2', color: '#7A5A0F', text: 'Military · Veterans · Surviving Spouses' },
    title: 'VA Loan',
    tagline: "The best home loan on the market, full stop. If you've earned it, use it.",
    body: [
      "The VA loan is a benefit earned through military service, and it's genuinely the best loan program available. No down payment, no monthly mortgage insurance, competitive rates, and flexible qualification guidelines. San Antonio has one of the largest veteran populations in the country, and many buyers here don't realize how powerful this benefit is.",
      "You pay a one-time VA funding fee (typically 2.15% for first use, rolled into the loan), but no monthly PMI, which alone saves hundreds per month compared to a conventional loan with less than 20% down. Veterans with a service-connected disability rating may be exempt from the funding fee entirely.",
    ],
    whoTitle: 'Who Qualifies',
    whoBg: '#FBF3E2',
    who: [
      'Active-duty service members (90+ days of service)',
      'Veterans who served and were honorably discharged',
      'National Guard / Reserve members (6+ years, or 90 days active duty)',
      'Eligible surviving spouses of veterans',
    ],
    pros: [
      'Zero down payment required',
      'No monthly mortgage insurance (PMI/MIP)',
      'No income limits',
      'No loan limit for most veterans (full entitlement)',
      'Competitive interest rates',
      'Can be reused multiple times',
    ],
    cons: [
      'One-time funding fee (waived for disability-rated veterans)',
      'Must be primary residence, no investment properties',
      'Property must meet VA minimum property requirements',
    ],
    specs: [
      ['Down Payment', '$0 Required', true],
      ['Monthly Mortgage Insurance', 'None', true],
      ['Funding Fee (first use)', '2.15%', false],
      ['Disability Exemption', 'Yes, fee waived', true],
      ['Income Limits', 'None', true],
      ['Loan Limit', 'None (full entitlement)', true],
      ['Min. Credit Score', 'Flexible (620 typical)', false],
    ],
  },
  {
    id: 'usda',
    label: 'USDA',
    tag: '$0 Down',
    header: { bg: '#2A7A4B', title: 'USDA Loan, At a Glance', sub: 'Key numbers for 2026' },
    badge: { bg: '#EBF5EF', color: '#2A7A4B', text: 'Rural · Suburban · Zero Down' },
    title: 'USDA Loan',
    tagline: 'Zero down payment for eligible Texas communities — and more areas qualify than most buyers expect.',
    body: [
      "The USDA Rural Development loan is one of the most underused programs in Texas. It offers 100% financing — no down payment — for homes in eligible rural and suburban areas. The key misconception is that \"rural\" means farmland. Many San Antonio suburbs, bedroom communities, and smaller Texas cities qualify.",
      "There are two forms of mortgage insurance: an upfront guarantee fee (1% of the loan, rolled in) and an annual fee (0.35%/year). That annual rate is significantly lower than FHA's MIP, making USDA one of the most affordable options for buyers who qualify, both on rate and monthly cost.",
    ],
    whoTitle: 'Does My Area Qualify?',
    whoBg: '#EBF5EF',
    who: [
      'Use the USDA eligibility map at eligibility.sc.egov.usda.gov to check any address',
      'Many communities 30–60 miles outside San Antonio qualify',
      'Income limits apply — typically 115% of the area median income',
      'Must be your primary residence',
    ],
    pros: [
      'Zero down payment',
      'Annual fee lower than FHA MIP',
      'Competitive interest rates',
      'Flexible credit guidelines (640+ typical)',
      'Can finance closing costs into loan in some cases',
    ],
    cons: [
      'Geographic restrictions — must be in eligible area',
      'Income limits apply',
      'Primary residence only',
      'Property must meet USDA standards',
    ],
    specs: [
      ['Down Payment', '$0 Required', true],
      ['Guarantee Fee (upfront)', '1.0% of loan', false],
      ['Annual Fee', '0.35%/yr', true],
      ['Min. Credit Score', '640 typical', false],
      ['Income Limits', 'Yes (115% AMI)', false],
      ['Geographic Limit', 'Eligible areas only', false],
    ],
  },
  {
    id: 'conventional',
    label: 'Conventional',
    tag: null,
    header: { bg: '#0D2240', title: 'Conventional, At a Glance', sub: 'Key numbers for 2026' },
    badge: { bg: '#EBF0F8', color: '#0D2240', text: 'Conventional · Fannie Mae · Freddie Mac' },
    title: 'Conventional Loan',
    tagline: 'The best choice once your credit is solid — lower long-term cost and no lifetime mortgage insurance.',
    body: [
      "Conventional loans aren't backed by the government — they're sold to Fannie Mae or Freddie Mac on the secondary market. That means tighter qualification standards, but also better pricing for buyers with good credit and a lower total cost over time.",
      "The biggest advantage over FHA: mortgage insurance (PMI) automatically cancels once you reach 80% loan-to-value. On FHA, you'd need to refinance. If your credit is 700+ and you have a modest down payment, conventional often wins on total cost. Fannie's HomeReady and Freddie's Home Possible programs allow just 3% down for first-time buyers with income at or below 80% of the area median.",
    ],
    whoTitle: 'Who This Works Best For',
    who: [
      'Credit score of 680+ (best pricing at 740+)',
      'Stable employment and clean credit history',
      'Buyer who plans to stay in the home long enough to see PMI drop off',
      'Income at or below 80% AMI (for HomeReady / Home Possible 3% down)',
    ],
    pros: [
      'PMI drops automatically at 80% LTV',
      'As low as 3% down (HomeReady / Home Possible)',
      'Best rates for buyers with 740+ credit',
      'No upfront mortgage insurance fee',
      'More flexibility on property type',
    ],
    cons: [
      'Stricter credit requirements (620+ minimum, 680+ ideal)',
      'PMI required if less than 20% down',
      'Less flexible DTI guidelines vs FHA',
      'Lower credit score = significantly higher rate',
    ],
    specs: [
      ['Min. Down Payment', '3% (HomeReady)', true],
      ['Min. Credit Score', '620 (680+ ideal)', false],
      ['PMI', 'Cancels at 80% LTV', false],
      ['Upfront Fee', 'None', true],
      ['Conforming Loan Limit', '$806,500 (2026)', false],
      ['DTI Limit', 'Up to 50% (DU approved)', false],
    ],
  },
  {
    id: 'dpa',
    label: 'DPA',
    tag: 'Texas',
    header: { bg: '#7A5A0F', title: 'Texas DPA, At a Glance', sub: 'Key numbers for 2026' },
    badge: { bg: '#FBF3E2', color: '#7A5A0F', text: 'Texas · TDHCA · TSAHC' },
    title: 'Down Payment Assistance',
    tagline: 'Up to 5% toward your down payment and closing costs — programs many Texas buyers don\'t know they qualify for.',
    body: [
      "Texas runs some of the best down payment assistance programs in the country through the Texas Department of Housing and Community Affairs (TDHCA) and the Texas State Affordable Housing Corporation (TSAHC). These programs aren't loans from a payday lender — they're state-administered programs that pair with your FHA, VA, USDA, or conventional mortgage.",
      "The assistance comes as either a grant (no repayment ever) or a forgivable second lien (forgiven after 3 years if you stay in the home). Combined with an FHA loan, many buyers close with little to nothing out of pocket.",
    ],
    whoTitle: 'Key Texas Programs',
    whoBg: '#FBF3E2',
    who: [
      'My First Texas Home (TDHCA) — 30-yr low-rate mortgage + up to 5% DPA. For first-time buyers or buyers who haven\'t owned in 3 years.',
      'Home Sweet Texas (TDHCA) — Similar structure, broader income limits.',
      'My Choice Texas Home (TDHCA) — Available to both first-time and repeat buyers.',
      'Homes for Texas Heroes (TSAHC) — Up to 5% grant for teachers, nurses, first responders, and veterans.',
    ],
    pros: [
      'Up to 5% toward down payment + closing costs',
      'Grant option — no repayment required',
      'Stacks with FHA, VA, USDA, or conventional',
      'Competitive interest rates built in',
      'Heroes program covers many professions',
    ],
    cons: [
      'Income limits apply (area-based)',
      'Homebuyer education course required',
      'Must be primary residence',
      'Slightly higher rate vs standalone loan in some cases',
    ],
    specs: [
      ['Max Assistance', 'Up to 5%', true],
      ['Repayment', 'Grant — none required', true],
      ['Loan Types', 'FHA, VA, USDA, Conv.', false],
      ['Income Limits', 'Yes (area-based)', false],
      ['Homebuyer Ed', 'Required (free online)', false],
      ['Programs', 'TDHCA · TSAHC', false],
    ],
  },
]

export default function LoanProgramTabs() {
  const [active, setActive] = useState('fha')
  const program = programs.find((p) => p.id === active)!

  return (
    <div>
      {/* Tab bar */}
      <div className="flex gap-1.5 flex-wrap mb-8 bg-white border border-[color:var(--border)] rounded-xl p-1.5">
        {programs.map((p) => (
          <button
            key={p.id}
            onClick={() => setActive(p.id)}
            className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-lg text-sm font-semibold transition-all cursor-pointer border-none font-sans ${
              active === p.id
                ? 'bg-navy text-white'
                : 'bg-transparent text-[color:var(--text-muted)] hover:bg-cream hover:text-navy'
            }`}
          >
            {p.label}
            {p.tag && (
              <span className={`ml-1.5 text-[10px] px-1.5 py-0.5 rounded font-medium ${
                active === p.id ? 'bg-white/15 text-white/80' : 'bg-cream-dark text-[color:var(--text-muted)]'
              }`}>
                {p.tag}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div className="grid md:grid-cols-[1fr_300px] gap-6">
        <div>
          <div
            className="inline-block text-xs font-semibold tracking-wider uppercase px-2.5 py-1 rounded mb-3"
            style={{ background: program.badge.bg, color: program.badge.color }}
          >
            {program.badge.text}
          </div>
          <h3 className="font-playfair text-2xl font-bold text-navy mb-1">{program.title}</h3>
          <p className="text-base text-[color:var(--text-muted)] italic mb-5">{program.tagline}</p>
          {program.body.map((p, i) => (
            <p key={i} className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-3">{p}</p>
          ))}

          <div className="text-xs font-semibold uppercase tracking-wider text-navy mt-5 mb-2">{program.whoTitle}</div>
          <div className="rounded-xl p-4 mb-5" style={{ background: program.whoBg || '#EBF0F8' }}>
            <ul className="list-none m-0 p-0 flex flex-col gap-2">
              {program.who.map((w) => (
                <li key={w} className="flex gap-2 items-start text-sm text-[color:var(--text-mid)]">
                  <span className="text-navy flex-shrink-0 mt-0.5">→</span>
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-xs font-semibold uppercase tracking-wider text-navy mb-3">Pros & Considerations</div>
          <div className="grid sm:grid-cols-2 gap-3">
            <div>
              <div className="text-xs font-semibold text-[#2A7A4B] uppercase mb-2">Pros</div>
              <ul className="list-none m-0 p-0 flex flex-col gap-1">
                {program.pros.map((p) => (
                  <li key={p} className="flex gap-2 items-start text-sm text-[color:var(--text-mid)]">
                    <span className="text-[#2A7A4B] font-bold flex-shrink-0 mt-0.5">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold text-[color:var(--text-muted)] uppercase mb-2">Considerations</div>
              <ul className="list-none m-0 p-0 flex flex-col gap-1">
                {program.cons.map((c) => (
                  <li key={c} className="flex gap-2 items-start text-sm text-[color:var(--text-muted)]">
                    <span className="font-bold flex-shrink-0 mt-0.5 text-base leading-none">·</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specs card */}
        <div className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden self-start sticky top-[180px]">
          <div className="px-5 py-4 text-white" style={{ background: program.header.bg }}>
            <div className="font-playfair font-bold text-base">{program.header.title}</div>
            <div className="text-xs text-white/60 mt-0.5">{program.header.sub}</div>
          </div>
          {program.specs.map(([label, value, good]) => (
            <div key={label} className="flex justify-between items-center px-5 py-3 border-b border-[color:var(--border)] last:border-0 text-sm">
              <span className="text-[color:var(--text-muted)]">{label}</span>
              <span className={`font-semibold ${good ? 'text-[#2A7A4B]' : 'text-navy'}`}>{value}</span>
            </div>
          ))}
          <div className="p-4 bg-cream">
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-navy text-white font-semibold text-sm py-2.5 rounded-lg no-underline transition-colors hover:bg-navy-mid"
            >
              Check My Eligibility →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
