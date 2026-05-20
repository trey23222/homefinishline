const items = [
  'Licensed Texas Loan Officer',
  'NMLS# 2700813',
  'FHA · VA · USDA · Conventional',
  'Texas Down Payment Assistance',
  'Efinity Mortgage · San Antonio',
]

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-[color:var(--border)] py-3.5 px-8 flex justify-center gap-8 flex-wrap">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-1.5 text-xs text-[color:var(--text-muted)] font-medium">
          <div className="w-[18px] h-[18px] bg-navy rounded-full flex items-center justify-center text-white text-[9px] flex-shrink-0">
            ✓
          </div>
          <span>{item}</span>
        </div>
      ))}
    </div>
  )
}
