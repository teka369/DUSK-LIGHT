import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

const SobreNosotros: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="image.png" 
            alt="Dusk Light Logo" 
            className="w-16 h-16 object-contain"
          />
          <span className="text-[#EAEAEA] text-xl font-bold">DUSK LIGHT</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">INICIO</Link>
          <Link to="/" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">CALENÍA</Link>
          <Link to="/servicios" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">SERVICIOS</Link>
          <Link to="/portafolio" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">PORTAFOLIO</Link>
          <Link to="/sobre-nosotros" className="text-[#B8860B] transition-colors">NOSOTROS</Link>
          <Link to="/tienda" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">TIENDA</Link>
          <Link to="/contacto" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">CONTACTO</Link>
        </nav>
        
        {/* Hamburger Menu */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5" style={{ backgroundColor: '#EAEAEA' }}></div>
            <div className="w-full h-0.5" style={{ backgroundColor: '#EAEAEA' }}></div>
            <div className="w-full h-0.5" style={{ backgroundColor: '#EAEAEA' }}></div>
          </div>
        </button>
      </header>

      {/* Main Content */}
      <main className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#EAEAEA] mb-4">
              SOBRE NOSOTROS
            </h1>
            <div className="w-24 h-1 mx-auto" style={{ backgroundColor: '#B8860B' }}></div>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full h-96 lg:h-[500px] rounded-xl overflow-hidden" style={{ backgroundColor: '#1A1A1A' }}>
                  <img 
                    src="/paisaje.png" 
                    alt="Equipo Dusk Light" 
                    className="w-full h-full object-cover filter grayscale brightness-75 contrast-110"
                    style={{
                      maskImage: 'radial-gradient(ellipse 80% 80% at center, black 0%, transparent 70%)',
                      WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at center, black 0%, transparent 70%)'
                    }}
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#B8860B] rounded-lg opacity-30"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#C70039] rounded-lg opacity-30"></div>
              </div>
            </div>

            {/* Text Column */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-[#EAEAEA] mb-6">
                    Somos un grupo de fotógrafos apasionados por capturar la esencia de cada momento.
                  </h2>
                </div>

                <div className="space-y-6">
                  <p className="text-lg text-[#B3B3B3] leading-relaxed">
                    Trabajamos con marcas, artistas y personas que buscan transformar una imagen en una historia visual.
                  </p>
                  
                  <p className="text-lg text-[#B3B3B3] leading-relaxed">
                    Nuestra misión: que cada foto hable por sí sola.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#EAEAEA] font-semibold mb-2">Experiencia</h3>
                      <p className="text-[#B3B3B3] text-sm">Más de 5 años capturando momentos únicos</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#EAEAEA] font-semibold mb-2">Calidad</h3>
                      <p className="text-[#B3B3B3] text-sm">Equipos profesionales y edición de alta calidad</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#EAEAEA] font-semibold mb-2">Pasión</h3>
                      <p className="text-[#B3B3B3] text-sm">Amamos lo que hacemos y se nota en cada foto</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#B8860B' }}>
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[#EAEAEA] font-semibold mb-2">Innovación</h3>
                      <p className="text-[#B3B3B3] text-sm">Técnicas creativas y enfoques únicos</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-8">
                  <Link 
                    to="/contacto" 
                    className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-colors"
                    style={{ backgroundColor: '#B8860B' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}
                  >
                    CONÓCENOS MÁS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </div>
  );
};

export default SobreNosotros;
