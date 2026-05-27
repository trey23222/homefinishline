import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPostBySlug, getAllPosts } from '@/lib/blog'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Home Finish Line`,
    description: post.excerpt,
    keywords: post.keywords || [],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://homefinishline.com/blog/${slug}`,
      type: 'article',
    },
    alternates: { canonical: `https://homefinishline.com/blog/${slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  return (
    <>
      {/* HERO */}
      <header
        className="relative overflow-hidden text-white py-14 px-8"
        style={
          post.coverImage
            ? { backgroundImage: `url("${post.coverImage}")`, backgroundSize: 'cover', backgroundPosition: 'center' }
            : { background: 'linear-gradient(135deg, #0D2240 0%, #1A3A5C 100%)' }
        }
      >
        {post.coverImage && (
          <div className="absolute inset-0" style={{ background: 'rgba(10, 22, 40, 0.65)' }} />
        )}
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/blog" className="text-white/60 text-sm no-underline hover:text-white transition-colors">Resources</Link>
            <span className="text-white/30">›</span>
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded"
              style={{ background: '#FBF3E2', color: '#7A5A0F' }}
            >
              {post.category}
            </span>
          </div>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold leading-tight mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-white/60">
            <span>Trey Garza</span>
            <span>·</span>
            <span>{post.date}</span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-[1fr_260px] gap-10">
          <article
            className="prose prose-sm max-w-none prose-headings:font-playfair prose-headings:text-navy prose-a:text-gold-dark prose-strong:text-navy"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

          {/* Sidebar */}
          <div className="sticky top-28 flex flex-col gap-5 self-start">
            <div className="bg-navy rounded-xl p-6 text-white">
              <div className="font-playfair font-bold text-base mb-2">Ready to Get Started?</div>
              <p className="text-xs text-white/60 mb-4 leading-snug">A 10-minute call tells you exactly where you stand.</p>
              <a
                href="https://calendly.com/trey-garza-efinitymortgage/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gold-dark text-white text-center py-2.5 rounded-lg font-semibold text-sm no-underline mb-2 hover:bg-gold-light transition-colors"
              >
                Book a Free Call →
              </a>
              <a
                href="https://treygarza.floify.com/apply"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white/10 text-white text-center py-2.5 rounded-lg font-semibold text-sm no-underline hover:bg-white/20 transition-colors"
              >
                Start Pre-Approval
              </a>
            </div>

            <div className="bg-white border border-[color:var(--border)] rounded-xl p-5">
              <div className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-3">About Trey</div>
              <p className="text-xs text-[color:var(--text-muted)] leading-relaxed">
                Trey Garza is a Licensed Texas Loan Officer and VA Loan Specialist at Efinity Mortgage in San Antonio, TX. NMLS# 2700813.
              </p>
              <Link href="/about" className="text-xs text-navy font-semibold no-underline mt-2 block hover:text-gold-dark transition-colors">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
