import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'News', path: '/news' },
    { name: 'Team', path: '/team' },
    { name: 'Season', path: '/season' },
    { name: 'Tickets', path: '/tickets' },
    { name: 'Shop', path: '/shop' },
    { name: 'Fan zone', path: '/fanzone' },
    { name: 'Partner', path: '/partner' },
    { name: 'Press', path: '/press' },
    { name: 'Organization', path: '/organization' },
    { name: 'Youth', path: '/youth' },
  ];

  return (
    <header className="bg-[#1e3a8a] text-white fixed top-0 left-0 right-0 z-50">
      <div className="px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-4 relative">
          <Link to="/" className="w-32 h-32 bg-white rounded-full flex items-center justify-center overflow-hidden border-8 border-[#1e3a8a] absolute -top-4 left-8 z-50 shadow-2xl">
            <img src="https://picsum.photos/seed/logo/100/100" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>
          <span className="text-xl font-bold tracking-wider ml-44">SWISH BASKETBALL</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`px-3 py-1 rounded-sm hover:text-red-200 ${location.pathname === link.path ? 'bg-red-600 text-white' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-[#1e3a8a] p-4 flex flex-col gap-4 text-sm font-medium uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`px-3 py-2 rounded-sm hover:text-red-200 ${location.pathname === link.path ? 'bg-red-600 text-white' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
