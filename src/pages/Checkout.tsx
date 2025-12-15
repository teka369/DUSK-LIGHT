import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import { useCart } from '../context/CartContext';
import { formatCOP } from '../utils/price';
import { submitOrder } from '../services/orderService';
import { renderOrderEmailHTML } from '../utils/emailTemplate';
const genOrderId = () => {
  const s = Math.random().toString(36).slice(2, 10);
  return `ENV-${s}`;
};

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { items, currency, subtotalCents, removeItem, clear } =
    useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [step, setStep] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const dateRef = React.useRef<HTMLInputElement>(null);
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');
  const [cartModalOpen, setCartModalOpen] = React.useState(false);
  const comprarRef = React.useRef<HTMLButtonElement>(null);

  const [form, setForm] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    address: '',
    city: '',
    country: 'Colombia',
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
      const totalNoPromo = subtotalCents;
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
        discountCents: 0,
        totalCents: totalNoPromo,
        notes: form.notes,
        emailHTML: renderOrderEmailHTML({
          customer: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            phone: form.phone,
            city: form.city,
            country: form.country,
            address: form.address,
          },
          items: items.map((it) => ({
            title: it.title,
            unitPriceCents: it.unitPriceCents,
            quantity: it.quantity,
            image: it.image,
          })),
          currency,
          subtotalCents,
          totalCents: totalNoPromo,
          notes: form.notes,
          }),
        turnstileToken: undefined,
      };
      const resp = await submitOrder(payload);
      if (!resp || resp.status !== 'ok') {
        setError('No se pudo enviar tu pedido. Inténtalo de nuevo.');
        return;
      }
      clear();
      try {
        sessionStorage.setItem('last_order_id', orderId);
      } catch (_err) {
        void _err;
      }
      navigate(`/order-confirmation?orderId=${orderId}`, { replace: true });
    } catch (e) {
      setError(typeof e === 'string' ? e : 'Ocurrió un error al procesar tu pedido.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      <header className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Dusk Light Logo" className="w-16 h-16 object-contain" />
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
                    type DateInput = HTMLInputElement & { showPicker?: () => void };
                    const el = dateRef.current as DateInput | null;
                    if (el && typeof el.showPicker === 'function') {
                      el.showPicker?.();
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
                <div className="space-y-4">
                  <div className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg flex items-center justify-between">
                    <span className="font-semibold">Monto total: {formatMoney(subtotalCents)}</span>
                    <button
                      type="button"
                      onClick={() => setCartModalOpen(true)}
                      className="relative p-2 rounded-lg hover:bg-[#1A1A1A]"
                      aria-label="Ver carrito"
                    >
                      <svg className="w-6 h-6 text-[#EAEAEA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m0 0l2.5-5M17 18l-2.5-5" />
                      </svg>
                      {items.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-[#B8860B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {items.length}
                        </span>
                      )}
                    </button>
                  </div>
                  <div className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg flex items-center justify-between">
                    <span>{items.length} productos</span>
                    <div className="flex items-center gap-2">
                      <button
                        className={`p-2 rounded-lg border ${viewMode === 'list' ? 'border-[#B8860B] text-[#B8860B]' : 'border-[#3A3A3A] text-[#EAEAEA]'}`}
                        onClick={() => setViewMode('list')}
                        aria-label="Vista de lista"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </button>
                      <button
                        className={`p-2 rounded-lg border ${viewMode === 'grid' ? 'border-[#B8860B] text-[#B8860B]' : 'border-[#3A3A3A] text-[#EAEAEA]'}`}
                        onClick={() => setViewMode('grid')}
                        aria-label="Vista de cuadrícula"
                      >
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <rect x="4" y="4" width="6" height="6" rx="1" strokeWidth="2"/>
                          <rect x="14" y="4" width="6" height="6" rx="1" strokeWidth="2"/>
                          <rect x="4" y="14" width="6" height="6" rx="1" strokeWidth="2"/>
                          <rect x="14" y="14" width="6" height="6" rx="1" strokeWidth="2"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  {viewMode === 'grid' ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {items.map((it) => (
                        <div key={`${it.type}-${it.id}`} className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl overflow-hidden">
                          <div className="aspect-video bg-[#1A1A1A]">
                            <img src={it.image} alt={it.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="p-4 flex items-center justify-between">
                            <div className="font-semibold">{it.title}</div>
                            <div className="text-[#B3B3B3]">Unit: {formatMoney(it.unitPriceCents)}</div>
                          </div>
                          <div className="px-4 pb-4">
                            <button
                              className="w-full px-3 py-2 bg-[#C70039] text-white rounded-lg"
                              onClick={() => removeItem(it.id, it.type)}
                            >
                              Eliminar
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {items.map((it) => (
                        <div key={`${it.type}-${it.id}`} className="flex items-center gap-3 bg-[#0D0D0D] border border-[#2A2A2A] rounded-lg p-3">
                          <img src={it.image} alt={it.title} className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <div className="font-semibold">{it.title}</div>
                            <div className="text-[#B3B3B3]">Unit: {formatMoney(it.unitPriceCents)}</div>
                          </div>
                          <button
                            className="px-3 py-2 bg-[#C70039] text-white rounded"
                            onClick={() => removeItem(it.id, it.type)}
                          >
                            Eliminar
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="text-right space-y-0">
                    <div className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg flex items-center justify-between">
                      <span>Total parcial:</span>
                      <span>{formatMoney(subtotalCents)}</span>
                    </div>
                    <div className="w-full px-4 py-3 bg-[#0D0D0D] border border-[#3A3A3A] rounded-lg flex items-center justify-between">
                      <span>Total:</span>
                      <span className="font-bold">{formatMoney(subtotalCents)}</span>
                    </div>
                  </div>
                </div>
              )}
            <div className="mt-4 flex justify-center">
              <button
                ref={comprarRef}
                className="px-6 py-3 bg-[#B8860B] text-white rounded-lg disabled:opacity-60"
                disabled={!canBuy}
                onClick={nextToPayment}
              >
                Comprar
              </button>
            </div>
          </div>
          {cartModalOpen && (
            <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4">
              <div className="bg-[#0D0D0D] border border-[#2A2A2A] rounded-2xl w-full max-w-3xl overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
                  <span className="text-[#EAEAEA] font-semibold">Tu carrito</span>
                  <button
                    onClick={() => setCartModalOpen(false)}
                    className="p-2 text-[#B3B3B3] hover:text-[#EAEAEA] hover:bg-[#1A1A1A] rounded-lg"
                    aria-label="Cerrar"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-4 gap-2 text-[#EAEAEA] font-semibold text-sm px-2">
                    <div>Producto</div>
                    <div>Precio unitario</div>
                    <div>Total</div>
                    <div></div>
                  </div>
                  <div className="mt-2 space-y-2">
                    {items.map((it) => (
                      <div key={`${it.type}-${it.id}`} className="grid grid-cols-4 gap-2 items-center text-sm px-2">
                        <div className="text-[#EAEAEA] truncate">{it.title}</div>
                        <div className="text-[#EAEAEA]">{formatMoney(it.unitPriceCents)}</div>
                        <div className="text-[#EAEAEA]">{formatMoney(it.unitPriceCents * it.quantity)}</div>
                        <button
                          onClick={() => removeItem(it.id, it.type)}
                          className="p-2 text-[#C70039] hover:bg-[#1A1A1A] rounded-lg justify-self-end"
                          aria-label="Eliminar"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 space-y-2 border-t border-[#2A2A2A] pt-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#B3B3B3]">Total parcial:</span>
                      <span className="text-[#EAEAEA]">{formatMoney(subtotalCents)}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#EAEAEA] font-semibold">Total:</span>
                      <span className="text-[#EAEAEA] font-bold">{formatMoney(subtotalCents)}</span>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t border-[#2A2A2A] bg-[#0D0D0D] flex justify-end gap-3">
                  <Link
                    to="/tienda"
                    className="px-4 py-2 border border-[#3A3A3A] rounded-lg text-[#EAEAEA] hover:bg-[#1A1A1A]"
                    onClick={() => setCartModalOpen(false)}
                  >
                    Seguir comprando
                  </Link>
                  <button
                    className="px-4 py-2 bg-[#B8860B] text-white rounded-lg hover:bg-[#C70039]"
                    onClick={() => {
                      setCartModalOpen(false);
                      try {
                        comprarRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        comprarRef.current?.focus();
                      } catch (_err) {
                        void _err;
                      }
                    }}
                  >
                    Terminar de comprar
                  </button>
                </div>
              </div>
            </div>
          )}
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
