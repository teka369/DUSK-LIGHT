// Cloudflare Worker skeleton for POST /orders
// Secrets required: RESEND_API_KEY
// Env variable: VENDORS (comma-separated emails), CORS_ORIGIN
export interface Env {
  RESEND_API_KEY: string
  VENDORS?: string
  CORS_ORIGIN?: string
  FROM?: string
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get('origin') || ''
    const corsList = (env.CORS_ORIGIN || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)
    const isAllowed = corsList.length === 0 || corsList.includes(origin)
    const allowHeader = isAllowed ? origin : corsList[0] || '*'
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': allowHeader,
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
    }
    if (!isAllowed) {
      return new Response('Forbidden', {
        status: 403,
        headers: { 'Access-Control-Allow-Origin': allowHeader },
      })
    }
    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 })
    }
    let payload: unknown
    try {
      payload = await request.json()
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': allowHeader },
      })
    }
    // Basic validation
    const p = payload as {
      customer?: { email?: string; firstName?: string; lastName?: string }
      items?: Array<unknown>
      currency?: string
      subtotalCents?: number
      totalCents?: number
      emailHTML?: string
    }
    if (!p?.customer?.email || !Array.isArray(p?.items) || (p.items?.length || 0) === 0) {
      return new Response(JSON.stringify({ error: 'Invalid payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': allowHeader },
      })
    }
    const vendors = (env.VENDORS || '').split(',').map((s) => s.trim()).filter(Boolean)
    if (!env.RESEND_API_KEY || vendors.length === 0) {
      return new Response(
        JSON.stringify({
          error: 'Server not configured',
          hasResend: !!env.RESEND_API_KEY,
          vendorsCount: vendors.length,
        }),
        {
        status: 500,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': allowHeader },
        }
      )
    }
    // Compose email HTML (assumes client sent a rendered HTML optional field; otherwise build a minimal one)
    const subject = `Nuevo pedido pendiente - ${p.customer?.firstName || ''} ${p.customer?.lastName || ''}`.trim()
    const html =
      p.emailHTML ||
      `<div><h2>Nuevo pedido</h2><p>Cliente: ${p.customer?.firstName} ${p.customer?.lastName} (${p.customer?.email})</p></div>`
    // Send via Resend
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: env.FROM || 'onboarding@resend.dev',
        to: vendors,
        subject,
        html,
        reply_to: p.customer?.email,
      }),
    })
    if (!resp.ok) {
      const text = await resp.text()
      return new Response(JSON.stringify({ error: 'Email send failed', detail: text }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': allowHeader },
      })
    }
    let emailRes: unknown = null
    try {
      emailRes = await resp.json()
    } catch {
      // ignore parse errors, not critical
    }
    const id = `ORD-${Math.random().toString(36).slice(2, 10)}`
    return new Response(JSON.stringify({ id, status: 'ok', email: emailRes }), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': allowHeader },
    })
  },
}
