import { products } from '../data/products';
import type { Product } from '../types';

export const getProducts = async (): Promise<Product[]> => {
  // Simulate API delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 100);
  });
};

export const getProductById = async (id: number): Promise<Product | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 100);
  });
};
