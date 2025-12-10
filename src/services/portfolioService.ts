import { portfolioItems } from '../data/portfolio';
import type { PortfolioItem } from '../types';

export const getPortfolioItems = async (): Promise<PortfolioItem[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(portfolioItems);
    }, 100);
  });
};
