import React, { useState } from 'react';
import Footer from '../components/Footer';
import MobileMenu from '../../components/MobileMenu';
import { Nav } from '../components/nav';


const Principal: React.FC = () => {
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

      {/* Hero Section */}
      <section className="px-8 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#EAEAEA] mb-6 leading-tight">
            CAPTURAMOS INSTANTES QUE CUENTAN HISTORIAS.
          </h1>
          <p className="text-xl text-[#B3B3B3] mb-8">
            Fotografia profesional y artistica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 rounded-lg font-semibold transition-colors text-white" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
               SOBRE NOSOTROS
            </button>
            <button className="px-8 py-3 rounded-lg font-semibold transition-colors text-white" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
              IR A LA TIENDA
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="w-full h-96 lg:h-[500px] flex items-center justify-center">
            <img 
              src="/DUSK-LIGHT/auto.png" 
              alt="fotos" 
              className="w-full h-full object-cover filter grayscale brightness-75 contrast-110"
              style={{
                filter: 'grayscale(100%) brightness(0.75) contrast(1.1)',
                maskImage: 'radial-gradient(ellipse 75% 75% at center, black 0%, transparent 68%)',
                WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at center, black 0%, transparent 60%)'
              }}
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>

      {/* About Section */}
      <section className="px-8 py-16 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="w-full h-96 flex items-center justify-center">
            <img 
              src="/DUSK-LIGHT/paisaje.png" 
              alt="fotos" 
              className="w-full h-full object-cover filter grayscale brightness-75 contrast-110"
              style={{
                filter: 'grayscale(100%) brightness(0.75) contrast(1.1)',
                maskImage: 'radial-gradient(ellipse 75% 75% at center, black 0%, transparent 68%)',
                WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at center, black 0%, transparent 65%)'
              }}
            />
          </div>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#EAEAEA] mb-6">
            SOMOS DUSK LIGHT
          </h2>
          <p className="text-lg text-[#B3B3B3] mb-8 leading-relaxed">
            Un colectivo de fotografos dedicados a capturar momentos unico. Crozmos yar cada mirada, cada gesto y cada historia
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold transition-colors text-white" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
            CONOCENOS MAS
          </button>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>

      {/* Portfolio Section - Carrusel Espectacular */}
      <section className="px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold text-[#EAEAEA] mb-6">
              NUESTRO PORTAFOLIO
            </h2>
            <p className="text-xl text-[#B3B3B3] max-w-2xl mx-auto">
              Descubre nuestra colección de trabajos que capturan la esencia de cada momento
            </p>
          </div>

          {/* Carrusel Principal */}
          <div className="relative">
            {(() => {
              const portfolioItems = [
                {
                  id: 1,
                  src: "/DUSK-LIGHT/fotos.jpeg",
                  alt: "Retrato Artístico",
                  title: "Retrato Artístico",
                  category: "Fotografía de Retrato",
                  description: "Capturamos la esencia única de cada persona con un enfoque artístico y profesional",
                  tags: ["Retrato", "Artístico", "Profesional"]
                },
                {
                  id: 2,
                  src: "/DUSK-LIGHT/auto.png",
                  alt: "Editorial de Moda",
                  title: "Editorial de Moda",
                  category: "Fotografía de Moda",
                  description: "Visiones frescas y estilos modernos que definen las tendencias actuales",
                  tags: ["Moda", "Editorial", "Tendencias"]
                },
                {
                  id: 3,
                  src: "/DUSK-LIGHT/paisaje.png",
                  alt: "Paisaje Natural",
                  title: "Paisajes Naturales",
                  category: "Fotografía de Paisaje",
                  description: "Paisajes hipnotizantes que conectan con la naturaleza en su forma más pura",
                  tags: ["Paisaje", "Naturaleza", "Arte"]
                },
                {
                  id: 4,
                  src: "/DUSK-LIGHT/fotos.jpeg",
                  alt: "Producto Estilizado",
                  title: "Fotografía de Producto",
                  category: "Fotografía Comercial",
                  description: "Cada detalle, cada textura, una historia visual que vende",
                  tags: ["Producto", "Comercial", "Marketing"]
                },
                {
                  id: 5,
                  src: "/DUSK-LIGHT/auto.png",
                  alt: "Evento Exclusivo",
                  title: "Eventos Exclusivos",
                  category: "Fotografía de Eventos",
                  description: "Eventos vibrantes, emociones capturadas en instantes únicos",
                  tags: ["Eventos", "Exclusivo", "Emociones"]
                }
              ];

              const [currentIndex, setCurrentIndex] = React.useState(0);
              const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
              const intervalRef = React.useRef<number | null>(null);

              React.useEffect(() => {
                if (isAutoPlaying) {
                  intervalRef.current = window.setInterval(() => {
                    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
                  }, 5000);
                }
                return () => {
                  if (intervalRef.current) clearInterval(intervalRef.current);
                };
              }, [isAutoPlaying, portfolioItems.length]);

              const goToSlide = (index: number) => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              };

              const goToPrevious = () => {
                setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              };

              const goToNext = () => {
                setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
                setIsAutoPlaying(false);
                setTimeout(() => setIsAutoPlaying(true), 10000);
              };

              return (
                <div className="relative group">
                  {/* Imagen Principal */}
                  <div className="relative h-[360px] lg:h-[420px] rounded-3xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
                    
                    {portfolioItems.map((item, index) => (
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
                    <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-20">
                      <div className="max-w-4xl">
                        <div className="inline-block bg-[#B8860B]/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-white mb-4">
                          {portfolioItems[currentIndex].category}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                          {portfolioItems[currentIndex].title}
                        </h3>
                        <p className="text-base lg:text-lg text-white/90 mb-4 max-w-2xl">
                          {portfolioItems[currentIndex].description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {portfolioItems[currentIndex].tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white/90"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <button className="bg-[#B8860B] hover:bg-[#C70039] text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg text-sm">
                          Ver Proyecto Completo
                        </button>
                      </div>
                    </div>

                    {/* Controles de Navegación */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#B8860B] text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
                      aria-label="Imagen anterior"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-[#B8860B] text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-30"
                      aria-label="Siguiente imagen"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>

                  {/* Indicadores */}
                  <div className="flex justify-center mt-8 space-x-3">
                    {portfolioItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-[#B8860B] scale-125 shadow-lg"
                            : "bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`Ir a la imagen ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Contador */}
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold z-30">
                    {currentIndex + 1} / {portfolioItems.length}
                  </div>
                </div>
              );
            })()}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h3 className="text-3xl font-bold text-[#EAEAEA] mb-4">
              ¿Listo para crear algo increíble juntos?
            </h3>
            <p className="text-lg text-[#B3B3B3] mb-8 max-w-2xl mx-auto">
              Cada proyecto es una oportunidad de contar una historia única. Descubre más de nuestro trabajo y contáctanos para tu próximo proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/portafolio">
                <button className="px-10 py-4 bg-[#B8860B] hover:bg-[#C70039] text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                  VER PORTAFOLIO COMPLETO
                </button>
              </a>
              <a href="/contacto">
                <button className="px-10 py-4 border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105">
                  CONTACTAR AHORA
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>


      

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>

      {/* Store Section */}
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-[#EAEAEA] text-center mb-4">
            NUESTRA TIENDA
          </h2>
          <p className="text-[#B3B3B3] text-center mb-12 text-lg">
            Descubre nuestras colecciones de fotografías artísticas y servicios profesionales
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Producto 1 */}
            <div className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/DUSK-LIGHT/fotos.jpeg" 
                  alt="Sesión Retrato Individual" 
                  className="w-full h-full object-cover filter grayscale brightness-80 contrast-105 group-hover:brightness-90 transition-all duration-300"
                  style={{
                    maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    POPULAR
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#EAEAEA] text-xl font-bold mb-2">Sesión Retrato Individual</h3>
                <p className="text-[#B3B3B3] text-sm mb-4">Fotografía profesional para redes sociales, LinkedIn o uso personal. Incluye 20 fotos editadas.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#B8860B]">$50</span>
                  <button className="px-6 py-2 bg-[#B8860B] hover:bg-[#C70039] text-white rounded-lg font-semibold transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            {/* Producto 2 */}
            <div className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/DUSK-LIGHT/auto.png" 
                  alt="Sesión Pareja" 
                  className="w-full h-full object-cover filter grayscale brightness-80 contrast-105 group-hover:brightness-90 transition-all duration-300"
                  style={{
                    maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-[#EAEAEA] text-xl font-bold mb-2">Sesión Pareja</h3>
                <p className="text-[#B3B3B3] text-sm mb-4">Fotografía romántica para parejas. Incluye 30 fotos editadas y álbum digital.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#B8860B]">$80</span>
                  <button className="px-6 py-2 bg-[#B8860B] hover:bg-[#C70039] text-white rounded-lg font-semibold transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            {/* Producto 3 */}
            <div className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/DUSK-LIGHT/paisaje.png" 
                  alt="Sesión Familiar" 
                  className="w-full h-full object-cover filter grayscale brightness-80 contrast-105 group-hover:brightness-90 transition-all duration-300"
                  style={{
                    maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#C70039] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NUEVO
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#EAEAEA] text-xl font-bold mb-2">Sesión Familiar</h3>
                <p className="text-[#B3B3B3] text-sm mb-4">Fotografía familiar completa. Hasta 6 personas. Incluye 40 fotos editadas.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#B8860B]">$120</span>
                  <button className="px-6 py-2 bg-[#B8860B] hover:bg-[#C70039] text-white rounded-lg font-semibold transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            {/* Producto 4 */}
            <div className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/DUSK-LIGHT/fotos.jpeg" 
                  alt="Pack Redes Sociales" 
                  className="w-full h-full object-cover filter grayscale brightness-80 contrast-105 group-hover:brightness-90 transition-all duration-300"
                  style={{
                    maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-[#EAEAEA] text-xl font-bold mb-2">Pack Redes Sociales</h3>
                <p className="text-[#B3B3B3] text-sm mb-4">50 fotos optimizadas para Instagram, Facebook y LinkedIn. Perfecto para influencers.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#B8860B]">$150</span>
                  <button className="px-6 py-2 bg-[#B8860B] hover:bg-[#C70039] text-white rounded-lg font-semibold transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            {/* Producto 5 */}
            <div className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/DUSK-LIGHT/auto.png" 
                  alt="Evento Corporativo" 
                  className="w-full h-full object-cover filter grayscale brightness-80 contrast-105 group-hover:brightness-90 transition-all duration-300"
                  style={{
                    maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-[#EAEAEA] text-xl font-bold mb-2">Evento Corporativo</h3>
                <p className="text-[#B3B3B3] text-sm mb-4">Cobertura completa de eventos empresariales. Incluye edición y entrega en 48h.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#B8860B]">$200</span>
                  <button className="px-6 py-2 bg-[#B8860B] hover:bg-[#C70039] text-white rounded-lg font-semibold transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>

            {/* Producto 6 */}
            <div className="group relative bg-[#1A1A1A] rounded-xl overflow-hidden hover:bg-[#2A2A2A] transition-all duration-300">
              <div className="aspect-square relative overflow-hidden">
                <img 
                  src="/DUSK-LIGHT/paisaje.png" 
                  alt="Sesión Artística" 
                  className="w-full h-full object-cover filter grayscale brightness-80 contrast-105 group-hover:brightness-90 transition-all duration-300"
                  style={{
                    maskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)',
                    WebkitMaskImage: 'radial-gradient(circle 85% at center, black 0%, transparent 75%)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    PREMIUM
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-[#EAEAEA] text-xl font-bold mb-2">Sesión Artística</h3>
                <p className="text-[#B3B3B3] text-sm mb-4">Fotografía conceptual y artística. Incluye 25 fotos editadas profesionalmente.</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#B8860B]">$180</span>
                  <button className="px-6 py-2 bg-[#B8860B] hover:bg-[#C70039] text-white rounded-lg font-semibold transition-colors">
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-[#B3B3B3] mb-6">¿Necesitas algo personalizado? Contáctanos para un presupuesto a medida</p>
            <button className="px-8 py-3 bg-[#B8860B] hover:bg-[#C70039] text-white rounded-lg font-semibold transition-colors">
              SOLICITAR PRESUPUESTO
            </button>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: '#1A1A1A' }}></div>

      {/* Contact Section */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-[#EAEAEA] text-center mb-12">
          CONTACTA CON NOSOTROS
        </h2>
        
        <div className="max-w-2xl mx-auto">
          <div className="flex gap-4 mb-4">
            <input 
              type="text" 
              placeholder="Nombre" 
              className="flex-1 border rounded-lg px-4 py-3 text-[#EAEAEA] placeholder-[#B3B3B3] focus:outline-none"
              style={{ backgroundColor: '#1A1A1A', borderColor: '#1A1A1A' }}
              onFocus={(e) => e.target.style.borderColor = '#B8860B'}
              onBlur={(e) => e.target.style.borderColor = '#1A1A1A'}
            />
            <input 
              type="email" 
              placeholder="Cerreo" 
              className="flex-1 border rounded-lg px-4 py-3 text-[#EAEAEA] placeholder-[#B3B3B3] focus:outline-none"
              style={{ backgroundColor: '#1A1A1A', borderColor: '#1A1A1A' }}
              onFocus={(e) => e.target.style.borderColor = '#B8860B'}
              onBlur={(e) => e.target.style.borderColor = '#1A1A1A'}
            />
          </div>
          
          <textarea 
            placeholder="Mensaje" 
            rows={6}
            className="w-full border rounded-lg px-4 py-3 text-[#EAEAEA] placeholder-[#B3B3B3] focus:outline-none mb-6"
            style={{ backgroundColor: '#1A1A1A', borderColor: '#1A1A1A' }}
            onFocus={(e) => e.target.style.borderColor = '#B8860B'}
            onBlur={(e) => e.target.style.borderColor = '#1A1A1A'}
          ></textarea>
          
          <div className="flex items-center justify-between">
            <button className="px-8 py-3 rounded-lg font-semibold transition-colors text-white" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
              ENVIAR MENSAJE
            </button>
            
            <div className="flex space-x-4">
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#B3B3B3' }}></div>
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#B3B3B3' }}></div>
              <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#B3B3B3' }}></div>
            </div>
          </div>
        </div>
      </section>

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

export default Principal;
