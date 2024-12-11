import React,{useEffect,useState} from 'react';
import { Carousel } from '../components/Carousel';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { FEATURED_PRODUCTS } from '../data/products';
import { FEATURED_CATEGORIES } from '../data/categories';

import {getBannerList} from '@/api'

export const Home: React.FC = () => {

  const [list,useList] = useState([])

  const [bestsellerList,useBestsellerList] = useState([])
  

  useEffect(  ()=>{
    const res = getBannerList().then(res=>{
    
      useList(res.selected_categories.content) 

      useBestsellerList(res.bestseller.content) 
  
      console.log(21134,res.bestseller.content)
    })

   },[])

  return (
    <div>
      <Carousel />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">精选分类</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {list.map((item,index) => (
              <CategoryCard key={index} category={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">精选商品</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellerList.map((item,index) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};