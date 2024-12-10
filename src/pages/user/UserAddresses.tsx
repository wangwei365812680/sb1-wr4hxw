import React, { useState } from 'react';
import { MapPin, Plus, Pencil, Trash2 } from 'lucide-react';
import { Address } from '../../types';

interface AddressFormData {
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  address: string;
  isDefault: boolean;
}

const MOCK_ADDRESSES: Address[] = [
  {
    id: '1',
    name: '张三',
    phone: '13800138000',
    province: '上海市',
    city: '上海市',
    district: '浦东新区',
    address: '陆家嘴环路1000号',
    isDefault: true,
  },
  {
    id: '2',
    name: '李四',
    phone: '13900139000',
    province: '北京市',
    city: '北京市',
    district: '朝阳区',
    address: '建国路100号',
    isDefault: false,
  },
];

const PROVINCES = ['北京市', '上海市', '广东省', '江苏省'];
const CITIES = {
  '北京市': ['北京市'],
  '上海市': ['上海市'],
  '广东省': ['广州市', '深圳市', '东莞市'],
  '江苏省': ['南京市', '苏州市', '无锡市'],
};
const DISTRICTS = {
  '北京市': ['朝阳区', '海淀区', '东城区'],
  '上海市': ['浦东新区', '黄浦区', '静安区'],
  '广州市': ['天河区', '越秀区', '海珠区'],
  '深圳市': ['南山区', '福田区', '罗湖区'],
};

export const UserAddresses: React.FC = () => {
  const [addresses, setAddresses] = useState<Address[]>(MOCK_ADDRESSES);
  const [isEditing, setIsEditing] = useState(false);
  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [formData, setFormData] = useState<AddressFormData>({
    name: '',
    phone: '',
    province: '',
    city: '',
    district: '',
    address: '',
    isDefault: false,
  });

  const handleEdit = (address: Address) => {
    setEditingAddress(address);
    setFormData({
      name: address.name,
      phone: address.phone,
      province: address.province,
      city: address.city,
      district: address.district,
      address: address.address,
      isDefault: address.isDefault,
    });
    setIsEditing(true);
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这个地址吗？')) {
      setAddresses(addresses.filter((addr) => addr.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingAddress) {
      // 更新地址
      setAddresses(addresses.map((addr) =>
        addr.id === editingAddress.id
          ? { ...addr, ...formData }
          : formData.isDefault
          ? { ...addr, isDefault: false }
          : addr
      ));
    } else {
      // 新增地址
      const newAddress: Address = {
        id: Date.now().toString(),
        ...formData,
      };
      if (formData.isDefault) {
        setAddresses(addresses.map(addr => ({ ...addr, isDefault: false })).concat(newAddress));
      } else {
        setAddresses([...addresses, newAddress]);
      }
    }
    setIsEditing(false);
    setEditingAddress(null);
    setFormData({
      name: '',
      phone: '',
      province: '',
      city: '',
      district: '',
      address: '',
      isDefault: false,
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">收货地址</h2>
        <button
          onClick={() => {
            setEditingAddress(null);
            setFormData({
              name: '',
              phone: '',
              province: '',
              city: '',
              district: '',
              address: '',
              isDefault: false,
            });
            setIsEditing(true);
          }}
          className="flex items-center gap-2 text-sm hover:text-black"
        >
          <Plus className="w-4 h-4" />
          <span>新增地址</span>
        </button>
      </div>

      <div className="space-y-4">
        {addresses.map((address) => (
          <div
            key={address.id}
            className="border rounded-lg p-4 hover:border-gray-400"
          >
            <div className="flex justify-between">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="font-medium">{address.name}</span>
                    <span className="text-gray-600">{address.phone}</span>
                    {address.isDefault && (
                      <span className="text-xs text-gray-500 border border-gray-200 rounded px-2 py-0.5">
                        默认地址
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">
                    {address.province}
                    {address.city}
                    {address.district}
                    {address.address}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => handleEdit(address)}
                  className="text-gray-500 hover:text-black"
                >
                  <Pencil className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(address.id)}
                  className="text-gray-500 hover:text-black"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 编辑地址弹窗 */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[500px]">
            <h3 className="text-lg font-bold mb-4">
              {editingAddress ? '编辑地址' : '新增地址'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    收货人
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    手机号码
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    省份
                  </label>
                  <select
                    value={formData.province}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        province: e.target.value,
                        city: '',
                        district: '',
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                  >
                    <option value="">请选择省份</option>
                    {PROVINCES.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    城市
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        city: e.target.value,
                        district: '',
                      })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                    disabled={!formData.province}
                  >
                    <option value="">请选择城市</option>
                    {formData.province &&
                      CITIES[formData.province as keyof typeof CITIES].map(
                        (city) => (
                          <option key={city} value={city}>
                            {city}
                          </option>
                        )
                      )}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    区县
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value })
                    }
                    className="w-full px-3 py-2 border rounded-md"
                    required
                    disabled={!formData.city}
                  >
                    <option value="">请选择区县</option>
                    {formData.city &&
                      DISTRICTS[formData.city as keyof typeof DISTRICTS].map(
                        (district) => (
                          <option key={district} value={district}>
                            {district}
                          </option>
                        )
                      )}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  详细地址
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isDefault"
                  checked={formData.isDefault}
                  onChange={(e) =>
                    setFormData({ ...formData, isDefault: e.target.checked })
                  }
                  className="mr-2"
                />
                <label htmlFor="isDefault" className="text-sm text-gray-700">
                  设为默认收货地址
                </label>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 border rounded-md hover:bg-gray-50"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                >
                  保存
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};