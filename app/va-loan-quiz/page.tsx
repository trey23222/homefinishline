import type { Metadata } from 'next'
import VALoanQuiz from '@/components/VALoanQuiz'

export const metadata: Metadata = {
  title: 'VA Loan Eligibility Quiz | Check Your Status in 2 Minutes | Home Finish Line',
  description: 'Answer 5 quick questions to find out if you qualify for a VA home loan in Texas. Personalized results and guidance from Trey Garza, VA Loan Specialist NMLS# 2700813.',
  keywords: ['VA loan eligibility quiz', 'do I qualify for VA loan', 'VA loan eligibility Texas', 'VA loan checker San Antonio', 'am I eligible for VA loan'],
  openGraph: {
    title: 'VA Loan Eligibility Quiz | Home Finish Line',
    description: '5 questions. 2 minutes. Find out if your VA loan benefit is ready to use.',
    url: 'https://homefinishline.com/va-loan-quiz',
  },
  alternates: { canonical: 'https://homefinishline.com/va-loan-quiz' },
}

export default function VALoanQuizPage() {
  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white text-center py-14 px-8"
        style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 60%, #1e4d7a 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="hero-badge">Veterans · Active Duty · National Guard · Reserves</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            VA Loan Eligibility <span className="text-gold-light">Quiz</span>
          </h1>
          <p className="text-white/80 text-base max-w-lg mx-auto leading-relaxed">
            5 questions. 2 minutes. Find out if you qualify for $0 down VA financing — and get personalized guidance from a licensed VA loan specialist.
          </p>
        </div>
      </header>

      {/* QUIZ */}
      <section className="py-14 px-4">
        <VALoanQuiz />
      </section>

      {/* TRUST STRIP */}
      <section className="py-10 border-t border-[color:var(--border)] bg-white">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <p className="text-sm text-[color:var(--text-muted)] mb-1">
            <strong className="text-navy">Trey Garza</strong> · Licensed Texas Loan Officer · NMLS# 2700813 · Efinity Mortgage NMLS# 1043983
          </p>
          <p className="text-xs text-[color:var(--text-muted)]">
            Quiz results are informational only and do not constitute a commitment to lend or a pre-approval. Actual eligibility is determined during the loan application process.
          </p>
        </div>
      </section>
    </>
  )
}
