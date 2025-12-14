import type { OrderPayload } from '../types';

const ORDERS_ENDPOINT =
  import.meta.env.VITE_ORDERS_ENDPOINT ||
  'https://dusk-light-orders.guarinromerojuandavid.workers.dev';

export const submitOrder = async (order: OrderPayload) => {
  const res = await fetch(ORDERS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(detail || 'Order submission failed');
  }
  return await res.json();
};
