import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="px-8 py-12 border-t" style={{ borderColor: '#1A1A1A', backgroundColor: '#0D0D0D' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <img 
              src="image.png" 
              alt="Dusk Light Logo" 
              className="w-12 h-12 object-contain"
            />
            <span className="text-[#EAEAEA] text-lg font-bold">DUSK LIGHT</span>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-wrap justify-center md:justify-center gap-6">
            <Link 
              to="/" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-sm font-medium"
            >
              INICIO
            </Link>
            <Link 
              to="/portafolio" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-sm font-medium"
            >
              GALERÍA
            </Link>
            <Link 
              to="/servicios" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-sm font-medium"
            >
              SERVICIOS
            </Link>
            <Link 
              to="/tienda" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-sm font-medium"
            >
              TIENDA
            </Link>
            <Link 
              to="/contacto" 
              className="text-[#B3B3B3] hover:text-[#B8860B] transition-colors text-sm font-medium"
            >
              CONTACTO
            </Link>
          </div>

          {/* Texto final */}
          <div className="text-center md:text-right">
            <p className="text-[#B3B3B3] text-sm mb-1">
              © 2025 DUSK LIGHT.
            </p>
            <p className="text-[#B3B3B3] text-sm italic">
              Diseñado con pasión fotográfica.
            </p>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="w-full h-px mt-8" style={{ backgroundColor: '#1A1A1A' }}></div>
        
        {/* Información adicional */}
        <div className="mt-6 text-center">
          <p className="text-[#B3B3B3] text-xs">
            Capturando momentos únicos desde 2024. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
