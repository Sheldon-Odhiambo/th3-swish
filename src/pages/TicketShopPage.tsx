import TicketNavbar from '../components/TicketNavbar';
import Footer from '../components/Footer';

export default function TicketShopPage() {
  const events = [
    { title: 'MLP Academics Heidelberg vs MHP RIESEN LUDWIGSBURG', date: '18 APR. 2026', time: '18:30', location: 'SNP dome, Heidelberg' },
    { title: 'MLP Academics Heidelberg vs SYNTAINICS MBC', date: '4 MAY 2026', time: '20:00', location: 'SNP dome, Heidelberg' },
    { title: 'MLP Academics Heidelberg vs RASTA VECHTA', date: '10 MAY 2026', time: '16:30', location: 'SNP dome, Heidelberg' },
  ];

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 font-sans">
      <TicketNavbar />
      <main className="px-4 py-12 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Events</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
              <div className="text-sm font-bold text-zinc-500 mb-4">{event.date}</div>
              <h3 className="font-bold text-lg mb-4">{event.title}</h3>
              <p className="text-sm text-zinc-600 mb-2">Time: {event.time}</p>
              <p className="text-sm text-zinc-600 mb-6">Location: {event.location}</p>
              <button className="w-full bg-[#1e3a8a] text-white py-2 font-bold hover:bg-blue-900 transition-colors">
                Tickets
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
