export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  subcategory: string;
  specs: {
    colors: ProductSpec[];
    sizes: ProductSpec[];
  };
  stock: number;
}

export interface ProductSpec {
  id: string;
  name: string;
  image?: string;
}

export interface User {
  email: string;
  isAuthenticated: boolean;
  name?: string;
  phone?: string;
  avatar?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSpecs: {
    color: string;
    size: string;
  };
}

export interface Address {
  id: string;
  name: string;
  phone: string;
  province: string;
  city: string;
  district: string;
  address: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  status: 'pending' | 'paid' | 'shipped' | 'delivered' | 'completed' | 'cancelled';
  total: number;
  address: Address;
  createdAt: string;
  paymentMethod: string;
}