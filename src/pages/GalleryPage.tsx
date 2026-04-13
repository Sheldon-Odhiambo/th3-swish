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

const allImages = [
  ...Array.from({ length: 12 }, (_, i) => `https://picsum.photos/seed/all${i}/600/400`),
  ...Array.from({ length: 4 }, (_, i) => `https://picsum.photos/seed/game1${i}/600/400`),
  ...Array.from({ length: 4 }, (_, i) => `https://picsum.photos/seed/game2${i}/600/400`),
  ...Array.from({ length: 4 }, (_, i) => `https://picsum.photos/seed/train${i}/600/400`),
];

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <SubNavbar activeItem="Image gallery" navItems={fanZoneNavItems} />
      <main className="max-w-7xl mx-auto px-4 py-12 pt-48">
        <HeadingWithWatermark text="Image gallery" className="mb-8" />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allImages.map((src, i) => (
            <div key={i} className="aspect-video overflow-hidden">
              <img 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
