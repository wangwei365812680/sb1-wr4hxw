import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductDetailsProps {
  images: string[];
  specifications: Record<string, string>;
}

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg mt-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-lg font-medium text-gray-900 hover:bg-gray-50 transition-colors rounded-t-lg"
      >
        {title}
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {isOpen && <div className="px-6 pb-6">{children}</div>}
    </div>
  );
};

export const ProductDetails: React.FC<ProductDetailsProps> = ({
  images,
  specifications,
}) => {
  return (
    <div className="mt-12 space-y-8 mb-16">
      {/* 规格参数区域 */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4">
          <h2 className="text-xl font-medium text-gray-900">规格参数</h2>
        </div>
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
      </div>

      {/* 商品实拍图片区域 */}
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-medium text-gray-900">商品实拍</h2>
        </div>
        <div className="p-6">
          <div className="space-y-8">
            {images.map((image, index) => (
              <div key={index} className="space-y-4">
                <img
                  src={image}
                  alt={`商品详情图 ${index + 1}`}
                  className="w-full rounded-lg"
                />
                <p className="text-sm text-gray-500 text-center">
                  商品实拍图 {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 售后服务区域 */}
      <CollapsibleSection title="售后服务">
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <h4 className="text-lg font-medium text-gray-900 mb-3">7天无理由退换</h4>
            <p className="text-gray-700 leading-relaxed">
              商品签收后7天内，在保证商品完好的前提下可申请无理由退换货
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <h4 className="text-lg font-medium text-gray-900 mb-3">正品保证</h4>
            <p className="text-gray-700 leading-relaxed">
              所有商品均为正品，支持正品验证
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-100">
            <h4 className="text-lg font-medium text-gray-900 mb-3">全国联保</h4>
            <p className="text-gray-700 leading-relaxed">
              享受厂商提供的全国联保服务
            </p>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};