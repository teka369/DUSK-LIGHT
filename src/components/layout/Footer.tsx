import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="px-fluid-sm py-fluid-md border-t" style={{ borderColor: '#1A1A1A', backgroundColor: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-md items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 justify-center md:justify-start">
            <img 
              src="/DUSK-LIGHT/logo.png" 
              alt="Dusk Light Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
              loading="lazy"
            />
            <span className="text-[#EAEAEA] text-fluid-base sm:text-fluid-lg font-bold">DUSK LIGHT</span>
          </Link>

          {/* Enlaces rápidos */}
          <div className="flex flex-wrap justify-center md:justify-center gap-4 sm:gap-6">
            <Link 
              to="/" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-fluid-xs sm:text-fluid-sm font-medium"
            >
              INICIO
            </Link>
            <Link 
              to="/portafolio" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-fluid-xs sm:text-fluid-sm font-medium"
            >
              GALERÍA
            </Link>
            <Link 
              to="/servicios" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-fluid-xs sm:text-fluid-sm font-medium"
            >
              SERVICIOS
            </Link>
            <Link 
              to="/tienda" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-fluid-xs sm:text-fluid-sm font-medium"
            >
              TIENDA
            </Link>
            <Link 
              to="/contacto" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-fluid-xs sm:text-fluid-sm font-medium"
            >
              CONTACTO
            </Link>
          </div>

          {/* Texto final */}
          <div className="text-center md:text-right">
            <p className="text-[#B3B3B3] text-fluid-xs sm:text-fluid-sm mb-1">
              © 2025 DUSK LIGHT.
            </p>
            <p className="text-[#B3B3B3] text-fluid-xs sm:text-fluid-sm italic">
              Diseñado con pasión fotográfica.
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="w-full h-px mt-fluid-sm" style={{ backgroundColor: '#1A1A1A' }}></div>
        
        {/* Información adicional */}
        <div className="mt-fluid-sm text-center">
          <p className="text-[#B3B3B3] text-fluid-xs">
            Capturando momentos únicos desde 2025. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
