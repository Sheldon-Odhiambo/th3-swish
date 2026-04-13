import { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';

interface Product {
  name: string;
  price: string;
  img: string;
  description: string;
  hasSize?: boolean;
}

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (size?: string) => void;
}

export default function ProductDetailModal({ product, onClose, onAddToCart }: ProductDetailModalProps) {
  const [selectedSize, setSelectedSize] = useState('M');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800">
          <X size={24} />
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <img src={product.img} alt={product.name} className="w-full md:w-1/2 h-80 object-cover rounded-lg" referrerPolicy="no-referrer" />
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#1e3a8a]">{product.name}</h2>
            <p className="text-xl font-bold text-zinc-800">{product.price}</p>
            <p className="text-zinc-600">{product.description}</p>
            
            {product.hasSize && (
              <div>
                <label className="block text-sm font-bold text-zinc-700 mb-2">Select Size:</label>
                <div className="flex gap-2">
                  {sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1 border font-bold ${selectedSize === size ? 'bg-[#1e3a8a] text-white border-[#1e3a8a]' : 'bg-white text-zinc-800 border-zinc-300 hover:border-[#1e3a8a]'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button 
              onClick={() => { onAddToCart(product.hasSize ? selectedSize : undefined); onClose(); }}
              className="mt-auto flex items-center justify-center gap-2 bg-[#1e3a8a] text-white py-3 px-6 font-bold hover:bg-red-700 transition-colors"
            >
              <ShoppingCart size={20} /> ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}