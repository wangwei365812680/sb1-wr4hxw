import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { CATEGORY_PRODUCTS } from '../data/products';
import { ALL_CATEGORIES } from '../data/categories';

export const CategoryPage: React.FC = () => {
  const { categoryId, subcategory } = useParams();
  
  const category = ALL_CATEGORIES.find(cat => cat.id === categoryId);
  const products = CATEGORY_PRODUCTS[categoryId as keyof typeof CATEGORY_PRODUCTS] || [];
  
  const filteredProducts = subcategory
    ? products.filter(product => product.subcategory === subcategory)
    : products;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {category?.name} {subcategory ? `- ${subcategory}` : ''}
        </h1>
        {!subcategory && category && (
          <div className="flex flex-wrap gap-4">
            {category.subcategories.map(sub => (
              <a
                key={sub.id}
                href={`/category/${categoryId}/${sub.name}`}
                className="px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
              >
                {sub.name}
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">该分类下暂无商品</p>
        </div>
      )}
    </div>
  );
};