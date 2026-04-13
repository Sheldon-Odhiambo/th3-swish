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

export default function FanZonePage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />
      <SubNavbar activeItem="Fan zone" navItems={fanZoneNavItems} />
      <main className="px-4 py-12 pt-64">
        <HeadingWithWatermark text="Fan Zone" className="mb-20" />
        <div className="text-center">
            <p>Welcome to the Fan Zone!</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
