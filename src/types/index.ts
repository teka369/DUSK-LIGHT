export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  popular?: boolean;
  isNew?: boolean;
  isPremium?: boolean;
}

export interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
}
