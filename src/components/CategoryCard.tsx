import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.link.value}`} className="block">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-transform hover:-translate-y-1">
        <img
          src={'http://dg.zhxdrl.com/'+category.image}
          alt={category.name}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium text-center">{category.title
.zh_cn}</h3>
        </div>
      </div>
    </Link>
  );
};