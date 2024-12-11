import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

import {getProductClassificatList} from '@/api'

// const CATEGORIES = [
//   {
//     id: 'electronics',
//     name: '数码电子',
//     subcategories: ['智能手机', '笔记本电脑', '智能手表', '耳机音响', '平板电脑'],
//   },
//   {
//     id: 'fashion',
//     name: '时尚服饰',
//     subcategories: ['男装', '女装', '运动服饰', '箱包手袋', '珠宝配饰'],
//   },
//   {
//     id: 'home',
//     name: '家居生活',
//     subcategories: ['家具', '家居饰品', '厨房用品', '床上用品', '收纳整理'],
//   },
//   {
//     id: 'beauty',
//     name: '美妆个护',
//     subcategories: ['护肤品', '彩妆', '香水', '美容仪器', '个人护理'],
//   },
//   {
//     id: 'books',
//     name: '图书文具',
//     subcategories: ['文学小说', '教育考试', '办公文具', '艺术设计', '杂志期刊'],
//   }
// ];

export const Navigation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);


  const [list,useList] = useState([])

  useEffect(()=>{
    getProductClassificatList().then(res=>{
      console.log(1323,res.menu)

      useList(res.menu) 

    })
  },[])

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex space-x-8">
          {list.map((item) => (
            <li
              key={item.parent_cate.link}
              className="relative group"
              onMouseEnter={() => setActiveCategory(item&&item.list)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <Link
                to={`/category/${item.parent_cate.value}`}
                className="flex items-center py-4 text-gray-700 hover:text-black"
              >
                {item.parent_cate.name}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              {activeCategory === item.list && (
                <div className="absolute left-0 top-full w-48 bg-white border border-gray-200 shadow-lg rounded-md py-2 z-50">
                  {item.list.map((item2) => (
                    <Link
                      key={item2.value}
                      to={`/category/${item2.value}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      {item2.text.zh_cn}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};