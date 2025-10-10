import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

const Principal: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="/image.png" 
            alt="Dusk Light Logo" 
            className="w-16 h-16 object-contain"
          />
          <span className="text-[#EAEAEA] text-xl font-bold">DUSK LIGHT</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">INICIO</Link>
          <Link to="/" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">CALENÍA</Link>
          <Link to="/servicios" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">SERVICIOS</Link>
          <Link to="/portafolio" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">PORTAFOLIO</Link>
          <Link to="/sobre-nosotros" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">NOSOTROS</Link>
          <Link to="/tienda" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">TIENDA</Link>
          <Link to="/contacto" className="text-[#EAEAEA] hover:text-[#B8860B] transition-colors">CONTACTO</Link>
        </nav>
        
        {/* Hamburger Menu */}
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors"
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5" style={{ backgroundColor: '#EAEAEA' }}></div>
            <div className="w-full h-0.5" style={{ backgroundColor: '#EAEAEA' }}></div>
            <div className="w-full h-0.5" style={{ backgroundColor: '#EAEAEA' }}></div>
          </div>
        </button>
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
              VER PORTAFOLIO
            </button>
            <button className="px-8 py-3 rounded-lg font-semibold transition-colors text-white" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
              CONTRATAR SERVICIO
            </button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="w-full h-96 lg:h-[500px] flex items-center justify-center">
            <img 
              src="/auto.png" 
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
              src="/paisaje.png" 
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

      {/* Portfolio Section */}
      <section className="px-8 py-16">
        <h2 className="text-4xl font-bold text-[#EAEAEA] text-center mb-12">
          NUESTRO PORTAFOLIO
        </h2>
        
        {/* Portfolio Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-8 text-[#EAEAEA]">
            <button className="hover:text-[#B8860B] transition-colors">Retratos</button>
            <button className="hover:text-[#B8860B] transition-colors">Moda</button>
            <button className="hover:text-[#B8860B] transition-colors">Producto</button>
            <button className="hover:text-[#B8860B] transition-colors">Eventos</button>
            <button className="hover:text-[#B8860B] transition-colors">Artistico</button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Professional Sessions */}
          <div className="border-2 rounded-lg p-6 text-center" style={{ borderColor: '#1A1A1A' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#B8860B' }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[#EAEAEA] text-lg font-semibold mb-4">Sesiones Profesionales</h3>
            <button className="px-6 py-2 rounded-lg text-sm font-semibold transition-colors text-white" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
              Sólicitar colizacion
            </button>
          </div>

          {/* Event Photography */}
          <div className="border-2 rounded-lg p-6 text-center" style={{ borderColor: '#1A1A1A' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#B8860B' }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[#EAEAEA] text-lg font-semibold mb-4">Fotografia de Eventos</h3>
            <button className="px-6 py-2 rounded-lg text-sm font-semibold transition-colors text-white" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
              Mas informacion
            </button>
          </div>

          {/* Event Coverage */}
          <div className="border-2 rounded-lg p-6 text-center" style={{ borderColor: '#1A1A1A' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#B8860B' }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-[#EAEAEA] text-lg font-semibold mb-4">Cobertura de Eventos</h3>
            <button className="px-6 py-2 rounded-lg text-sm font-semibold transition-colors text-white" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
              Reservar fecha
            </button>
          </div>

          {/* Company Sessions */}
          <div className="border-2 rounded-lg p-6 text-center" style={{ borderColor: '#1A1A1A' }}>
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#B8860B' }}>
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm5-1a1 1 0 00-1 1v1h2V6a1 1 0 00-1-1zM4 8h12v6H4V8z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-[#EAEAEA] text-lg font-semibold mb-4">Sesiones para Empresas</h3>
            <button className="px-6 py-2 rounded-lg text-sm font-semibold transition-colors text-white" style={{ backgroundColor: '#B8860B' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#C70039'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#B8860B'}>
              Cotizar servicios
            </button>
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
                  src="/fotos.jpeg" 
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
                  src="/auto.png" 
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
                  src="/paisaje.png" 
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
                  src="/fotos.jpeg" 
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
                  src="/auto.png" 
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
                  src="/paisaje.png" 
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
