import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-8">
      <div className="text-center max-w-md">
        <div className="font-playfair text-6xl font-bold text-navy mb-4">404</div>
        <h1 className="font-playfair text-2xl font-bold text-navy mb-3">Page Not Found</h1>
        <p className="text-sm text-[color:var(--text-muted)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/" className="btn-navy">Go Home</Link>
          <Link href="/contact" className="btn-outline-navy">Contact Trey</Link>
        </div>
      </div>
    </div>
  )
}
