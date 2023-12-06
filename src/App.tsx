// src/components/ProductList.tsx

import React, { useEffect, useState } from 'react';
import { getAllProducts } from './api/api';
import { Product } from './types/types';
import { FilterComponent } from './demo/demo';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const fetchProducts = async () => {
      const productsFromAPI = await getAllProducts();
      setProducts(productsFromAPI);
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (category: string) => {
    setFilter(category);
  };

  const filteredProducts = filter
    ? products.filter(product => product.category === filter)
    : products;

  return (
    <div>
      <FilterComponent setFilter={handleFilterChange} />
      {filteredProducts.map(product => (
        <div key={product.id} style={{ marginBottom: '20px' }}>
          <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
          <h2>{product.title}</h2>
          <p>{product.price} kr</p>
          {/* Andra produktattribut */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
