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
      "/assets/Gall12.jpeg",
      "/assets/Gall2.jpeg",
      "/assets/Gall3.jpeg",
      "/assets/Dee1.jpeg",
      "/assets/Gall5.jpeg",
      "/assets/Gall6.jpeg",
      "/assets/maker.jpeg",
      "/assets/Gall9.jpeg",
      "/assets/Gall10.jpeg",
      "/assets/Gall1.jpeg",
      "/assets/beyonce.jpeg",
      "/assets/caro.jpeg",
      "/assets/conso.jpeg",
      "/assets/Lasty.jpeg",
      "/assets/team.jpeg",
      "/assets/vero.jpeg",
      "/assets/Team2.jpeg",
      "/assets/Gall8.jpeg",
      "/assets/Lasty1.jpeg",
      "/assets/Gall4.jpeg",

      







                  
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
