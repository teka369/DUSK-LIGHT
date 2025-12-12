export const parsePriceToCents = (price: string | number): number => {
  if (typeof price === 'number') return Math.round(price * 100);
  const clean = price.replace(/[^\d.,]/g, '').replace(/\./g, '').replace(',', '.');
  const num = Number(clean);
  if (Number.isNaN(num)) return 0;
  return Math.round(num * 100);
};

export const formatCOP = (cents: number): string => {
  const value = cents / 100;
  return new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(
    value
  );
};
