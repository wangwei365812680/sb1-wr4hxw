import React,{useEffect, useState} from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

import {getCommoditySearchList} from '@/api'

export const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [sortBy, setSortBy] = React.useState('relevance');
  const [priceRange, setPriceRange] = React.useState<[number, number]>([0, 10000]);
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);

  const searchResults = FEATURED_PRODUCTS.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase()) ||
    product.description.toLowerCase().includes(query.toLowerCase())
  );

  // 根据排序方式对结果进行排序
  const sortedResults = [...searchResults].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  // 根据价格范围和分类筛选结果
  // const filteredResults = sortedResults.filter(product => {
  //   const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
  //   const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
  //   return matchesPrice && matchesCategory;
  // });

  const [filteredResults,setList] = useState([])

  useEffect(()=>{

    // 发送搜索请求

    getCommoditySearchList({
      keyword:query,
    }).then(res=>{
        console.log(43,res.products)
        setList(res.products.data)
    })
  },[])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* 搜索框 */}
      {/* <div className="mb-8">
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            defaultValue={query}
            placeholder="搜索商品..."
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
        </div>
      </div> */}

      <div className="flex gap-8">
        {/* 筛选侧边栏 */}
        <div className="w-64 flex-shrink-0">
          <div className="border rounded-lg p-4">
            <div className="flex items-center gap-2 mb-4">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="font-medium">筛选</span>
            </div>

            {/* 价格范围 */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">价格范围</h3>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={e => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="w-24 px-2 py-1 border rounded"
                  placeholder="最低价"
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={e => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-24 px-2 py-1 border rounded"
                  placeholder="最高价"
                />
              </div>
            </div>

            {/* 商品分类 */}
            <div>
              <h3 className="font-medium mb-3">商品分类</h3>
              <div className="space-y-2">
                {['electronics', 'fashion', 'home', 'beauty'].map(category => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={e => {
                        if (e.target.checked) {
                          setSelectedCategories([...selectedCategories, category]);
                        } else {
                          setSelectedCategories(selectedCategories.filter(c => c !== category));
                        }
                      }}
                      className="mr-2"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 搜索结果 */}
        <div className="flex-1">
          {/* 排序和结果数量 */}
          <div className="flex justify-between items-center mb-6">
            <span className="text-gray-600">
              找到 {filteredResults.length} 个商品
            </span>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="px-3 py-1.5 border rounded-lg"
            >
              <option value="relevance">相关度</option>
              <option value="price-asc">价格从低到高</option>
              <option value="price-desc">价格从高到低</option>
            </select>
          </div>

          {/* 商品列表 */}
          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredResults.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500">未找到相关商品</p>
              <p className="text-gray-500 mt-2">
                试试其他关键词，或者
                <Link to="/" className="text-black hover:underline ml-1">
                  返回首页
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};