import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">关于我们</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  公司介绍
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  招贤纳士
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  联系我们
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">帮助中心</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  购物指南
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  支付方式
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  配送说明
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">售后服务</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  退换货政策
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  退换货流程
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-black">
                  常见问题
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">联系方式</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-gray-600">400-123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-gray-600">support@example.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-gray-600">上海市浦东新区XX路XX号</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-600 hover:text-black">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-black">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 优品商城. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};