import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNavbar';
import HeadingWithWatermark from '../components/HeadingWithWatermark';
import { Calendar } from 'lucide-react';

export default function SchedulePage() {
  const schedule = [
    { league: 'League', date: 'Fri 20.02. | 6:00 pm', location: 'Not specified', team1: 'TH3 Swish', score: '60 : 49', team2: 'Lady Titans', logo1: 'https://picsum.photos/seed/swish/50/50', logo2: 'https://picsum.photos/seed/titans/50/50' },
    { league: 'League', date: 'Sun 15.03. | Not specified', location: 'Nyayo', team1: 'TH3 Swish', score: '71 : 57', team2: 'USIU', logo1: 'https://picsum.photos/seed/swish/50/50', logo2: 'https://picsum.photos/seed/usiu/50/50' },
    { league: 'League', date: 'Fri 20.03. | 6:00 pm', location: 'Nyayo', team1: 'TH3 Swish', score: '50 : 54', team2: 'Stanbic Aces', logo1: 'https://picsum.photos/seed/swish/50/50', logo2: 'https://picsum.photos/seed/stanbic/50/50' },
    { league: 'League', date: 'Sun 22.03. | 4:00 pm', location: 'Africa Nazarene University', team1: 'TH3 Swish', score: '70 : 73', team2: 'Zetech', logo1: 'https://picsum.photos/seed/swish/50/50', logo2: 'https://picsum.photos/seed/zetech/50/50' },
    { league: 'League', date: 'Not specified', location: 'Not specified', team1: 'TH3 Swish', score: '62 : 61', team2: 'Strathmore Swords', logo1: 'https://picsum.photos/seed/swish/50/50', logo2: 'https://picsum.photos/seed/strathmore/50/50' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f3ef] text-zinc-900 font-sans">
      <Navbar />
      <SubNavbar 
        activeItem="Schedule" 
        navItems={[
          { label: 'Schedule', href: '/schedule' },
          { label: 'Table', href: '/table' },
          { label: 'Live at Dyn', href: '#' },
          { label: 'Season archive', href: '#' }
        ]}
      />

      <main className="px-4 py-12">
        <div className="max-w-[1600px] mx-auto">
          <p className="text-zinc-500 mb-2">TH3 Swish</p>
          <HeadingWithWatermark text="SCHEDULE" className="mb-12 text-6xl" />
          
          <div className="flex justify-between items-center mb-6">
            <button className="bg-[#a89f92] text-white px-4 py-2 flex items-center gap-2">
              Filter games <span className="text-xs">▼</span>
            </button>
            <div className="flex gap-4 text-sm text-[#1e3a8a] font-bold">
              <span className="flex items-center gap-1"><Calendar size={16} /> Add schedule to calendar</span>
              <span className="flex items-center gap-1"><Calendar size={16} /> Add to Android</span>
            </div>
          </div>

          <div className="bg-[#e9e5e0]">
            {schedule.map((game, i) => (
              <div key={i} className={`grid grid-cols-[200px_1fr_auto_1fr_auto] items-center py-6 px-4 gap-4 ${i % 2 !== 0 ? 'bg-[#e0dbd6]' : ''}`}>
                <div className="text-sm">
                  <div className="text-zinc-500">{game.league}</div>
                  <div>{game.date}</div>
                  <div className="text-zinc-500">{game.location}</div>
                </div>
                <div className="flex items-center justify-end gap-3 font-bold">
                  {game.team1}
                  <img src={game.logo1} alt={game.team1} className="w-10 h-10" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-white px-6 py-2 font-bold text-xl shadow-sm">
                  {game.score}
                </div>
                <div className="flex items-center justify-start gap-3 font-bold">
                  <img src={game.logo2} alt={game.team2} className="w-10 h-10" referrerPolicy="no-referrer" />
                  {game.team2}
                </div>
                <div className="flex justify-end gap-2">
                  <img src={game.logo1} alt={game.team1} className="w-8 h-8" referrerPolicy="no-referrer" />
                  <img src={game.logo2} alt={game.team2} className="w-8 h-8" referrerPolicy="no-referrer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
