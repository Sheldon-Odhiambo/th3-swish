import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SubNavbar from '../components/SubNavbar';
import HeadingWithWatermark from '../components/HeadingWithWatermark';

export default function TablePage() {
  const table: { pos: number; team: string; g: number; s: number; n: number; pkt: string; highlight?: boolean }[] = [
    { pos: 1, team: 'Equity Hawks', g: 5, s: 4, n: 1, pkt: '9' },
    { pos: 2, team: 'Stanbic Aces', g: 5, s: 4, n: 1, pkt: '9' },
    { pos: 3, team: 'KPA', g: 4, s: 4, n: 0, pkt: '8' },
    { pos: 4, team: 'TH3 Swish', g: 5, s: 2, n: 3, pkt: '7' },
    { pos: 5, team: 'Strathmore Swords', g: 5, s: 2, n: 3, pkt: '7' },
    { pos: 6, team: 'Zetech Sparks', g: 3, s: 3, n: 0, pkt: '6' },
    { pos: 7, team: 'UON Dynamites', g: 5, s: 1, n: 4, pkt: '6' },
    { pos: 8, team: 'USIU Flames', g: 3, s: 2, n: 1, pkt: '5' },
    { pos: 9, team: 'Lady Titans', g: 4, s: 1, n: 3, pkt: '5' },
    { pos: 10, team: 'Eldonets', g: 4, s: 1, n: 3, pkt: '5' },
    { pos: 11, team: 'Dream Girls', g: 4, s: 1, n: 3, pkt: '5' },
    { pos: 12, team: 'Safe Spaces', g: 3, s: 0, n: 3, pkt: '3' },
  ];

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />
      <SubNavbar 
        activeItem="Table" 
        navItems={[
          { label: 'Schedule', href: '/schedule' },
          { label: 'Table', href: '/table' },
          { label: 'Live portal', href: '#' },
          { label: 'Season archive', href: '#' }
        ]}
      />
      <main className="px-4 py-12 pt-64">
        <HeadingWithWatermark text="Table" className="mb-20" />
        <div className="border border-zinc-200 rounded-lg p-6 bg-white overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500 uppercase text-xs">
                <th className="p-4">#</th>
                <th className="p-4">Team</th>
                <th className="p-4">G</th>
                <th className="p-4">S</th>
                <th className="p-4">N</th>
                <th className="p-4">Pkt</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, i) => (
                <tr key={i} className={`border-b border-zinc-100 ${row.highlight ? 'bg-red-100' : ''}`}>
                  <td className="p-4 text-zinc-500">{row.pos}</td>
                  <td className="p-4 font-bold text-[#1e3a8a]">{row.team}</td>
                  <td className="p-4">{row.g}</td>
                  <td className="p-4">{row.s}</td>
                  <td className="p-4">{row.n}</td>
                  <td className="p-4 font-bold text-zinc-600">{row.pkt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
      <Footer />
    </div>
  );
}
