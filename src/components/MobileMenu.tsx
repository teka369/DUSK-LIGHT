import React from 'react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      ></div>
      
      {/* Menu Panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-[#0D0D0D] border-l border-[#1A1A1A] transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#1A1A1A]">
          <div className="flex items-center space-x-3">
            <img 
              src="image.png" 
              alt="Dusk Light Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-[#EAEAEA] text-lg font-bold">DUSK LIGHT</span>
          </div>
          <button
            onClick={onClose}
            className="text-[#B3B3B3] hover:text-[#EAEAEA] transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 space-y-6">
          <Link 
            to="/" 
            onClick={onClose}
            className="block text-[#EAEAEA] hover:text-[#B8860B] transition-colors text-lg font-medium py-2"
          >
            INICIO
          </Link>
          <Link 
            to="/" 
            onClick={onClose}
            className="block text-[#EAEAEA] hover:text-[#B8860B] transition-colors text-lg font-medium py-2"
          >
            CALENÍA
          </Link>
          <Link 
            to="/servicios" 
            onClick={onClose}
            className="block text-[#EAEAEA] hover:text-[#B8860B] transition-colors text-lg font-medium py-2"
          >
            SERVICIOS
          </Link>
          <Link 
            to="/portafolio" 
            onClick={onClose}
            className="block text-[#EAEAEA] hover:text-[#B8860B] transition-colors text-lg font-medium py-2"
          >
            PORTAFOLIO
          </Link>
          <Link 
            to="/sobre-nosotros" 
            onClick={onClose}
            className="block text-[#EAEAEA] hover:text-[#B8860B] transition-colors text-lg font-medium py-2"
          >
            NOSOTROS
          </Link>
          <Link 
            to="/tienda" 
            onClick={onClose}
            className="block text-[#EAEAEA] hover:text-[#B8860B] transition-colors text-lg font-medium py-2"
          >
            TIENDA
          </Link>
          <Link 
            to="/contacto" 
            onClick={onClose}
            className="block text-[#EAEAEA] hover:text-[#B8860B] transition-colors text-lg font-medium py-2"
          >
            CONTACTO
          </Link>
        </nav>

        {/* Contact Info */}
        <div className="p-6 border-t border-[#1A1A1A] mt-auto">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-[#B8860B] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-[#B3B3B3] text-sm">info@dusklight.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.214-.366a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <span className="text-[#B3B3B3] text-sm">+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
