import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import { useCart } from '../context/CartContext';
import { formatCOP } from '../utils/price';
import { submitOrder } from '../services/orderService';
const genOrderId = () => {
  const s = Math.random().toString(36).slice(2, 10);
  return `ENV-${s}`;
};

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, currency, subtotalCents, discountCents, totalCents, setQuantity, removeItem, clear, applyPromo } =
    useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const dateRef = React.useRef<HTMLInputElement>(null);

  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
    city: '',
    country: 'Colombia',
    promoInput: '',
    notes: '',
  });

  const formatMoney = (cents: number) => (currency === 'COP' ? formatCOP(cents) : formatCOP(cents));

  const canBuy =
    form.firstName.trim() &&
    form.lastName.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    items.length > 0;
  const nextToPayment = () => setStep(3);

  const submit = async () => {
    setLoading(true);
    setError(null);
    try {
      const orderId = genOrderId();
      const payload = {
        customer: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          birthDate: form.birthDate,
          address: form.address,
          city: form.city,
          country: form.country,
        },
        items,
        currency,
        subtotalCents,
        discountCents,
        totalCents,
        promoApplied: form.promoInput || undefined,
        notes: form.notes,
      };
      try {
        await submitOrder(payload);
      } catch {}
      clear();
      try {
        sessionStorage.setItem('last_order_id', orderId);
      } catch {}
      navigate(`/order-confirmation?orderId=${orderId}`, { replace: true });
    } catch (e: any) {
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      <header className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src="/DUSK-LIGHT/logo.png" alt="Dusk Light Logo" className="w-16 h-16 object-contain" />
          <span className="text-[#EAEAEA] text-xl font-bold">DUSK LIGHT</span>
        </Link>
        <Nav />
      </header>
      <main className="px-8 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold">Dusk Light</h1>
          </div>
          <div className="space-y-6">
            <div className="p-6 max-w-md mx-auto text-center">
              <div className="mb-2 font-semibold text-left">1. Nombre completo</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-[#B3B3B3]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeLinecap="round"></path>
                    </svg>
                  </span>
                  <input
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    placeholder="First Name"
                    className="w-full h-12 pl-12 pr-4 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg focus:outline-none focus:border-[#B8860B]/60 hover:border-white transition-colors"
                  />
                </div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-3 flex items-center text-[#B3B3B3]">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="7" r="4"></circle>
                      <path d="M6 21c0-3.314 2.686-6 6-6s6 2.686 6 6" strokeLinecap="round"></path>
                    </svg>
                  </span>
                  <input
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    placeholder="Last Name"
                    className="w-full h-12 pl-12 pr-4 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg focus:outline-none focus:border-[#B8860B]/60 hover:border-white transition-colors"
                  />
                </div>
              </div>
            </div>
            <div className="p-6 max-w-md mx-auto text-center">
              <div className="mb-2 font-semibold text-left">2. Email</div>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-[#B3B3B3]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" fill="none"></path>
                    <path d="M22 6l-10 7L2 6" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="email@example.com"
                  className="w-full h-12 pl-12 pr-4 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg focus:outline-none focus:border-[#B8860B]/60 hover:border-white transition-colors"
                  type="email"
                />
              </div>
            </div>
            <div className="p-6 max-w-md mx-auto text-center">
              <div className="mb-2 font-semibold text-left">3. Número de teléfono</div>
              <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-[#B3B3B3]">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.11 19.5 19.5 0 01-6-6A19.79 19.79 0 012.08 4.18 2 2 0 014.06 2h3a2 2 0 012 1.72c.13.96.35 1.89.65 2.78a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.3-1.3a2 2 0 012.11-.45c.89 .3 1.82 .52 2.78 .65A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </span>
                <input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+57..."
                  className="w-full h-12 pl-12 pr-4 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg focus:outline-none focus:border-[#B8860B]/60 hover:border-white transition-colors"
                />
              </div>
            </div>
            <div className="p-6 max-w-md mx-auto text-center" style={{ backgroundColor: '#0D0D0D' }}>
              <div className="mb-2 font-semibold text-left">4. Fecha de nacimiento</div>
              <div className="relative">
                <button
                  type="button"
                  aria-label="Seleccionar fecha"
                  onClick={() => {
                    const el = dateRef.current as any;
                    if (el && typeof el.showPicker === 'function') {
                      el.showPicker();
                    } else {
                      dateRef.current?.focus();
                    }
                  }}
                  className="absolute inset-y-0 left-3 flex items-center text-[#B3B3B3] hover:text-white"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </button>
                <input
                  ref={dateRef}
                  type="date"
                  value={form.birthDate}
                  onChange={(e) => setForm({ ...form, birthDate: e.target.value })}
                  className="w-full h-12 pl-12 pr-4 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg focus:outline-none focus:border-[#B8860B]/60 hover:border-white transition-colors appearance-none text-[#EAEAEA]"
                />
              </div>
            </div>
            <div className="p-6 max-w-md mx-auto text-center">
              <div className="mb-2 font-semibold text-left">5. Servicios o productos</div>
              {items.length === 0 ? (
                <div className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg">No hay productos en su cesta.</div>
              ) : (
                <div className="space-y-2">
                  {items.map((it) => (
                    <div key={`${it.type}-${it.id}`} className="flex items-center gap-2 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg p-3">
                      <img src={it.image} alt={it.title} className="w-12 h-12 object-cover rounded" />
                      <div className="flex-1">
                        <div className="font-semibold">{it.title}</div>
                        <div className="text-[#B3B3B3]">{formatMoney(it.unitPriceCents)}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          className="px-3 py-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded"
                          onClick={() => setQuantity(it.id, Math.max(it.quantity - 1, 1), it.type)}
                        >
                          -
                        </button>
                        <div className="px-3">{it.quantity}</div>
                        <button
                          className="px-3 py-1 bg-[#1A1A1A] border border-[#2A2A2A] rounded"
                          onClick={() => setQuantity(it.id, it.quantity + 1, it.type)}
                        >
                          +
                        </button>
                        <button
                          className="ml-2 px-3 py-1 bg-[#C70039] text-white rounded"
                          onClick={() => removeItem(it.id, it.type)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <input
                      value={form.promoInput}
                      onChange={(e) => setForm({ ...form, promoInput: e.target.value })}
                      placeholder="Código promocional"
                      className="flex-1 px-4 py-3 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg focus:outline-none focus:border-[#B8860B]/60 hover:border-white transition-colors"
                    />
                    <button className="px-4 py-3 bg-[#B8860B] text-white rounded-lg" onClick={() => applyPromo(form.promoInput)}>
                      Aplicar
                    </button>
                  </div>
                  <div className="text-right space-y-0">
                    <div>Subtotal: {formatMoney(subtotalCents)}</div>
                    <div>Descuento: {formatMoney(discountCents)}</div>
                    <div className="font-bold">Total: {formatMoney(totalCents)}</div>
                  </div>
                </div>
              )}
              <div className="mt-4 flex justify-center">
                <button
                  className="px-6 py-3 bg-[#B8860B] text-white rounded-lg disabled:opacity-60"
                  disabled={!canBuy}
                  onClick={nextToPayment}
                >
                  Comprar
                </button>
              </div>
            </div>
            {step === 3 && (
            <div className="p-6 max-w-md mx-auto text-center">
              <div className="mb-2 font-semibold text-left">6. Confirmación y pago</div>
              <div className="space-y-2">
                <p className="text-[#B3B3B3]">
                  Gracias por tu compra. Mantente en contacto con nosotros, tu pedido está pendiente. Coordina el pago
                  directamente con el vendedor.
                </p>
                <textarea
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Notas del pedido"
                  className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg focus:outline-none focus:border-[#B8860B]/60 transition-colors"
                />
                {error && <div className="text-[#C70039]">{error}</div>}
                <div className="flex items-center justify-center">
                  <button
                    className="px-8 py-3 bg-white text-black rounded-2xl font-semibold disabled:opacity-60"
                    disabled={items.length === 0 || loading}
                    onClick={submit}
                  >
                    {loading ? 'Procesando...' : 'Confirmar pedido'}
                  </button>
                </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>
  );
};

export default Checkout;
