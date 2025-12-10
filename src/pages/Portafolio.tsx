import React, { useState } from 'react';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import { Nav } from '../components/layout/Nav';
import { Link } from 'react-router-dom';
import type { PortfolioItem } from '../types';

const Portafolio: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const initialPortfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Sesión Retrato Individual',
      category: 'Retratos',
      src: '/DUSK-LIGHT/images/portfolio/portafolio.jpeg',
      alt: 'Sesión Retrato Individual',
      description: 'Fotografía profesional de retrato',
      tags: ['Retratos']
    },
    {
      id: 2,
      title: 'Sesión de Moda',
      category: 'Moda',
      src: '/DUSK-LIGHT/images/portfolio/portafolio1.1.jpeg',
      alt: 'Sesión de Moda',
      description: 'Fotografía de moda editorial',
      tags: ['Moda']
    },
    {
      id: 3,
      title: 'Boda Elegante',
      category: 'Eventos',
      src: '/DUSK-LIGHT/images/portfolio/portafolio2.jpeg',
      alt: 'Boda Elegante',
      description: 'Cobertura de boda completa',
      tags: ['Boda', 'Eventos']
    }
  ];


  const [portfolioItems] = useState<PortfolioItem[]>(initialPortfolioItems);

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src="/DUSK-LIGHT/logo.png" 
            alt="Dusk Light Logo" 
            className="w-16 h-16 object-contain"
          />
          <span className="text-[#EAEAEA] text-xl font-bold">DUSK LIGHT</span>
        </Link>
        
        {/* Navigation */}
        <Nav />
      </header>

      {/* Main Content */}
      <main className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16 relative">
            <h1 className="text-5xl font-bold text-[#EAEAEA] mb-4">
              PORTAFOLIO
            </h1>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#B8860B' }}></div>
            <p className="text-[#B3B3B3] text-lg max-w-2xl mx-auto">
              Descubre nuestra colección de trabajos más destacados. Cada imagen cuenta una historia única.
            </p>
            
          </div>


          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-all duration-500 border border-[#2A2A2A] hover:border-[#B8860B]/30 transform hover:scale-105"
              onClick={() => openLightbox(item.src)}
              >
                  <>
                    {/* Image */}
                  <div className="relative w-full h-full">
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-75 contrast-110 group-hover:brightness-90 transition-all duration-700"
                      style={{
                        maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                        WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                      }}
                      loading="lazy"
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
                  </>
              </div>
            ))}
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

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative max-w-full max-h-full p-4" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Expanded Image" className="max-w-full max-h-full object-contain rounded-lg" style={{ maxHeight: '90vh', maxWidth: '90vw' }} />
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portafolio;
