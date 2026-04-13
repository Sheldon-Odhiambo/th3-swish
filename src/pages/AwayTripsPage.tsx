import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNavbar';
import HeadingWithWatermark from '../components/HeadingWithWatermark';

const fanZoneNavItems = [
  { label: 'Fan zone', href: '/fanzone' },
  { label: 'Away trips', href: '/away-trips' },
  { label: 'Entertainment', href: '/entertainment' },
  { label: 'Kids Club', href: '/kids-club' },
  { label: 'Image gallery', href: '/gallery' },
  { label: 'Our fan clubs', href: '/fan-clubs' },
];

export default function AwayTripsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />
      <SubNavbar activeItem="Away trips" navItems={fanZoneNavItems} />
      <main className="max-w-7xl mx-auto px-4 py-12 pt-48">
        <HeadingWithWatermark text="Away trips" className="mb-8" />
        
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">BE THERE AND SUPPORT OUR TEAM - EVEN AWAY!</h2>
        <p className="text-zinc-600 mb-12">On this page, we regularly post information about upcoming away games. Follow us on social media or download our app so you don't miss any away matches!</p>
        
        <div className="relative w-full h-64 overflow-hidden">
          <img 
            src="https://picsum.photos/seed/awaytrips/1200/400" 
            alt="Away trips banner" 
            className="w-full h-full object-cover" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white">
            <h3 className="text-4xl font-bold uppercase">AUSWÄRTSFAHRTEN</h3>
            <p className="text-xl">- Infos & Termine -</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
