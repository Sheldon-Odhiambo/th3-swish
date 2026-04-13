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

export default function FanClubsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />
      <SubNavbar activeItem="Our fan clubs" navItems={fanZoneNavItems} />
      <main className="max-w-7xl mx-auto px-4 py-12 pt-48">
        <HeadingWithWatermark text="Our fan clubs" className="mb-8" />
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">The Swish Fan Club</h2>
          <p className="text-zinc-600 text-lg">
            Welcome to the Swish Fan Club, the beating heart of our team's support! We are proud to bring together fans from all walks of life, with a special shout-out to our passionate supporters all the way from Nakuru. Your energy fuels us on and off the court.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://picsum.photos/seed/swish1/600/400" alt="Swish Fan Club" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://picsum.photos/seed/nakuru/600/400" alt="Nakuru Fans" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
