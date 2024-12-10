import React from 'react';
import { Carousel } from '../components/Carousel';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { FEATURED_PRODUCTS } from '../data/products';
import { FEATURED_CATEGORIES } from '../data/categories';

export const Home: React.FC = () => {
  return (
    <div>
      <Carousel />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">精选分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURED_CATEGORIES.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">精选商品</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};