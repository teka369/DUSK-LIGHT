import type { OrderPayload } from '../types';

export const submitOrder = async (order: OrderPayload) => {
  const res = await fetch('/api/orders', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  if (!res.ok) throw new Error('Order submission failed');
  return await res.json();
};
