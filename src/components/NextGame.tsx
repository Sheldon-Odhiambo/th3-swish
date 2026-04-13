import { useState } from 'react';
import { Tickets, CalendarDays, Store, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NextGame({ fixed = false }: { fixed?: boolean }) {
  const [showMore, setShowMore] = useState(false);

  const otherGames = [
    { league: 'Bundesliga', date: 'Mon 04.05. | 8:00 pm', team1: 'https://picsum.photos/seed/logo1/100/100', team2: 'https://picsum.photos/seed/logo4/100/100' },
    { league: 'Bundesliga', date: 'Thu 07.05. | 8:00 pm', team1: 'https://picsum.photos/seed/logo2/100/100', team2: 'https://picsum.photos/seed/logo5/100/100' },
    { league: 'Bundesliga', date: 'Sun 10.05. | 4:30 pm', team1: 'https://picsum.photos/seed/logo1/100/100', team2: 'https://picsum.photos/seed/logo6/100/100' },
  ];

  return (
    <div className={`bg-white text-[#1e3a8a] border-b border-zinc-200 w-full md:w-3/4 mx-auto ${fixed ? 'fixed top-20 left-0 md:left-[12.5%] z-40' : ''}`}>
      <div className="flex flex-col md:flex-row items-center">
        <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-zinc-200 w-full md:w-auto text-center md:text-left">
          <h3 className="text-sm font-bold uppercase">Next Game</h3>
          <p className="text-xs text-zinc-600">Sat 21.03. | 6:30 pm</p>
        </div>
        <div className="flex-1 flex items-center justify-center gap-4 md:gap-8 p-4 md:p-6 w-full">
          <img src="https://picsum.photos/seed/logo1/100/100" alt="Team 1" className="w-10 h-10 md:w-12 md:h-12 object-contain" referrerPolicy="no-referrer" />
          <span className="font-bold">VS</span>
          <img src="https://picsum.photos/seed/logo2/100/100" alt="Team 2" className="w-10 h-10 md:w-12 md:h-12 object-contain" referrerPolicy="no-referrer" />
          <img src="https://picsum.photos/seed/logo3/100/100" alt="League" className="w-6 h-6 md:w-8 md:h-8 object-contain ml-2 md:ml-4" referrerPolicy="no-referrer" />
        </div>
        <div className="relative border-t md:border-t-0 md:border-l border-zinc-200 w-full md:w-auto">
          <button 
            onClick={() => setShowMore(!showMore)}
            className="flex items-center justify-center md:justify-start gap-2 p-4 md:p-6 text-xs font-bold uppercase hover:bg-zinc-100 transition-colors w-full md:w-auto"
          >
            {showMore ? 'Hide' : 'Show'} games {showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          {showMore && (
            <div className="absolute top-full right-0 bg-white border border-zinc-200 shadow-lg w-full md:w-[400px] z-50 max-h-[300px] overflow-y-auto">
              {otherGames.map((game, i) => (
                <div key={i} className="flex items-center justify-between p-4 border-b border-zinc-100 hover:bg-zinc-50">
                  <div className="text-xs">
                    <p className="font-bold">{game.league}</p>
                    <p className="text-zinc-500">{game.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img src={game.team1} alt="Team 1" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
                    <span className="font-bold text-sm">VS</span>
                    <img src={game.team2} alt="Team 2" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex border-t md:border-t-0 md:border-l border-zinc-200 bg-red-600 text-white w-full md:w-auto">
          {[
            { icon: Tickets, label: 'Tickets', href: '/tickets' },
            { icon: CalendarDays, label: 'Schedule', href: '/schedule' },
            { icon: Store, label: 'Fan Shop', href: '/shop' },
          ].map((item) => (
            <Link key={item.label} to={item.href} className="flex flex-col items-center justify-center p-4 md:p-6 hover:bg-red-700 transition-colors flex-1 md:w-24">
              <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
                <item.icon size={20} md:size={24} />
              </div>
              <span className="text-[9px] md:text-[10px] font-bold uppercase mt-1 md:mt-2">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
