import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

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
      </div>
      {/* Hamburger Menu */}
      <button
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        className="md:hidden p-2 sm:p-3 hover:bg-[#1A1A1A] rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#B8860B]"
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
    </nav>
  );
};