import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import { Nav } from '../components/nav';

const Servicios: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    {
      id: 1,
      icon: '📷',
      title: 'Sesiones Profesionales',
      description: 'Fotografía de retrato, moda y artística. Sesiones individuales, parejas y familias con edición profesional incluida.',
      features: ['Hasta 2 horas de sesión', '20-30 fotos editadas', 'Entrega en 48 horas', 'Sesión de consulta previa']
    },
    {
      id: 2,
      icon: '🎬',
      title: 'Fotografía de Producto',
      description: 'Fotografía comercial para e-commerce, catálogos y marketing. Productos optimizados para ventas online.',
      features: ['Fondo blanco/transparente', 'Múltiples ángulos', 'Edición profesional', 'Formatos web optimizados']
    },
    {
      id: 3,
      icon: '💍',
      title: 'Cobertura de Eventos',
      description: 'Bodas, eventos corporativos, fiestas y celebraciones. Capturamos cada momento importante de tu evento.',
      features: ['Hasta 8 horas de cobertura', '200+ fotos editadas', 'Entrega en 72 horas', 'Álbum digital incluido']
    },
    {
      id: 4,
      icon: '💡',
      title: 'Edición y Retoque Digital',
      description: 'Servicio de post-producción profesional. Retoque, colorización, restauración y efectos especiales.',
      features: ['Retoque de piel', 'Corrección de color', 'Efectos especiales', 'Restauración de fotos']
    }
  ];

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
              NUESTROS SERVICIOS
            </h1>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#B8860B' }}></div>
            <p className="text-[#B3B3B3] text-lg max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios fotográficos profesionales. 
              Desde sesiones personales hasta cobertura de eventos, tenemos la solución perfecta para ti.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative bg-[#1A1A1A] rounded-xl p-8 hover:bg-[#2A2A2A] transition-all duration-300 border border-[#2A2A2A] hover:border-[#B8860B]/30"
              >
                {/* Icon */}
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#EAEAEA] text-center group-hover:text-[#B8860B] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#B3B3B3] text-sm leading-relaxed text-center">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#B8860B' }}></div>
                        <span className="text-[#B3B3B3] text-xs">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="pt-4">
                    <button 
                      className="w-full px-6 py-3 text-white font-semibold rounded-lg transition-all duration-300 transform group-hover:scale-105"
                      style={{ backgroundColor: '#B8860B' }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}
                    >
                      SOLICITAR COTIZACIÓN
                    </button>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#B8860B]/5 via-transparent to-[#C70039]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-[#1A1A1A] rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#EAEAEA] mb-4">
              ¿Necesitas algo personalizado?
            </h2>
            <p className="text-[#B3B3B3] mb-6 max-w-2xl mx-auto">
              Cada proyecto es único. Si no encuentras exactamente lo que buscas, 
              contáctanos y crearemos una propuesta personalizada para tus necesidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 text-white font-semibold rounded-lg transition-colors"
                style={{ backgroundColor: '#B8860B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}
              >
                CONSULTA PERSONALIZADA
              </button>
              <Link 
                to="/sobre-nosotros"
                className="px-8 py-3 border border-[#B8860B] text-[#B8860B] font-semibold rounded-lg hover:bg-[#B8860B] hover:text-white transition-colors"
              >
                CONOCER MÁS
              </Link>
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

export default Servicios;
