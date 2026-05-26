'use client'

import { useState } from 'react'

type Answers = Record<string, string>

const questions = [
  {
    id: 'q1',
    question: 'Have you served in the US military?',
    options: [
      { value: 'yes_active', label: 'Yes — Active Duty' },
      { value: 'yes_veteran', label: 'Yes — Veteran' },
      { value: 'yes_guard', label: 'Yes — National Guard or Reserves' },
      { value: 'no', label: 'No' },
    ],
    skip: (_a: Answers) => false,
  },
  {
    id: 'q2',
    question: 'How long did you serve?',
    options: [
      { value: 'less_than_90', label: 'Less than 90 days' },
      { value: '90_to_2_years', label: '90 days to 2 years' },
      { value: 'more_than_2', label: 'More than 2 years' },
      { value: 'still_serving', label: 'Still serving' },
    ],
    skip: (a: Answers) => a.q1 === 'no',
  },
  {
    id: 'q3',
    question: 'What is your discharge status?',
    options: [
      { value: 'honorable', label: 'Honorable' },
      { value: 'general_honorable', label: 'General under honorable' },
      { value: 'other_honorable', label: 'Other than honorable' },
      { value: 'still_serving', label: 'Still serving / N/A' },
    ],
    skip: (a: Answers) => a.q1 === 'no' || a.q2 === 'still_serving',
  },
  {
    id: 'q4',
    question: 'Have you used your VA loan benefit before?',
    options: [
      { value: 'first_time', label: 'No — first time' },
      { value: 'yes_paid_off', label: 'Yes — paid it off' },
      { value: 'yes_still_have', label: 'Yes — still have a VA loan' },
    ],
    skip: (_a: Answers) => false,
  },
  {
    id: 'q5',
    question: 'What is your credit score range?',
    options: [
      { value: 'below_580', label: 'Below 580' },
      { value: '580_619', label: '580–619' },
      { value: '620_659', label: '620–659' },
      { value: '660_plus', label: '660 or higher' },
    ],
    skip: (_a: Answers) => false,
  },
]

function getVisibleQuestions(answers: Answers) {
  return questions.filter(q => !q.skip(answers))
}

function computeOutcome(answers: Answers): 'likely' | 'possible' | 'review' {
  if (answers.q1 === 'no') return 'review'
  if (answers.q2 === 'less_than_90') return 'possible'
  if (answers.q3 === 'other_honorable') return 'possible'
  if (answers.q5 === 'below_580') return 'possible'
  return 'likely'
}

function buildMessage(answers: Answers, outcome: string) {
  const labelFor = (qId: string, val: string) =>
    questions.find(q => q.id === qId)?.options.find(o => o.value === val)?.label ?? val
  const lines = Object.entries(answers).map(
    ([qId, val]) => `${questions.find(q => q.id === qId)?.question}: ${labelFor(qId, val)}`
  )
  return `VA Quiz Result: ${outcome}\n${lines.join('\n')}`
}

const outcomes = {
  likely: {
    label: 'Likely Eligible',
    badgeBg: '#EBF5EF',
    badgeText: '#2A7A4B',
    dot: '#2A7A4B',
    headline: "Great news — you appear to be VA loan eligible.",
    message:
      "Based on your answers, you meet the core VA loan eligibility requirements. That means $0 down, no monthly mortgage insurance, and competitive rates. The next step is confirming your Certificate of Eligibility and running the real numbers.",
    bullets: [
      '$0 down payment required',
      'No monthly mortgage insurance — ever',
      'No loan limits with full entitlement',
      'Rates typically lower than conventional loans',
    ],
  },
  possible: {
    label: 'Possibly Eligible',
    badgeBg: '#FEF9EC',
    badgeText: '#A86D10',
    dot: '#C9A84C',
    headline: "Your situation is worth a closer look.",
    message:
      "Some factors in your answers may affect eligibility — but there are often paths forward that automated tools won't find. Character of discharge reviews, medical discharge exceptions, and credit improvement strategies all exist. I work with veterans in exactly these situations.",
    bullets: [
      'Character of discharge reviews may restore eligibility',
      'Medical or hardship discharge exceptions apply in some cases',
      'Credit improvement can open doors in 60–90 days',
      'FHA and other programs available as a backup path',
    ],
  },
  review: {
    label: 'VA Eligibility Not Indicated',
    badgeBg: '#FEF2EE',
    badgeText: '#B84A24',
    dot: '#E07050',
    headline: "VA eligibility may not apply — but you have strong options.",
    message:
      "Based on your answers, a standard VA loan likely isn't available for your situation. The good news: there are excellent home loan programs for Texas buyers regardless — FHA with 3.5% down, USDA for suburban areas, and conventional loans. A quick conversation will identify the right fit.",
    bullets: [
      'FHA: 3.5% down, flexible credit requirements',
      'USDA: $0 down for eligible Texas areas',
      'Conventional: 3–20% down, strong credit preferred',
      'Down payment assistance programs available in Texas',
    ],
  },
}

