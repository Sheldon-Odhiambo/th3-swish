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

export default function EntertainmentPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />
      <SubNavbar activeItem="Entertainment" navItems={fanZoneNavItems} />
      <main className="max-w-7xl mx-auto px-4 py-12 pt-48">
        <HeadingWithWatermark text="Entertainment" className="mb-8" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Mascot', seed: 'mascot' },
            { title: 'T-Shirt Winners', seed: 'tshirt' },
            { title: 'Our DJ', seed: 'dj' },
          ].map((item) => (
            <div key={item.title} className="bg-white overflow-hidden shadow-lg">
              <img 
                src={`https://picsum.photos/seed/${item.seed}/600/400`} 
                alt={item.title} 
                className="w-full h-48 object-cover" 
                referrerPolicy="no-referrer" 
              />
              <div className="p-4">
                <h3 className="text-xl font-bold text-[#1e3a8a]">{item.title}</h3>
                <p className="text-zinc-600 mt-2">More information about our {item.title.toLowerCase()}.</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
