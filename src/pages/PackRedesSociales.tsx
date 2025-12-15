import React, { useState } from 'react';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import { Nav } from '../components/layout/Nav';
import { Link } from 'react-router-dom';


interface Image {
  src: string;
  alt: string;
}

const PackRedesSociales: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images: Image[] = [
    { src: `${import.meta.env.BASE_URL}images/session-social/WhatsApp Image 2025-10-23 at 15.48.53.jpeg`, alt: 'Imagen 1' },
    { src: `${import.meta.env.BASE_URL}images/session-social/WhatsApp Image 2025-10-23 at 15.48.51.jpeg`, alt: 'Imagen 2' },
    { src: `${import.meta.env.BASE_URL}images/session-social/WhatsApp Image 2025-10-23 at 15.48.53 (1).jpeg`, alt: 'Imagen 3' },
    { src: `${import.meta.env.BASE_URL}images/session-social/WhatsApp Image 2025-10-23 at 15.48.53 (2).jpeg`, alt: 'Imagen 4' },
    { src: `${import.meta.env.BASE_URL}images/session-social/WhatsApp Image 2025-10-23 at 15.48.53 (3).jpeg`, alt: 'Imagen 5' },
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      <header className="flex items-center justify-between px-fluid-sm py-fluid-xs">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
            alt="Dusk Light Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
          <span className="text-[#EAEAEA] text-fluid-lg sm:text-fluid-xl font-bold">DUSK LIGHT</span>
        </Link>
        <Nav />
      </header>

      <section className="container-fluid py-fluid-lg">
        <div className="text-center mb-fluid-xl">
          <h1 className="text-fluid-4xl sm:text-fluid-5xl lg:text-fluid-6xl font-bold text-[#EAEAEA] mb-fluid-sm">
            Pack Redes Sociales
          </h1>
          <p className="text-fluid-lg text-[#B3B3B3] max-w-3xl mx-auto">
            50 fotos optimizadas para Instagram, Facebook y LinkedIn. Perfecto para influencers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-[#1A1A1A] hover:bg-[#2A2A2A] transition-all duration-500 border border-[#2A2A2A] hover:border-[#B8860B]/30 transform hover:scale-105"
              onClick={() => openLightbox(image.src)}
            >
              <div className="relative w-full h-full">
                <img 
                  src={image.src} 
                  alt={image.alt} 
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
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-lg font-semibold">Ver Imagen</span>
                </div>

                {/* Hover Light Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B8860B]/20 via-transparent to-[#C70039]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      <Footer />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>
  );
};

export default PackRedesSociales;
