// src/api/api.ts

import { Product } from '../types/types';

export const getAllProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data as Product[];
};
