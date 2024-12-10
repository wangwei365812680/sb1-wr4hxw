import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Trash2 } from 'lucide-react';
import { Product } from '../../types';

const MOCK_FAVORITES: Product[] = [
  {
    id: '1',
    name: '智能手表 Pro',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
    description: '多功能智能手表，支持心率监测、运动追踪',
    category: 'electronics',
    subcategory: '智能手表',
    specs: {
      colors: [
        { id: 'black', name: '深空黑', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12' }
      ],
      sizes: [
        { id: '42mm', name: '42mm' }
      ]
    },
    stock: 100
  }
];

export const UserFavorites: React.FC = () => {
  const [favorites, setFavorites] = React.useState(MOCK_FAVORITES);

  const handleRemove = (id: string) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">我的收藏</h2>
        <span className="text-gray-600">
          共 {favorites.length} 件商品
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {favorites.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg overflow-hidden hover:border-gray-400"
          >
            <div className="p-4 flex gap-4">
              <Link to={`/product/${product.id}`}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded"
                />
              </Link>
              <div className="flex-1">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-medium hover:text-gray-600">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-red-600 mt-2">
                  ¥{product.price.toFixed(2)}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                    加入购物车
                  </button>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="p-2 text-gray-500 hover:text-black"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {favorites.length === 0 && (
        <div className="text-center py-12">
          <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">暂无收藏商品</p>
        </div>
      )}
    </div>
  );
};