export default function VALoanQuiz() {
  const [answers, setAnswers] = useState<Answers>({})
  const [qIndex, setQIndex] = useState(0)
  const [phase, setPhase] = useState<'quiz' | 'contact' | 'results'>('quiz')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [outcome, setOutcome] = useState<'likely' | 'possible' | 'review'>('likely')

  const visibleQ = getVisibleQuestions(answers)
  const currentQ = visibleQ[qIndex]
  const absIndex = questions.findIndex(q => q.id === currentQ?.id)

  const progressPct =
    phase === 'contact'
      ? 100
      : Math.round(((absIndex + 1) / 6) * 100)

  function selectAnswer(value: string) {
    const newAnswers = { ...answers, [currentQ.id]: value }
    setAnswers(newAnswers)
    setTimeout(() => {
      const nextVisible = getVisibleQuestions(newAnswers)
      if (qIndex + 1 >= nextVisible.length) {
        setPhase('contact')
      } else {
        setQIndex(i => i + 1)
      }
    }, 180)
  }

  function goBack() {
    if (phase === 'contact') { setPhase('quiz'); return }
    if (qIndex > 0) setQIndex(i => i - 1)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitting(true)
    const result = computeOutcome(answers)
    setOutcome(result)
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          form_type: 'va_quiz',
          message: buildMessage(answers, outcomes[result].label),
        }),
      })
    } catch { /* non-blocking */ }
    setSubmitting(false)
    setPhase('results')
  }

  // ── Results ──────────────────────────────────────────────
  if (phase === 'results') {
    const r = outcomes[outcome]
    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden">
          <div
            className="px-6 py-3 flex items-center gap-2.5 text-sm font-semibold border-b border-[color:var(--border)]"
            style={{ background: r.badgeBg, color: r.badgeText }}
          >
            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: r.dot }} />
            {r.label}
          </div>
          <div className="p-7">
            <h2 className="font-playfair text-2xl font-bold text-navy mb-3 leading-snug">{r.headline}</h2>
            <p className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-5">{r.message}</p>
            <ul className="mb-7 flex flex-col gap-2.5">
              {r.bullets.map(b => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-[color:var(--text-mid)]">
                  <span className="text-gold-dark font-bold mt-0.5 flex-shrink-0">✓</span>
                  {b}
                </li>
              ))}
            </ul>
            <a
              href="https://calendly.com/trey-garza-efinitymortgage/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-navy text-white font-semibold py-3.5 rounded-lg no-underline hover:bg-navy-mid transition-colors mb-3 text-sm"
            >
              Book a Call with Trey →
            </a>
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center border border-[color:var(--border)] text-navy font-semibold py-3 rounded-lg no-underline hover:border-navy transition-colors text-sm"
            >
              Start My Pre-Approval
            </a>
          </div>
        </div>
        <p className="mt-4 text-center text-[11px] text-[color:var(--text-muted)] leading-relaxed">
          Trey Garza NMLS# 2700813 · Efinity Mortgage NMLS# 1043983 · Licensed in Texas · Results are informational only and not a commitment to lend.
        </p>
      </div>
    )
  }

  // ── Contact step ─────────────────────────────────────────
  if (phase === 'contact') {
    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden">
          <div className="h-1.5 bg-[color:var(--border)]">
            <div className="h-1.5 bg-gold-dark transition-all duration-500" style={{ width: '100%' }} />
          </div>
          <div className="p-7">
            <div className="text-xs font-semibold tracking-widest uppercase text-gold-dark mb-3">
              Last step — 6 of 6
            </div>
            <h2 className="font-playfair text-xl font-bold text-navy mb-1.5">
              Where should we send your results?
            </h2>
            <p className="text-sm text-[color:var(--text-muted)] mb-6 leading-relaxed">
              Trey will personally review your answers and follow up with guidance specific to your situation.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="First and last name"
                  required
                  className="w-full px-4 py-3 border border-[color:var(--border)] rounded-lg text-sm bg-cream text-[color:var(--text)] outline-none focus:border-navy transition-colors"
                />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-navy mb-1.5 block">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  required
                  className="w-full px-4 py-3 border border-[color:var(--border)] rounded-lg text-sm bg-cream text-[color:var(--text)] outline-none focus:border-navy transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={submitting || !name.trim() || !email.trim()}
                className="w-full bg-navy text-white font-semibold py-3.5 rounded-lg text-sm transition-colors hover:bg-navy-mid disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'Checking eligibility…' : 'See My Results →'}
              </button>
            </form>
            <p className="mt-3 text-xs text-center text-[color:var(--text-muted)]">
              No spam. Trey responds personally, usually within a few hours on business days.
            </p>
          </div>
        </div>
        <button onClick={goBack} className="mt-4 text-sm text-[color:var(--text-muted)] hover:text-navy transition-colors mx-auto block">
          ← Back
        </button>
      </div>
    )
  }

  // ── Quiz questions ────────────────────────────────────────
  return (
    <div className="max-w-lg mx-auto">
      <div className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden">
        <div className="h-1.5 bg-[color:var(--border)]">
          <div
            className="h-1.5 bg-gold-dark transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
        <div className="p-7">
          <div className="text-xs font-semibold tracking-widest uppercase text-gold-dark mb-3">
            Question {absIndex + 1} of 5
          </div>
          <h2 className="font-playfair text-xl font-bold text-navy mb-6 leading-snug">
            {currentQ.question}
          </h2>
          <div className="flex flex-col gap-3">
            {currentQ.options.map(opt => {
              const selected = answers[currentQ.id] === opt.value
              return (
                <button
                  key={opt.value}
                  onClick={() => selectAnswer(opt.value)}
                  className={`w-full text-left px-4 py-3.5 rounded-lg border text-sm font-medium transition-all ${
                    selected
                      ? 'bg-navy text-white border-navy'
                      : 'bg-white text-navy border-[color:var(--border)] hover:border-navy hover:bg-navy/5'
                  }`}
                >
                  {opt.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>
      {qIndex > 0 && (
        <button onClick={goBack} className="mt-4 text-sm text-[color:var(--text-muted)] hover:text-navy transition-colors mx-auto block">
          ← Back
        </button>
      )}
    </div>
  )
}
