import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Package, Truck, MessageSquare } from 'lucide-react';

export const OrderDetail: React.FC = () => {
  const { orderId } = useParams();

  // Mock order data
  const order = {
    id: orderId,
    status: 'shipped',
    createdAt: '2024-03-20 14:30:00',
    items: [
      {
        id: '1',
        name: '智能手表 Pro',
        price: 1299,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
        specs: { color: '深空灰', size: '42mm' }
      }
    ],
    total: 1299,
    address: {
      name: '张三',
      phone: '13800138000',
      address: '上海市浦东新区陆家嘴环路1000号'
    },
    logistics: {
      company: '顺丰速运',
      trackingNumber: 'SF1234567890',
      updates: [
        { time: '2024-03-20 16:30:00', content: '包裹已由上海转运中心发出' },
        { time: '2024-03-20 14:30:00', content: '商家已发货' }
      ]
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="space-y-6">
        {/* 订单状态 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4 mb-4">
            <Package className="w-6 h-6 text-gray-400" />
            <div>
              <h2 className="text-lg font-medium">订单状态：已发货</h2>
              <p className="text-gray-600 mt-1">订单号：{order.id}</p>
              <p className="text-gray-600">下单时间：{order.createdAt}</p>
            </div>
          </div>
          
          {/* 物流信息 */}
          <div className="mt-4 border-t pt-4">
            <div className="flex items-center gap-4 mb-4">
              <Truck className="w-6 h-6 text-gray-400" />
              <div>
                <p className="font-medium">{order.logistics.company}</p>
                <p className="text-gray-600 mt-1">
                  运单号：{order.logistics.trackingNumber}
                </p>
              </div>
            </div>
            <div className="ml-10">
              {order.logistics.updates.map((update, index) => (
                <div key={index} className="relative pl-6 pb-4">
                  <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-gray-300" />
                  <div className="border-l border-gray-300 pl-4 ml-[3px]">
                    <p className="text-gray-600">{update.content}</p>
                    <p className="text-sm text-gray-500 mt-1">{update.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 收货信息 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-medium mb-4">收货信息</h3>
          <div className="text-gray-600">
            <p>{order.address.name} {order.address.phone}</p>
            <p className="mt-1">{order.address.address}</p>
          </div>
        </div>

        {/* 商品信息 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-medium mb-4">商品信息</h3>
          {order.items.map((item) => (
            <div key={item.id} className="flex gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-500 mt-1">
                  {item.specs.color} / {item.specs.size}
                </p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-900">¥{item.price.toFixed(2)}</span>
                  <span className="text-gray-500">x{item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-4 pt-4 border-t text-right">
            <p className="text-gray-600">
              共{order.items.length}件商品 
              实付：<span className="text-lg font-medium ml-2">
                ¥{order.total.toFixed(2)}
              </span>
            </p>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="flex justify-end gap-4">
          <Link
            to={`/refund/request/${order.id}`}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:border-gray-400"
          >
            申请退款
          </Link>
          <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            <MessageSquare className="w-4 h-4" />
            联系客服
          </button>
        </div>
      </div>
    </div>
  );
};