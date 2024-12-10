import React from 'react';
import { useParams } from 'react-router-dom';

export const RefundDetail: React.FC = () => {
  const { refundId } = useParams();

  // Mock refund data
  const refund = {
    id: refundId,
    status: 'processing',
    reason: '商品质量问题',
    description: '收到商品后发现有明显划痕...',
    amount: 1299,
    createdAt: '2024-03-20 14:30:00',
    images: [
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12'
    ],
    timeline: [
      {
        time: '2024-03-20 14:30:00',
        status: '退款申请已提交',
        detail: '等待商家处理'
      },
      {
        time: '2024-03-20 15:00:00',
        status: '商家正在处理',
        detail: '商家正在审核您的退款申请'
      }
    ]
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">退款详情</h1>

      <div className="space-y-6">
        {/* 退款状态 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="text-center">
            <h2 className="text-xl font-medium">退款处理中</h2>
            <p className="text-gray-600 mt-2">退款金额：¥{refund.amount.toFixed(2)}</p>
          </div>
        </div>

        {/* 退款进度 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-medium mb-4">处理进度</h3>
          <div className="space-y-4">
            {refund.timeline.map((event, index) => (
              <div key={index} className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="w-3 h-3 bg-gray-300 rounded-full" />
                  {index !== refund.timeline.length - 1 && (
                    <div className="flex-1 w-px bg-gray-300 my-2" />
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{event.status}</p>
                  <p className="text-gray-600 text-sm">{event.detail}</p>
                  <p className="text-gray-500 text-sm mt-1">{event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 退款信息 */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-medium mb-4">退款信息</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">退款原因</p>
              <p className="mt-1">{refund.reason}</p>
            </div>
            <div>
              <p className="text-gray-600">问题描述</p>
              <p className="mt-1">{refund.description}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-2">图片凭证</p>
              <div className="flex gap-4">
                {refund.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`凭证 ${index + 1}`}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};