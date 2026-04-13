import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TicketsPage() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <Navbar />
      <main className="pt-32 px-4 py-12 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-[#1e3a8a] uppercase mb-8">MLP Academics Heidelberg</h1>
        
        <section className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Day tickets</h2>
          <Link to="/ticket-shop" className="inline-block bg-[#1e3a8a] text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-900 transition-colors mb-6">
            Click here to go to the ticket shop
          </Link>
          
          <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">Information on day tickets</h3>
          <p className="text-zinc-700 mb-4">
            *Children (up to and including 13 years of age), pupils, students, volunteers in the Federal Voluntary Service (FSJ), trainees, pensioners and severely disabled persons (from 50%) are entitled to a discount.
          </p>
          <p className="text-zinc-700 mb-4">
            The ticket entitles you to round-trip travel on all public transport within the Rhine-Neckar Transport Association (VRN) (2nd class). Please note that the VRN voucher is not visible on a mobile ticket. Please use the Print@Home ticket. The VRN voucher is personalized during booking and cannot be re-personalized afterwards.
          </p>
          <p className="text-zinc-700 mb-4">All prices include VAT & VRN.</p>
          <p className="text-zinc-700 mb-4">Tickets for wheelchair users are available upon request via email to: <a href="mailto:ticketing@mlp-academics.de" className="text-blue-600 hover:underline">ticketing@mlp-academics.de</a></p>
          <p className="text-zinc-700 mb-4">In the event of a change of time or location to a match, there is no entitlement to a refund of the ticket price. The same applies in the event of a match being abandoned.</p>
          <p className="text-zinc-700 mb-4">For inquiries regarding VIP tickets for our Business Club, our ticketing team is happy to assist you via email at <a href="mailto:ticketing@mlp-academics.de" className="text-blue-600 hover:underline">ticketing@mlp-academics.de</a> !</p>
          <p className="text-zinc-700 mb-4">Please observe the house rules of the SNP dome Heidelberg.</p>
          <p className="text-zinc-700">If you have any questions, please contact our ticketing team at <a href="mailto:ticketing@mlp-academics.de" className="text-blue-600 hover:underline">ticketing@mlp-academics.de</a> .</p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">INFORMATION ABOUT PRINT@HOME TICKETS</h2>
          <p className="text-zinc-700 mb-4 font-bold">Important information – you will receive an email confirmation when purchasing online tickets:</p>
          <ul className="list-disc list-inside text-zinc-700 mb-4 space-y-2">
            <li>Email confirmation of purchase with Print@Home or Mobile Ticket</li>
            <li>(Whether DIN A4 printout or mobile ticket – the layout adjusts automatically. If the ticket is opened on a PC/laptop, the Print@Home ticket is ready for printing. If the ticket link on the order confirmation is opened with a smartphone, the Mobile Ticket is displayed.)</li>
            <li>The actual online ticket (as a printout or mobile ticket) must be shown at the entrance.</li>
            <li>Please note that the VRN ticket is not visible on a mobile ticket. Please use the Print@Home ticket. The VRN ticket is personalized during booking and cannot be re-personalized afterwards.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">Our ticket outlets</h2>
          <p className="text-zinc-700">MLP Academics Heidelberg office,<br />Bahnhofstraße 34/1,<br />69115 Heidelberg</p>
          <p className="text-zinc-700 mt-2">Opening hours: (usually) Tuesday – Friday 10:00 – 16:00</p>
          <p className="text-zinc-700">Telephone: +49 (6221) 739080623</p>
          
          <h3 className="text-xl font-bold text-[#1e3a8a] mt-6 mb-2">Box office</h3>
          <p className="text-zinc-700">Tickets available at the box office – opening time is always 1.5 hours before the start of the game.</p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">GROUP PRICING</h2>
            <p className="text-zinc-700">For inquiries regarding group prices (10 people or more), please contact us directly via email at: <a href="mailto:ticketing@mlp-academics.de" className="text-blue-600 hover:underline">ticketing@mlp-academics.de</a></p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">VIP tickets</h2>
            <p className="text-zinc-700">For inquiries regarding our Business Club, please contact us directly via email at: <a href="mailto:ticketing@mlp-academics.de" className="text-blue-600 hover:underline">ticketing@mlp-academics.de</a></p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-sm mb-8">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">FURTHER QUESTIONS?</h2>
          <p className="text-zinc-700">Then take a look at our FAQs or send us an email to <a href="mailto:ticketing@mlp-academics.de" className="text-blue-600 hover:underline">ticketing@mlp-academics.de</a></p>
        </section>

        <section className="bg-white p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold text-[#1e3a8a] mb-4">NOTES FOR GUEST FANS:</h2>
          <p className="text-zinc-700 font-bold mb-2">House rules regarding items brought onto the premises:</p>
          <ol className="list-decimal list-inside text-zinc-700 mb-4 space-y-2">
            <li>Flags with a pole length of no more than 2.0 m and a diameter of no more than 3.0 cm are permitted.</li>
            <li>"Fence flags" may also be displayed, provided there is sufficient space.</li>
            <li>Drums: maximum 3 (open on one side and visible inside), in block o1.</li>
            <li>Double-sided banners (pole length of no more than 2.0 m and a diameter of no more than 3.0 cm)</li>
          </ol>
          <p className="text-zinc-700 mb-4">5. Megaphones, all battery- and gas-powered devices, as well as confetti, paper scraps, etc. are prohibited. Further prohibitions (items/objects/clothing)</p>
          <p className="text-zinc-700">Carrying, possessing, or distributing the following items is prohibited: unconstitutional, racist, xenophobic, extremist, discriminatory, right-wing or left-wing radical propaganda material, even if it is not criminally relevant; this may also include wearing clothing or displaying emblems or symbols on or in clothing. Violations will result in a local ban from the premises and may lead to a citation for a regulatory offense.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
