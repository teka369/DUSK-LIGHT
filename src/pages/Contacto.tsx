import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MobileMenu from '../components/MobileMenu';

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
    tipoServicio: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const servicios = [
    'Sesiones Profesionales',
    'Fotografía de Producto',
    'Cobertura de Eventos',
    'Edición y Retoque Digital',
    'Consulta Personalizada',
    'Otro'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      alert('¡Mensaje enviado con éxito! Te contactaremos pronto.');
      setFormData({
        nombre: '',
        correo: '',
        mensaje: '',
        tipoServicio: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img 
            src="image.png" 
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
          <Link to="/contacto" className="text-[#B8860B] transition-colors">CONTACTO</Link>
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

      {/* Main Content */}
      <main className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#EAEAEA] mb-4">
              CONTACTO
            </h1>
            <div className="w-24 h-1 mx-auto mb-8" style={{ backgroundColor: '#B8860B' }}></div>
            <p className="text-[#B3B3B3] text-lg max-w-3xl mx-auto">
              ¿Tienes un proyecto en mente? Estamos aquí para ayudarte a capturar 
              esos momentos únicos que merecen ser recordados para siempre.
            </p>
          </div>

          {/* Contact Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#EAEAEA] mb-6">
                  Envíanos un mensaje
                </h2>
                <p className="text-[#B3B3B3] text-lg">
                  Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo 
                  en menos de 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nombre */}
                <div>
                  <label htmlFor="nombre" className="block text-[#EAEAEA] font-semibold mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#EAEAEA] placeholder-[#B3B3B3] focus:outline-none focus:border-[#B8860B] transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                {/* Correo */}
                <div>
                  <label htmlFor="correo" className="block text-[#EAEAEA] font-semibold mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#EAEAEA] placeholder-[#B3B3B3] focus:outline-none focus:border-[#B8860B] transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Tipo de Servicio */}
                <div>
                  <label htmlFor="tipoServicio" className="block text-[#EAEAEA] font-semibold mb-2">
                    Tipo de servicio *
                  </label>
                  <select
                    id="tipoServicio"
                    name="tipoServicio"
                    value={formData.tipoServicio}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#EAEAEA] focus:outline-none focus:border-[#B8860B] transition-colors"
                  >
                    <option value="" className="text-[#B3B3B3]">Selecciona un servicio</option>
                    {servicios.map((servicio) => (
                      <option key={servicio} value={servicio} className="text-[#EAEAEA]">
                        {servicio}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="mensaje" className="block text-[#EAEAEA] font-semibold mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg text-[#EAEAEA] placeholder-[#B3B3B3] focus:outline-none focus:border-[#B8860B] transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto, fecha, ubicación y cualquier detalle importante..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  style={{ backgroundColor: '#B8860B' }}
                  onMouseEnter={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#C70039')}
                  onMouseLeave={(e) => !isSubmitting && (e.currentTarget.style.backgroundColor = '#B8860B')}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    'ENVIAR MENSAJE'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#EAEAEA] mb-6">
                  Conecta con nosotros
                </h2>
                <p className="text-[#B3B3B3] text-lg mb-8">
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
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z"/>
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

                {/* WhatsApp */}
                <div className="flex items-center space-x-4 p-6 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] hover:border-[#B8860B]/30 transition-colors group">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.214-.366a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-[#EAEAEA] font-semibold text-lg">WhatsApp</h3>
                    <p className="text-[#B3B3B3]">+1 (555) 123-4567</p>
                    <a 
                      href="https://wa.me/15551234567"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#B8860B] hover:text-[#C70039] transition-colors text-sm"
                    >
                      Chatear por WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-12 p-8 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-xl border border-[#B8860B]/20">
                <blockquote className="text-center">
                  <p className="text-2xl font-light text-[#EAEAEA] italic mb-4">
                    "Cada historia merece ser contada con luz."
                  </p>
                  <cite className="text-[#B8860B] font-semibold">— Dusk Light Photography</cite>
                </blockquote>
              </div>
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

export default Contacto;
