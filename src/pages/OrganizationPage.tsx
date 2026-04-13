import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNavbar';
import HeadingWithWatermark from '../components/HeadingWithWatermark';

export default function OrganizationPage() {
  const [activeItem, setActiveItem] = useState('Contact');

  const navItems = [
    { label: 'Office', href: '#', onClick: () => setActiveItem('Office') },
    { label: 'Employees', href: '#', onClick: () => setActiveItem('Employees') },
    { label: 'About Us', href: '#', onClick: () => setActiveItem('About Us') },
    { label: 'Jobs', href: '#', onClick: () => setActiveItem('Jobs') },
    { label: 'Contact', href: '#', onClick: () => setActiveItem('Contact') },
    { label: 'Academics go School', href: '#', onClick: () => setActiveItem('Academics go School') },
  ];

  const renderContent = () => {
    switch (activeItem) {
      case 'About Us':
        return (
          <div className="max-w-5xl mx-auto">
            <HeadingWithWatermark text="ABOUT US" className="mb-20" />
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">HISTORY</h2>
            <p className="text-zinc-600 mb-6">Founded in 1899 as ASC Strasbourg and, due to its special history, more significantly impacted by two world wars than other clubs, USC Heidelberg looks back on a long tradition.</p>
            <p className="text-zinc-600 mb-6">The basketball team in Heidelberg, then a stronghold of basketball, enjoyed great success from 1957 until their double championship in 1977, winning nine German titles. However, changing circumstances led to a downward spiral, culminating in a fall to the regional league.</p>
            <p className="text-zinc-600 mb-12">The journey began in 1994 with promotion to the 2nd BBL, followed in 2007 by qualification for the Pro A and finally by promotion to the easyCredit Basketball Bundesliga in 2021.</p>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">1950 TO 1977: HIGH POINTS AND NINE CHAMPIONSHIP TITLES</h2>
            <p className="text-zinc-600">The basketball department of USC Heidelberg was founded in 1952. In the late 1950s, the men's team became very successful, winning their first championship title in 1957. They defended the title in 1958 and won six consecutive championships from 1957 to 1962, significantly supported by national team players such as Oskar Roth and Kurt Siebenhaar, as well as coach Anton Kartak. They won the title again in 1966. In 1972/73, USC Heidelberg won their eighth championship title. The 1976/77 season was a highlight, culminating in their ninth league title and the German cup victory. They successfully defended their cup title the following season.</p>
          </div>
        );
      case 'Employees':
        const employees = [
          { name: 'Vera Riedel', role: 'Ticketing', img: 'https://picsum.photos/seed/vera/300/400' },
          { name: 'Marilena Kauth', role: 'Ticketing', img: 'https://picsum.photos/seed/marilena/300/400' },
          { name: 'Eva Birkelbach', role: 'Head of Media and Communications', img: 'https://picsum.photos/seed/eva/300/400' },
          { name: 'Amanda Dreher', role: 'Social Media Manager', img: 'https://picsum.photos/seed/amanda/300/400' },
        ];
        return (
          <div className="max-w-7xl mx-auto">
            <HeadingWithWatermark text="EMPLOYEES" className="mb-20" />
            <div className="grid grid-cols-4 gap-8">
              {employees.map((emp, i) => (
                <div key={i} className="bg-white shadow-md">
                  <img src={emp.img} alt={emp.name} className="w-full h-80 object-cover" referrerPolicy="no-referrer" />
                  <div className="p-6 bg-[#1e3a8a] text-white">
                    <h3 className="text-lg font-bold">{emp.name}</h3>
                    <p className="text-sm mb-4">{emp.role}</p>
                    <a href="#" className="text-sm font-bold underline">View profile</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'Contact':
      default:
        return (
          <div className="max-w-5xl mx-auto">
            <HeadingWithWatermark text="CONTACT" className="mb-20" />
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">MLP ACADEMICS HEIDELBERG</h2>
              <p className="text-zinc-600">USC Heidelberg Spielbetrieb GmbH</p>
              <p className="text-zinc-600">Bahnhofstraße 34/1</p>
              <p className="text-zinc-600">69115 Heidelberg</p>
              <p className="text-zinc-600 mt-4">Telephone: +49 (6221) 739080623</p>
              <p className="text-zinc-600">Fax: +49 (6221) 739080629</p>
              <p className="text-zinc-600">Email: <a href="mailto:info@mlp-academics.de" className="text-[#1e3a8a] underline">info@mlp-academics.de</a></p>
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-6">CONTACT FORM</h2>
            <form className="grid grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-bold text-zinc-700 mb-2">name *</label>
                <input type="text" className="w-full border border-zinc-300 p-2" placeholder="First name" />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-bold text-zinc-700 mb-2">&nbsp;</label>
                <input type="text" className="w-full border border-zinc-300 p-2" placeholder="Last name" />
              </div>
              <div className="col-span-2">
                <label className="block text-sm font-bold text-zinc-700 mb-2">e-mail *</label>
                <input type="email" className="w-full border border-zinc-300 p-2" />
              </div>
            </form>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />
      <SubNavbar activeItem={activeItem} navItems={navItems} title="Organization" />
      <main className="px-4 py-12 pt-64">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

