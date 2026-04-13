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

export default function KidsClubPage() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />
      <SubNavbar activeItem="Kids Club" navItems={fanZoneNavItems} />
      <main className="max-w-7xl mx-auto px-4 py-12 pt-48">
        <HeadingWithWatermark text="Kids Club" className="mb-8" />
        
        <div className="flex flex-col md:flex-row gap-8 items-center mb-16">
          <div className="flex-1">
            <p className="text-zinc-600 mb-4">To give young basketball fans in the Kurpfalz region an even closer connection to the professionals on the court, fun, new impressions and new friendships, the MLP Academics founded the KidsClub.</p>
            <p className="text-zinc-600 mb-4">Children up to 14 years old can participate.</p>
            <p className="font-bold text-zinc-900">Price: €39.00 per year.</p>
          </div>
          <div className="flex-1">
            <img src="https://picsum.photos/seed/kidsclub/400/400" alt="Kids Club mascot" className="w-full" referrerPolicy="no-referrer" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-8">The following items are included in your membership:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'YOUR STARTING SET',
              items: ['Your KidsClub Shirt', 'Your KidsClub fan scarf', 'Your personal KidsClub ID card']
            },
            {
              title: 'YOUR BENEFITS',
              items: ['Meet the players up close at the KidsClub events', 'Application to be a child escort', 'Make new friends']
            },
            {
              title: 'YOUR CLUB EVENTS',
              items: ['KidsClub basketball training with the pros', 'Free tickets for a home game for you and a companion', 'Meet & Greet event with the players']
            }
          ].map((section) => (
            <div key={section.title} className="bg-white p-6 border border-zinc-100">
              <h3 className="text-lg font-bold text-[#1e3a8a] mb-4 uppercase">{section.title}</h3>
              <ul className="space-y-2 text-zinc-600">
                {section.items.map((item) => (
                  <li key={item} className="flex items-start">
                    <span className="mr-2 text-[#1e3a8a]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
