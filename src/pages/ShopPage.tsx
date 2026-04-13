import { useState } from 'react';
import ShopNavbar from '../components/ShopNavbar';
import Footer from '../components/Footer';
import HeadingWithWatermark from '../components/HeadingWithWatermark';
import ProductDetailModal from '../components/ProductDetailModal';
import CartModal from '../components/CartModal';
import CheckoutModal from '../components/CheckoutModal';

export default function ShopPage() {
  const [cartItems, setCartItems] = useState<{ id: number; name: string; price: string; size?: string }[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showCart, setShowCart] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [nextId, setNextId] = useState(0);
  
  const products = [
    { name: 'TH3 SWISH Hoodie', price: '€49.00', img: 'https://picsum.photos/seed/hoodie/400/400', description: 'Comfortable and stylish hoodie for everyday wear.', hasSize: true },
    { name: 'TH3 SWISH T-Shirt', price: '€25.00', img: 'https://picsum.photos/seed/tshirt/400/400', description: 'Lightweight cotton t-shirt with a classic fit.', hasSize: true },
    { name: 'TH3 SWISH Mug', price: '€12.00', img: 'https://picsum.photos/seed/mug/400/400', description: 'Perfect for your morning coffee or tea.' },
    { name: 'TH3 SWISH Water Bottle', price: '€15.00', img: 'https://picsum.photos/seed/bottle/400/400', description: 'Stay hydrated with our durable water bottle.' },
    { name: 'TH3 SWISH Cap', price: '€20.00', img: 'https://picsum.photos/seed/cap/400/400', description: 'Adjustable cap to complete your look.', hasSize: true },
  ];

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const addToCart = (product: any, size?: string) => {
    setCartItems(prev => [...prev, { id: nextId, name: product.name, price: product.price, size }]);
    setNextId(prev => prev + 1);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-zinc-900 font-sans">
      <ShopNavbar cartItems={cartItems} searchQuery={searchQuery} onSearch={setSearchQuery} onCartClick={() => setShowCart(true)} />
      <main className="px-4 py-12 pt-32 max-w-7xl mx-auto">
        <HeadingWithWatermark text="FAN SHOP" className="mb-12 text-6xl" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, i) => (
            <div key={i} className="bg-white p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <img src={product.img} alt={product.name} className="w-full h-64 object-cover mb-4" referrerPolicy="no-referrer" />
              <h3 className="font-bold text-lg mb-1">{product.name}</h3>
              <p className="text-zinc-600 mb-4">{product.price}</p>
              <div className="mt-auto flex flex-col gap-2">
                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-[#1e3a8a] text-white py-2 font-bold hover:bg-red-700 transition-colors"
                >
                  ADD TO CART
                </button>
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="w-full bg-zinc-200 text-zinc-800 py-2 font-bold hover:bg-zinc-300 transition-colors"
                >
                  DETAILS
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onAddToCart={(size) => addToCart(selectedProduct, size)}
        />
      )}
      {showCart && (
        <CartModal 
          items={cartItems} 
          onClose={() => setShowCart(false)} 
          onCheckout={() => { setShowCart(false); setShowCheckout(true); }}
          onRemove={removeFromCart}
        />
      )}
      {showCheckout && (
        <CheckoutModal onClose={() => setShowCheckout(false)} />
      )}
    </div>
  );
}
