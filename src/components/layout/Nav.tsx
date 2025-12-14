import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

const NAV_LINKS = [
  { name: "INICIO", to: "/" },
  { name: "SERVICIOS", to: "/servicios" },
  { name: "PORTAFOLIO", to: "/portafolio" },
  { name: "NOSOTROS", to: "/sobre-nosotros" },
  { name: "TIENDA", to: "/tienda" },
  { name: "CONTACTO", to: "/contacto" }
];

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const cart = useCart();
  const [hoverCart, setHoverCart] = useState(false);
  const [mobileCartOpen, setMobileCartOpen] = useState(false);

  // Trap background scroll when menu is open
  if (typeof window !== "undefined") {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <nav>
      {/* Desktop navbar */}
      <div className="hidden md:flex space-x-4 lg:space-x-6 xl:space-x-8 items-center">
        {NAV_LINKS.map(({ name, to }) => (
          <Link
            key={name}
            to={to}
            className={`text-[#EAEAEA] transition-all font-medium px-1 sm:px-2 py-1 rounded text-fluid-sm lg:text-fluid-base
              ${
                location.pathname === to
                  ? "text-[#B8860B] underline underline-offset-4 lg:underline-offset-8 decoration-[#B8860B]"
                  : "hover:text-[#B8860B]"
              }
            `}
          >
            {name}
          </Link>
        ))}
        <div
          className="relative"
          onMouseEnter={() => setHoverCart(true)}
          onMouseLeave={() => setHoverCart(false)}
        >
          <Link to="/checkout" className="relative p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors">
            <svg className="w-6 h-6 text-[#EAEAEA] hover:text-[#B8860B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m0 0l2.5-5M17 18l-2.5-5" />
            </svg>
            {cart.items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B8860B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.items.length}
              </span>
            )}
          </Link>
          {hoverCart && cart.items.length > 0 && (
            <div className="absolute right-0 mt-2 w-64 bg-[#0D0D0D] border border-[#2A2A2A] rounded-xl shadow-xl p-3 z-50">
              <div className="space-y-2 max-h-64 overflow-auto">
                {cart.items.slice(0, 5).map((it) => (
                  <div key={`${it.type}-${it.id}`} className="flex items-center gap-2">
                    <img src={it.image} alt={it.title} className="w-10 h-10 object-cover rounded" />
                    <div className="flex-1">
                      <div className="text-xs">{it.title}</div>
                      <div className="text-[11px] text-[#B3B3B3]">x{it.quantity}</div>
                    </div>
                    <button
                      className="text-[#C70039] text-xs"
                      onClick={(e) => {
                        e.preventDefault();
                        cart.removeItem(it.id, it.type);
                      }}
                    >
                      quitar
                    </button>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <Link to="/checkout" className="block text-center px-3 py-2 bg-[#B8860B] text-white rounded-lg text-sm">
                  Ir al checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Mobile actions */}
      <div className="md:hidden flex items-center gap-2">
        <button
          aria-label="Abrir carrito"
          onClick={() => setMobileCartOpen(true)}
          className="p-2 sm:p-3 hover:bg-[#1A1A1A] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8860B] relative"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#EAEAEA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m0 0l2.5-5M17 18l-2.5-5" />
          </svg>
          {cart.items.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-[#B8860B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cart.items.length}
            </span>
          )}
        </button>
        <button
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="p-2 sm:p-3 hover:bg-[#1A1A1A] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
        >
          <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center space-y-1">
            <div
              className={`w-full h-0.5 transition-all ${menuOpen ? "rotate-45 translate-y-1.5 bg-[#B8860B]" : ""}`}
              style={{ backgroundColor: "#EAEAEA" }}
            ></div>
            <div
              className={`w-full h-0.5 transition-all ${menuOpen ? "opacity-0" : ""}`}
              style={{ backgroundColor: "#EAEAEA" }}
            ></div>
            <div
              className={`w-full h-0.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5 bg-[#B8860B]" : ""}`}
              style={{ backgroundColor: "#EAEAEA" }}
            ></div>
          </div>
        </button>
      </div>
      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#0D0D0D] bg-opacity-95 backdrop-blur px-fluid-sm py-fluid-md animate-fadeIn">
          <button
            aria-label="Cerrar menú"
            onClick={() => setMenuOpen(false)}
            className="self-end mb-fluid-sm text-[#B8860B] hover:text-[#EAEAEA] text-fluid-2xl sm:text-fluid-3xl font-bold focus:outline-none"
          >
            &times;
          </button>
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">
            {NAV_LINKS.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                className={`text-fluid-xl sm:text-fluid-2xl font-semibold transition-all px-2 py-1 rounded 
                  ${
                    location.pathname === to
                      ? "text-[#B8860B] underline underline-offset-4 sm:underline-offset-8 decoration-[#B8860B]"
                      : "text-[#EAEAEA] hover:text-[#B8860B]"
                  }
                `}
                onClick={() => setMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
      {mobileCartOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 p-4">
          <div className="bg-[#1A1A1A] rounded-xl w-full max-w-md border border-[#2A2A2A] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-[#2A2A2A]">
              <span className="text-[#EAEAEA] font-semibold">Carrito</span>
              <button
                onClick={() => setMobileCartOpen(false)}
                className="p-2 hover:bg-[#2A2A2A] rounded-lg text-[#B3B3B3] hover:text-[#EAEAEA]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 max-h-[50vh] overflow-y-auto">
              {cart.items.length === 0 ? (
                <div className="text-center py-10">
                  <span className="text-[#B3B3B3]">Tu carrito está vacío</span>
                </div>
              ) : (
                <div className="space-y-3">
                  {cart.items.map((it) => (
                    <div key={`${it.type}-${it.id}`} className="flex items-center gap-3 p-3 bg-[#0D0D0D] rounded-lg border border-[#2A2A2A]">
                      <img src={it.image} alt={it.title} className="w-12 h-12 object-cover rounded" />
                      <div className="flex-1 min-w-0">
                        <div className="text-[#EAEAEA] text-sm truncate">{it.title}</div>
                        <div className="text-[#B3B3B3] text-xs">x{it.quantity}</div>
                      </div>
                      <button
                        onClick={() => cart.removeItem(it.id, it.type)}
                        className="p-2 text-[#C70039] hover:bg-[#2A2A2A] rounded-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="p-4 border-t border-[#2A2A2A] bg-[#0D0D0D]">
              <Link
                to="/checkout"
                onClick={() => setMobileCartOpen(false)}
                className="block w-full text-center px-4 py-3 bg-[#B8860B] text-white rounded-lg font-semibold hover:bg-[#C70039] transition-colors"
              >
                Ir al checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
