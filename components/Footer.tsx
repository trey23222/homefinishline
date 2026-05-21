'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  if (pathname === '/zoom-register') return null

  return (
    <footer className="bg-navy text-white/45 text-xs leading-loose py-8 px-8">
      <div className="max-w-5xl mx-auto mb-6 flex flex-wrap gap-12">
        <div className="flex flex-col gap-1.5 min-w-[140px]">
          <h4 className="text-white/80 text-sm font-semibold mb-3">Home Finish Line</h4>
          <Link href="/" className="text-white/50 no-underline hover:text-white/85 transition-colors">Home</Link>
          <Link href="/va-loans" className="text-white/50 no-underline hover:text-white/85 transition-colors">VA Loans</Link>
          <Link href="/self-employed" className="text-white/50 no-underline hover:text-white/85 transition-colors">Self-Employed Borrowers</Link>
          <Link href="/first-time-buyers" className="text-white/50 no-underline hover:text-white/85 transition-colors">First-Time Buyers</Link>
          <Link href="/about" className="text-white/50 no-underline hover:text-white/85 transition-colors">About Trey</Link>
          <Link href="/contact" className="text-white/50 no-underline hover:text-white/85 transition-colors">Contact</Link>
          <Link href="/blog" className="text-white/50 no-underline hover:text-white/85 transition-colors">Resources</Link>
        </div>

        <div className="flex flex-col gap-1.5 min-w-[140px]">
          <h4 className="text-white/80 text-sm font-semibold mb-3">Loan Programs</h4>
          <Link href="/va-loans" className="text-white/50 no-underline hover:text-white/85 transition-colors">VA Loans</Link>
          <Link href="/first-time-buyers#loan-programs" className="text-white/50 no-underline hover:text-white/85 transition-colors">FHA Loans</Link>
          <Link href="/first-time-buyers#loan-programs" className="text-white/50 no-underline hover:text-white/85 transition-colors">USDA Loans</Link>
          <Link href="/first-time-buyers#loan-programs" className="text-white/50 no-underline hover:text-white/85 transition-colors">Conventional Loans</Link>
          <Link href="/first-time-buyers#down-payment-assistance" className="text-white/50 no-underline hover:text-white/85 transition-colors">Down Payment Assistance</Link>
          <Link href="/self-employed" className="text-white/50 no-underline hover:text-white/85 transition-colors">Bank Statement Loans</Link>
        </div>

        <div className="flex flex-col gap-1.5 min-w-[140px]">
          <h4 className="text-white/80 text-sm font-semibold mb-3">Get Started</h4>
          <a href="https://treygarza.floify.com/apply" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline hover:text-white/85 transition-colors">Start Loan Application</a>
          <a href="https://calendly.com/trey-garza-efinitymortgage/30min" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline hover:text-white/85 transition-colors">Book a Call with Trey</a>
          <Link href="/contact" className="text-white/50 no-underline hover:text-white/85 transition-colors">Contact Trey</Link>
          <Link href="/zoom-register" className="text-white/50 no-underline hover:text-white/85 transition-colors">Join Free Zoom Class</Link>
          <a href="mailto:trey.garza@homefinishline.com" className="text-white/50 no-underline hover:text-white/85 transition-colors">trey.garza@homefinishline.com</a>
        </div>

        <div className="flex flex-col gap-1.5 min-w-[140px]">
          <h4 className="text-white/80 text-sm font-semibold mb-3">Follow Trey</h4>
          <a href="https://www.facebook.com/profile.php?id=61578618664880" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline hover:text-white/85 transition-colors">Facebook</a>
          <a href="https://www.instagram.com/mortgageguytrey/" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline hover:text-white/85 transition-colors">Instagram</a>
          <a href="https://www.tiktok.com/@mortgage.guy.trey" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline hover:text-white/85 transition-colors">TikTok</a>
          <a href="https://youtube.com/@mortgageguytrey" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline hover:text-white/85 transition-colors">YouTube</a>
          <a href="https://www.facebook.com/share/g/15cqQTdjeNu/" target="_blank" rel="noopener noreferrer" className="text-white/50 no-underline hover:text-white/85 transition-colors">Facebook Group</a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto border-t border-white/10 pt-5 text-[11px] leading-relaxed">
        <p>
          <strong className="text-white/70">Trey Garza</strong> | Licensed Mortgage Loan Officer | Efinity Mortgage (NMLS# 1043983) | Trey Garza NMLS# 2700813 | San Antonio, Texas
        </p>
        <p className="mt-2">
          Licensed by the Texas Department of Savings and Mortgage Lending. This is not a commitment to lend. All loans are subject to credit approval and property appraisal. Terms and Conditions apply. Down payment assistance programs have eligibility requirements, contact us to verify availability. Equal Housing Opportunity.
        </p>
        <p className="mt-2">© 2026 Home Finish Line · All Rights Reserved</p>
      </div>
    </footer>
  )
}
