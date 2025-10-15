import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../components/nav';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

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
  const [cart, setCart] = useState<number[]>([]);
  const [purchasedPhotos, setPurchasedPhotos] = useState<number[]>(() => {
    const saved = localStorage.getItem('purchasedPhotos');
    return saved ? JSON.parse(saved) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRefundModalOpen, setIsRefundModalOpen] = useState(false);
  const [photoToRefund, setPhotoToRefund] = useState<number | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPhotos, setEditedPhotos] = useState<Photo[]>([]);

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
      image: '/DUSK-LIGHT/tienda/auto.png',
      description: 'Fotografía de retrato profesional en blanco y negro',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 2,
      title: 'Paisaje Montañoso',
      category: 'Paisajes',
      price: 30,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.33.58.jpeg',
      description: 'Impresionante vista de montañas al atardecer',
      size: '4000x3000px',
      format: 'JPG'
    },
    {
      id: 3,
      title: 'Moda Editorial',
      category: 'Moda',
      price: 35,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.33.59 (1).jpeg',
      description: 'Sesión de moda editorial con iluminación profesional',
      size: '3500x2500px',
      format: 'JPG'
    },
    {
      id: 4,
      title: 'Boda Romántica',
      category: 'Eventos',
      price: 40,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.33.59 (2).jpeg',
      description: 'Momento íntimo de una ceremonia de boda',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 5,
      title: 'Arte Abstracto',
      category: 'Arte',
      price: 45,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.33.59 (3).jpeg',
      description: 'Composición artística abstracta en blanco y negro',
      size: '4000x4000px',
      format: 'JPG'
    },
    {
      id: 6,
      title: 'Retrato Familiar',
      category: 'Retratos',
      price: 28,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.33.59.jpeg',
      description: 'Sesión familiar cálida y emotiva',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 7,
      title: 'Paisaje Urbano',
      category: 'Paisajes',
      price: 32,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.34.00 (1).jpeg',
      description: 'Arquitectura urbana en contraste de luces',
      size: '4000x3000px',
      format: 'JPG'
    },
    {
      id: 8,
      title: 'Fashion Week',
      category: 'Moda',
      price: 38,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.34.00 (2).jpeg',
      description: 'Cobertura de pasarela de moda',
      size: '3500x2500px',
      format: 'JPG'
    },
    {
      id: 9,
      title: 'Evento Corporativo',
      category: 'Eventos',
      price: 42,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.34.00 (3).jpeg',
      description: 'Fotografía de evento empresarial profesional',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 10,
      title: 'Arte Conceptual',
      category: 'Arte',
      price: 50,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.34.00 (4).jpeg',
      description: 'Fotografía conceptual con elementos surrealistas',
      size: '4000x4000px',
      format: 'JPG'
    },
    {
      id: 11,
      title: 'Retrato Artístico',
      category: 'Retratos',
      price: 33,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.34.01 (1).jpeg',
      description: 'Retrato artístico con iluminación dramática',
      size: '3000x2000px',
      format: 'JPG'
    },
    {
      id: 12,
      title: 'Paisaje Nocturno',
      category: 'Paisajes',
      price: 36,
      image: '/DUSK-LIGHT/tienda/WhatsApp Image 2025-10-11 at 15.34.01.jpeg',
      description: 'Paisaje urbano nocturno con luces de la ciudad',
      size: '4000x3000px',
      format: 'JPG'
    }
  ];

  const [photos, setPhotos] = useState<Photo[]>(() => {
    const savedPhotos = localStorage.getItem('storePhotos_v2');
    return savedPhotos ? JSON.parse(savedPhotos) : initialPhotos;
  });

  useEffect(() => {
    localStorage.setItem('storePhotos_v2', JSON.stringify(photos));
  }, [photos]);

  const handleEditToggle = () => {
    if (isEditing) {
      setPhotos(editedPhotos);
    } else {
      setEditedPhotos(JSON.parse(JSON.stringify(photos))); // Deep copy
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, photoId: number) => {
    const { name, value } = e.target;
    const newEditedPhotos = editedPhotos.map(p => {
      if (p.id === photoId) {
        return { ...p, [name]: name === 'price' ? Number(value) : value };
      }
      return p;
    });
    setEditedPhotos(newEditedPhotos);
  };

  const itemsToDisplay = isEditing ? editedPhotos : photos;

  const filteredPhotos = itemsToDisplay.filter(photo => {
    if (purchasedPhotos.includes(photo.id)) {
      return false;
    }
    const matchesCategory = activeCategory === 'Todas' || photo.category === activeCategory;
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         photo.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (photoId: number) => {
    setCart(prev => [...prev, photoId]);
  };

  const removeFromCart = (photoId: number) => {
    setCart(prev => prev.filter(id => id !== photoId));
  };

  const isInCart = (photoId: number) => cart.includes(photoId);

  const getCartItems = () => {
    return cart.map(photoId => photos.find(photo => photo.id === photoId)).filter(Boolean);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, photoId) => {
      const photo = photos.find(p => p.id === photoId);
      return total + (photo?.price || 0);
    }, 0);
  };

  const removeFromCartModal = (photoId: number) => {
    setCart(prev => prev.filter(id => id !== photoId));
  };

  const clearCart = () => {
    setCart([]);
  };

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
        
        
        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors"
            >
              <svg className="w-6 h-6 text-[#EAEAEA] hover:text-[#B8860B] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m0 0l2.5-5M17 18l-2.5-5" />
              </svg>
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#B8860B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
          
          
        </div>
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
            <button 
              onClick={handleEditToggle}
              className="absolute top-0 right-0 p-2 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all duration-300 opacity-50 hover:opacity-100"
            >
              {isEditing ? 'GUARDAR' : 'EDITAR'}
            </button>
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
                className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300 border border-[#2A2A2A] hover:border-[#B8860B]/30"
              >
                {isEditing ? (
                  <div className="flex flex-col h-full">
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-full object-cover filter brightness-50"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <input type="text" name="title" value={photo.title} onChange={(e) => handleChange(e, photo.id)} className="w-full bg-[#333] text-white p-2 rounded font-bold" />
                      <textarea name="description" value={photo.description} onChange={(e) => handleChange(e, photo.id)} className="w-full bg-[#333] text-white p-2 rounded text-sm" rows={2} />
                      <div className="flex gap-2">
                        <input type="number" name="price" value={photo.price} onChange={(e) => handleChange(e, photo.id)} className="w-1/2 bg-[#333] text-white p-2 rounded" />
                        <input type="text" name="category" value={photo.category} onChange={(e) => handleChange(e, photo.id)} className="w-1/2 bg-[#333] text-white p-2 rounded text-xs" />
                      </div>
                      <div className="flex gap-2">
                        <input type="text" name="size" value={photo.size} onChange={(e) => handleChange(e, photo.id)} className="w-1/2 bg-[#333] text-white p-2 rounded text-xs" />
                        <input type="text" name="format" value={photo.format} onChange={(e) => handleChange(e, photo.id)} className="w-1/2 bg-[#333] text-white p-2 rounded text-xs" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Image */}
                    <div className="aspect-square relative overflow-hidden">
                      <img 
                        src={photo.image} 
                        alt={photo.title}
                        className="w-full h-full object-cover filter brightness-75 contrast-110 group-hover:brightness-90 transition-all duration-500"
                        style={{
                          maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                          WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                        }}
                        onContextMenu={(e) => e.preventDefault()}
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

                      {/* Add to Cart Button */}
                      <button
                        onClick={() => isInCart(photo.id) ? removeFromCart(photo.id) : addToCart(photo.id)}
                        className={`w-full px-4 py-3 font-semibold rounded-lg transition-all duration-300 ${
                          isInCart(photo.id)
                            ? 'bg-[#C70039] text-white'
                            : 'bg-[#B8860B] text-white hover:bg-[#C70039]'
                        }`}
                      >
                        {isInCart(photo.id) ? 'QUITAR DEL CARRITO' : 'AGREGAR AL CARRITO'}
                      </button>
                    </div>
                  </>
                )}
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
                    className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden border border-[#2A2A2A]"
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
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}
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

      {/* Cart Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#1A1A1A] rounded-xl max-w-2xl w-full max-h-[80vh] overflow-hidden border border-[#2A2A2A]">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#2A2A2A]">
              <h2 className="text-2xl font-bold text-[#EAEAEA]">Carrito de Compras</h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="text-[#B3B3B3] hover:text-[#EAEAEA] transition-colors p-2 hover:bg-[#2A2A2A] rounded-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[50vh] overflow-y-auto">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 text-[#B3B3B3] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m0 0L17 18m0 0l2.5-5M17 18l-2.5-5" />
                  </svg>
                  <h3 className="text-xl font-semibold text-[#EAEAEA] mb-2">Tu carrito está vacío</h3>
                  <p className="text-[#B3B3B3]">Agrega algunas fotografías para comenzar tu compra</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {getCartItems().map((photo) => (
                    <div key={photo?.id} className="flex items-center space-x-4 p-4 bg-[#0D0D0D] rounded-lg border border-[#2A2A2A]">
                      {/* Image */}
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={photo?.image} 
                          alt={photo?.title}
                          className="w-full h-full object-cover filter brightness-75 contrast-110"
                          style={{
                            maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                            WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                          }}
                        />
                      </div>
                      
                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[#EAEAEA] font-semibold truncate">{photo?.title}</h4>
                        <p className="text-[#B3B3B3] text-sm truncate">{photo?.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-[#B8860B] font-bold">${photo?.price}</span>
                          <span className="text-[#B3B3B3] text-xs">•</span>
                          <span className="text-[#B3B3B3] text-xs">{photo?.size}</span>
                        </div>
                      </div>
                      
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCartModal(photo?.id!)}
                        className="text-[#C70039] hover:text-red-400 transition-colors p-2 hover:bg-[#2A2A2A] rounded-lg"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-[#2A2A2A] bg-[#0D0D0D]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-[#EAEAEA]">Total:</span>
                  <span className="text-2xl font-bold text-[#B8860B]">${getTotalPrice()}</span>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={clearCart}
                    className="flex-1 px-4 py-3 border border-[#C70039] text-[#C70039] font-semibold rounded-lg hover:bg-[#C70039] hover:text-white transition-colors"
                  >
                    VACIAR CARRITO
                  </button>
                  <button
                    onClick={() => {
                      setPurchasedPhotos(prev => [...prev, ...cart]);
                      clearCart();
                      setIsCartOpen(false);
                      alert('¡Gracias por tu compra!');
                    }}
                    className="flex-1 px-4 py-3 text-white font-semibold rounded-lg transition-colors"
                    style={{ backgroundColor: '#B8860B' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}
                  >
                    PROCEDER AL PAGO
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

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
