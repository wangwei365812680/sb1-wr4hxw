import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const REFUND_REASONS = [
  '商品质量问题',
  '商品与描述不符',
  '商品损坏',
  '尺寸不合适',
  '颜色与图片不符',
  '不想要了',
  '其他原因'
];

export const RefundRequest: React.FC = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里应该调用退款申请API
    navigate('/user/refunds');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      // 这里应该实现图片上传逻辑
      console.log('Uploading images:', files);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">申请退款</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 退款原因 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            退款原因
          </label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-black"
            required
          >
            <option value="">请选择退款原因</option>
            {REFUND_REASONS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* 问题描述 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            问题描述
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg focus:ring-1 focus:ring-black"
            rows={4}
            placeholder="请详细描述您遇到的问题..."
            required
          />
        </div>

        {/* 图片上传 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            上传凭证（最多3张）
          </label>
          <div className="flex gap-4">
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              id="image-upload"
            />
            <label
              htmlFor="image-upload"
              className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400"
            >
              <span className="text-4xl text-gray-400">+</span>
            </label>
            {images.map((image, index) => (
              <div key={index} className="w-24 h-24 relative">
                <img
                  src={image}
                  alt={`凭证 ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setImages(images.filter((_, i) => i !== index))}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-black text-white rounded-full"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 提交按钮 */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            提交申请
          </button>
        </div>
      </form>
    </div>
  );
};