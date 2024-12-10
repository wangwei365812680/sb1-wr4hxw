import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import {
  User,
  Settings,
  MapPin,
  Package,
  Shield,
  CreditCard,
  MessageSquare,
  RefreshCw,
  Heart
} from 'lucide-react';

const MENU_ITEMS = [
  { icon: User, label: '个人信息', path: '/user/profile' },
  { icon: MapPin, label: '收货地址', path: '/user/addresses' },
  { icon: Package, label: '我的订单', path: '/user/orders' },
  { icon: Shield, label: '账号安全', path: '/user/security' },
  { icon: CreditCard, label: '支付管理', path: '/user/payment-methods' },
  { icon: MessageSquare, label: '消息中心', path: '/user/messages' },
  { icon: RefreshCw, label: '退款/售后', path: '/user/refunds' },
  { icon: Heart, label: '我的收藏', path: '/user/favorites' }
];

export const UserProfile: React.FC = () => {
  const location = useLocation();

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* 侧边导航 */}
        <div className="w-64 flex-shrink-0">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <nav className="flex flex-col">
              {MENU_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 ${
                      location.pathname === item.path
                        ? 'bg-gray-50 font-medium'
                        : ''
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* 主内容区域 */}
        <div className="flex-1">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};