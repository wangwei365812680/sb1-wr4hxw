import React from 'react';
import { Link } from 'react-router-dom';

interface Refund {
  id: string;
  orderId: string;
  product: {
    name: string;
    image: string;
    specs: {
      color: string;
      size: string;
    };
  };
  amount: number;
  reason: string;
  status: 'pending' | 'processing' | 'approved' | 'rejected';
  createdAt: string;
}

const MOCK_REFUNDS: Refund[] = [
  {
    id: '1',
    orderId: '12345678',
    product: {
      name: '智能手表 Pro',
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12',
      specs: {
        color: '深空黑',
        size: '42mm'
      }
    },
    amount: 1299,
    reason: '商品质量问题',
    status: 'processing',
    createdAt: '2024-03-20 14:30:00'
  }
];

const STATUS_MAP = {
  pending: { label: '待处理', color: 'text-orange-500' },
  processing: { label: '处理中', color: 'text-blue-500' },
  approved: { label: '已通过', color: 'text-green-500' },
  rejected: { label: '已拒绝', color: 'text-red-500' }
};

export const UserRefunds: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">退款管理</h2>
      </div>

      <div className="space-y-4">
        {MOCK_REFUNDS.map((refund) => (
          <Link
            key={refund.id}
            to={`/refund/${refund.id}`}
            className="block border rounded-lg overflow-hidden hover:border-gray-400"
          >
            <div className="bg-gray-50 px-4 py-3 flex justify-between items-center border-b">
              <span className="text-gray-600">退款编号：{refund.id}</span>
              <span className={STATUS_MAP[refund.status].color}>
                {STATUS_MAP[refund.status].label}
              </span>
            </div>

            <div className="p-4">
              <div className="flex gap-4">
                <img
                  src={refund.product.image}
                  alt={refund.product.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{refund.product.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {refund.product.specs.color} / {refund.product.specs.size}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-900">
                      退款金额：¥{refund.amount.toFixed(2)}
                    </span>
                    <span className="text-gray-500">{refund.createdAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};