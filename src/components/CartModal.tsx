import { X, CreditCard, Trash2 } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: string;
  size?: string;
}

interface CartModalProps {
  items: CartItem[];
  onClose: () => void;
  onCheckout: () => void;
  onRemove: (id: number) => void;
}

export default function CartModal({ items, onClose, onCheckout, onRemove }: CartModalProps) {
  const total = items.reduce((sum, item) => sum + parseFloat(item.price.replace('€', '')), 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Shopping Cart</h2>
        {items.length === 0 ? (
          <p className="text-zinc-600">Your cart is empty.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <span>{item.name} {item.size && `(Size: ${item.size})`}</span>
                <div className="flex items-center gap-4">
                  <span className="font-bold">{item.price}</span>
                  <button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between text-xl font-bold mt-4">
              <span>Total:</span>
              <span>€{total.toFixed(2)}</span>
            </div>
            <button 
              onClick={onCheckout}
              className="flex items-center justify-center gap-2 bg-[#1e3a8a] text-white py-3 px-6 font-bold hover:bg-red-700 transition-colors"
            >
              <CreditCard size={20} /> PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
