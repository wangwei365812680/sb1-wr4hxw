import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '../store/useCartStore';
import { Address } from '../types';

const MOCK_ADDRESSES: Address[] = [
  {
    id: '1',
    name: '张三',
    phone: '13800138000',
    province: '上海市',
    city: '上海市',
    district: '浦东新区',
    address: '陆家嘴环路1000号',
    isDefault: true,
  },
];

export const OrderConfirmation: React.FC = () => {
  const { items } = useCartStore();
  const navigate = useNavigate();
  const [selectedAddress] = useState<Address>(MOCK_ADDRESSES[0]);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = () => {
    // 这里应该调用创建订单的API
    navigate('/payment');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">确认订单</h1>

      <div className="space-y-6">
        {/* 收货地址 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">收货地址</h2>
          <div className="border rounded-lg p-4">
            <div className="flex justify-between">
              <div>
                <p className="font-medium">{selectedAddress.name}</p>
                <p className="text-gray-600 mt-1">{selectedAddress.phone}</p>
                <p className="text-gray-600 mt-1">
                  {selectedAddress.province}
                  {selectedAddress.city}
                  {selectedAddress.district}
                  {selectedAddress.address}
                </p>
              </div>
              <span className="text-sm text-gray-500">默认</span>
            </div>
          </div>
        </div>

        {/* 商品清单 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium mb-4">商品清单</h2>
          <div className="divide-y">
            {items.map((item) => (
              <div key={item.id} className="py-4 flex gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {item.selectedSpecs?.color} / {item.selectedSpecs?.size}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-900">¥{item.price.toFixed(2)}</span>
                    <span className="text-gray-500">x{item.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 订单总结 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">商品总价</span>
              <span>¥{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">运费</span>
              <span>¥0.00</span>
            </div>
            <div className="flex justify-between font-medium text-lg pt-3 border-t">
              <span>实付金额</span>
              <span className="text-red-600">¥{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* 提交订单 */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700"
          >
            提交订单
          </button>
        </div>
      </div>
    </div>
  );
};