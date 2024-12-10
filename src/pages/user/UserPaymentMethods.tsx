import React, { useState } from 'react';
import { CreditCard, Plus, Trash2 } from 'lucide-react';

interface PaymentMethod {
  id: string;
  type: 'credit' | 'debit';
  last4: string;
  expiry: string;
  isDefault: boolean;
}

const MOCK_PAYMENT_METHODS: PaymentMethod[] = [
  {
    id: '1',
    type: 'credit',
    last4: '4242',
    expiry: '12/24',
    isDefault: true
  },
  {
    id: '2',
    type: 'debit',
    last4: '8888',
    expiry: '06/25',
    isDefault: false
  }
];

export const UserPaymentMethods: React.FC = () => {
  const [paymentMethods, setPaymentMethods] = useState(MOCK_PAYMENT_METHODS);
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这张卡片吗？')) {
      setPaymentMethods(methods => methods.filter(m => m.id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">支付方式</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 text-sm hover:text-black"
        >
          <Plus className="w-4 h-4" />
          <span>添加新卡片</span>
        </button>
      </div>

      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div
            key={method.id}
            className="border rounded-lg p-4 hover:border-gray-400"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-medium">
                      {method.type === 'credit' ? '信用卡' : '借记卡'}
                    </span>
                    <span className="text-gray-600">**** {method.last4}</span>
                    {method.isDefault && (
                      <span className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-0.5">
                        默认支付方式
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">有效期至：{method.expiry}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(method.id)}
                className="text-gray-500 hover:text-black"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 添加新卡片弹窗 */}
      {isAdding && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[500px]">
            <h3 className="text-lg font-bold mb-4">添加新卡片</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  卡号
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    有效期
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    安全码
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border rounded-md"
                    placeholder="CVC"
                  />
                </div>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="setDefault" className="mr-2" />
                <label htmlFor="setDefault" className="text-sm text-gray-700">
                  设为默认支付方式
                </label>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsAdding(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  添加
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};