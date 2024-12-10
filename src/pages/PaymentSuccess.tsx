import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

export const PaymentSuccess: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
        <h1 className="text-2xl font-bold mb-4">支付成功</h1>
        <p className="text-gray-600 mb-8">
          您的订单已支付成功，我们将尽快为您发货
        </p>
        <div className="space-x-4">
          <Link
            to="/user/orders"
            className="inline-block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
          >
            查看订单
          </Link>
          <Link
            to="/"
            className="inline-block border border-gray-300 px-6 py-2 rounded-lg hover:border-gray-400"
          >
            继续购物
          </Link>
        </div>
      </div>
    </div>
  );
};