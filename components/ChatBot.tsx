'use client'

import { useState, useRef, useEffect } from 'react'

function renderMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[(.+?)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline text-navy font-medium">$1</a>')
    .replace(/^[-•]\s+(.+)$/gm, '<li>$1</li>')
    .replace(/((?:<li>[\s\S]*?<\/li>\s*)+)/, '<ul class="list-disc pl-4 space-y-1 my-1">$1</ul>')
    .replace(/\n{2,}/g, '</p><p class="mt-2">')
    .replace(/\n/g, '<br />')
}

type Message = { role: 'user' | 'assistant'; content: string }

const GREETING: Message = {
  role: 'assistant',
  content:
    "Hi! I'm Trey's mortgage assistant. Ask me anything about VA loans, FHA, USDA, conventional mortgages, self-employed loans, or down payment assistance in Texas. I'm here to help!",
}

function SendIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  )
}

function ChatIcon({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  async function send() {
    const text = input.trim()
    if (!text || loading) return

    const userMsg: Message = { role: 'user', content: text }
    const next = [...messages, userMsg]
    setMessages(next)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: data.message ?? 'Sorry, something went wrong. Please try again.',
        },
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content:
            'Sorry, I ran into an issue. You can reach Trey directly at trey.garza@homefinishline.com.',
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  return (
    /* Positioned above the mobile CTA bar (bottom-24 = 96px) on mobile, bottom-6 on desktop */
    <div className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div
          className="bg-white border border-[color:var(--border)] rounded-2xl overflow-hidden shadow-2xl w-[calc(100vw-32px)] max-w-[380px] flex flex-col"
          style={{ height: 'min(500px, calc(100vh - 200px))' }}
        >
          {/* Header */}
          <div className="bg-navy px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gold-dark/20 border border-gold-dark/40 flex items-center justify-center flex-shrink-0">
                <ChatIcon size={15} />
              </div>
              <div>
                <div className="text-white font-semibold text-sm leading-tight">
                  Trey&apos;s Mortgage Assistant
                </div>
                <div className="text-white/45 text-[11px]">AI-powered · Not licensed advice</div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-1 rounded"
              aria-label="Close chat"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 bg-cream">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'user' ? (
                  <div className="max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl whitespace-pre-wrap bg-navy text-white rounded-br-sm">
                    {msg.content}
                  </div>
                ) : (
                  <div
                    className="max-w-[85%] text-sm leading-relaxed px-3.5 py-2.5 rounded-2xl bg-white text-[color:var(--text)] border border-[color:var(--border)] rounded-bl-sm shadow-sm"
                    dangerouslySetInnerHTML={{ __html: renderMarkdown(msg.content) }}
                  />
                )}
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-[color:var(--border)] rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1.5 items-center shadow-sm">
                  {[0, 150, 300].map(delay => (
                    <span
                      key={delay}
                      className="w-1.5 h-1.5 bg-navy/30 rounded-full animate-bounce"
                      style={{ animationDelay: `${delay}ms` }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[color:var(--border)] p-3 bg-white flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  send()
                }
              }}
              placeholder="Ask a mortgage question…"
              disabled={loading}
              className="flex-1 text-sm px-3 py-2 border border-[color:var(--border)] rounded-lg outline-none focus:border-navy transition-colors bg-cream disabled:opacity-60"
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="bg-navy text-white px-3 py-2 rounded-lg hover:bg-navy-mid transition-colors disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
              aria-label="Send message"
            >
              <SendIcon />
            </button>
          </div>
        </div>
      )}

      {/* Floating bubble */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-105 border-2 border-gold-dark/40"
        style={{ background: '#0D2240' }}
        aria-label="Open mortgage assistant"
      >
        {open ? <CloseIcon /> : <ChatIcon size={22} />}
      </button>
    </div>
  )
}
