import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`} className="block">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-transform hover:-translate-y-1">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-center">{category.name}</h3>
        </div>
      </div>
    </Link>
  );
};