import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductSpecificationsProps {
  specifications: Record<string, string>;
}

export const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  specifications
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors"
      >
        <span>规格参数</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(specifications).map(([key, value]) => (
              <div key={key} className="flex py-3 border-b border-gray-100 last:border-0">
                <span className="text-gray-600 w-28 flex-shrink-0 font-medium">{key}</span>
                <span className="text-gray-900 flex-1">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};