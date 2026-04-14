import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import NextGame from '../components/NextGame';
import Footer from '../components/Footer';
import ScheduleAndTable from '../components/ScheduleAndTable';
import ImageGalleries from '../components/ImageGalleries';
import HeadingWithWatermark from '../components/HeadingWithWatermark';

export default function HomePage() {
  const newsItems = [
    { id: '1', title: 'Swish Academics travel to Trier to face the newly', img: '/assets/Gall3.jpeg', date: '2026-03-15', info: 'TH3 SWISH - Match Report' },
    { id: '2', title: 'Swish Academics lacked offensive firepower against Berlin', img: '/assets/Gall5.jpeg', date: '2026-03-10', info: 'TH3 SWISH - Match Report' },
    { id: '3', title: 'Swish Academics return from FIBA break', img: '/assets/Gall12.jpeg', date: '2026-03-05', info: 'TH3 SWISH - Club News' },
    { id: '4', title: 'Swish Ladies sign star point guard', img: '/assets/Gall11.jpeg', date: '2026-02-28', info: 'TH3 SWISH - Transfer News' },
    { id: '5', title: 'Upcoming charity event for local youth', img: '/assets/Gall8.jpeg', date: '2026-02-20', info: 'TH3 SWISH - Community' },
    { id: '6', title: 'Coach announces new defensive strategy', img: '/assets/Team2.jpeg', date: '2026-02-15', info: 'TH3 SWISH - Team News' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(newsItems.length / itemsPerPage);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalPages);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);

  const visibleNews = newsItems.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Navbar />
      <NextGame fixed={true} />
      <main className="px-4 py-12 pt-32 md:pt-48">
        <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2 mt-4">We are Swish #stayswishing</p>
        <HeadingWithWatermark text="TH3 SWISH Ladies" className="mb-20" />

        <section className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <HeadingWithWatermark text="News" className="text-2xl" />
            <div className="flex gap-2">
              <button onClick={handlePrev} className="bg-zinc-200 p-2 hover:bg-zinc-300"><ChevronLeft /></button>
              <button onClick={handleNext} className="bg-zinc-200 p-2 hover:bg-zinc-300"><ChevronRight /></button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-0">
            {visibleNews.map((news) => (
              <Link key={news.id} to={`/news/${news.id}`} className="group cursor-pointer">
                <div className="h-64 overflow-hidden">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300" referrerPolicy="no-referrer" />
                </div>
                <div className="bg-[#1e3a8a] p-6 text-white h-40 flex flex-col justify-between transition-colors duration-300 group-hover:bg-red-700">
                  <h3 className="text-xl font-bold group-hover:underline">{news.title}</h3>
                  <span className="font-bold uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View News →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 transition-colors ${
                  currentIndex === i ? 'bg-[#1e3a8a]' : 'bg-zinc-300'
                }`}
              />
            ))}
          </div>
        </section>

        <ScheduleAndTable />
        <ImageGalleries />
      </main>
      <Footer />
    </div>
  );
}
