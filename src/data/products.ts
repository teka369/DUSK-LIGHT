import type { Product } from '../types';

export const products: Product[] = [
  { id: 1, title: 'Sesión Retrato Individual', description: 'Fotografía profesional para redes sociales, LinkedIn o uso personal. Incluye 20 fotos editadas.', price: '$50', image: `${import.meta.env.BASE_URL}images/portfolio/portafolio2.jpeg` },
  { id: 2, title: 'Sesión Pareja', description: 'Fotografía romántica para parejas. Incluye 30 fotos editadas y álbum digital.', price: '$80', image: `${import.meta.env.BASE_URL}images/session-couple/WhatsApp Image 2025-10-23 at 15.38.22.jpeg` },
  { id: 3, title: 'Sesión Familiar', description: 'Fotografía familiar completa. Hasta 6 personas. Incluye 40 fotos editadas.', price: '$120', image: `${import.meta.env.BASE_URL}images/session-family/WhatsApp Image 2025-10-23 at 15.39.26 (1).jpeg` },
  { id: 4, title: 'Pack Redes Sociales', description: '50 fotos optimizadas para Instagram, Facebook y LinkedIn. Perfecto para influencers.', price: '$150', image: `${import.meta.env.BASE_URL}images/session-social/WhatsApp Image 2025-10-23 at 15.48.53.jpeg` },
  { id: 5, title: 'Sesión Vehiculos', description: 'Fotografía automovilistica personalizada. Incluye edición y entrega en 48h.', price: '$200', image: `${import.meta.env.BASE_URL}images/shop/auto.png` },
  { id: 6, title: 'Sesión Animales', description: 'Fotografía de tus mascotas y naturaleza. Incluye 25 fotos editadas profesionalmente.', price: '$180', image: `${import.meta.env.BASE_URL}images/session-pet/WhatsApp Image 2025-10-23 at 15.31.34.jpeg` },
];
