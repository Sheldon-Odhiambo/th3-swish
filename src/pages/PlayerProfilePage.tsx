import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LayoutGrid, Ticket, Calendar, ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const players = [
  { id: '1', name: 'DJ Horne', no: 0, pos: 'G', born: 'October 31, 2000', size: '1.85 m', weight: '79 kg', nat: 'USA', img: 'https://picsum.photos/seed/player1/400/500' },
  { id: '2', name: 'Noah Koch', no: 1, pos: 'G', born: 'March 22, 2007', size: '1.85 m', weight: '87 kg', nat: 'GER', img: 'https://picsum.photos/seed/player2/400/500' },
  { id: '3', name: 'John Doe', no: 10, pos: 'F', born: 'January 1, 1999', size: '2.00 m', weight: '95 kg', nat: 'USA', img: 'https://picsum.photos/seed/player3/400/500' },
];

export default function PlayerProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentPlayerIndex = players.findIndex(p => p.id === id);
  const player = currentPlayerIndex !== -1 ? players[currentPlayerIndex] : players[0];

  const handlePrev = () => {
    const prevIndex = currentPlayerIndex > 0 ? currentPlayerIndex - 1 : players.length - 1;
    navigate(`/player/${players[prevIndex].id}`);
  };

  const handleNext = () => {
    const nextIndex = currentPlayerIndex < players.length - 1 ? currentPlayerIndex + 1 : 0;
    navigate(`/player/${players[nextIndex].id}`);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      
      <div className="fixed top-24 right-4 z-50 flex items-center border border-zinc-200 bg-white shadow-md">
        <div className="flex items-center border-r border-zinc-200">
          <button onClick={handlePrev} className="p-4 hover:bg-zinc-100"><ChevronLeft size={20} /></button>
          <Link to="/team" className="p-4 hover:bg-zinc-100"><LayoutGrid size={20} /></Link>
          <button onClick={handleNext} className="p-4 hover:bg-zinc-100"><ChevronRight size={20} /></button>
        </div>
        <div className="flex">
          <a href="#" className="flex flex-col items-center justify-center p-4 hover:bg-zinc-100 transition-colors w-24 border-l border-zinc-200">
            <Ticket size={20} />
            <span className="text-[10px] font-bold uppercase mt-1">Tickets</span>
          </a>
          <Link to="/schedule" className="flex flex-col items-center justify-center p-4 hover:bg-zinc-100 transition-colors w-24 border-l border-zinc-200">
            <Calendar size={20} />
            <span className="text-[10px] font-bold uppercase mt-1">Schedule</span>
          </Link>
          <a href="#" className="flex flex-col items-center justify-center p-4 hover:bg-zinc-100 transition-colors w-24 border-l border-zinc-200">
            <ShoppingBag size={20} />
            <span className="text-[10px] font-bold uppercase mt-1">Fan Shop</span>
          </a>
        </div>
      </div>

      <main className="pt-32 px-4 py-12">
        <Link to="/team" className="text-[#1e3a8a] font-bold uppercase hover:underline mb-8 block">← Back to Squad</Link>
        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 shadow-sm">
          <img src={player.img} alt={player.name} className="w-full h-auto" referrerPolicy="no-referrer" />
          <div className="space-y-4">
            <div className="text-8xl font-black text-zinc-200">{player.no}</div>
            <h1 className="text-4xl font-bold text-[#1e3a8a] uppercase">{player.name}</h1>
            <p className="text-xl text-zinc-500 font-bold">{player.pos}</p>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-zinc-100">
              <div>
                <p className="text-zinc-500 uppercase text-xs">Born</p>
                <p className="font-bold">{player.born}</p>
              </div>
              <div>
                <p className="text-zinc-500 uppercase text-xs">Size</p>
                <p className="font-bold">{player.size}</p>
              </div>
              <div>
                <p className="text-zinc-500 uppercase text-xs">Weight</p>
                <p className="font-bold">{player.weight}</p>
              </div>
              <div>
                <p className="text-zinc-500 uppercase text-xs">Nationality</p>
                <p className="font-bold">{player.nat}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
