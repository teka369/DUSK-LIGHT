import React, { useState } from 'react';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import { Nav } from '../components/nav';

const Contacto: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/DUSK-LIGHT/logo.png" 
            alt="Dusk Light Logo" 
            className="w-16 h-16 object-contain"
          />
          <span className="text-[#EAEAEA] text-xl font-bold">DUSK LIGHT</span>
        </div>
        
        {/* Navigation */}
        <Nav />
        
        
      </header>

      {/* Main Content */}
      <main className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#EAEAEA] mb-4">
              CONTACTO
            </h1>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#B8860B' }}></div>
            <p className="text-[#B3B3B3] text-lg max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a capturar 
              esos momentos únicos que merecen ser recordados para siempre.
            </p>
          </div>

          {/* Contact Content */}
          <div className="flex justify-center">
            {/* Contact Info Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#EAEAEA] mb-6">
                  Conecta con nosotros
                </h2>
                <p className="text-[#B3B3B3] text-lg mb-8">
                  Síguenos en nuestras redes sociales para ver nuestro trabajo más reciente 
                  y mantenerte al día con nuestras novedades.
                </p>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                {/* Instagram */}
                <div className="flex items-center space-x-4 p-6 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] hover:border-[#B8860B]/30 transition-colors group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#EAEAEA] font-semibold text-lg">Instagram</h3>
                    <p className="text-[#B3B3B3]">studiodusklight</p>
                    <a 
                      href="https://www.instagram.com/studiodusklight/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#B8860B] hover:text-[#C70039] transition-colors text-sm"
                    >
                      Seguir en Instagram
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 p-6 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] hover:border-[#B8860B]/30 transition-colors group">
                  <div className="w-12 h-12 bg-[#B8860B] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#EAEAEA] font-semibold text-lg">Correo</h3>
                    <p className="text-[#B3B3B3]">studiodusklight@gmail.com</p>
                    <a 
                      href="mailto:studiodusklight@gmail.com"
                      className="text-[#B8860B] hover:text-[#C70039] transition-colors text-sm"
                    >
                      Enviar correo
                    </a>
                  </div>
                </div>

                
              </div>

              {/* Quote */}
              <div className="mt-12 p-8 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl border border-[#B8860B]/20">
                <blockquote className="text-center">
                  <p className="text-2xl font-light text-[#EAEAEA] italic mb-4">
                    "Cada historia merece ser contada con luz."
                  </p>
                  <cite className="text-[#B8860B] font-semibold">— Dusk Light Photography</cite>
                </blockquote>
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

export default Contacto;
