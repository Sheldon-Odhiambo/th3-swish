import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Ticket, Calendar, ShoppingBag } from 'lucide-react';

interface SubNavbarProps {
  activeItem: string;
  navItems: { label: string; href: string }[];
  title?: string;
}

export default function SubNavbar({ activeItem, navItems, title = 'Navigation' }: SubNavbarProps) {
  const location = useLocation();

  return (
    <div className="fixed top-20 left-0 z-40 w-full bg-white border-b border-zinc-200 text-[#1e3a8a]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center gap-2 px-6 py-4 font-bold text-sm border-r border-zinc-200">
            <span>{title}</span>
            <ChevronRight size={16} />
          </div>
          <div className="flex gap-8 px-6 font-bold text-sm">
            {navItems.map((item) => (
              <Link 
                key={item.label} 
                to={item.href} 
                className={`hover:text-red-600 ${location.pathname === item.href ? 'text-red-600' : ''}`}
              >
                {item.label.charAt(0).toUpperCase() + item.label.slice(1).toLowerCase()}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex border-l border-zinc-200 bg-zinc-100 text-zinc-700">
          {[
            { icon: Ticket, label: 'Tickets', href: '/tickets' },
            { icon: Calendar, label: 'Schedule', href: '/schedule' },
            { icon: ShoppingBag, label: 'Fan Shop', href: '/fanshop' },
          ].map((item) => (
            <Link key={item.label} to={item.href} className="flex flex-col items-center justify-center p-4 hover:bg-zinc-200 transition-colors w-24 border-r border-zinc-200">
              <item.icon size={20} />
              <span className="text-[10px] font-bold uppercase mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
