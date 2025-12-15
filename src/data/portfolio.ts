import type { PortfolioItem } from '../types';

export const portfolioItems: PortfolioItem[] = [
  { id: 1, src: `${import.meta.env.BASE_URL}images/portfolio/portafolio.jpeg`, alt: "Retrato Artístico", title: "Retrato Artístico", category: "Fotografía de Retrato", description: "Capturamos la esencia única de cada persona con un enfoque artístico y profesional", tags: ["Retrato", "Artístico", "Profesional"] },
  { id: 2, src: `${import.meta.env.BASE_URL}images/session-individual/WhatsApp Image 2025-10-23 at 15.43.22.jpeg`, alt: "Editorial de Moda", title: "Editorial de Moda", category: "Fotografía de Moda", description: "Visiones frescas y estilos modernos que definen las tendencias actuales", tags: ["Moda", "Editorial", "Tendencias"] },
  { id: 3, src: `${import.meta.env.BASE_URL}images/portfolio/portafolio1.1.jpeg`, alt: "Paisaje Natural", title: "Paisajes Naturales", category: "Fotografía de Paisaje", description: "Paisajes hipnotizantes que conectan con la naturaleza en su forma más pura", tags: ["Paisaje", "Naturaleza", "Arte"] }
];
