import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Nav } from '../components/layout/Nav';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import { useCart } from '../context/CartContext';
import type { CartItem } from '../types';
import { parsePriceToCents } from '../utils/price';

interface Photo {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  size: string;
  format: string;
}

const Tienda: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');
  const [purchasedPhotos, setPurchasedPhotos] = useState<number[]>(() => {
    const saved = localStorage.getItem('purchasedPhotos');
    return saved ? JSON.parse(saved) : [];
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [photoToRefund, setPhotoToRefund] = useState<number | null>(null);
  const [lastAddedId, setLastAddedId] = useState<number | null>(null);
  const cartCtx = useCart();
  const navigate = useNavigate();
  

  useEffect(() => {
    localStorage.setItem('purchasedPhotos', JSON.stringify(purchasedPhotos));
  }, [purchasedPhotos]);

  const categories = ['Todas', 'Retratos', 'Paisajes', 'Moda', 'Eventos', 'Arte'];

  const initialPhotos: Photo[] = [
    {
      id: 1,
      title: 'Retrato Elegante',
      category: 'Retratos',
      price: 25,
      image: `${import.meta.env.BASE_URL}images/shop/auto.png`,
      description: 'Fotografía de retrato profesional en blanco y negro',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 2,
      title: 'Paisaje Montañoso',
      category: 'Paisajes',
      price: 30,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.33.58.jpeg`,
      description: 'Impresionante vista de montañas al atardecer',
      size: '4000x3000px',
      format: 'JPG'
    },
    {
      id: 3,
      title: 'Moda Editorial',
      category: 'Moda',
      price: 35,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.33.59 (1).jpeg`,
      description: 'Sesión de moda editorial con iluminación profesional',
      size: '3500x2500px',
      format: 'JPG'
    },
    {
      id: 4,
      title: 'Boda Romántica',
      category: 'Eventos',
      price: 40,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.33.59 (2).jpeg`,
      description: 'Momento íntimo de una ceremonia de boda',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 5,
      title: 'Arte Abstracto',
      category: 'Arte',
      price: 45,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.33.59 (3).jpeg`,
      description: 'Composición artística abstracta en blanco y negro',
      size: '4000x4000px',
      format: 'JPG'
    },
    {
      id: 6,
      title: 'Retrato Familiar',
      category: 'Retratos',
      price: 28,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.33.59.jpeg`,
      description: 'Sesión familiar cálida y emotiva',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 7,
      title: 'Paisaje Urbano',
      category: 'Paisajes',
      price: 32,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.34.00 (1).jpeg`,
      description: 'Arquitectura urbana en contraste de luces',
      size: '4000x3000px',
      format: 'JPG'
    },
    {
      id: 8,
      title: 'Fashion Week',
      category: 'Moda',
      price: 38,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.34.00 (2).jpeg`,
      description: 'Cobertura de pasarela de moda',
      size: '3500x2500px',
      format: 'JPG'
    },
    {
      id: 9,
      title: 'Evento Corporativo',
      category: 'Eventos',
      price: 42,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.34.00 (3).jpeg`,
      description: 'Fotografía de evento empresarial profesional',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 10,
      title: 'Arte Conceptual',
      category: 'Arte',
      price: 50,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.34.00 (4).jpeg`,
      description: 'Fotografía conceptual con elementos surrealistas',
      size: '4000x4000px',
      format: 'JPG'
    },
    {
      id: 11,
      title: 'Retrato Artístico',
      category: 'Retratos',
      price: 33,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.34.01 (1).jpeg`,
      description: 'Retrato artístico con iluminación dramática',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 12,
      title: 'Paisaje Nocturno',
      category: 'Paisajes',
      price: 36,
      image: `${import.meta.env.BASE_URL}images/shop/WhatsApp Image 2025-10-11 at 15.34.01.jpeg`,
      description: 'Paisaje urbano nocturno con luces de la ciudad',
      size: '4000x3000px',
      format: 'JPG'
    }
  ];

  const [photos] = useState<Photo[]>(initialPhotos);

  

  const filteredPhotos = photos.filter(photo => {
    if (purchasedPhotos.includes(photo.id)) {
      return false;
    }
    const matchesCategory = activeCategory === 'Todas' || photo.category === activeCategory;
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPurchasedItems = () => {
    return photos.filter(photo => purchasedPhotos.includes(photo.id));
  };

  const handleRefund = (photoId: number) => {
    setPurchasedPhotos(prev => prev.filter(id => id !== photoId));
  };

  const openRefundModal = (photoId: number) => {
    setPhotoToRefund(photoId);
    setIsRefundModalOpen(true);
  };

  const confirmRefund = () => {
    if (photoToRefund !== null) {
      handleRefund(photoToRefund);
    }
    setIsRefundModalOpen(false);
    setPhotoToRefund(null);
  };

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img 
            src={`${import.meta.env.BASE_URL}logo.png`} 
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
              TIENDA DE FOTOGRAFÍAS
            </h1>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#B8860B' }}></div>
            <p className="text-[#B3B3B3] text-lg max-w-3xl mx-auto">
              Descubre nuestra colección de fotografías artísticas disponibles para compra. 
              Cada imagen está lista para descargar en alta resolución.
            </p>
            
          </div>

          {/* Search and Filters */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Buscar fotografías..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#EAEAEA] placeholder-[#B3B3B3] focus:outline-none focus:border-[#B8860B] transition-colors"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B3B3B3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4">
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
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300 border border-[#2A2A2A] hover:border-[#B8860B]/30"
              >
                  <>
                    {/* Image */}
                    <div className="aspect-square relative overflow-hidden rounded-2xl">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-full object-cover filter brightness-75 contrast-110 group-hover:brightness-90 transition-all duration-500"
                        style={{
                          maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                          WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                        }}
                        onContextMenu={(e) => e.preventDefault()}
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Price Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm font-bold">
                          ${photo.price}
                        </span>
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#C70039] text-white px-3 py-1 rounded-full text-xs font-semibold">
                          {photo.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#EAEAEA] mb-2 group-hover:text-[#B8860B] transition-colors duration-300">
                        {photo.title}
                      </h3>
                      
                      <p className="text-[#B3B3B3] text-sm mb-4">
                        {photo.description}
                      </p>

                      <div className="flex items-center justify-between text-xs text-[#B3B3B3] mb-4">
                        <span>{photo.size}</span>
                        <span>{photo.format}</span>
                      </div>

                      <div className="inline-flex">
                        <button
                          onClick={() => {
                            const item: Omit<CartItem, 'quantity'> = {
                              id: photo.id,
                              title: photo.title,
                              image: photo.image,
                              unitPriceCents: parsePriceToCents(photo.price),
                              type: 'photo',
                            };
                            cartCtx.buyNow(item);
                            navigate('/checkout');
                          }}
                          className="px-4 py-3 font-semibold rounded-l-lg transition-all duration-300 bg-[#B8860B] text-white hover:bg-[#C70039]"
                        >
                          COMPRAR AHORA
                        </button>
                        <button
                          onClick={() => {
                            const item: Omit<CartItem, 'quantity'> = {
                              id: photo.id,
                              title: photo.title,
                              image: photo.image,
                              unitPriceCents: parsePriceToCents(photo.price),
                              type: 'photo',
                            };
                            cartCtx.addItem(item);
                            setLastAddedId(photo.id);
                            window.setTimeout(() => setLastAddedId(null), 2000);
                          }}
                          className="px-4 py-3 font-semibold rounded-r-lg transition-all duration-300 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white"
                        >
                          AGREGAR AL CARRITO
                        </button>
                      </div>
                      {lastAddedId === photo.id && (
                        <div className="mt-2 flex items-center gap-3">
                          <span className="text-[#B3B3B3] text-sm">Añadido al carrito</span>
                          <Link
                            to="/checkout"
                            className="px-3 py-2 bg-[#B8860B] text-white rounded-lg text-sm hover:bg-[#C70039] transition-colors"
                          >
                            Ir al checkout
                          </Link>
                        </div>
                      )}
                    </div>
                  </>
              </div>
            ))}
          </div>

          {/* Results Count */}
          <div className="text-center text-[#B3B3B3] mb-8">
            <p>Mostrando {filteredPhotos.length} de {photos.filter(p => !purchasedPhotos.includes(p.id)).length} fotografías disponibles</p>
          </div>

          {/* Purchased Photos Section */}
          {purchasedPhotos.length > 0 && (
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#EAEAEA] mb-4">
                  COMPRAS
                </h2>
                <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#B8860B' }}></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {getPurchasedItems().map((photo) => (
                  <div
                    key={photo.id}
                    className="group relative bg-[#1A1A1A] rounded-2xl overflow-hidden border border-[#2A2A2A]"
                  >
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-full object-cover filter brightness-75 contrast-110"
                        style={{
                          maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                          WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                        }}
                        onContextMenu={(e) => e.preventDefault()}
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          YA COMPRADO
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#EAEAEA] mb-2">
                        {photo.title}
                      </h3>
                      <p className="text-[#B3B3B3] text-sm mb-4">
                        {photo.description}
                      </p>
                      <button
                        onClick={() => openRefundModal(photo.id)}
                        className="w-full px-4 py-3 font-semibold rounded-lg transition-all duration-300 bg-gray-600 text-white hover:bg-gray-500"
                      >
                        REEMBOLSAR
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-[#1A1A1A] rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-[#EAEAEA] mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-[#B3B3B3] mb-6 max-w-2xl mx-auto">
              Contáctanos para solicitar fotografías personalizadas o para conocer más sobre nuestros servicios de fotografía profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contacto"
                className="px-8 py-3 text-white font-semibold rounded-lg transition-colors"
                style={{ backgroundColor: '#B8860B' }}
onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#C70039'}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#B8860B'}
              >
                CONTACTAR
              </Link>
              <Link 
                to="/servicios"
                className="px-8 py-3 border border-[#B8860B] text-[#B8860B] font-semibold rounded-lg hover:bg-[#B8860B] hover:text-white transition-colors"
              >
                VER SERVICIOS
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

      {/* Refund Confirmation Modal */}
      {isRefundModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1A1A1A] rounded-xl max-w-md w-full border border-[#2A2A2A] p-8 text-center">
            <h2 className="text-2xl font-bold text-[#EAEAEA] mb-4">¿Estás seguro?</h2>
            <p className="text-[#B3B3B3] mb-8">
              Si confirmas, esta foto volverá a estar disponible en la tienda y se eliminará de tus compras.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => {
                  setIsRefundModalOpen(false);
                  setPhotoToRefund(null);
                }}
                className="flex-1 px-4 py-3 border border-[#B3B3B3] text-[#B3B3B3] font-semibold rounded-lg hover:bg-[#2A2A2A] transition-colors"
              >
                CANCELAR
              </button>
              <button
                onClick={confirmRefund}
                className="flex-1 px-4 py-3 bg-[#C70039] text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
              >
                CONFIRMAR REEMBOLSO
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tienda;
