import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// Service role key bypasses RLS — never expose this client-side
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

const FORM_TYPE_LABELS: Record<string, string> = {
  guide: 'Free Guide Download',
  zoom: 'Zoom Class Registration',
  zoom_register: 'Zoom Class Registration',
  contact: 'Contact Form',
  general: 'General Inquiry',
}

export async function POST(req: NextRequest) {
  // Log env var presence on every request so Vercel logs show the config state
  console.log('[lead] env check:', {
    hasSupabaseUrl: !!supabaseUrl,
    supabaseUrlValue: supabaseUrl ?? 'MISSING',
    hasServiceRoleKey: !!process.env.SUPABASE_SERVICE_ROLE_KEY,
    hasAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    keyInUse: process.env.SUPABASE_SERVICE_ROLE_KEY ? 'service_role' : 'anon',
    hasResendKey: !!process.env.RESEND_API_KEY,
  })

  try {
    const body = await req.json()
    const { name, email, phone, form_type, message } = body

    console.log('[lead] incoming:', { name, email, phone: !!phone, form_type, hasMessage: !!message })

    if (!name || !email) {
      return NextResponse.json({ error: 'Name and email are required' }, { status: 400 })
    }

    const supabase = createClient(supabaseUrl, supabaseKey)

    const { error: dbError } = await supabase.from('leads').insert({
      name,
      email,
      phone: phone || null,
      form_type: form_type || 'general',
      message: message || null,
      created_at: new Date().toISOString(),
    })

    if (dbError) {
      console.error('[lead] Supabase insert failed:', {
        code: dbError.code,
        message: dbError.message,
        details: dbError.details,
        hint: dbError.hint,
      })
      return NextResponse.json({ error: 'Database error', detail: dbError.message }, { status: 500 })
    }

    console.log('[lead] Supabase insert OK')

    // Send email notification via Resend (non-blocking — don't fail the request if this errors)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        const formLabel = FORM_TYPE_LABELS[form_type] ?? form_type ?? 'Unknown'

        await resend.emails.send({
          from: 'leads@dealyzer.app',
          to: 'trey.garza@homefinishline.com',
          subject: `New lead: ${name} — ${formLabel}`,
          html: `
            <div style="font-family:sans-serif;max-width:520px;margin:0 auto;color:#1a1a1a">
              <div style="background:#0D2240;padding:20px 24px;border-radius:8px 8px 0 0">
                <p style="color:#C9A84C;font-size:11px;letter-spacing:1px;text-transform:uppercase;margin:0 0 4px">Home Finish Line</p>
                <h1 style="color:#fff;font-size:20px;margin:0">New Lead Submission</h1>
              </div>
              <div style="background:#f9f7f3;padding:24px;border:1px solid #e5e0d5;border-top:none;border-radius:0 0 8px 8px">
                <table style="width:100%;border-collapse:collapse">
                  <tr><td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:13px;color:#666;width:110px">Form Type</td><td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:13px;font-weight:600">${formLabel}</td></tr>
                  <tr><td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:13px;color:#666">Name</td><td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:13px;font-weight:600">${name}</td></tr>
                  <tr><td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:13px;color:#666">Email</td><td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:13px"><a href="mailto:${email}" style="color:#0D2240">${email}</a></td></tr>
                  <tr><td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:13px;color:#666">Phone</td><td style="padding:8px 0;border-bottom:1px solid #e5e0d5;font-size:13px">${phone || '—'}</td></tr>
                  ${message ? `<tr><td style="padding:8px 0;font-size:13px;color:#666;vertical-align:top">Message</td><td style="padding:8px 0;font-size:13px">${message.replace(/\n/g, '<br>')}</td></tr>` : ''}
                </table>
                <div style="margin-top:20px">
                  <a href="mailto:${email}" style="background:#0D2240;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600">Reply to ${name} →</a>
                </div>
              </div>
            </div>
          `,
        })
      } catch (emailErr) {
        console.error('[lead] Resend error (non-fatal):', emailErr)
      }
    } else {
      console.log('[lead] Resend skipped — RESEND_API_KEY not set')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[lead] Unhandled error:', err)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
