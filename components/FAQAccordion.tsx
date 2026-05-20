'use client'

import { useState } from 'react'

const categories = [
  {
    title: 'Credit & Qualifying',
    icon: '★',
    items: [
      {
        q: 'What credit score do I need to buy a home in Texas?',
        a: "It depends on the loan program. FHA loans accept scores as low as 580 with a 3.5% down payment (10% down if your score is 500–579). Conventional loans typically require 620 minimum, with best rates at 740+. VA and USDA loans don't set a hard minimum, though most lenders look for 620+.\n\nYour score also directly affects your interest rate on conventional loans. A buyer at 620 might pay 0.75–1.0% more in rate than a buyer at 760 — that's a real difference in monthly payment and total cost. If your score is borderline, it may be worth a few months of credit improvement before applying.",
      },
      {
        q: 'What is debt-to-income ratio and how does it affect me?',
        a: "Debt-to-income ratio (DTI) compares your monthly debt payments to your gross monthly income. Lenders use this to determine how much mortgage you can handle. It's calculated two ways: front-end DTI (just housing costs) and back-end DTI (all debts including housing).\n\nFHA allows back-end DTI up to about 57% in some cases. Conventional typically caps at 50%. VA and USDA are more flexible. If your DTI is high, paying down a credit card or car loan before applying can meaningfully improve your qualifying amount.",
      },
      {
        q: 'Can I buy a home with student loan debt?',
        a: "Yes, absolutely. Student loans are very common among first-time buyers and don't automatically disqualify you. Lenders include the monthly payment amount in your DTI calculation. If your loans are in income-based repayment (IBR) or deferred, different programs treat this differently — FHA uses the payment on your statement or 0.5% of the balance, while conventional uses the actual payment or 1% of the balance.\n\nThe key is knowing how your specific loan situation gets calculated before you apply. I'll walk through this with you during pre-approval.",
      },
      {
        q: "Can I buy a home if I'm self-employed?",
        a: "Yes. Self-employed buyers get mortgages all the time — the process is just a bit different. Instead of pay stubs, lenders use your last two years of personal and business tax returns, a year-to-date profit and loss statement, and bank statements.\n\nThe key challenge: tax write-offs reduce your stated income, which lenders use for qualifying. If you write off a lot, your qualifying income may be lower than your actual cash flow. Bank statement loan programs exist for this situation — we can discuss what makes sense for you.",
      },
    ],
  },
  {
    title: 'Down Payment & Costs',
    icon: '$',
    items: [
      {
        q: 'How much do I need for a down payment as a first-time homebuyer?',
        a: "Less than most people expect. FHA requires 3.5% down with a 580+ score. Conventional HomeReady/Home Possible programs start at 3% down. VA and USDA loans require zero down payment for eligible buyers.\n\nOn top of that, Texas down payment assistance programs through TDHCA and TSAHC can cover 3–5% of your loan amount, meaning many buyers close with very little to nothing out of pocket on the down payment side.",
      },
      {
        q: 'What are closing costs and how much should I expect?',
        a: "Closing costs are fees paid at closing to finalize the loan and transfer ownership. They typically run 2–3% of the loan amount and include: loan origination fees, appraisal, title insurance, title search, attorney or escrow fees, prepaid homeowner's insurance, and prepaid property taxes (typically 2–3 months upfront).\n\nOn a $250,000 loan, expect roughly $5,000–$7,500. Some of these can be negotiated, sellers can contribute toward closing costs, and some Texas DPA programs help cover them as well.",
      },
      {
        q: 'Can I use gift money for my down payment?',
        a: "Yes. FHA, VA, USDA, and conventional loans all allow gift funds from family members (and some programs allow gifts from employers or non-profits). You'll need a signed gift letter from the donor confirming the funds are a gift, not a loan that needs to be repaid.\n\nThe letter needs to include the donor's name, relationship to you, the amount, the source, and a statement that repayment is not expected. I'll provide a template when you apply.",
      },
      {
        q: 'What is earnest money and do I get it back?',
        a: "Earnest money is a deposit — typically 1% of the purchase price — submitted with your offer to show the seller you're serious. It's held in escrow and applied toward your closing costs or down payment at closing.\n\nWhether you get it back if the deal falls through depends on the contingencies in your contract. In Texas, you typically have an option period (usually 7–10 days) during which you can back out for any reason and recover your earnest money. After the option period, backing out without a valid contingency (like a failed appraisal or financing denial) could forfeit the deposit.",
      },
    ],
  },
  {
    title: 'The Loan & Process',
    icon: '⌂',
    items: [
      {
        q: "What's the difference between pre-qualification and pre-approval?",
        a: "Pre-qualification is a quick estimate based on information you tell the lender — no verification, no credit pull. It takes minutes but carries very little weight with sellers because nothing has been confirmed.\n\nPre-approval is the real deal. I verify your income documents, pull your credit, review your assets, and issue a letter confirming you're approved up to a specific amount. In a competitive market like San Antonio, a solid pre-approval is what gets offers accepted.",
      },
      {
        q: 'How long does it take to close on a home?',
        a: "From accepted offer to closing day, the typical timeline is 30–45 days. With a strong pre-approval, all documents ready upfront, and a responsive team on both sides, closings can happen in as little as 21 days.\n\nGovernment-backed loans (FHA, VA, USDA) sometimes run a few days longer due to inspection and appraisal requirements. The biggest factor in closing speed is how quickly buyers respond to document requests — I'll give you a complete checklist upfront to avoid surprises.",
      },
      {
        q: 'What is mortgage insurance and can I avoid it?',
        a: "Mortgage insurance protects the lender (not you) if you default on the loan. It's required when you put less than 20% down on most loan types.\n\nFHA: Charges MIP — an upfront fee (1.75%) plus a monthly premium (~0.55%/yr). In most cases it can't be removed without refinancing out of the FHA loan entirely. Conventional: PMI automatically cancels once you reach 80% loan-to-value (you can request it earlier once you hit 80%). VA and USDA: No monthly mortgage insurance. VA has a one-time funding fee; USDA has an annual fee of 0.35% which is lower than FHA.",
      },
      {
        q: 'Should I lock my interest rate? When?',
        a: "A rate lock guarantees your interest rate for a set period (typically 30–60 days) regardless of what rates do in the market. Once you're under contract, I'll discuss rate lock timing with you based on where rates are and your expected closing date.\n\nLocking too early risks the lock expiring before you close. Waiting too long risks rates moving against you. There's no universal right answer — it depends on market conditions and your timeline. I'll give you my best read when the time comes.",
      },
      {
        q: 'Do I need a homebuyer education course?',
        a: "If you're using a Texas down payment assistance program (TDHCA or TSAHC), a homebuyer education course is required. Most are available online for free or a small fee ($0–$99). Fannie Mae's HomeReady program also requires it for at least one borrower.\n\nEven if it's not required for your specific loan, I recommend it. Buyers who complete a course feel significantly more confident throughout the process and have fewer surprises at closing.",
      },
    ],
  },
]

