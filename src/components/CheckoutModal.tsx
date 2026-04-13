import { useState } from 'react';
import { X } from 'lucide-react';

interface CheckoutModalProps {
  onClose: () => void;
}

export default function CheckoutModal({ onClose }: CheckoutModalProps) {
  const [method, setMethod] = useState<'card' | 'paypal' | 'mpesa' | null>(null);

  const renderForm = () => {
    switch (method) {
      case 'card':
        return (
          <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert('Processing Credit Card...'); onClose(); }}>
            <input type="text" placeholder="Card Number" className="border p-2 rounded" required />
            <div className="flex gap-2">
              <input type="text" placeholder="MM/YY" className="border p-2 rounded w-1/2" required />
              <input type="text" placeholder="CVV" className="border p-2 rounded w-1/2" required />
            </div>
            <input type="text" placeholder="Cardholder Name" className="border p-2 rounded" required />
            <button className="bg-[#1e3a8a] text-white p-2 rounded font-bold">Pay Now</button>
          </form>
        );
      case 'paypal':
        return (
          <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert('Redirecting to PayPal...'); onClose(); }}>
            <input type="email" placeholder="PayPal Email" className="border p-2 rounded" required />
            <input type="password" placeholder="PayPal Password" className="border p-2 rounded" required />
            <button className="bg-[#1e3a8a] text-white p-2 rounded font-bold">Login & Pay</button>
          </form>
        );
      case 'mpesa':
        return (
          <form className="flex flex-col gap-3" onSubmit={(e) => { e.preventDefault(); alert('Processing M-Pesa...'); onClose(); }}>
            <input type="tel" placeholder="Phone Number (e.g., 0712345678)" className="border p-2 rounded" required />
            <button className="bg-[#1e3a8a] text-white p-2 rounded font-bold">Pay with M-Pesa</button>
          </form>
        );
      default:
        return (
          <div className="flex flex-col gap-4">
            <button onClick={() => setMethod('card')} className="w-full border-2 border-zinc-300 p-4 rounded-lg hover:border-[#1e3a8a] transition-colors">Credit Card</button>
            <button onClick={() => setMethod('paypal')} className="w-full border-2 border-zinc-300 p-4 rounded-lg hover:border-[#1e3a8a] transition-colors">PayPal</button>
            <button onClick={() => setMethod('mpesa')} className="w-full border-2 border-zinc-300 p-4 rounded-lg hover:border-[#1e3a8a] transition-colors">M-Pesa</button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-800">
          <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">
          {method ? `Pay with ${method.charAt(0).toUpperCase() + method.slice(1)}` : 'Payment Methods'}
        </h2>
        {renderForm()}
      </div>
    </div>
  );
}
