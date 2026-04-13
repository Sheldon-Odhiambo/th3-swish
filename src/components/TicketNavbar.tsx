import { Link } from 'react-router-dom';
import { Home, Lock, User } from 'lucide-react';

export default function TicketNavbar() {
  return (
    <header className="bg-white border-b border-zinc-200">
      <div className="bg-zinc-800 text-white text-xs py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-1"><Home size={14} /> Homepage</Link>
          <Link to="#" className="flex items-center gap-1"><Lock size={14} /> Log in/Register</Link>
        </div>
        <div className="flex items-center gap-4">
          <span>DE</span>
          <User size={14} />
        </div>
      </div>
      <div className="px-4 h-16 flex items-center justify-between max-w-7xl mx-auto">
        <Link to="/" className="w-12 h-12 flex items-center justify-center overflow-hidden">
          <img src="https://picsum.photos/seed/logo/100/100" alt="Logo" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
        </Link>
        <nav className="flex gap-8 text-sm font-bold uppercase tracking-wide">
          {['Events', 'Tickets', 'Shopping cart', 'Payment', 'Confirmation'].map((item, i) => (
            <Link key={item} to="#" className={`pb-4 border-b-2 ${i === 1 ? 'border-[#1e3a8a] text-[#1e3a8a]' : 'border-transparent hover:text-[#1e3a8a]'}`}>
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
