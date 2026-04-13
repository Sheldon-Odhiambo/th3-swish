import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNavbar';
import HeadingWithWatermark from '../components/HeadingWithWatermark';

export default function PartnerPage() {
  const navItems = [
    { label: 'All partners', href: '/partner' },
    { label: 'Become a partner', href: '#' },
  ];

  const sponsors = [
    { name: 'MLP', description: 'A leading financial services provider, supporting our team and community initiatives.' },
    { name: 'SNP', description: 'Our arena partner, providing state-of-the-art facilities for our home games.' },
    { name: 'BMA 365', description: 'Supporting our athletic performance with specialized nutrition and recovery solutions.' },
    { name: 'Dyn', description: 'Our official streaming partner, bringing every game live to our fans.' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />
      <SubNavbar activeItem="All partners" navItems={navItems} />
      <main className="px-4 py-12 pt-64 max-w-5xl mx-auto">
        <HeadingWithWatermark text="Our Partners" className="mb-20" />
        <div className="grid md:grid-cols-2 gap-8">
          {sponsors.map((sponsor) => (
            <div key={sponsor.name} className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
              <h3 className="text-2xl font-bold text-[#1e3a8a] mb-4">{sponsor.name}</h3>
              <p className="text-zinc-600 leading-relaxed">{sponsor.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
