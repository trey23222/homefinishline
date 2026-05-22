import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Free Home Buying Zoom Class | Register | Home Finish Line',
  description: 'Register for Trey Garza\'s free Zoom home buying class for first-time buyers in San Antonio. Learn about VA loans, down payment assistance, and the mortgage process.',
  robots: { index: false },
  alternates: { canonical: 'https://homefinishline.com/zoom-register' },
}

export default function ZoomRegisterPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 100%)' }}
    >
      <div className="w-full max-w-lg">
        {/* Logo / Brand */}
        <div className="text-center mb-8">
          <div className="font-playfair text-2xl font-bold text-white mb-1">
            Home <span className="text-gold-light">Finish Line</span>
          </div>
          <p className="text-white/50 text-xs">Trey Garza · Licensed TX Loan Officer · NMLS# 2700813</p>
        </div>

        {/* Main card */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-navy px-7 py-6 text-white text-center">
            <div className="text-xs font-semibold tracking-widest uppercase text-gold-light mb-2">Free Online Class</div>
            <h1 className="font-playfair text-2xl font-bold mb-2 leading-tight">
              Home Buying 101<br />
              <span className="text-gold-light">San Antonio</span>
            </h1>
            <p className="text-sm text-white/70">
              Everything a first-time buyer needs to know — VA loans, down payment assistance, the mortgage process, and your questions answered live.
            </p>
          </div>

          {/* Class details */}
          <div className="grid grid-cols-3 divide-x divide-[color:var(--border)] border-b border-[color:var(--border)]">
            {[
              { icon: '⏱', label: 'Duration', value: '60 min' },
              { icon: '💻', label: 'Format', value: 'Live Zoom' },
              { icon: '🎓', label: 'Cost', value: 'Free' },
            ].map((item) => (
              <div key={item.label} className="py-4 text-center">
                <div className="text-lg mb-0.5">{item.icon}</div>
                <div className="text-[10px] font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">{item.label}</div>
                <div className="text-sm font-bold text-navy">{item.value}</div>
              </div>
            ))}
          </div>

          {/* What you'll learn */}
          <div className="px-7 pt-6 pb-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-gold-dark mb-3">What You&apos;ll Learn</div>
            <ul className="flex flex-col gap-2">
              {[
                'VA loan basics and eligibility for San Antonio veterans',
                'FHA, USDA, and conventional loan comparison',
                'Texas down payment assistance programs (up to 5%)',
                'The step-by-step buying process in San Antonio',
                'What your credit score actually needs to be',
                'Live Q&A with Trey',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[color:var(--text-mid)]">
                  <span className="text-[#2A7A4B] flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="px-7 pt-2 pb-7">
            <div className="border-t border-[color:var(--border)] pt-6">
              <LeadForm
                formType="zoom_register"
                title=""
                subtitle=""
                ctaLabel="Reserve My Spot →"
                showPhone={true}
                darkMode={false}
              />
            </div>
          </div>
        </div>

        {/* Trust line */}
        <div className="text-center mt-6 text-white/40 text-xs">
          <p>Trey Garza · Efinity Mortgage · San Antonio, TX</p>
          <p className="mt-1">NMLS# 2700813 · Licensed Texas Loan Officer · Equal Housing Opportunity</p>
        </div>
      </div>
    </div>
  )
}
