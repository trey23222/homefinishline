import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Mortgage & VA Loan Blog | San Antonio TX | Home Finish Line',
  description: 'Expert mortgage tips, VA loan guides, and San Antonio real estate insights from Trey Garza, Licensed Loan Officer NMLS# 2700813.',
  keywords: ['VA loan blog San Antonio', 'mortgage tips Texas', 'home buying blog San Antonio', 'first time buyer guide Texas'],
  openGraph: {
    title: 'Mortgage & VA Loan Blog | San Antonio TX | Home Finish Line',
    description: 'Expert mortgage tips and VA loan guides from Trey Garza, San Antonio VA Loan Specialist.',
    url: 'https://homefinishline.com/blog',
  },
  alternates: { canonical: 'https://homefinishline.com/blog' },
}

export default async function BlogPage() {
  const posts = await getAllPosts()

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))]

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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="no-underline group">
                  <article className="bg-white border border-[color:var(--border)] rounded-xl overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="p-6 flex-1">
                      <div
                        className="inline-block text-xs font-semibold px-2.5 py-1 rounded mb-3"
                        style={{ background: '#EBF0F8', color: '#0D2240' }}
                      >
                        {post.category}
                      </div>
                      <h2 className="font-playfair text-lg font-bold text-navy leading-snug mb-2 group-hover:text-gold-dark transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-sm text-[color:var(--text-muted)] leading-relaxed line-clamp-3">{post.excerpt}</p>
                    </div>
                    <div className="px-6 pb-5 flex items-center justify-between text-xs text-[color:var(--text-muted)]">
                      <span>{post.date}</span>
                      <span className="text-gold-dark font-medium">Read →</span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
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
