import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart, Ticket, X } from 'lucide-react';

interface ShopNavbarProps {
  cartItems: { name: string; price: string; size?: string }[];
  searchQuery: string;
  onSearch: (query: string) => void;
  onCartClick: () => void;
}

export default function ShopNavbar({ cartItems, searchQuery, onSearch, onCartClick }: ShopNavbarProps) {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="bg-white border-b border-zinc-200 fixed top-0 left-0 right-0 z-50">
      <div className="bg-[#1e3a8a] text-white text-xs py-1 text-center">
        OUR NEW FAN SHOP IS LIVE! POWERED BY DOCTORS REPORT
      </div>
      <div className="px-4 h-20 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="w-16 h-16 flex items-center justify-center overflow-hidden">
            <img src="https://picsum.photos/seed/logo/100/100" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-bold uppercase tracking-wide">
            {['New', 'Teamwear', 'Adult', 'Children', 'Accessories', 'Sale', 'Vouchers'].map(item => (
              <Link key={item} to="#" className="hover:text-[#1e3a8a]">{item}</Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4 text-zinc-600">
          <Link to="/tickets" className="flex items-center gap-1 hover:text-[#1e3a8a]"><Ticket size={20} /> Tickets</Link>
          
          <div className="relative flex items-center">
            {showSearch ? (
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => onSearch(e.target.value)}
                  placeholder="Search..."
                  className="border border-zinc-300 rounded px-2 py-1 text-sm"
                  autoFocus
                />
                <X size={20} className="cursor-pointer hover:text-[#1e3a8a]" onClick={() => { setShowSearch(false); onSearch(''); }} />
              </div>
            ) : (
              <Search size={20} className="cursor-pointer hover:text-[#1e3a8a]" onClick={() => setShowSearch(true)} />
            )}
          </div>
          
          <User size={20} className="cursor-pointer hover:text-[#1e3a8a]" />
          <Heart size={20} className="cursor-pointer hover:text-[#1e3a8a]" />
          <div className="relative cursor-pointer hover:text-[#1e3a8a]" onClick={onCartClick}>
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cartItems.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
