'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { BlogPost } from '@/lib/blog'

export default function BlogSearch({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? posts.filter(post => {
        const q = query.toLowerCase()
        return (
          post.title.toLowerCase().includes(q) ||
          post.excerpt.toLowerCase().includes(q) ||
          post.category.toLowerCase().includes(q)
        )
      })
    : posts

  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[color:var(--text-muted)] pointer-events-none"
            fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
          >
            <circle cx={11} cy={11} r={8} /><path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Search articles…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 border border-[color:var(--border)] rounded-lg text-sm bg-white text-[color:var(--text)] outline-none focus:border-navy transition-colors"
          />
        </div>
        {query.trim() && (
          <p className="text-xs text-[color:var(--text-muted)] shrink-0">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </p>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-[color:var(--text-muted)] text-sm">
            No articles match &ldquo;{query}&rdquo;.
          </p>
          <button
            onClick={() => setQuery('')}
            className="mt-3 text-sm text-navy font-medium hover:underline"
          >
            Clear search
          </button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
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
                  <p className="text-sm text-[color:var(--text-muted)] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
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
    </>
  )
}
