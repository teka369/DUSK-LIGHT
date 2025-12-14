export const renderOrderEmailHTML = (params: {
  customer: {
    firstName: string
    lastName: string
    email: string
    phone: string
    city?: string
    country?: string
    address?: string
  }
  items: Array<{
    title: string
    unitPriceCents: number
    quantity: number
    image?: string
  }>
  currency: string
  subtotalCents: number
  totalCents: number
  notes?: string
}) => {
  const money = (cents: number) =>
    new Intl.NumberFormat('es-CO', { style: 'currency', currency: params.currency || 'COP' }).format(
      Math.round(cents)
    )
  const rows = params.items
    .map(
      (it) => `
      <tr>
        <td style="padding:8px;border-bottom:1px solid #2A2A2A;color:#EAEAEA;">${it.title}</td>
        <td style="padding:8px;border-bottom:1px solid #2A2A2A;color:#B3B3B3;">${money(it.unitPriceCents)}</td>
        <td style="padding:8px;border-bottom:1px solid #2A2A2A;color:#B3B3B3;">${it.quantity}</td>
        <td style="padding:8px;border-bottom:1px solid #2A2A2A;color:#EAEAEA;">${money(
          it.unitPriceCents * it.quantity
        )}</td>
      </tr>`
    )
    .join('')

  return `
  <div style="background:#0D0D0D;color:#EAEAEA;font-family:system-ui,Segoe UI,Roboto,Arial;padding:16px">
    <h2 style="margin:0 0 12px">Nuevo pedido pendiente</h2>
    <p style="margin:0 0 16px;color:#B3B3B3">Se ha recibido un pedido desde el sitio.</p>
    <div style="margin:0 0 16px;padding:12px;border:1px solid #2A2A2A;border-radius:8px">
      <div><strong>Cliente:</strong> ${params.customer.firstName} ${params.customer.lastName}</div>
      <div><strong>Email:</strong> ${params.customer.email}</div>
      <div><strong>Teléfono:</strong> ${params.customer.phone}</div>
      ${
        params.customer.city || params.customer.country
          ? `<div><strong>Ubicación:</strong> ${params.customer.city || ''} ${params.customer.country || ''}</div>`
          : ''
      }
      ${params.customer.address ? `<div><strong>Dirección:</strong> ${params.customer.address}</div>` : ''}
    </div>
    <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%;border-collapse:collapse">
      <thead>
        <tr>
          <th style="text-align:left;padding:8px;border-bottom:2px solid #2A2A2A;color:#EAEAEA">Producto</th>
          <th style="text-align:left;padding:8px;border-bottom:2px solid #2A2A2A;color:#EAEAEA">Precio unitario</th>
          <th style="text-align:left;padding:8px;border-bottom:2px solid #2A2A2A;color:#EAEAEA">Cantidad</th>
          <th style="text-align:left;padding:8px;border-bottom:2px solid #2A2A2A;color:#EAEAEA">Total</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <div style="margin-top:12px;padding:12px;border-top:1px solid #2A2A2A">
      <div style="display:flex;justify-content:space-between;color:#B3B3B3"><span>Total parcial:</span><span>${money(
        params.subtotalCents
      )}</span></div>
      <div style="display:flex;justify-content:space-between;font-weight:700"><span>Total:</span><span>${money(
        params.totalCents
      )}</span></div>
    </div>
    ${
      params.notes
        ? `<div style="margin-top:12px;padding:12px;border:1px solid #2A2A2A;border-radius:8px"><strong>Notas:</strong><div style="color:#B3B3B3">${params.notes}</div></div>`
        : ''
    }
  </div>`
}

