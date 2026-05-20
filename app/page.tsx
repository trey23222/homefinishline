import type { Metadata } from 'next'
import Link from 'next/link'
import TrustBar from '@/components/TrustBar'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'San Antonio VA Loan Specialist | Trey Garza | Home Finish Line',
  description: 'Trey Garza, VA Loan Specialist and Licensed Texas Loan Officer at Efinity Mortgage in San Antonio, TX. NMLS# 2700813. $0 down, no PMI, expert guidance for veterans, self-employed borrowers, and first-time buyers.',
  keywords: ['VA loans San Antonio', 'San Antonio VA loan specialist', 'VA loan Texas', 'first time home buyer San Antonio TX', 'Trey Garza mortgage'],
  openGraph: {
    title: 'San Antonio VA Loan Specialist | Trey Garza | Home Finish Line',
    description: 'Expert VA loan guidance for San Antonio veterans. $0 down, no PMI, competitive rates. NMLS# 2700813.',
    url: 'https://homefinishline.com',
  },
  alternates: { canonical: 'https://homefinishline.com' },
}

const audienceCards = [
  {
    badge: 'Military & Veterans',
    icon: '★',
    iconBg: 'bg-[#FBF3E2]',
    iconColor: 'text-[#7A5A0F]',
    title: 'VA Loan Buyers',
    desc: "You've earned this benefit. San Antonio has one of the largest veteran populations in the country, and many buyers here don't realize how powerful the VA loan really is. $0 down, no PMI, competitive rates.",
    stats: [
      { label: 'Down Payment', value: '$0 Required' },
      { label: 'Monthly PMI', value: 'None' },
      { label: 'Loan Limit', value: 'None (full entitlement)' },
    ],
    cta: 'Explore VA Loans',
    href: '/va-loans',
    accent: '#7A5A0F',
  },
  {
    badge: 'Business Owners · 1099',
    icon: '$',
    iconBg: 'bg-[#EBF0F8]',
    iconColor: 'text-navy',
    title: 'Self-Employed Borrowers',
    desc: 'Tax write-offs are a feature, not a disqualifier. Bank statement loan programs are designed for exactly your situation, using your real cash flow instead of your taxed-down income.',
    stats: [
      { label: 'Income Docs', value: 'Bank Statements' },
      { label: 'Tax Returns', value: 'Not Required' },
      { label: 'Loan Types', value: 'Conv · FHA · Portfolio' },
    ],
    cta: 'See How It Works',
    href: '/self-employed',
    accent: '#0D2240',
  },
  {
    badge: 'New to Buying',
    icon: '⌂',
    iconBg: 'bg-[#EBF5EF]',
    iconColor: 'text-[#2A7A4B]',
    title: 'First-Time Buyers',
    desc: "Everything you need to go from 'thinking about it' to holding your keys. Loan programs, down payment assistance, the buying process, FAQ, and a free mortgage calculator, all in one place.",
    stats: [
      { label: 'Min Down Payment', value: '3% (3.5% FHA)' },
      { label: 'DPA Available', value: 'Up to 5%' },
      { label: 'Programs', value: 'FHA · USDA · Conv · DPA' },
    ],
    cta: 'First-Time Buyer Resources',
    href: '/first-time-buyers',
    accent: '#2A7A4B',
  },
]

