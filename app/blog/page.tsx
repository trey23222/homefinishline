import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/blog'
import BlogSearch from '@/components/BlogSearch'

export const metadata: Metadata = {
  title: 'Mortgage Resources & VA Loan Guides | San Antonio TX | Home Finish Line',
  description: 'Expert mortgage tips, VA loan guides, and San Antonio real estate insights from Trey Garza, Licensed Loan Officer NMLS# 2700813.',
  keywords: ['VA loan resources San Antonio', 'mortgage tips Texas', 'home buying guide San Antonio', 'first time buyer guide Texas'],
  openGraph: {
    title: 'Mortgage Resources & VA Loan Guides | San Antonio TX | Home Finish Line',
    description: 'Expert mortgage tips and VA loan guides from Trey Garza, San Antonio VA Loan Specialist.',
    url: 'https://homefinishline.com/blog',
  },
  alternates: { canonical: 'https://homefinishline.com/blog' },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white text-center py-14 px-8"
        style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 60%, #1e4d7a 100%)' }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="hero-badge">San Antonio · Texas · VA Loans · Mortgages</div>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold leading-tight mb-4">
            Mortgage Resources & <span className="text-gold-light">Insights</span>
          </h1>
          <p className="text-white/80 text-base max-w-lg mx-auto leading-relaxed">
            Practical guides, VA loan tips, and San Antonio real estate insights — written for real buyers, not lenders.
          </p>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-5xl mx-auto px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl mb-4">📝</div>
              <h2 className="font-playfair text-2xl font-bold text-navy mb-2">Coming Soon</h2>
              <p className="text-[color:var(--text-muted)] text-sm max-w-sm mx-auto">
                Articles about VA loans, San Antonio real estate, and the mortgage process are on their way.
              </p>
            </div>
          ) : (
            <BlogSearch posts={posts} />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-[color:var(--border)] bg-cream-dark">
        <div className="max-w-5xl mx-auto px-8 flex items-center justify-between gap-6 flex-wrap">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-navy mb-1.5">Ready to Talk to a Loan Officer?</h2>
            <p className="text-sm text-[color:var(--text-muted)] max-w-md">Reading is great. A 10-minute call is better. Let&apos;s talk about your specific situation.</p>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            <a href="https://calendly.com/trey-garza-efinitymortgage/30min" target="_blank" rel="noopener noreferrer" className="btn-navy">Book a Free Call →</a>
            <a href="https://treygarza.floify.com/apply" target="_blank" rel="noopener noreferrer" className="btn-outline-navy">Start Pre-Approval</a>
          </div>
        </div>
      </section>
    </>
  )
}
