import React from 'react';
import { MessageSquare, Bell } from 'lucide-react';

interface Message {
  id: string;
  type: 'system' | 'order';
  title: string;
  content: string;
  time: string;
  isRead: boolean;
}

const MOCK_MESSAGES: Message[] = [
  {
    id: '1',
    type: 'order',
    title: '订单发货通知',
    content: '您的订单 12345678 已发货，请注意查收',
    time: '2024-03-20 14:30:00',
    isRead: false
  },
  {
    id: '2',
    type: 'system',
    title: '系统通知',
    content: '您的账户安全等级较低，建议开启二次验证',
    time: '2024-03-19 10:00:00',
    isRead: true
  }
];

export const UserMessages: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">消息中心</h2>
        <button className="text-sm text-gray-600 hover:text-black">
          全部标记为已读
        </button>
      </div>

      <div className="space-y-4">
        {MOCK_MESSAGES.map((message) => (
          <div
            key={message.id}
            className={`border rounded-lg p-4 hover:border-gray-400 ${
              !message.isRead ? 'bg-gray-50' : ''
            }`}
          >
            <div className="flex items-start gap-3">
              {message.type === 'system' ? (
                <Bell className="w-5 h-5 text-gray-400 mt-1" />
              ) : (
                <MessageSquare className="w-5 h-5 text-gray-400 mt-1" />
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{message.title}</h3>
                  {!message.isRead && (
                    <span className="w-2 h-2 bg-red-500 rounded-full" />
                  )}
                </div>
                <p className="text-gray-600">{message.content}</p>
                <p className="text-sm text-gray-500 mt-2">{message.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};