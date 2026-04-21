import { Facebook, Instagram, Youtube, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1e3a8a] py-12 border-t border-red-700 text-white">
      <div className="px-4 flex flex-col items-center gap-8">
        {/* Top Row: Logos */}
        <div className="flex items-center justify-between w-full">
          <div className="text-sm font-bold text-zinc-300 flex items-center gap-2">
            Built with ❤️ <span className="text-white">SwishCulture</span>
          </div>
          <Link to="/" className="w-24 h-24 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img src="/assets/th3swish-lgg.png" alt="Logo" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </Link>
          <div className="w-24 h-24 bg-zinc-300 rounded-full" />
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-zinc-200 uppercase font-medium">
          {['Newsletter', 'Contact', 'Directions', 'Jobs', 'Press', 'Imprint', 'Data protection', 'Cookies'].map((link) => (
            <a key={link} href="#" className="hover:text-red-200">{link}</a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-6 text-white">
          <a href="#" className="hover:text-red-200 transition-colors"><Facebook size={24} /></a>
          <a href="#" className="hover:text-red-200 transition-colors"><Instagram size={24} /></a>
          <a href="#" className="hover:text-red-200 transition-colors"><Twitter size={24} /></a>
          <a href="#" className="hover:text-red-200 transition-colors"><Youtube size={24} /></a>
          <a href="#" className="hover:text-red-200 transition-colors"><Linkedin size={24} /></a>
        </div>
      </div>
    </footer>
  );
}
