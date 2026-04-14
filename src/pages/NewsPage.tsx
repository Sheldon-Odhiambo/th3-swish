import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeadingWithWatermark from '../components/HeadingWithWatermark';

export default function NewsPage() {
  const allNews = [
    { id: '1', title: 'Swish Academics travel to Trier to face the newly', img: '/assets/Gall3.jpeg', category: 'Match reports' },
    { id: '2', title: 'Swish Academics lacked offensive firepower against Berlin', img: '/assets/Gall1.jpeg', category: 'Match reports' },
    { id: '3', title: 'Swish Academics return from FIBA break', img: '/assets/Gall10.jpeg', category: 'Academics Inside' },
    { id: '4', title: 'Swish Ladies sign star point guard', img: '/assets/Gall11.jpeg', category: 'BBL' },
    { id: '5', title: 'Upcoming charity event for local youth', img: '/assets/Gall8.jpeg', category: 'Organization' },
    { id: '6', title: 'Coach announces new defensive strategy', img: '/assets/maker1.jpeg', category: 'Academics Inside' },
    { id: '7', title: 'New training facility opened', img: '/assets/team.jpeg', category: 'Organization' },
    { id: '8', title: 'Youth academy showcase success', img: '/assets/Team2.jpeg', category: 'Academics Inside' },
    { id: '9', title: 'Sponsor renewal announced', img: '/assets/vero.jpeg', category: 'Sponsorship' },
  ];

  const [activeCategory, setActiveCategory] = useState('All news');
  const categories = ['All news', 'Academics Inside', 'BBL', 'Organization', 'Match reports', 'Sponsorship'];

  const filteredNews = activeCategory === 'All news' 
    ? allNews 
    : allNews.filter(news => news.category === activeCategory);

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans pt-20">
      <Navbar />
      
      {/* Sub-navigation - Fixed below Navbar */}
      <div className="bg-white border-b border-zinc-200 py-4 fixed top-20 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex gap-8 text-sm font-bold text-[#1e3a8a] uppercase">
          {categories.map((item) => (
            <span 
              key={item} 
              onClick={() => setActiveCategory(item)}
              className={`cursor-pointer hover:text-red-600 transition-colors ${activeCategory === item ? 'text-red-600' : ''}`}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <main className="px-4 py-12 pt-20">
        <p className="text-red-600 font-bold uppercase tracking-widest text-sm mb-2">TH3 SWISH</p>
        <HeadingWithWatermark text="NEWS" className="text-5xl mb-6" />
        <p className="text-zinc-600 mb-12 max-w-2xl">All the news, information and stats – about the action on the court and from the basketball universe of the Academics.</p>

        <div className="grid md:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <Link key={news.id} to={`/news/${news.id}`} className="group cursor-pointer bg-[#1e3a8a] transition-colors duration-300 hover:bg-red-700">
              <div className="h-64 overflow-hidden">
                <img src={news.img} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 text-white h-40 flex flex-col justify-between">
                <h3 className="text-xl font-bold group-hover:underline">{news.title}</h3>
                <span className="font-bold uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View News →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
