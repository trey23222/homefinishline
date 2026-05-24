'use client'

import { useState, useEffect, useRef } from 'react'

function fmt(n: number) {
  return '$' + Math.round(n).toLocaleString()
}

type LoanType = 'conv' | 'fha' | 'va' | 'usda'

export default function MortgageCalculator() {
  const [price, setPrice] = useState(300000)
  const [dpPct, setDpPct] = useState(10)
  const [rate, setRate] = useState(6.75)
  const [term, setTerm] = useState(30)
  const [loanType, setLoanType] = useState<LoanType>('conv')
  const [taxRate, setTaxRate] = useState(1.8)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const dpAmt = price * dpPct / 100
  let loanAmt = price - dpAmt

  let upfront = 0
  if (loanType === 'fha') upfront = loanAmt * 0.0175
  if (loanType === 'va') upfront = loanAmt * 0.0215
  if (loanType === 'usda') upfront = loanAmt * 0.01
  loanAmt += upfront

  const mo = rate / 100 / 12
  const n = term * 12
  const pi = mo === 0 ? loanAmt / n : loanAmt * mo * Math.pow(1 + mo, n) / (Math.pow(1 + mo, n) - 1)

  const ltv = loanAmt / price
  let mi = 0
  if (loanType === 'fha') mi = loanAmt * 0.0055 / 12
  else if (loanType === 'usda') mi = loanAmt * 0.0035 / 12
  else if (loanType === 'conv' && ltv > 0.80) mi = loanAmt * 0.006 / 12

  const tax = price * taxRate / 100 / 12
  const ins = price * 0.006 / 12
  const total = pi + mi + tax + ins
  const totalInterest = Math.max(0, pi * n - loanAmt)

  // Draw donut chart
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const cx = 70, cy = 70, r = 55, inner = 34
    ctx.clearRect(0, 0, 140, 140)
    const slices = [
      { value: pi, color: '#0D2240' },
      { value: tax, color: '#C9A84C' },
      { value: ins, color: '#2A7A4B' },
      ...(mi > 0 ? [{ value: mi, color: '#E0C98A' }] : []),
    ]
    let start = -Math.PI / 2
    slices.forEach(({ value, color }) => {
      const angle = (value / total) * 2 * Math.PI
      ctx.beginPath()
      ctx.moveTo(cx, cy)
      ctx.arc(cx, cy, r, start, start + angle)
      ctx.closePath()
      ctx.fillStyle = color
      ctx.fill()
      start += angle
    })
    ctx.beginPath()
    ctx.arc(cx, cy, inner, 0, 2 * Math.PI)
    ctx.fillStyle = '#F5F0E8'
    ctx.fill()
  }, [pi, tax, ins, mi, total])

  // Amortization rows
  const amortRows: { year: number; principal: number; interest: number; balance: number }[] = []
  let bal = loanAmt
  for (let y = 1; y <= Math.min(term, 30); y++) {
    let yPrin = 0, yInt = 0
    for (let m = 0; m < 12; m++) {
      const interest = bal * mo
      const principal = pi - interest
      yInt += interest
      yPrin += principal
      bal -= principal
      if (bal < 0) bal = 0
    }
    amortRows.push({ year: y, principal: yPrin, interest: yInt, balance: Math.max(0, bal) })
    if (bal <= 0) break
  }

  return (
    <div className="grid md:grid-cols-[380px_1fr] gap-7 items-start">
      {/* Inputs */}
      <div className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden md:sticky md:top-[100px] md:self-start">
        <div className="bg-navy px-6 py-5 text-white">
          <h3 className="font-playfair text-base font-bold">Payment Calculator</h3>
          <p className="text-xs text-white/60 mt-0.5">Adjust the sliders to see your estimate</p>
        </div>
        <div className="p-6 flex flex-col gap-5">
          {[
            {
              label: 'Home Price', display: fmt(price),
              input: <input type="range" min={50000} max={5000000} step={5000} value={price} onChange={e => setPrice(+e.target.value)} className="w-full accent-navy" />,
              sub: '$50k – $5M'
            },
            {
              label: 'Down Payment', display: `${dpPct.toFixed(1)}% — ${fmt(dpAmt)}`,
              input: <input type="range" min={0} max={80} step={0.5} value={dpPct} onChange={e => setDpPct(+e.target.value)} className="w-full accent-navy" />,
              sub: '0% – 80%'
            },
            {
              label: 'Interest Rate', display: `${rate.toFixed(3).replace(/\.?0+$/, '')}%`,
              input: <input type="range" min={1} max={20} step={0.125} value={rate} onChange={e => setRate(+e.target.value)} className="w-full accent-navy" />,
              sub: '1.0% – 20.0%'
            },
            {
              label: 'Loan Term', display: `${term} years`,
              input: <input type="range" min={10} max={30} step={5} value={term} onChange={e => setTerm(+e.target.value)} className="w-full accent-navy" />,
              sub: '10 yr – 30 yr'
            },
            {
              label: 'Property Tax Rate', display: `${taxRate.toFixed(1)}%/yr`,
              input: <input type="range" min={0.5} max={3.5} step={0.1} value={taxRate} onChange={e => setTaxRate(+e.target.value)} className="w-full accent-navy" />,
              sub: '0.5% – 3.5%'
            },
          ].map((field) => (
            <div key={field.label}>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-navy">{field.label}</label>
                <span className="text-xs text-[color:var(--text-muted)]">{field.display}</span>
              </div>
              {field.input}
              <div className="flex justify-between text-[11px] text-[color:var(--text-muted)] mt-1">
                <span>{field.sub.split(' – ')[0]}</span>
                <span>{field.sub.split(' – ')[1]}</span>
              </div>
            </div>
          ))}

          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-navy mb-2 block">Loan Type</label>
            <select
              value={loanType}
              onChange={e => setLoanType(e.target.value as LoanType)}
              className="w-full px-3 py-2.5 border border-[color:var(--border)] rounded-lg text-sm bg-cream text-[color:var(--text)] outline-none focus:border-navy"
            >
              <option value="conv">Conventional</option>
              <option value="fha">FHA</option>
              <option value="va">VA (no PMI)</option>
              <option value="usda">USDA</option>
            </select>
          </div>

          <div className="pt-2 border-t border-[color:var(--border)]">
            <a
              href="https://treygarza.floify.com/apply"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-navy text-white font-semibold text-sm py-3 rounded-lg no-underline hover:bg-navy-mid transition-colors"
            >
              Get Your Real Rate — Start Pre-Approval →
            </a>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 md:mt-0">
        {/* Big number */}
        <div className="bg-navy rounded-xl p-7 text-white text-center mb-5">
          <div className="text-xs font-semibold tracking-widest uppercase text-white/60 mb-1.5">Estimated Monthly Payment</div>
          <div className="font-playfair text-5xl font-bold mb-1">{fmt(total)}</div>
          <div className="text-sm text-white/60">Principal + Interest + Taxes + Insurance + MI</div>
        </div>

        {/* Breakdown grid */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            { label: 'P&I Payment', value: fmt(pi) },
            { label: 'Est. Property Tax', value: fmt(tax) },
            { label: 'Est. Insurance', value: fmt(ins) },
            { label: 'Mortgage Insurance', value: mi > 0 ? fmt(mi) : 'None' },
            { label: 'Loan Amount', value: fmt(loanAmt) },
            { label: 'Down Payment', value: fmt(dpAmt) },
            { label: 'Total Interest Paid', value: fmt(totalInterest) },
            { label: 'Total Cost of Loan', value: fmt(pi * n + upfront) },
          ].map((item) => (
            <div key={item.label} className="bg-cream rounded-lg p-3.5">
              <div className="text-[11px] text-[color:var(--text-muted)] font-medium uppercase tracking-wider mb-1">{item.label}</div>
              <div className="font-playfair text-lg font-bold text-navy">{item.value}</div>
            </div>
          ))}
        </div>

        {/* Donut */}
        <div className="card mb-5">
          <div className="text-xs font-semibold tracking-widest uppercase text-gold-dark mb-4">Payment Breakdown</div>
          <div className="flex items-center gap-5 flex-wrap">
            <canvas ref={canvasRef} width={140} height={140} className="flex-shrink-0" />
            <div className="flex flex-col gap-2">
              {[
                { label: 'Principal & Interest', color: '#0D2240' },
                { label: 'Property Tax', color: '#C9A84C' },
                { label: 'Insurance', color: '#2A7A4B' },
                ...(mi > 0 ? [{ label: 'Mortgage Insurance', color: '#E0C98A' }] : []),
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm text-[color:var(--text-mid)]">
                  <div className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: item.color }} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Amortization table */}
        <div className="card">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
            <div className="text-xs font-semibold tracking-widest uppercase text-gold-dark">Yearly Amortization</div>
            <div className="text-xs text-[color:var(--text-muted)]">How your balance decreases over time</div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs min-w-[400px]">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-2 text-left font-semibold">Year</th>
                  <th className="p-2 text-right font-semibold">Principal</th>
                  <th className="p-2 text-right font-semibold">Interest</th>
                  <th className="p-2 text-right font-semibold">Balance</th>
                </tr>
              </thead>
              <tbody>
                {amortRows.map((row, i) => (
                  <tr key={row.year} className={i % 2 === 0 ? 'bg-white' : 'bg-cream'} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td className="p-2 font-medium text-navy">{row.year}</td>
                    <td className="p-2 text-right text-[color:var(--text-mid)]">{fmt(row.principal)}</td>
                    <td className="p-2 text-right text-[color:var(--text-mid)]">{fmt(row.interest)}</td>
                    <td className="p-2 text-right text-[color:var(--text-mid)]">{fmt(row.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4 bg-cream-dark border border-[color:var(--border)] rounded-lg p-4 text-xs text-[color:var(--text-muted)] leading-relaxed">
          <strong>Estimates only.</strong> This calculator provides approximate figures for planning purposes. Actual payment will vary based on your exact interest rate, loan amount, credit score, insurance costs, and property taxes. Contact Trey Garza for a precise quote. Trey Garza NMLS# 2700813 | Efinity Mortgage (NMLS# 1043983) | Licensed by the Texas Department of Savings and Mortgage Lending. Not a commitment to lend. Equal Housing Opportunity.
        </div>
      </div>
    </div>
  )
}
