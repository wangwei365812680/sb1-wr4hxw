import React from 'react';
import { ProductSpec } from '../types';

interface ProductSpecsProps {
  colors: ProductSpec[];
  sizes: ProductSpec[];
  selectedColor: string;
  selectedSize: string;
  onColorChange: (colorId: string) => void;
  onSizeChange: (sizeId: string) => void;
}

export const ProductSpecs: React.FC<ProductSpecsProps> = ({
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
}) => {
  return (
    <div className="space-y-6">
      {/* 颜色选择 */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">选择颜色</h3>
        <div className="flex flex-wrap gap-3">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => onColorChange(color.id)}
              className={`group relative rounded-md px-4 py-2 flex items-center ${
                selectedColor === color.id
                  ? 'border-2 border-black'
                  : 'border border-gray-300 hover:border-gray-400'
              }`}
            >
              {color.image && (
                <img
                  src={color.image}
                  alt={color.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <span className={selectedColor === color.id ? 'font-medium' : ''}>
                {color.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 尺码选择 */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-3">选择尺码</h3>
        <div className="flex flex-wrap gap-3">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => onSizeChange(size.id)}
              className={`min-w-[4rem] px-4 py-2 rounded-md ${
                selectedSize === size.id
                  ? 'border-2 border-black bg-black text-white'
                  : 'border border-gray-300 hover:border-gray-400'
              }`}
            >
              {size.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};