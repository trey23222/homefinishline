'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/va-loans', label: 'VA Loans' },
  { href: '/first-time-buyers', label: 'First-Time Buyers' },
  { href: '/self-employed', label: 'Self-Employed' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isZoomPage = pathname === '/zoom-register'
  if (isZoomPage) return null

  return (
    <nav className="bg-navy sticky top-0 z-50 px-8 flex items-center justify-between h-16">
      <Link
        href="/"
        className="text-white font-playfair text-xl font-bold no-underline"
      >
        Home <span className="text-gold-light">Finish Line</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-1 list-none items-center m-0 p-0">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-white/70 no-underline text-sm font-medium px-3 py-1.5 rounded-md transition-colors hover:text-white hover:bg-white/10 ${
                pathname === href || pathname.startsWith(href + '/') ? 'text-white' : ''
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://treygarza.floify.com/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline ml-2 transition-colors hover:bg-gold-light"
          >
            Get Pre-Approved →
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        className="md:hidden bg-transparent border-none cursor-pointer p-2 flex flex-col gap-1"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span className={`block w-5.5 h-0.5 bg-white rounded transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
        <span className={`block w-5.5 h-0.5 bg-white rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
        <span className={`block w-5.5 h-0.5 bg-white rounded transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-navy border-t border-white/10 p-4 flex flex-col gap-1 md:hidden">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-white/70 no-underline text-sm font-medium px-3 py-2 rounded-md transition-colors hover:text-white hover:bg-white/10 ${
                pathname === href ? 'text-white bg-white/10' : ''
              }`}
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://treygarza.floify.com/apply"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-dark text-white font-semibold text-sm px-4 py-2 rounded-md no-underline mt-2 transition-colors hover:bg-gold-light text-center"
            onClick={() => setOpen(false)}
          >
            Get Pre-Approved →
          </a>
        </div>
      )}
    </nav>
  )
}
