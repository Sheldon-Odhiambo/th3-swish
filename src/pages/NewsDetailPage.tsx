import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, LayoutGrid, Ticket, Calendar, ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const newsItems = [
  { 
    id: '1', 
    title: 'MLP Academics host cup winners Bamberg', 
    img: 'https://picsum.photos/seed/news1/1200/600', 
    date: 'March 19, 2026', 
    info: 'TH3 SWISH - Match Report',
    content: (
      <>
        <p className="mb-4">After two away games, the MLP Academics Heidelberg return to their home arena, the SNP dome, for their next two matches. The team from the Neckar River kicks things off in front of their own fans with a home game against BMA 365 Bamberg Baskets on Saturday, March 21st, at 6:30 PM. A few tickets are still available for this game and can be purchased online or at Bahnhofstraße 34/1. All MLP Academics Heidelberg games are streamed live and on demand at Dyn.</p>
        
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">Broad chest and plenty of self-confidence</h2>
        <p className="mb-4">Exactly one month to the day this Saturday will mark the moment when the Upper Franconian team surprisingly defeated the reigning German champions, FC Bayern Basketball, in the semifinals, advancing to the BBL Cup final. The rest is history. Bamberg also won against Berlin and, after reaching the semifinals in 2024 and the final in 2025, finally became cup winners again in 2026.</p>
        
        <p className="mb-4">Since then, the Baskets have been playing with confidence and swagger. With four consecutive wins (Rostock before the cup weekend, Braunschweig, Frankfurt, and Munich after their cup victory), they currently boast the longest winning streak in the league. Their recent 97-93 victory against Munich also marked their second defeat against Bayern Munich in just a few weeks – a feat few teams can accomplish. Even Andi Obst's 31 points couldn't prevent the loss.</p>

        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">Favorite and underdog</h2>
        <p className="mb-4">Things are going well for Bamberg. Their fourth-place standing and a record of 15 wins and nine losses should put the Baskets in a good mood. They are clear favorites, especially since the Heidelberg team has already lost twice to Bamberg this season. They came away empty-handed in both the cup quarterfinal (66-72) and the league game (69-80). Furthermore, on Saturday, the second-best offensive team in the league (89 points per game) will face the worst offensive team (77.4 points per game for Heidelberg).</p>
        
        <p className="mb-4">Nevertheless, it should be an exciting duel, especially on defense. Ejiofor Onu is the defensive anchor for the Baskets, regularly changing his opponents' shots with 2.4 blocks per game. He will face off against Osun Osunniyi, who, with 1.4 blocks per game, is among the top four shot blockers in the BBL, along with Michael Weathers (1.2 blocks).</p>

        <p className="mb-4">Besides Onu, the trio of Ibi Watson, Demarcus Demonia, and Cobe Williams are a key pillar of Bamberg's team. All three players consistently rank among the top three in points, rebounds, and assists, with Watson leading the team in scoring at 16.9 points and leading the second-highest rebounder at 4.7 points per game under head coach Anton Gavel.</p>

        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">Finetti: "Focus on every single training session and every single game"</h2>
        <p className="mb-4">Head coach Carlo Finetti emphasized the focus on the upcoming training sessions and the next game before the match against Bamberg. He explained: "What Bamberg, led by Coach 'Tonno' and his staff, is achieving is outstanding – their cup victory is proof of that. We can't and don't want to look too far ahead. We want to concentrate on each individual training session and each individual game. We're excited to be playing at home in front of our fans for two weeks in a row. We need their support! We want to fight and know that it will be a game where shot selection and zone defense are two of the most important factors. This also depends on how we defend their shooters, because we're playing against one of the best three-point teams in the league."</p>

        <p className="font-bold">Eva Birkelbach<br/>MLP Academics Heidelberg<br/>Media and Communication</p>
      </>
    )
  },
  { id: '2', title: 'Swish Academics lacked offensive firepower against Berlin', img: 'https://picsum.photos/seed/news2/1200/600', content: 'Full story about Berlin game...', date: '2026-03-10', info: 'TH3 SWISH - Match Report' },
  { id: '3', title: 'Swish Academics return from FIBA break', img: 'https://picsum.photos/seed/news3/1200/600', content: 'Full story about FIBA break...', date: '2026-03-05', info: 'TH3 SWISH - Club News' },
  { id: '4', title: 'Swish Ladies sign star point guard', img: 'https://picsum.photos/seed/news4/1200/600', content: 'Full story about signing...', date: '2026-02-28', info: 'TH3 SWISH - Transfer News' },
  { id: '5', title: 'Upcoming charity event for local youth', img: 'https://picsum.photos/seed/news5/1200/600', content: 'Full story about charity event...', date: '2026-02-20', info: 'TH3 SWISH - Community' },
  { id: '6', title: 'Coach announces new defensive strategy', img: 'https://picsum.photos/seed/news6/1200/600', content: 'Full story about strategy...', date: '2026-02-15', info: 'TH3 SWISH - Team News' },
  { id: '7', title: 'New training facility opened', img: 'https://picsum.photos/seed/news7/1200/600', content: 'Full story about facility...', date: '2026-02-10', info: 'TH3 SWISH - Club News' },
  { id: '8', title: 'Youth academy showcase success', img: 'https://picsum.photos/seed/news8/1200/600', content: 'Full story about youth academy...', date: '2026-02-05', info: 'TH3 SWISH - Youth Academy' },
  { id: '9', title: 'Sponsor renewal announced', img: 'https://picsum.photos/seed/news9/1200/600', content: 'Full story about sponsor...', date: '2026-02-01', info: 'TH3 SWISH - Sponsorship' },
];

export default function NewsDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const currentNewsIndex = newsItems.findIndex(n => n.id === id);
  const news = currentNewsIndex !== -1 ? newsItems[currentNewsIndex] : newsItems[0];

  const handlePrev = () => {
    const prevIndex = currentNewsIndex > 0 ? currentNewsIndex - 1 : newsItems.length - 1;
    navigate(`/news/${newsItems[prevIndex].id}`);
  };

  const handleNext = () => {
    const nextIndex = currentNewsIndex < newsItems.length - 1 ? currentNewsIndex + 1 : 0;
    navigate(`/news/${newsItems[nextIndex].id}`);
  };

  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      
      <div className="fixed top-24 right-4 z-50 flex items-center border border-zinc-200 bg-white shadow-md">
        <div className="flex items-center border-r border-zinc-200">
          <button onClick={handlePrev} className="p-4 hover:bg-zinc-100"><ChevronLeft size={20} /></button>
          <Link to="/news" className="p-4 hover:bg-zinc-100"><LayoutGrid size={20} /></Link>
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

      <main className="pt-32 px-4 py-12 max-w-6xl mx-auto">
        <Link to="/news" className="text-[#1e3a8a] font-bold uppercase hover:underline mb-8 block">← Back to News</Link>
        
        <div className="mb-8">
          <p className="text-zinc-500 mb-2">{news.date}</p>
          <h1 className="text-5xl font-bold text-[#1e3a8a] uppercase leading-tight">{news.title}</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="text-zinc-700 text-lg leading-relaxed">{news.content}</div>
          <div>
            <img src={news.img} alt={news.title} className="w-full h-auto object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
