import Anthropic from '@anthropic-ai/sdk'

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const SYSTEM = `You are Trey's mortgage assistant on homefinishline.com. Trey Garza is a Licensed Texas Loan Officer and VA Loan Specialist at Efinity Mortgage in San Antonio (NMLS# 2700813). Help visitors with mortgage questions about VA loans, FHA loans, USDA loans, conventional loans, self-employed mortgages, and down payment assistance in Texas. Be helpful, friendly, and knowledgeable. Always recommend they book a call with Trey for personalized advice at https://calendly.com/trey-garza-efinitymortgage/30min or start pre-approval at https://treygarza.floify.com/apply. Never give specific rate quotes. Always end responses with a nudge to connect with Trey. Keep responses concise and conversational.`

export async function POST(req: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return Response.json({ error: 'API key not configured' }, { status: 500 })
    }

    const { messages } = await req.json()

    if (!Array.isArray(messages) || messages.length === 0) {
      return Response.json({ error: 'Invalid messages' }, { status: 400 })
    }

    const response = await client.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 600,
      system: SYSTEM,
      messages,
    })

    const text = response.content[0].type === 'text' ? response.content[0].text : ''
    return Response.json({ message: text })
  } catch (err) {
    console.error('[chat]', err)
    return Response.json({ error: 'Failed to get response' }, { status: 500 })
  }
}
