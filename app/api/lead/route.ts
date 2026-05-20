import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, form_type, message } = body

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error } = await supabase.from('leads').insert({
      name,
      email,
      phone: phone || null,
      form_type: form_type || 'general',
      message: message || null,
      created_at: new Date().toISOString(),
    })

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json({ error: 'Database error' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
