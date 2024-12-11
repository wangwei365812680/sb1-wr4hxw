import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  useEffect(()=>{
   

  },[])
  
  return (
    <Link to={`/product/${product.id}`} className="block">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-transform hover:-translate-y-1">
        <img
          src={product.images[0]}
     
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <p className="text-gray-600 mt-1">${111}</p>
        </div>
      </div>
    </Link>
  );
};