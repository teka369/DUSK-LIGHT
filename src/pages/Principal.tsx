import React, { useState, useEffect } from 'react';
import Footer from '../components/layout/Footer';
import MobileMenu from '../components/layout/MobileMenu';
import { Nav } from '../components/layout/Nav';
import { Link, useNavigate } from 'react-router-dom';
import type { Product, CartItem } from '../types';
import { getProducts } from '../services/productService';
import { useCart } from '../context/CartContext';
import { parsePriceToCents } from '../utils/price';




interface ShopPhoto {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
  description: string;
  size: string;
  format: string;
}

const shopPhotos: ShopPhoto[] = [
  { id: 1, title: 'Retrato Elegante', category: 'Retratos', price: 25, image: '/DUSK-LIGHT/images/shop/auto.png', description: 'Fotografía de retrato profesional en blanco y negro', size: '3000x2000px', format: 'JPG' },
  { id: 2, title: 'Paisaje Montañoso', category: 'Paisajes', price: 30, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.33.58.jpeg', description: 'Impresionante vista de montañas al atardecer', size: '4000x3000px', format: 'JPG' },
  { id: 3, title: 'Moda Editorial', category: 'Moda', price: 35, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.33.59 (1).jpeg', description: 'Sesión de moda editorial con iluminación profesional', size: '3500x2500px', format: 'JPG' },
  { id: 4, title: 'Boda Romántica', category: 'Eventos', price: 40, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.33.59 (2).jpeg', description: 'Momento íntimo de una ceremonia de boda', size: '3000x2000px', format: 'JPG' },
  { id: 5, title: 'Arte Abstracto', category: 'Arte', price: 45, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.33.59 (3).jpeg', description: 'Composición artística abstracta en blanco y negro', size: '4000x4000px', format: 'JPG' },
  { id: 6, title: 'Retrato Familiar', category: 'Retratos', price: 28, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.33.59.jpeg', description: 'Sesión familiar cálida y emotiva', size: '3000x2000px', format: 'JPG' },
  { id: 7, title: 'Paisaje Urbano', category: 'Paisajes', price: 32, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.34.00 (1).jpeg', description: 'Arquitectura urbana en contraste de luces', size: '4000x3000px', format: 'JPG' },
  { id: 8, title: 'Fashion Week', category: 'Moda', price: 38, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.34.00 (2).jpeg', description: 'Cobertura de pasarela de moda', size: '3500x2500px', format: 'JPG' },
  { id: 9, title: 'Evento Corporativo', category: 'Eventos', price: 42, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.34.00 (3).jpeg', description: 'Fotografía de evento empresarial profesional', size: '3000x2000px', format: 'JPG' },
  { id: 10, title: 'Arte Conceptual', category: 'Arte', price: 50, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.34.00 (4).jpeg', description: 'Fotografía conceptual con elementos surrealistas', size: '4000x4000px', format: 'JPG' },
  { id: 11, title: 'Retrato Artístico', category: 'Retratos', price: 33, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.34.01 (1).jpeg', description: 'Retrato artístico con iluminación dramática', size: '3000x2000px', format: 'JPG' },
  { id: 12, title: 'Paisaje Nocturno', category: 'Paisajes', price: 36, image: '/DUSK-LIGHT/images/shop/WhatsApp Image 2025-10-11 at 15.34.01.jpeg', description: 'Paisaje urbano nocturno con luces de la ciudad', size: '4000x3000px', format: 'JPG' },
];

const CarouselActionsProduct: React.FC<{ items: Product[]; index: number }> = ({ items, index }) => {
  const cart = useCart();
  const navigate = useNavigate();
  const p = items[index];
  const item: Omit<CartItem, 'quantity'> = {
    id: p.id,
    title: p.title,
    image: p.image,
    unitPriceCents: parsePriceToCents(p.price),
    type: 'product',
  };
  return (
    <div className="flex gap-2">
      <button
        className="px-3 py-2 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white rounded-lg font-semibold text-fluid-xs transition-all duration-300 transform hover:scale-105"
        onClick={() => {
          cart.buyNow(item);
          navigate('/checkout');
        }}
      >
        Comprar ahora
      </button>
    </div>
  );
};

const CarouselActionsShop: React.FC<{ items: ShopPhoto[]; index: number }> = ({ items, index }) => {
  const cart = useCart();
  const navigate = useNavigate();
  const s = items[index];
  const item: Omit<CartItem, 'quantity'> = {
    id: s.id,
    title: s.title,
    image: s.image,
    unitPriceCents: parsePriceToCents(s.price),
    type: 'photo',
  };
  return (
    <div className="flex gap-2">
      <button
        className="px-3 py-2 border border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white rounded-lg font-semibold text-fluid-xs transition-all duration-300 transform hover:scale-105"
        onClick={() => {
          cart.buyNow(item);
          navigate('/checkout');
        }}
      >
        Comprar ahora
      </button>
    </div>
  );
};

const CardActionsProduct: React.FC<{ product: Product }> = ({ product }) => {
  const cart = useCart();
  const navigate = useNavigate();
  const item: Omit<CartItem, 'quantity'> = {
    id: product.id,
    title: product.title,
    image: product.image,
    unitPriceCents: parsePriceToCents(product.price),
    type: 'product',
  };
  return (
    <div className="flex items-center gap-2">
      <button className="px-fluid-sm py-fluid-xs bg-[#B8860B] hover:bg-[#C70039] text-white rounded-lg font-semibold text-fluid-xs transition-all duration-300 transform hover:scale-105" onClick={() => { cart.buyNow(item); navigate('/checkout'); }}>
        Comprar ahora
      </button>
    </div>
  );
};

const ShopCarousel: React.FC<{ items: ShopPhoto[] }> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const intervalRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!isAutoPlaying || items.length === 0) return;
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => {
        const len = items.length;
        if (len === 0) return 0;
        return (prev + 1) % len;
      });
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAutoPlaying, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    if (items.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    if (items.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % items.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative group">
      <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-[#0D0D0D]">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

        {items.map((item: ShopPhoto, index: number) => (
          <img
            key={item.id}
            src={item.image}
            alt={item.title}
            className={`absolute inset-0 w-full h-full object-contain transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ filter: 'brightness(0.8) contrast(1.1)' }}
            loading="lazy"
          />
        ))}

        {items.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-fluid-sm lg:p-fluid-md z-20">
            <div className="max-w-4xl">
              <div className="inline-block bg-[#B8860B]/90 backdrop-blur-sm px-fluid-xs py-1 rounded-full text-fluid-xs font-semibold text-white mb-fluid-xs">
                ${items[currentIndex].price}
              </div>
              <h3 className="text-fluid-xl sm:text-fluid-2xl lg:text-fluid-3xl font-bold text-white mb-fluid-xs">
                {items[currentIndex].title}
              </h3>
              <p className="text-fluid-sm sm:text-fluid-base lg:text-fluid-lg text-white/90 mb-fluid-sm max-w-2xl line-clamp-2">
                {items[currentIndex].description}
              </p>
              <CarouselActionsShop items={items} index={currentIndex} />
            </div>
          </div>
        )}

        <button onClick={goToPrevious} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#B8860B] text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-30" aria-label="Foto anterior" disabled={items.length === 0}>
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button onClick={goToNext} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#B8860B] text-white p-2 sm:p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-30" aria-label="Siguiente foto" disabled={items.length === 0}>
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="flex justify-center mt-fluid-sm space-x-2 sm:space-x-3">
        {items.map((_: ShopPhoto, index: number) => (
          <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#B8860B] scale-125 shadow-lg' : 'bg-white/30 hover:bg-white/50'}`} aria-label={`Ir a la foto ${index + 1}`} />
        ))}
      </div>

      {items.length > 0 && (
        <div className="absolute top-2 sm:top-4 right-2 sm:right-4 bg-black/50 backdrop-blur-sm text-white px-2 sm:px-3 py-1 rounded-full text-fluid-xs font-semibold z-30">
          {currentIndex + 1} / {items.length}
        </div>
      )}
    </div>
  );
};
const Principal: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
      
    };
    fetchData();
  }, []);


  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-fluid-sm py-fluid-xs">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 sm:space-x-3">
          <img 
            src="/DUSK-LIGHT/logo.png" 
            alt="Dusk Light Logo" 
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
          <span className="text-[#EAEAEA] text-fluid-lg sm:text-fluid-xl font-bold">DUSK LIGHT</span>
        </Link>
        
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start">
              <Link to="/sobre-nosotros" className="px-fluid-md py-fluid-sm rounded-lg font-semibold transition-all duration-300 text-white transform hover:scale-105" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#B8860B'}>
                SOBRE NOSOTROS
              </Link>
              <Link to="/tienda" className="px-fluid-md py-fluid-sm rounded-lg font-semibold transition-all duration-300 text-white transform hover:scale-105" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#B8860B'}>
                IR A LA TIENDA
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] flex items-center justify-center">
              <img 
                src="/DUSK-LIGHT/images/decoration/decoracion3.jpeg" 
                alt="Fotografía profesional Dusk Light" 
                className="w-full h-full object-cover filter brightness-75 contrast-110 rounded-2xl"
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
                src="/DUSK-LIGHT/images/decoration/decoracion2.jpeg" 
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
            <div className="flex justify-center xl:justify-start">
              <Link to="/contacto" className="px-fluid-md py-fluid-sm rounded-lg font-semibold transition-all duration-300 text-white transform hover:scale-105" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.backgroundColor = '#B8860B'}>
                CONÓCENOS MÁS
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>

      {/* Tienda Destacada */}
      <section className="container-fluid py-fluid-2xl">
        <div className="text-center mb-fluid-xl relative">
          <h2 className="text-fluid-4xl sm:text-fluid-5xl lg:text-fluid-6xl font-bold text-[#EAEAEA] mb-fluid-sm">
            TIENDA
          </h2>
          <p className="text-fluid-lg text-[#B3B3B3] max-w-3xl mx-auto">
            Explora nuestros paquetes y sesiones más solicitadas.
          </p>
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <ShopCarousel items={shopPhotos} />
        </div>

        <div className="text-center mt-fluid-xl">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tienda">
              <button className="px-fluid-lg py-fluid-sm bg-[#B8860B] hover:bg-[#C70039] text-white rounded-2xl font-bold text-fluid-base sm:text-fluid-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                VER TIENDA
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

      {/* Packages Section */}
      <section className="container-fluid py-fluid-lg">
        <div className="text-center mb-fluid-xl relative">
          <h2 className="text-fluid-3xl sm:text-fluid-4xl lg:text-fluid-5xl font-bold text-[#EAEAEA] mb-fluid-sm">
            NUESTROS PAQUETES
          </h2>
          <p className="text-fluid-base sm:text-fluid-lg text-[#B3B3B3] max-w-3xl mx-auto">
            Descubre nuestras colecciones de fotografías artísticas y servicios profesionales
          </p>
        </div>
          
        <div className="grid-fluid">
          {products.map((product: Product) => (
            <Link to={`/paquetes/${product.id}`} key={product.id} className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300">
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
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span className="bg-[#B8860B] text-white px-2 sm:px-3 py-1 rounded-full text-fluid-xs font-semibold">
                    {product.price}
                  </span>
                </div>
                
              </div>
              <div className="p-fluid-sm">
                <h3 className="text-[#EAEAEA] text-fluid-lg sm:text-fluid-xl font-bold mb-fluid-xs">{product.title}</h3>
                <p className="text-[#B3B3B3] text-fluid-sm mb-fluid-sm line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    {product.popular && (
                      <span className="bg-[#B8860B] text-white px-2 sm:px-3 py-1 rounded-full text-fluid-xs font-semibold">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <CardActionsProduct product={product} />
                </div>
              </div>
            </Link>
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

            {/* TikTok */}
            <div className="flex items-center space-x-4 p-6 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] hover:border-[#B8860B]/30 transition-colors group">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 3c.5 2.2 2.1 3.9 4.2 4.5v3.1c-1.7-.1-3.3-.7-4.6-1.7v5.8c0 3.9-3.2 7-7.1 7-1.9 0-3.6-.7-4.9-1.9-1.2-1.1-2-2.7-2.2-4.5-.1-.8 0-1.7.2-2.5 1.1-3.9 5.3-5.4 8.1-3.6v3.3c-.6-.6-1.5-.9-2.4-.8-1.7.2-3 1.7-2.8 3.4.2 1.7 1.7 3 3.5 2.8 1.6-.2 2.8-1.6 2.8-3.2V3h2.2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#EAEAEA] font-semibold text-lg">TikTok</h3>
                <p className="text-[#B3B3B3]">studiodusklight</p>
                <a
                  href="https://www.tiktok.com/@studiodusklight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8860B] hover:text-[#C70039] transition-colors text-sm"
                >
                  Seguir en TikTok
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
