import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, ChevronRight, Search } from 'lucide-react';
import { Order } from '../../types';

const MOCK_ORDERS: Order[] = [
  {
    id: '1',
    items: [
      {
        id: '1',
        name: '智能手表 Pro',
        price: 1299,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
        quantity: 1,
        selectedSpecs: { color: '深空灰', size: '42mm' },
      },
    ],
    status: 'pending',
    total: 1299,
    createdAt: '2024-03-20',
    paymentMethod: 'alipay',
  },
  {
    id: '2',
    items: [
      {
        id: '2',
        name: '真皮商务公文包',
        price: 899,
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
        quantity: 1,
        selectedSpecs: { color: '经典棕', size: '标准款' },
      },
    ],
    status: 'shipped',
    total: 899,
    createdAt: '2024-03-19',
    paymentMethod: 'wechat',
  },
  {
    id: '3',
    items: [
      {
        id: '3',
        name: '机械键盘',
        price: 599,
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae',
        quantity: 1,
        selectedSpecs: { color: 'RGB幻彩', size: '87键' },
      },
    ],
    status: 'delivered',
    total: 599,
    createdAt: '2024-03-18',
    paymentMethod: 'alipay',
  },
];

const STATUS_MAP = {
  pending: { label: '待付款', color: 'text-orange-500' },
  paid: { label: '待发货', color: 'text-blue-500' },
  shipped: { label: '已发货', color: 'text-purple-500' },
  delivered: { label: '待收货', color: 'text-indigo-500' },
  completed: { label: '已完成', color: 'text-green-500' },
  cancelled: { label: '已取消', color: 'text-gray-500' },
};

const ORDER_TABS = [
  { key: 'all', label: '全部订单' },
  { key: 'pending', label: '待付款' },
  { key: 'shipped', label: '已发货' },
  { key: 'delivered', label: '待收货' },
  { key: 'completed', label: '已完成' },
];

export const UserOrders: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredOrders = MOCK_ORDERS.filter(order => {
    if (activeTab !== 'all' && order.status !== activeTab) return false;
    if (searchQuery) {
      return order.items.some(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return true;
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">我的订单</h2>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="搜索订单"
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
          />
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* 订单状态标签 */}
      <div className="flex border-b mb-6">
        {ORDER_TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-6 py-3 text-sm font-medium ${
              activeTab === tab.key
                ? 'text-black border-b-2 border-black'
                : 'text-gray-500 hover:text-black'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg overflow-hidden hover:border-gray-400"
          >
            {/* 订单头部 */}
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-b">
              <div className="flex items-center gap-4">
                <Package className="w-5 h-5 text-gray-400" />
                <span className="text-gray-600">订单号：{order.id}</span>
                <span className="text-gray-600">
                  {order.createdAt}
                </span>
              </div>
              <span className={STATUS_MAP[order.status].color}>
                {STATUS_MAP[order.status].label}
              </span>
            </div>

            {/* 订单商品 */}
            <div className="p-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                  </Link>
                  <div className="flex-1">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-medium hover:text-gray-600">{item.name}</h3>
                    </Link>
                    <p className="text-sm text-gray-500 mt-1">
                      {item.selectedSpecs.color} / {item.selectedSpecs.size}
                    </p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-gray-900">
                        ¥{item.price.toFixed(2)}
                      </span>
                      <span className="text-gray-500">x{item.quantity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 订单底部 */}
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-t">
              <div className="text-gray-600">
                共{order.items.length}件商品 
                实付：<span className="text-black font-medium">
                  ¥{order.total.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-4">
                {order.status === 'pending' && (
                  <Link
                    to={`/payment`}
                    className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    去支付
                  </Link>
                )}
                {order.status === 'delivered' && (
                  <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                    确认收货
                  </button>
                )}
                {(order.status === 'delivered' || order.status === 'completed') && (
                  <Link
                    to={`/refund/request/${order.id}`}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:border-gray-400"
                  >
                    申请退款
                  </Link>
                )}
                <Link
                  to={`/order/${order.id}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-black"
                >
                  查看详情
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <Package className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500">暂无相关订单</p>
          </div>
        )}
      </div>
    </div>
  );
};