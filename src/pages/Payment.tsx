import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield } from 'lucide-react';

export const Payment: React.FC = () => {
  const navigate = useNavigate();
  const orderTotal = 1299.00;
  const [paymentMethod, setPaymentMethod] = useState('alipay');

  const handlePayment = () => {
    // 处理支付逻辑
    navigate('/payment/success');
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h1 className="text-2xl font-bold mb-8">订单支付</h1>
        
        <div className="space-y-6">
          {/* 支付金额 */}
          <div className="text-center">
            <div className="text-gray-600 mb-2">支付金额</div>
            <div className="text-3xl font-bold">¥{orderTotal.toFixed(2)}</div>
          </div>

          {/* 支付方式选择 */}
          <div className="space-y-4">
            <div 
              className="border rounded-lg p-4 cursor-pointer hover:border-black"
              onClick={() => setPaymentMethod('alipay')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=100"
                    alt="支付宝"
                    className="w-8 h-8 object-contain"
                  />
                  <span>支付宝</span>
                </div>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'alipay'}
                  onChange={() => setPaymentMethod('alipay')}
                  className="w-4 h-4"
                />
              </div>
            </div>

            <div 
              className="border rounded-lg p-4 cursor-pointer hover:border-black"
              onClick={() => setPaymentMethod('wechat')}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&q=80&w=100"
                    alt="微信支付"
                    className="w-8 h-8 object-contain"
                  />
                  <span>微信支付</span>
                </div>
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === 'wechat'}
                  onChange={() => setPaymentMethod('wechat')}
                  className="w-4 h-4"
                />
              </div>
            </div>
          </div>

          {/* 安全提示 */}
          <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
            <Shield className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-600">
              支付过程受到银行级别加密保护，确保您的支付安全。支付完成后，您将收到支付成功的通知。
            </div>
          </div>

          {/* 支付按钮 */}
          <button
            onClick={handlePayment}
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
          >
            立即支付
          </button>
        </div>
      </div>
    </div>
  );
};