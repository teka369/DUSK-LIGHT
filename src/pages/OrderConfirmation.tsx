import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Nav } from '../components/layout/Nav';
import Footer from '../components/layout/Footer';

const OrderConfirmation: React.FC = () => {
  const [params] = useSearchParams();
  const orderIdParam = params.get('orderId') || '';
  const orderId =
    orderIdParam ||
    (typeof window !== 'undefined' ? sessionStorage.getItem('last_order_id') || '' : '');
  const shareText = encodeURIComponent(`Gracias por tu compra en Dusk Light. ID de Envío: ${orderId}`);
  const shareUrl = encodeURIComponent(window.location.href);
  return (
    <div className="min-h-screen text-[#EAEAEA]" style={{ backgroundColor: '#0D0D0D' }}>
      <header className="flex items-center justify-between px-8 py-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Dusk Light Logo" className="w-16 h-16 object-contain" />
          <span className="text-[#EAEAEA] text-xl font-bold">DUSK LIGHT</span>
        </Link>
        <Nav />
      </header>
      <main className="px-8 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-full bg-[#1A1A1A] flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l7 7-7 13-7-13 7-7z" fill="#EAEAEA" opacity="0.8"/>
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold">Gracias por tu compra!</h1>
          
          <div className="mt-6">
            <div className="text-[#EAEAEA] font-semibold mb-3">Compartir</div>
            <div className="flex gap-3 justify-center">
              <a className="p-3 rounded-lg border border-[#2A2A2A]" href={`https://wa.me/?text=${shareText}`} target="_blank" rel="noopener noreferrer">🟢</a>
              <a className="p-3 rounded-lg border border-[#2A2A2A]" href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`} target="_blank" rel="noopener noreferrer">f</a>
              <a className="p-3 rounded-lg border border-[#2A2A2A]" href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`} target="_blank" rel="noopener noreferrer">x</a>
              <a className="p-3 rounded-lg border border-[#2A2A2A]" href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`} target="_blank" rel="noopener noreferrer">in</a>
            </div>
          </div>
          <div className="flex justify-center gap-3">
            <Link to="/tienda" className="px-6 py-3 bg-[#B8860B] text-white rounded-lg">Seguir comprando</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