export default function FAQAccordion() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-10">
      {categories.map((cat) => (
        <div key={cat.title}>
          <div className="flex items-center gap-2.5 mb-4 pb-2.5 border-b-2 border-cream-dark">
            <div className="w-8 h-8 bg-navy rounded-lg flex items-center justify-center text-gold-light text-xs font-bold flex-shrink-0">
              {cat.icon}
            </div>
            <h3 className="font-playfair text-lg font-bold text-navy">{cat.title}</h3>
          </div>

          <div className="flex flex-col">
            {cat.items.map((item) => {
              const id = `${cat.title}-${item.q}`
              const isOpen = open === id
              return (
                <div key={item.q} className="border-b border-[color:var(--border)]">
                  <button
                    className="w-full text-left flex justify-between items-center gap-4 py-4 bg-transparent border-none cursor-pointer font-sans"
                    onClick={() => setOpen(isOpen ? null : id)}
                  >
                    <span className="font-semibold text-navy text-sm">{item.q}</span>
                    <div
                      className={`w-5.5 h-5.5 border border-[color:var(--border)] rounded-full flex items-center justify-center text-[10px] text-[color:var(--text-muted)] flex-shrink-0 transition-all ${
                        isOpen ? 'rotate-180 bg-navy border-navy text-white' : ''
                      }`}
                    >
                      ▾
                    </div>
                  </button>
                  {isOpen && (
                    <div className="pb-4">
                      {item.a.split('\n\n').map((para, i) => (
                        <p key={i} className="text-sm text-[color:var(--text-mid)] leading-relaxed mb-2 last:mb-0">{para}</p>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
