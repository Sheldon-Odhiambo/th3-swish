import { Link } from 'react-router-dom';

export default function ScheduleAndTable() {
  const schedule = [
    { date: 'Sun 15.03. 18:00', team1: 'TH3 Swish', score: '71 : 57', team2: 'USIU' },
    { date: 'Fri 20.03. 18:00', team1: 'TH3 Swish', score: '50 : 54', team2: 'Stanbic Aces' },
    { date: 'Sun 22.03. 16:00', team1: 'TH3 Swish', score: '70 : 73', team2: 'Zetech' },
  ];

  const table = [
    { pos: 1, team: 'Equity Hawks', g: 5, s: 4, n: 1, pkt: '9' },
    { pos: 2, team: 'Stanbic Aces', g: 5, s: 4, n: 1, pkt: '9' },
    { pos: 3, team: 'KPA', g: 4, s: 4, n: 0, pkt: '8' },
    { pos: 4, team: 'TH3 Swish', g: 5, s: 2, n: 3, pkt: '7', highlight: true },
    { pos: 5, team: 'Strathmore Swords', g: 5, s: 2, n: 3, pkt: '7' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12 py-12">
      {/* Schedule */}
      <section>
        <h2 className="text-2xl font-bold text-[#1e3a8a] uppercase mb-6">Schedule & Results</h2>
        <div className="border border-zinc-200 rounded-lg p-6">
          {schedule.map((game, i) => (
            <div key={i} className={`flex items-center justify-between py-4 ${i !== schedule.length - 1 ? 'border-b border-zinc-200' : ''}`}>
              <div className="text-xs text-zinc-600 w-24">{game.date}</div>
              <div className="flex items-center gap-2 flex-1 justify-center">
                <div className="w-8 h-8 bg-zinc-200 rounded-full" />
                <span className="font-bold text-sm text-[#1e3a8a]">{game.score}</span>
                <div className="w-8 h-8 bg-zinc-200 rounded-full" />
              </div>
            </div>
          ))}
          <Link to="/schedule" className="w-full mt-6 bg-red-600 text-white py-3 font-bold uppercase text-sm hover:bg-red-700 text-center block">View schedule & results</Link>
        </div>
      </section>

      {/* Table */}
      <section>
        <h2 className="text-2xl font-bold text-[#1e3a8a] uppercase mb-6">Table</h2>
        <div className="border border-zinc-200 rounded-lg p-6 bg-white overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500 uppercase text-xs">
                <th className="p-2">#</th>
                <th className="p-2">Team</th>
                <th className="p-2">G</th>
                <th className="p-2">S</th>
                <th className="p-2">N</th>
                <th className="p-2">Pkt</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row, i) => (
                <tr key={i} className={`border-b border-zinc-100 ${row.highlight ? 'bg-red-100' : ''}`}>
                  <td className="p-2 text-zinc-500">{row.pos}</td>
                  <td className="p-2 font-bold text-[#1e3a8a]">{row.team}</td>
                  <td className="p-2">{row.g}</td>
                  <td className="p-2">{row.s}</td>
                  <td className="p-2">{row.n}</td>
                  <td className="p-2 font-bold text-zinc-600">{row.pkt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Link to="/table" className="w-full mt-6 bg-red-600 text-white py-3 font-bold uppercase text-sm hover:bg-red-700 text-center block">Show table</Link>
        </div>
      </section>
    </div>
  );
}