const vaHighlights = [
  { stat: '$0', label: 'Down Payment Required', desc: 'Buy a home with zero money down. Your service earned this.' },
  { stat: 'No PMI', label: 'No Monthly Mortgage Insurance', desc: 'Save hundreds per month vs conventional loans under 20% down.' },
  { stat: '2.15%', label: 'One-Time Funding Fee', desc: 'Waived entirely for veterans with a service-connected disability rating.' },
  { stat: '∞', label: 'No Loan Limit', desc: 'Full entitlement means no cap on your purchase price for qualified buyers.' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white text-center py-20 px-8"
        style={{
          background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 60%, #1e4d7a 100%)',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="hero-badge">VA Loan Specialist · San Antonio, TX</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            San Antonio VA Loan Specialist
            <br />
            <span className="text-gold-light">Trey Garza</span>
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Licensed Texas Loan Officer helping veterans, self-employed borrowers, and first-time buyers navigate the mortgage process — clearly, honestly, without the runaround.
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
            <a
              href="https://calendly.com/trey-garza-efinitymortgage/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              Book a Call with Trey
            </a>
          </div>
        </div>
      </header>

      {/* TRUST BAR */}
      <TrustBar />

      {/* ABOUT STRIP */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center gap-7 bg-white border border-[color:var(--border)] rounded-xl p-7 flex-wrap">
            <div
              className="w-[72px] h-[72px] rounded-full bg-navy flex items-center justify-center font-playfair text-2xl font-bold text-gold-light flex-shrink-0"
              aria-label="Trey Garza"
            >
              TG
            </div>
            <div className="flex-1 min-w-[200px]">
              <h3 className="font-playfair text-base text-navy mb-0.5">Trey Garza</h3>
              <p className="text-sm text-[color:var(--text-muted)] mb-1.5 leading-snug">
                Licensed Mortgage Loan Officer · Efinity Mortgage · San Antonio, TX<br />
                VA Loan Specialist · NMLS# 2700813
              </p>
              <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">
                I specialize in VA loans for San Antonio&apos;s veteran community and help self-employed borrowers and first-time buyers navigate the mortgage process without the confusion. Every client gets straight answers and a clear path to closing.
              </p>
            </div>
            <div className="flex gap-2.5 flex-wrap ml-auto">
              <a
                href="https://calendly.com/trey-garza-efinitymortgage/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy text-sm"
              >
                Book a Call
              </a>
              <Link href="/about" className="btn-outline-navy text-sm">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIENCE CARDS */}
      <section className="py-16 bg-white border-t border-b border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Who I Help</div>
          <h2 className="section-title">Your Path to Homeownership</h2>
          <p className="section-sub">
            Whether you&apos;ve served our country, run your own business, or are buying your first home, there&apos;s a clear path forward. Choose your situation below.
          </p>

          <div className="grid md:grid-cols-3 gap-5">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-lg ${card.iconBg} ${card.iconColor} flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                      {card.icon}
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold tracking-widest uppercase text-[color:var(--text-muted)]">{card.badge}</div>
                      <h3 className="font-playfair text-base text-navy font-bold">{card.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-4">{card.desc}</p>
                  <div className="bg-cream rounded-lg p-3 flex flex-col gap-2">
                    {card.stats.map((s) => (
                      <div key={s.label} className="flex justify-between items-center text-xs">
                        <span className="text-[color:var(--text-muted)]">{s.label}</span>
                        <span className="font-semibold text-navy">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <Link
                    href={card.href}
                    className="block w-full text-center bg-navy text-white font-semibold text-sm py-2.5 rounded-lg no-underline transition-colors hover:bg-navy-mid"
                  >
                    {card.cta} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VA HIGHLIGHTS */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">VA Loan Benefits</div>
          <h2 className="section-title">Why the VA Loan is the Best Loan in the Market</h2>
          <p className="section-sub">
            San Antonio is home to one of the largest veteran populations in the country. If you&apos;ve served, you&apos;ve earned a benefit that beats every other loan program available.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {vaHighlights.map((item) => (
              <div key={item.label} className="bg-white border border-[color:var(--border)] rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="font-playfair text-4xl font-bold text-navy mb-1">{item.stat}</div>
                <div className="text-xs font-semibold text-gold-dark uppercase tracking-wide mb-2">{item.label}</div>
                <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/va-loans" className="btn-navy inline-block">
              Full VA Loan Deep Dive →
            </Link>
          </div>
        </div>
      </section>

      {/* FREE BUYER GUIDE / LEAD CAPTURE */}
      <section id="buyer-guide" className="py-16" style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 100%)' }}>
        <div className="max-w-5xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="text-gold-light text-xs font-semibold tracking-widest uppercase mb-3">Free Resource</div>
              <h2 className="font-playfair text-3xl font-bold text-white mb-4 leading-tight">
                Get My Free Home Buyer Guide
              </h2>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Everything a first-time buyer in San Antonio needs to know — loan programs, down payment assistance, what to expect at closing, and common mistakes to avoid. Delivered straight to your inbox.
              </p>
              <ul className="flex flex-col gap-2.5">
                {[
                  'Loan program comparison (FHA, VA, USDA, Conventional)',
                  'Texas down payment assistance programs explained',
                  'Step-by-step buying process guide',
                  'Mortgage calculator and planning tools',
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
                formType="guide"
                title="Get My Free Guide"
                subtitle="Delivered instantly. No spam, ever."
                ctaLabel="Send My Free Guide →"
                darkMode={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES SECTION */}
      <section className="py-16 bg-white border-t border-[color:var(--border)]">
        <div className="max-w-5xl mx-auto px-8">
          <div className="section-label">Resources</div>
          <h2 className="section-title">Everything You Need to Get Ready</h2>
          <p className="section-sub">Free tools and guides to help you understand your options and prepare to buy.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: '📊',
                title: 'Loan Programs Compared',
                desc: 'FHA vs VA vs USDA vs Conventional — side-by-side breakdown of every option.',
                href: '/first-time-buyers#loan-programs',
                label: 'Compare Programs',
              },
              {
                icon: '💰',
                title: 'Down Payment Assistance',
                desc: 'Texas DPA programs through TDHCA and TSAHC. Up to 5% toward your down payment.',
                href: '/first-time-buyers#down-payment-assistance',
                label: 'See Programs',
              },
              {
                icon: '🏠',
                title: 'The Buying Process',
                desc: '9 steps from credit check to closing day. No surprises.',
                href: '/first-time-buyers#process',
                label: 'See the Steps',
              },
              {
                icon: '🧮',
                title: 'Mortgage Calculator',
                desc: 'Estimate your monthly payment with taxes, insurance, and MI included.',
                href: '/first-time-buyers#calculator',
                label: 'Open Calculator',
              },
            ].map((resource) => (
              <div key={resource.title} className="border border-[color:var(--border)] rounded-xl p-6 hover:shadow-md transition-shadow bg-cream">
                <div className="text-2xl mb-3">{resource.icon}</div>
                <h3 className="font-playfair text-base font-bold text-navy mb-2">{resource.title}</h3>
                <p className="text-xs text-[color:var(--text-muted)] leading-relaxed mb-4">{resource.desc}</p>
                <Link
                  href={resource.href}
                  className="text-navy font-semibold text-xs no-underline hover:text-gold-dark transition-colors"
                >
                  {resource.label} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-16 border-t border-[color:var(--border)]"
        style={{ background: 'var(--cream-dark)' }}
      >
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex items-center justify-between gap-6 flex-wrap">
            <div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-1.5">
                Ready to Get Started?
              </h2>
              <p className="text-sm text-[color:var(--text-muted)] max-w-sm">
                A 10-minute call tells you exactly where you stand — which loan fits, what you qualify for, and what your next step is. Free, no obligation.
              </p>
            </div>
            <div className="flex gap-2.5 flex-wrap">
              <a
                href="https://calendly.com/trey-garza-efinitymortgage/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy"
              >
                Book a Call with Trey
              </a>
              <a
                href="https://treygarza.floify.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-navy"
              >
                Start Pre-Approval
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
