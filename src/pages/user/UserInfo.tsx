import React, { useState } from 'react';
import { useAuthStore } from '../../store/useAuthStore';

export const UserInfo: React.FC = () => {
  const { user, updateUser } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateUser(formData);
    setIsEditing(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">个人信息</h2>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-sm text-gray-600 hover:text-black"
        >
          {isEditing ? '取消' : '编辑'}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            头像
          </label>
          <div className="flex items-center gap-4">
            <img
              src={user?.avatar || 'https://via.placeholder.com/100'}
              alt="用户头像"
              className="w-20 h-20 rounded-full object-cover"
            />
            {isEditing && (
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-black"
              >
                更换头像
              </button>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            用户名
          </label>
          {isEditing ? (
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md"
            />
          ) : (
            <p className="text-gray-900">{formData.name || '未设置'}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            邮箱
          </label>
          <p className="text-gray-900">{formData.email}</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            手机号
          </label>
          {isEditing ? (
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full px-3 py-2 border rounded-md"
            />
          ) : (
            <p className="text-gray-900">{formData.phone || '未设置'}</p>
          )}
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800"
            >
              保存修改
            </button>
          </div>
        )}
      </form>
    </div>
  );
};