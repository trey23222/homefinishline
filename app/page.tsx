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
    image: 'https://images.unsplash.com/photo-1529787730-bdcabd22a644?auto=format&fit=crop&w=1200&q=80',
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
    badge: 'New to Buying',
    icon: '⌂',
    iconBg: 'bg-[#EBF5EF]',
    iconColor: 'text-[#2A7A4B]',
    title: 'First-Time Buyers',
    image: 'https://images.unsplash.com/photo-1758523671285-9ff3f4e0ff38?auto=format&fit=crop&w=1200&q=80',
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
  {
    badge: 'Doctors · Dentists · Residents · Fellows',
    icon: '✚',
    iconBg: 'bg-[#EBF0F8]',
    iconColor: 'text-navy',
    title: 'Physician & Professional Buyers',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1200&q=80',
    desc: 'Attending physicians, residents, fellows, and dentists get loan programs built around your career path — low or no down payment, favorable student loan treatment, and the ability to close on a signed contract before your start date.',
    stats: [
      { label: 'Down Payment', value: 'As Low as 0%' },
      { label: 'Monthly PMI', value: 'None (most programs)' },
      { label: 'Student Loans', value: 'Favorable DTI Treatment' },
    ],
    cta: 'Explore Physician Loans',
    href: '/physician-loans',
    accent: '#0D2240',
  },
  {
    badge: 'Trading Up · Growing Families',
    icon: '↑',
    iconBg: 'bg-[#EAF0F6]',
    iconColor: 'text-[#1A3A5C]',
    title: 'Move-Up Buyers',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80',
    desc: "Ready to trade up to your next home? Whether you're upgrading for more space, a growing family, or a better fit, I'll help you plan the timing, financing, and equity strategy to make the move smoothly.",
    stats: [
      { label: 'Loan Types', value: 'Conventional · Jumbo' },
      { label: 'Equity', value: 'Use Toward Next Down Payment' },
      { label: 'Timeline', value: 'Buy Before or After You Sell' },
    ],
    cta: 'Talk to Trey About Your Next Move',
    href: '/contact',
    accent: '#1A3A5C',
  },
  {
    badge: 'Investors · Rental Properties',
    icon: '$',
    iconBg: 'bg-[#FBF0DE]',
    iconColor: 'text-[#C8952A]',
    title: 'Real Estate Investors (DSCR)',
    image: 'https://images.unsplash.com/photo-1742318592061-15c5f19e1e47?auto=format&fit=crop&w=1200&q=80',
    desc: "Buying a rental property? DSCR loans qualify based on the property's rental income, not your personal income or tax returns. LLC and entity ownership welcome, ideal for growing your portfolio.",
    stats: [
      { label: 'Qualifying Income', value: 'Property Cash Flow' },
      { label: 'Tax Returns', value: 'Not Required' },
      { label: 'Ownership', value: 'LLC / Entity Allowed' },
    ],
    cta: 'Explore DSCR Loans',
    href: '/dscr-loans',
    accent: '#C8952A',
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
          backgroundImage: 'url("/images/san-antonio-skyline.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'rgba(10, 22, 40, 0.58)' }}
        />
        <div className="relative max-w-3xl mx-auto">
          <div className="hero-badge">VA Loan Specialist · San Antonio, TX</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            San Antonio VA Loan Specialist
            <br />
            <span className="text-gold-light">Trey Garza</span>
          </h1>
          <p className="text-white/80 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Licensed Texas Loan Officer helping veterans, first-time buyers, and move-up buyers navigate the mortgage process — clearly, honestly, without the runaround.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Start My Pre-Approval →
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
            <img
              src="/images/headshot.png"
              alt="Trey Garza"
              className="w-[72px] h-[72px] rounded-full object-cover flex-shrink-0 border-2 border-[color:var(--border)]"
            />
            <div className="flex-1 min-w-[200px]">
              <h3 className="font-playfair text-base text-navy mb-0.5">Trey Garza</h3>
              <p className="text-sm text-[color:var(--text-muted)] mb-1.5 leading-snug">
                Licensed Mortgage Loan Officer · Efinity Mortgage · San Antonio, TX<br />
                VA Loan Specialist · NMLS# 2700813
              </p>
              <p className="text-sm text-[color:var(--text-mid)] leading-relaxed">
                I specialize in VA loans for San Antonio&apos;s veteran community and help first-time buyers, professionals, and move-up buyers navigate the mortgage process without the confusion. Every client gets straight answers and a clear path to closing.
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
            Whether you&apos;ve served our country, are buying your first home, work as a physician or professional, are ready to move up, or are growing a rental portfolio, there&apos;s a clear path forward. Choose your situation below.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {audienceCards.map((card) => (
              <div
                key={card.title}
                className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden flex flex-col hover:shadow-lg transition-shadow"
              >
                {/* Card image banner */}
                <div
                  className="h-40 relative flex-shrink-0"
                  style={{
                    backgroundImage: `url("${card.image}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0" style={{ background: 'rgba(10, 22, 40, 0.55)' }} />
                </div>
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
