import React, { useState,useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Share2, ChevronRight } from 'lucide-react';
import { FEATURED_PRODUCTS } from '../data/products';
import { ProductDetails } from '../components/ProductDetails';
import { ProductQuantity } from '../components/ProductQuantity';
import { ProductSpecs } from '../components/ProductSpecs';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { Cart } from '../components/Cart';

import { getCommodityDetaile } from '@/api'

export const ProductDetail: React.FC = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addItem);
  const { user } = useAuthStore();
  const navigate = useNavigate();
  
  let product =   {
    id: '1',
    name: '智能手表 Pro',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=800',
    description: '多功能智能手表，支持心率监测、运动追踪',
    category: 'electronics',
    subcategory: '智能手表',
    specs: {
      colors: [
        { id: 'black', name: '深空黑', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12' },
        { id: 'silver', name: '流光银', image: 'https://images.unsplash.com/photo-1539185441755-769473a23570' },
        { id: 'gold', name: '玫瑰金', image: 'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834' }
      ],
      sizes: [
        { id: '40mm', name: '40mm' },
        { id: '44mm', name: '44mm' }
      ]
    },
    stock: 100
  }


  const [productObj,setProductObj] =useState([])
  
  if (!product) {
    return <div className="text-center py-12">商品未找到</div>;
  }

  // const productImages = [
  //   product.image,
  //   'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
  //   'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800',
  // ];

  const detailImages = [
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&q=80&w=1600',
  ];

  const specifications = {
    '品牌': '优品',
    '型号': 'YP2024',
    '材质': '高级环保材质',
    '产地': '中国',
    '保修期': '12个月',
    '规格': '标准版/豪华版/至尊版',
    '颜色': '经典黑/典雅白/深空灰',
    '上市时间': '2024年',
  };

  const handleBuyNow = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    if (!selectedColor || !selectedSize) {
      alert('请选择商品规格');
      return;
    }

    addToCart({
      ...product,
      selectedSpecs: {
        color: selectedColor,
        size: selectedSize
      },
      quantity: 1
    });
    navigate('/checkout');
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('请选择商品规格');
      return;
    }

    addToCart({
      ...product,
      selectedSpecs: {
        color: selectedColor,
        size: selectedSize
      },
      quantity
    });
  };
  const [productImages,setProductImages] = useState([])

  const [sameSpuIdProduct,setSameSpuIdProduct] = useState([])


  useEffect(()=>{


    // console.log(111)
    getCommodityDetaile({id:productId}).then(res=>{
      console.log(1788,res.product,res.images)

      setProductImages(res.product.images)

      //setProductObj(res.product)

      setSameSpuIdProduct(res.product.sameSpuIdProduct)
            // setProduct(res.data)
    })
  },[])

  const onColorChange=(e)=>{

    const res = sameSpuIdProduct.filter((item)=>item.id === e)

    setSameSpuIdProduct(res)
    console.log(123,res)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 左侧商品图片 */}
        <div className="lg:w-1/2">
          <div className="relative">
            <img
              src={productImages[selectedImage]?.popup}
              alt={product.name}
              className="w-full aspect-square object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-2 h-2 rounded-full ${
                    selectedImage === index ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 flex gap-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 rounded-md overflow-hidden ${
                  selectedImage === index ? 'ring-2 ring-black' : ''
                }`}
              >
                <img
                  src={image?.thumb}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* 右侧商品信息 */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h1 className="text-2xl font-bold mb-4">{sameSpuIdProduct[0]?.name}</h1>
            <div className="flex items-center justify-between mb-6">
              <div className="text-3xl font-bold text-red-600">¥{sameSpuIdProduct[0]?.price_format}</div>
              <div className="flex gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="w-6 h-6" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Share2 className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* 商品规格 */}
              <ProductSpecs
                colors={sameSpuIdProduct}
                sizes={product.specs.sizes}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                onColorChange={onColorChange}
                onSizeChange={setSelectedSize}
              />

              {/* 购买数量 */}
              <div className="flex items-center justify-between">
                <span className="font-medium">购买数量</span>
                <ProductQuantity
                  quantity={quantity}
                  onQuantityChange={setQuantity}
                  max={product.stock}
                />
              </div>

              {/* 配送信息 */}
              <div className="flex items-center justify-between text-gray-600">
                <span>配送</span>
                <div className="flex items-center">
                  <span>免运费</span>
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>

              {/* 商品描述 */}
              <div className="border-t pt-4">
                <h3 className="font-medium mb-2">商品描述</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* 购买按钮 */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gray-100 text-black py-3 rounded-lg hover:bg-gray-200 font-medium"
                >
                  加入购物车
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 font-medium"
                >
                  立即购买
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 商品详情区域 */}
      <ProductDetails images={detailImages} specifications={specifications} />
      
      {/* 购物车悬浮按钮 */}
      <Cart />
    </div>
  );
};