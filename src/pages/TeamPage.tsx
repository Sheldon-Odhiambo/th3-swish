import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Ticket, Calendar, ShoppingBag } from 'lucide-react';
import HeadingWithWatermark from '../components/HeadingWithWatermark';

const squadData = Array.from({ length: 16 }, (_, i) => ({
  no: i + 1,
  player: `Player ${i + 1}`,
  born: 'January 1, 2000',
  size: '1.90 m',
  weight: '85 kg',
  pos: 'G',
  nat: 'GER',
  img: `https://picsum.photos/seed/player${i}/400/500`
}));

const staffData = [
  { name: 'Alex Vogel', pos: 'Sporting Director', img: 'https://picsum.photos/seed/staff1/400/500' },
  { name: 'Enos Tonny', pos: 'Head coach', img: '/assets/enos.jpeg' },
  { name: 'Enos Tonny ', pos: 'Assistant Coach', img: '/assets/enos.jpeg' },
  { name: 'Shy Ely', pos: 'Assistant Coach', img: 'https://picsum.photos/seed/staff4/400/500' },
];

const medicalStaffData = [
  { name: 'Serena Benavente', pos: 'Strength & Conditioning Coach', img: 'https://picsum.photos/seed/med1/400/500' },
  { name: 'Samuli Moilanen', pos: 'Physiotherapist', img: 'https://picsum.photos/seed/med2/400/500' },
];

export default function TeamPage() {
  const [activeTab, setActiveTab] = useState('Squad');

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <div className="pt-20">
        
        {/* Sub-navigation */}
      <div className="sticky top-20 z-40 bg-red-600 border-b border-red-700 text-white">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex-1 flex gap-8 p-4 font-bold uppercase text-sm">
            <span>team</span>
            <span>&gt;</span>
            <button onClick={() => setActiveTab('Team Overview')} className={activeTab === 'Team Overview' ? 'text-white' : 'text-zinc-200'}>Team Overview</button>
            <button onClick={() => setActiveTab('Squad')} className={activeTab === 'Squad' ? 'text-white' : 'text-zinc-200'}>Squad</button>
            <button onClick={() => setActiveTab('Sports Staff')} className={activeTab === 'Sports Staff' ? 'text-white' : 'text-zinc-200'}>Sports Staff</button>
            <button onClick={() => setActiveTab('Medical Staff')} className={activeTab === 'Medical Staff' ? 'text-white' : 'text-zinc-200'}>Medical Staff</button>
          </div>
          <div className="flex border-l border-red-700">
            {[
              { icon: Ticket, label: 'Tickets', href: '#' },
              { icon: Calendar, label: 'Schedule', href: '/schedule' },
              { icon: ShoppingBag, label: 'Fan Shop', href: '#' },
            ].map((item) => (
              <Link key={item.label} to={item.href} className="flex flex-col items-center justify-center p-4 hover:bg-red-700 transition-colors w-24">
                <item.icon size={20} />
                <span className="text-[10px] font-bold uppercase mt-1">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <main className="px-4 py-12">
        
        {activeTab === 'Team Overview' && (
          <div className="space-y-6">
            <HeadingWithWatermark text="Team Overview" className="mb-12" />
            <h2 className="text-xl font-bold text-[#1e3a8a] uppercase">2025/2026 SEASON</h2>
            <img
              src="https://picsum.photos/seed/basketball-team/1200/600"
              alt="Team 2025/2026"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <HeadingWithWatermark text="Players" className="text-2xl mb-12" />
            <table className="w-full text-left border-collapse bg-white shadow-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500 uppercase text-xs">
                  <th className="p-4">No.</th>
                  <th className="p-4">Player</th>
                  <th className="p-4">Born</th>
                  <th className="p-4">Size</th>
                  <th className="p-4">Weight</th>
                  <th className="p-4">Pos.</th>
                  <th className="p-4">Nat.</th>
                </tr>
              </thead>
              <tbody>
                {squadData.map((p) => (
                  <tr key={p.no} className="border-b border-zinc-100 hover:bg-zinc-50">
                    <td className="p-4 font-bold text-[#1e3a8a]">{p.no}</td>
                    <td className="p-4 font-bold text-[#1e3a8a]">{p.player}</td>
                    <td className="p-4">{p.born}</td>
                    <td className="p-4">{p.size}</td>
                    <td className="p-4">{p.weight}</td>
                    <td className="p-4">{p.pos}</td>
                    <td className="p-4">{p.nat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <HeadingWithWatermark text="Sports Staff" className="text-2xl mb-12" />
            <table className="w-full text-left border-collapse bg-white shadow-sm">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500 uppercase text-xs">
                  <th className="p-4">Name</th>
                  <th className="p-4">Position</th>
                </tr>
              </thead>
              <tbody>
                {staffData.map((s, i) => (
                  <tr key={i} className="border-b border-zinc-100 hover:bg-zinc-50">
                    <td className="p-4 font-bold text-[#1e3a8a]">{s.name}</td>
                    <td className="p-4">{s.pos}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'Squad' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <HeadingWithWatermark text="Squad" className="mb-12" />
              <h2 className="text-xl font-bold text-[#0a2540] uppercase">2025/2026 SEASON</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {squadData.map((p) => (
                <div key={p.no} className="bg-white shadow-sm overflow-hidden flex flex-col">
                  <img src={p.img} alt={p.player} className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
                  <div className="p-6 bg-[#1e3a8a] text-white flex-grow">
                    <div className="text-2xl font-bold mb-1">#{p.no} {p.player}</div>
                    <p className="text-sm text-zinc-300 mb-4">{p.pos}</p>
                    <Link to={`/player/${p.no}`} className="text-white font-bold uppercase text-sm hover:underline">View profile</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Sports Staff' && (
          <div className="space-y-8">
            <HeadingWithWatermark text="Sports Staff" className="mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {staffData.map((s, i) => (
                <div key={i} className="bg-white shadow-sm overflow-hidden flex flex-col">
                  <img src={s.img} alt={s.name} className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
                  <div className="p-6 bg-[#0a2540] text-white flex-grow">
                    <div className="text-2xl font-bold mb-1">{s.name}</div>
                    <p className="text-sm text-zinc-300 mb-4">{s.pos}</p>
                    <Link to="#" className="text-white font-bold uppercase text-sm hover:underline">View profile</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Medical Staff' && (
          <div className="space-y-8">
            <HeadingWithWatermark text="Medical Staff" className="mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {medicalStaffData.map((s, i) => (
                <div key={i} className="bg-white shadow-sm overflow-hidden flex flex-col">
                  <img src={s.img} alt={s.name} className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
                  <div className="p-6 bg-[#0a2540] text-white flex-grow">
                    <div className="text-2xl font-bold mb-1">{s.name}</div>
                    <p className="text-sm text-zinc-300 mb-4">{s.pos}</p>
                    <Link to="#" className="text-white font-bold uppercase text-sm hover:underline">View profile</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      </div>
      <Footer />
    </div>
  );
}
