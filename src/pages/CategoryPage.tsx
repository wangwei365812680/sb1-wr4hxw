import React,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { CATEGORY_PRODUCTS } from '../data/products';
import { ALL_CATEGORIES } from '../data/categories';

import {getCommodityList} from '@/api'

export const CategoryPage: React.FC = () => {
  const { categoryId, subcategory} = useParams();
  
  // const category = ALL_CATEGORIES.find(cat => cat.id === categoryId);
  // const products = CATEGORY_PRODUCTS[categoryId as keyof typeof CATEGORY_PRODUCTS] || [];
  
  // const filteredProducts = subcategory
  //   ? products.filter(product => product.subcategory === subcategory)
  //   : products;


  const [list,setList] = useState([])

  const [categoryName,setCategoryName] = useState('')


    useEffect(()=>{

     
      getCommodityList({id:categoryId}).then(res=>{
       

        setList(res.products_format)

        setCategoryName(res.category.description.name)

      })
    },[categoryId])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          {categoryName}
        </h1>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>

      {list.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">该分类下暂无商品</p>
        </div>
      )}
    </div>
  );
};