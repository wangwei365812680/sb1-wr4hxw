import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface ProductQuantityProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  max?: number;
}

export const ProductQuantity: React.FC<ProductQuantityProps> = ({
  quantity,
  onQuantityChange,
  max = 99
}) => {
  const decrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const increase = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      <button
        onClick={decrease}
        disabled={quantity <= 1}
        className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Minus className="w-5 h-5" />
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => {
          const value = parseInt(e.target.value);
          if (!isNaN(value) && value >= 1 && value <= max) {
            onQuantityChange(value);
          }
        }}
        className="w-16 text-center border border-gray-200 rounded-md py-1 px-2"
        min="1"
        max={max}
      />
      <button
        onClick={increase}
        disabled={quantity >= max}
        className="p-1 rounded-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Plus className="w-5 h-5" />
      </button>
    </div>
  );
};