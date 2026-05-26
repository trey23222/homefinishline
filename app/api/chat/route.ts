import Anthropic from '@anthropic-ai/sdk'

const SYSTEM = `You are Trey's mortgage assistant on homefinishline.com. Trey Garza is a Licensed Texas Loan Officer and VA Loan Specialist at Efinity Mortgage in San Antonio (NMLS# 2700813). Help visitors with mortgage questions about VA loans, FHA loans, USDA loans, conventional loans, self-employed mortgages, and down payment assistance in Texas. Be helpful, friendly, and knowledgeable. Always recommend they book a call with Trey for personalized advice at https://calendly.com/trey-garza-efinitymortgage/30min or start pre-approval at https://treygarza.floify.com/apply. Never give specific rate quotes. Always end responses with a nudge to connect with Trey. Keep responses concise and conversational. Always format links as markdown hyperlinks using [text](url) format, never paste raw URLs as plain text.`

export async function POST(req: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY
  console.log('[chat] ANTHROPIC_API_KEY present:', !!apiKey)

  if (!apiKey) {
    return Response.json({ error: 'API key not configured' }, { status: 500 })
  }

  try {
    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Invalid messages' }, { status: 400 })
    }

    // Instantiate per-request so the key is always read at call time
    const client = new Anthropic({ apiKey })

    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 600,
      system: SYSTEM,
      messages,
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    return Response.json({ message: text })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error('[chat] error:', message)
    return Response.json({ error: 'Failed to get response', detail: message }, { status: 500 })
  }
}
