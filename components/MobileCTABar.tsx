export default function MobileCTABar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex gap-3 px-4 py-3"
      style={{
        background: '#0D2240',
        paddingBottom: 'max(12px, env(safe-area-inset-bottom))',
        boxShadow: '0 -2px 16px rgba(13,34,64,0.18)',
      }}
    >
      <a
        href="https://calendly.com/trey-garza-efinitymortgage/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center bg-gold-dark text-white font-semibold text-sm py-3 rounded-lg no-underline"
      >
        Book a Call
      </a>
      <a
        href="https://treygarza.floify.com/apply"
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 text-center bg-white text-navy font-semibold text-sm py-3 rounded-lg no-underline"
      >
        Get Pre-Approved
      </a>
    </div>
  )
}
