import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';
import { Nav } from '../components/nav';
import { Link } from 'react-router-dom';

// ----------------------------------------------------------------------
// 1. DEFINICIÓN DE INTERFACES (SOLUCIÓN TS(7006))
// ----------------------------------------------------------------------

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean; // El '?' indica que es opcional
  isNew?: boolean;
  isPremium?: boolean;
}

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}

// ----------------------------------------------------------------------
// COMPONENTE PRINCIPAL
// ----------------------------------------------------------------------

const Principal: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const initialProducts: Product[] = [
    { id: 1, title: 'Sesión Retrato Individual', description: 'Fotografía profesional para redes sociales, LinkedIn o uso personal. Incluye 20 fotos editadas.', price: '$50', image: '/DUSK-LIGHT/fotos.jpeg', popular: true },
    { id: 2, title: 'Sesión Pareja', description: 'Fotografía romántica para parejas. Incluye 30 fotos editadas y álbum digital.', price: '$80', image: '/DUSK-LIGHT/auto.png' },
    { id: 3, title: 'Sesión Familiar', description: 'Fotografía familiar completa. Hasta 6 personas. Incluye 40 fotos editadas.', price: '$120', image: '/DUSK-LIGHT/paisaje.png', isNew: true },
    { id: 4, title: 'Pack Redes Sociales', description: '50 fotos optimizadas para Instagram, Facebook y LinkedIn. Perfecto para influencers.', price: '$150', image: '/DUSK-LIGHT/fotos.jpeg' },
    { id: 5, title: 'Evento Corporativo', description: 'Cobertura completa de eventos empresariales. Incluye edición y entrega en 48h.', price: '$200', image: '/DUSK-LIGHT/auto.png' },
    { id: 6, title: 'Sesión Artística', description: 'Fotografía conceptual y artística. Incluye 25 fotos editadas profesionalmente.', price: '$180', image: '/DUSK-LIGHT/paisaje.png', isPremium: true },
  ];

  // Aplicación de la interfaz Product[] al estado
  const [products, setProducts] = useState<Product[]>(() => {
    const savedProducts = localStorage.getItem('storeProductsPrincipal');
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  const [isEditing, setIsEditing] = useState(false);
  // Aplicación de la interfaz Product[] al estado
  const [editedProducts, setEditedProducts] = useState<Product[]>([]);

  const initialPortfolioItems: PortfolioItem[] = [
    { id: 1, src: "/DUSK-LIGHT/fotos.jpeg", alt: "Retrato Artístico", title: "Retrato Artístico", category: "Fotografía de Retrato", description: "Capturamos la esencia única de cada persona con un enfoque artístico y profesional", tags: ["Retrato", "Artístico", "Profesional"] },
    { id: 2, src: "/DUSK-LIGHT/auto.png", alt: "Editorial de Moda", title: "Editorial de Moda", category: "Fotografía de Moda", description: "Visiones frescas y estilos modernos que definen las tendencias actuales", tags: ["Moda", "Editorial", "Tendencias"] },
    { id: 3, src: "/DUSK-LIGHT/paisaje.png", alt: "Paisaje Natural", title: "Paisajes Naturales", category: "Fotografía de Paisaje", description: "Paisajes hipnotizantes que conectan con la naturaleza en su forma más pura", tags: ["Paisaje", "Naturaleza", "Arte"] },
    { id: 4, src: "/DUSK-LIGHT/fotos.jpeg", alt: "Producto Estilizado", title: "Fotografía de Producto", category: "Fotografía Comercial", description: "Cada detalle, cada textura, una historia visual que vende", tags: ["Producto", "Comercial", "Marketing"] },
    { id: 5, src: "/DUSK-LIGHT/auto.png", alt: "Evento Exclusivo", title: "Eventos Exclusivos", category: "Fotografía de Eventos", description: "Eventos vibrantes, emociones capturadas en instantes únicos", tags: ["Eventos", "Exclusivo", "Emociones"] }
  ];

  // Aplicación de la interfaz PortfolioItem[] al estado
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(() => {
    const saved = localStorage.getItem('portfolioItems');
    return saved ? JSON.parse(saved) : initialPortfolioItems;
  });

  const [isEditingPortfolio, setIsEditingPortfolio] = useState(false);
  // Aplicación de la interfaz PortfolioItem[] al estado
  const [editedPortfolioItems, setEditedPortfolioItems] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    localStorage.setItem('storeProductsPrincipal', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('portfolioItems', JSON.stringify(portfolioItems));
  }, [portfolioItems]);

  const handleEditToggle = () => {
    if (isEditing) {
      setProducts(editedProducts);
    } else {
      setEditedProducts(JSON.parse(JSON.stringify(products))); // Deep copy
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, productId: number) => {
    const { name, value } = e.target;
    setEditedProducts(editedProducts.map(p => (p.id === productId ? { ...p, [name]: value } : p)));
  };

  const handlePortfolioEditToggle = () => {
    if (isEditingPortfolio) {
      setPortfolioItems(editedPortfolioItems);
    } else {
      setEditedPortfolioItems(JSON.parse(JSON.stringify(portfolioItems))); // Deep copy
    }
    setIsEditingPortfolio(!isEditingPortfolio);
  };

  const handlePortfolioChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, itemId: number) => {
    const { name, value } = e.target;
    setEditedPortfolioItems(editedPortfolioItems.map(item => 
      item.id === itemId ? { ...item, [name]: value } : item
    ));
  };

  const handlePortfolioTagsChange = (e: React.ChangeEvent<HTMLInputElement>, itemId: number) => {
    const { value } = e.target;
    setEditedPortfolioItems(editedPortfolioItems.map(item => 
      item.id === itemId ? { ...item, tags: value.split(',').map(tag => tag.trim()) } : item
    ));
  };

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-fluid-sm py-fluid-xs">
        {/* Logo */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src="/DUSK-LIGHT/logo.png" 
            alt="Dusk Light Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
          <span className="text-[#EAEAEA] text-fluid-lg sm:text-fluid-xl font-bold">DUSK LIGHT</span>
        </div>
        
        {/* Navigation */}
        <Nav />
      </header>

      {/* Hero Section */}
      <section className="container-fluid py-fluid-lg">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-fluid-lg">
          <div className="w-full xl:w-1/2 text-center xl:text-left">
            <h1 className="text-fluid-4xl sm:text-fluid-5xl lg:text-fluid-6xl font-bold text-[#EAEAEA] mb-fluid-sm leading-tight">
              CAPTURAMOS INSTANTES QUE CUENTAN HISTORIAS.
            </h1>
            <p className="text-fluid-lg text-[#B3B3B3] mb-fluid-md max-w-2xl mx-auto xl:mx-0">
              Fotografía profesional y artística que transforma momentos en recuerdos eternos.
            </p>
            <div className="flex flex-col sm:flex-row gap-fluid-md justify-center xl:justify-start">
              <button className="px-fluid-md py-fluid-sm rounded-lg font-semibold transition-all duration-300 text-white transform hover:scale-105" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
                SOBRE NOSOTROS
              </button>
              <button className="px-fluid-md py-fluid-sm rounded-lg font-semibold transition-all duration-300 text-white transform hover:scale-105" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
                IR A LA TIENDA
              </button>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] flex items-center justify-center">
              <img 
                src="/DUSK-LIGHT/auto.png" 
                alt="Fotografía profesional Dusk Light" 
                className="w-full h-full object-cover filter grayscale brightness-75 contrast-110 rounded-2xl"
                style={{
                  filter: 'grayscale(100%) brightness(0.75) contrast(1.1)',
                  maskImage: 'radial-gradient(ellipse 75% 75% at center, black 0%, transparent 68%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at center, black 0%, transparent 60%)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>

      {/* About Section */}
      <section className="container-fluid py-fluid-lg">
        <div className="flex flex-col xl:flex-row items-center gap-fluid-lg">
          <div className="w-full xl:w-1/2 order-2 xl:order-1">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] flex items-center justify-center">
              <img 
                src="/DUSK-LIGHT/paisaje.png" 
                alt="Equipo Dusk Light trabajando" 
                className="w-full h-full object-cover filter grayscale brightness-75 contrast-110 rounded-2xl"
                style={{
                  filter: 'grayscale(100%) brightness(0.75) contrast(1.1)',
                  maskImage: 'radial-gradient(ellipse 75% 75% at center, black 0%, transparent 68%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at center, black 0%, transparent 65%)'
                }}
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2 order-1 xl:order-2 text-center xl:text-left">
            <h2 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold text-[#EAEAEA] mb-fluid-sm">
              SOMOS DUSK LIGHT
            </h2>
            <p className="text-fluid-base text-[#B3B3B3] mb-fluid-md leading-relaxed max-w-2xl mx-auto xl:mx-0">
              Un colectivo de fotógrafos dedicados a capturar momentos únicos. Cruzamos cada mirada, cada gesto y cada historia con pasión y profesionalismo.
            </p>
            <button className="px-fluid-md py-fluid-sm rounded-lg font-semibold transition-all duration-300 text-white transform hover:scale-105" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
              CONÓCENOS MÁS
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>

      {/* Portfolio Section - Carrusel Espectacular */}
      <section className="container-fluid py-fluid-2xl">
        <div className="text-center mb-fluid-xl relative">
          <h2 className="text-fluid-4xl sm:text-fluid-5xl lg:text-fluid-6xl font-bold text-[#EAEAEA] mb-fluid-sm">
            NUESTRO PORTAFOLIO
          </h2>
          <p className="text-fluid-lg text-[#B3B3B3] max-w-3xl mx-auto">
            Descubre nuestra colección de trabajos que capturan la esencia de cada momento
          </p>
          <button 
            onClick={handlePortfolioEditToggle}
            className="absolute top-0 right-0 p-2 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all duration-300 opacity-50 hover:opacity-100"
          >
            {isEditingPortfolio ? 'GUARDAR' : 'EDITAR'}
          </button>
        </div>
        
          {/* Carrusel Principal */}
          <div className="relative">
          {(() => {
              const itemsToDisplay = isEditingPortfolio ? editedPortfolioItems : portfolioItems;
              const [currentIndex, setCurrentIndex] = React.useState(0);
              const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
            const intervalRef = React.useRef<number | null>(null);

            React.useEffect(() => {
                if (isAutoPlaying && !isEditingPortfolio) {
              intervalRef.current = window.setInterval(() => {
                    setCurrentIndex((prev) => (prev + 1) % itemsToDisplay.length);
                  }, 5000);
                }
              return () => {
                if (intervalRef.current) clearInterval(intervalRef.current);
                };
              }, [isAutoPlaying, itemsToDisplay.length, isEditingPortfolio]);

              const goToSlide = (index: number) => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              };

              const goToPrevious = () => {
                setCurrentIndex((prev) => (prev - 1 + itemsToDisplay.length) % itemsToDisplay.length);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              };

              const goToNext = () => {
                setCurrentIndex((prev) => (prev + 1) % itemsToDisplay.length);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              };

              return (
                <div className="relative group">
                  {/* Imagen Principal */}
                  <div className="relative h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[500px] 3xl:h-[600px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    
                    {/* AQUI SE RESUELVE EL ERROR TS(7006) CON PortfolioItem */}
                    {itemsToDisplay.map((item: PortfolioItem, index: number) => (
                      <img
                        key={item.id}
                        src={item.src}
                        alt={item.alt}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                          index === currentIndex
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                        style={{
                          filter: "brightness(0.8) contrast(1.1)",
                        }}
                      />
                    ))}

                    {/* Contenido Superpuesto */}
                    <div className="absolute bottom-0 left-0 right-0 p-fluid-sm lg:p-fluid-md z-20">
                      <div className="max-w-4xl">
                        {isEditingPortfolio ? (
                          <div className="space-y-2 bg-black/50 p-4 rounded-lg">
                            <input type="text" name="category" value={itemsToDisplay[currentIndex].category} onChange={(e) => handlePortfolioChange(e, itemsToDisplay[currentIndex].id)} className="w-full bg-[#2A2A2A] text-white p-1 rounded text-fluid-xs font-semibold" />
                            <input type="text" name="title" value={itemsToDisplay[currentIndex].title} onChange={(e) => handlePortfolioChange(e, itemsToDisplay[currentIndex].id)} className="w-full bg-[#2A2A2A] text-white p-1 rounded text-fluid-xl sm:text-fluid-2xl lg:text-fluid-3xl font-bold" />
                            <textarea name="description" value={itemsToDisplay[currentIndex].description} onChange={(e) => handlePortfolioChange(e, itemsToDisplay[currentIndex].id)} className="w-full bg-[#2A2A2A] text-white p-1 rounded text-fluid-sm sm:text-fluid-base" rows={2} />
                            <input type="text" name="tags" value={itemsToDisplay[currentIndex].tags.join(', ')} onChange={(e) => handlePortfolioTagsChange(e, itemsToDisplay[currentIndex].id)} className="w-full bg-[#2A2A2A] text-white p-1 rounded text-fluid-xs" />
                          </div>
                        ) : (
                          <>
                            <div className="inline-block bg-[#B8860B]/90 backdrop-blur-sm px-fluid-xs py-1 rounded-full text-fluid-xs font-semibold text-white mb-fluid-xs">
                              {itemsToDisplay[currentIndex].category}
                            </div>
                            <h3 className="text-fluid-xl sm:text-fluid-2xl lg:text-fluid-3xl font-bold text-white mb-fluid-xs">
                              {itemsToDisplay[currentIndex].title}
                            </h3>
                            <p className="text-fluid-sm sm:text-fluid-base lg:text-fluid-lg text-white/90 mb-fluid-sm max-w-2xl line-clamp-2">
                              {itemsToDisplay[currentIndex].description}
                            </p>
                            <div className="flex flex-wrap gap-1 sm:gap-2 mb-fluid-sm">
                              {itemsToDisplay[currentIndex].tags.map((tag: string, tagIndex: number) => (
                                <span
                                  key={tagIndex}
                                  className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-fluid-xs text-white/90"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Controles de Navegación */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#B8860B] text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
                      aria-label="Imagen anterior"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#B8860B] text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
                      aria-label="Siguiente imagen"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Indicadores */}
                  <div className="flex justify-center mt-fluid-sm space-x-2 sm:space-x-3">
                    {itemsToDisplay.map((_: PortfolioItem, index: number) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-[#B8860B] scale-125 shadow-lg"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`Ir a la imagen ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Contador */}
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-fluid-xs font-semibold z-30">
                    {currentIndex + 1} / {itemsToDisplay.length}
                  </div>
                </div>
              );
            })()}
          </div>

        {/* Call to Action */}
        <div className="text-center mt-fluid-xl">
          <h3 className="text-fluid-2xl sm:text-fluid-3xl lg:text-fluid-4xl font-bold text-[#EAEAEA] mb-fluid-sm">
            ¿Listo para crear algo increíble juntos?
          </h3>
          <p className="text-fluid-base sm:text-fluid-lg text-[#B3B3B3] mb-fluid-md max-w-3xl mx-auto">
            Cada proyecto es una oportunidad de contar una historia única. Descubre más de nuestro trabajo y contáctanos para tu próximo proyecto.
          </p>
        <div className="flex flex-col sm:flex-row gap-fluid-md justify-center">
            <Link to="/portafolio">
              <button className="px-fluid-lg py-fluid-sm bg-[#B8860B] hover:bg-[#C70039] text-white rounded-2xl font-bold text-fluid-base sm:text-fluid-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                VER PORTAFOLIO COMPLETO
              </button>
            </Link>
            <Link to="/contacto">
              <button className="px-fluid-lg py-fluid-sm border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white rounded-2xl font-bold text-fluid-base sm:text-fluid-lg transition-all duration-300 transform hover:scale-105">
                CONTACTAR AHORA
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>

      {/* Store Section */}
      <section className="container-fluid py-fluid-lg">
        <div className="text-center mb-fluid-xl relative">
          <h2 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold text-[#EAEAEA] mb-fluid-sm">
            NUESTRA TIENDA
          </h2>
          <p className="text-fluid-base sm:text-fluid-lg text-[#B3B3B3] max-w-3xl mx-auto">
            Descubre nuestras colecciones de fotografías artísticas y servicios profesionales
          </p>
          <button 
            onClick={handleEditToggle}
            className="absolute top-0 right-0 p-2 text-xs bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-semibold transition-all duration-300 opacity-50 hover:opacity-100"
          >
            {isEditing ? 'GUARDAR' : 'EDITAR'}
          </button>
        </div>
          
        <div className="grid-fluid">
          {/* AQUI SE RESUELVE OTRO ERROR TS(7006) CON Product */}
          {(isEditing ? editedProducts : products).map((product: Product) => (
            <div key={product.id} className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover filter grayscale brightness-80 contrast-105 group-hover:brightness-90 transition-all duration-300"
                  style={{
                    maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                  }}
                  onContextMenu={(e) => e.preventDefault()}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {product.popular && (
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    <span className="bg-[#B8860B] text-white px-2 sm:px-3 py-1 rounded-full text-fluid-xs font-semibold">
                      POPULAR
                    </span>
                  </div>
                )}
                {product.isNew && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#C70039] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      NUEVO
                    </span>
                  </div>
                )}
                {product.isPremium && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      PREMIUM
                    </span>
                  </div>
                )}
              </div>
              <div className="p-fluid-sm">
                {isEditing ? (
                  <div className="space-y-2">
                    <input
                      type="text"
                      name="title"
                      value={product.title}
                      onChange={(e) => handleChange(e, product.id)}
                      className="w-full bg-[#2A2A2A] text-white p-1 rounded text-fluid-lg sm:text-fluid-xl font-bold"
                    />
                    <textarea
                      name="description"
                      value={product.description}
                      onChange={(e) => handleChange(e, product.id)}
                      className="w-full bg-[#2A2A2A] text-white p-1 rounded text-fluid-sm"
                      rows={3}
                    />
                    <input
                      type="text"
                      name="price"
                      value={product.price}
                      onChange={(e) => handleChange(e, product.id)}
                      className="w-full bg-[#2A2A2A] text-white p-1 rounded text-fluid-xl sm:text-fluid-2xl font-bold text-[#B8860B]"
                    />
                  </div>
                ) : (
                  <>
                    <h3 className="text-[#EAEAEA] text-fluid-lg sm:text-fluid-xl font-bold mb-fluid-xs">{product.title}</h3>
                    <p className="text-[#B3B3B3] text-fluid-sm mb-fluid-sm line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-fluid-xl sm:text-fluid-2xl font-bold text-[#B8860B]">{product.price}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-fluid-xl">
          <p className="text-[#B3B3B3] mb-fluid-sm text-fluid-base sm:text-fluid-lg">¿Necesitas algo personalizado? Contáctanos para un presupuesto a medida</p>
          
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>

      {/* Contact Section */}
      <section className="container-fluid py-fluid-lg">
        <div className="text-center mb-fluid-xl">
          <h2 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold text-[#EAEAEA] mb-fluid-sm">
            CONTACTA CON NOSOTROS
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-[#EAEAEA] mb-6 text-center">
                Conecta con nosotros
              </h2>
              <p className="text-[#B3B3B3] text-lg mb-8 text-center">
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
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-[#EAEAEA] font-semibold text-lg">Instagram</h3>
                  <p className="text-[#B3B3B3]">@dusklight_photography</p>
                  <a
                    href="https://instagram.com/dusklight_photography"
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
                  <p className="text-[#B3B3B3]">info@dusklight.com</p>
                  <a
                    href="mailto:info@dusklight.com"
                    className="text-[#B8860B] hover:text-[#C70039] transition-colors text-sm"
                  >
                    Enviar correo
                  </a>
                </div>
              </div>

              
              
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </div>
  );
};

export default Principal;
