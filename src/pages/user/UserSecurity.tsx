import React, { useState } from 'react';
import { Shield, Smartphone, Mail, Key, AlertCircle } from 'lucide-react';

interface SecurityModal {
  type: 'password' | 'phone' | 'email' | null;
  title: string;
}

export const UserSecurity: React.FC = () => {
  const [modal, setModal] = useState<SecurityModal | null>(null);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 处理表单提交
    setModal(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">账号安全</h2>
      </div>

      <div className="space-y-6">
        {/* 登录密码 */}
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-4">
            <Key className="w-6 h-6 text-gray-400" />
            <div>
              <h3 className="font-medium">登录密码</h3>
              <p className="text-sm text-gray-500 mt-1">
                定期更改密码可以保护账号安全
              </p>
            </div>
          </div>
          <button
            onClick={() => setModal({ type: 'password', title: '修改密码' })}
            className="text-sm text-gray-600 hover:text-black"
          >
            修改
          </button>
        </div>

        {/* 手机绑定 */}
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-4">
            <Smartphone className="w-6 h-6 text-gray-400" />
            <div>
              <h3 className="font-medium">手机绑定</h3>
              <p className="text-sm text-gray-500 mt-1">
                已绑定：138****8000
              </p>
            </div>
          </div>
          <button
            onClick={() => setModal({ type: 'phone', title: '更换手机号' })}
            className="text-sm text-gray-600 hover:text-black"
          >
            更换手机号
          </button>
        </div>

        {/* 邮箱绑定 */}
        <div className="flex items-center justify-between p-4 border rounded-lg">
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-gray-400" />
            <div>
              <h3 className="font-medium">邮箱绑定</h3>
              <p className="text-sm text-gray-500 mt-1">
                用于接收重要通知和找回密码
              </p>
            </div>
          </div>
          <button
            onClick={() => setModal({ type: 'email', title: '绑定邮箱' })}
            className="text-sm text-gray-600 hover:text-black"
          >
            绑定邮箱
          </button>
        </div>

        {/* 安全提示 */}
        <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-3">
          <Shield className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-gray-600">
            为了保障您的账号安全，请定期更改密码，并确保密码具有足够的复杂度。建议使用字母、数字和符号的组合。
          </div>
        </div>
      </div>

      {/* 修改密码弹窗 */}
      {modal?.type === 'password' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h3 className="text-lg font-bold mb-4">{modal.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  当前密码
                </label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  新密码
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  确认新密码
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  确认修改
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 更换手机号弹窗 */}
      {modal?.type === 'phone' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h3 className="text-lg font-bold mb-4">{modal.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  新手机号
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  验证码
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md"
                    required
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                  >
                    获取验证码
                  </button>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  确认修改
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 绑定邮箱弹窗 */}
      {modal?.type === 'email' && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[400px]">
            <h3 className="text-lg font-bold mb-4">{modal.title}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  邮箱地址
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  验证码
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="flex-1 px-3 py-2 border rounded-md"
                    required
                  />
                  <button
                    type="button"
                    className="px-4 py-2 border rounded-md hover:bg-gray-50"
                  >
                    获取验证码
                  </button>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setModal(null)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  确认绑定
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};