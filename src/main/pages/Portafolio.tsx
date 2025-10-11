import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MobileMenu from '../../components/MobileMenu';
import { Nav } from '../components/nav';

const Portafolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = ['Todas', 'Retratos', 'Moda', 'Eventos', 'Producto', 'Blanco y negro'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Sesión Retrato Individual',
      category: 'Retratos',
      image: '/DUSK-LIGHT/fotos.jpeg',
      description: 'Fotografía profesional de retrato'
    },
    {
      id: 2,
      title: 'Sesión de Moda',
      category: 'Moda',
      image: '/DUSK-LIGHT/auto.png',
      description: 'Fotografía de moda editorial'
    },
    {
      id: 3,
      title: 'Boda Elegante',
      category: 'Eventos',
      image: '/DUSK-LIGHT/paisaje.png',
      description: 'Cobertura de boda completa'
    },
    {
      id: 4,
      title: 'Producto Artesanal',
      category: 'Producto',
      image: '/DUSK-LIGHT/fotos.jpeg',
      description: 'Fotografía de producto profesional'
    },
    {
      id: 5,
      title: 'Retrato en Blanco y Negro',
      category: 'Blanco y negro',
      image: '/DUSK-LIGHT/auto.png',
      description: 'Fotografía artística monocromática'
    },
    {
      id: 6,
      title: 'Sesión Pareja',
      category: 'Retratos',
      image: '/DUSK-LIGHT/paisaje.png',
      description: 'Fotografía romántica de pareja'
    },
    {
      id: 7,
      title: 'Editorial de Moda',
      category: 'Moda',
      image: '/DUSK-LIGHT/fotos.jpeg',
      description: 'Sesión editorial de alta moda'
    },
    {
      id: 8,
      title: 'Evento Corporativo',
      category: 'Eventos',
      image: '/DUSK-LIGHT/auto.png',
      description: 'Cobertura de evento empresarial'
    },
    {
      id: 9,
      title: 'Producto Tecnológico',
      category: 'Producto',
      image: '/DUSK-LIGHT/paisaje.png',
      description: 'Fotografía de producto tecnológico'
    },
    {
      id: 10,
      title: 'Arte en Blanco y Negro',
      category: 'Blanco y negro',
      image: '/DUSK-LIGHT/fotos.jpeg',
      description: 'Fotografía artística conceptual'
    },
    {
      id: 11,
      title: 'Retrato Familiar',
      category: 'Retratos',
      image: '/DUSK-LIGHT/auto.png',
      description: 'Sesión familiar completa'
    },
    {
      id: 12,
      title: 'Fashion Week',
      category: 'Moda',
      image: '/DUSK-LIGHT/paisaje.png',
      description: 'Cobertura de semana de la moda'
    }
  ];

  const filteredItems = activeCategory === 'Todas' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

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
              PORTAFOLIO
            </h1>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#B8860B' }}></div>
            <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
              Descubre nuestra colección de trabajos más destacados. Cada imagen cuenta una historia única.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-[#B3B3B3] hover:text-[#EAEAEA]'
                }`}
                style={{
                  backgroundColor: activeCategory === category ? '#B8860B' : 'transparent',
                  border: activeCategory === category ? 'none' : '1px solid #1A1A1A'
                }}
                onMouseEnter={(e) => {
                  if (activeCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#1A1A1A';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCategory !== category) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-all duration-500 border border-[#2A2A2A] hover:border-[#B8860B]/30 transform hover:scale-105"
              >
                {/* Image */}
                <div className="relative w-full h-full">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover filter grayscale brightness-75 contrast-110 group-hover:brightness-90 transition-all duration-700"
                    style={{
                      maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                      WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="space-y-2">
                      <h3 className="text-[#EAEAEA] text-lg sm:text-xl font-bold">
                        {item.title}
                      </h3>
                      <p className="text-[#B3B3B3] text-xs sm:text-sm line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex items-center space-x-2">
                        <span 
                          className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold"
                          style={{ backgroundColor: '#B8860B', color: 'white' }}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Light Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 via-transparent to-[#C70039]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#EAEAEA]">
                ¿Te gusta lo que ves?
              </h2>
              <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
                Explora nuestra galería completa y descubre más trabajos increíbles. 
                Cada proyecto es una nueva oportunidad de crear arte.
              </p>
              <button 
                className="px-8 py-4 text-white font-semibold rounded-lg transition-colors"
                style={{ backgroundColor: '#B8860B' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}
              >
                VER GALERÍA COMPLETA
              </button>
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

export default Portafolio;
