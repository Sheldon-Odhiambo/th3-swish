import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import HeadingWithWatermark from './HeadingWithWatermark';

const galleries = [
  { title: 'MLP Academics Heidelberg vs. ALBA BERLIN', img: 'https://picsum.photos/seed/gal1/600/400', count: 28 },
  { title: 'MLP Academics Heidelberg vs. FC Bayern Basketball', img: 'https://picsum.photos/seed/gal2/600/400', count: 18 },
  { title: 'MLP Academics Heidelberg vs. EWE Baskets Oldenburg', img: 'https://picsum.photos/seed/gal3/600/400', count: 24 },
  { title: 'MLP Academics Heidelberg vs. Brose Bamberg', img: 'https://picsum.photos/seed/gal4/600/400', count: 32 },
];

export default function ImageGalleries() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(galleries.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleGalleries = galleries.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <HeadingWithWatermark text="TH3 SWISH Image Galleries" className="text-2xl" />
        <div className="flex gap-2">
          <button onClick={handlePrev} className="bg-zinc-200 p-2 hover:bg-zinc-300 cursor-pointer transition-colors"><ChevronLeft size={24} /></button>
          <button onClick={handleNext} className="bg-zinc-200 p-2 hover:bg-zinc-300 cursor-pointer transition-colors"><ChevronRight size={24} /></button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-0">
        {visibleGalleries.map((gallery, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative h-64 overflow-hidden">
              <img src={gallery.img} alt={gallery.title} className="w-full h-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 right-4 bg-white px-3 py-1 font-bold text-[#1e3a8a]">
                +{gallery.count}
              </div>
            </div>
            <div className="bg-[#1e3a8a] p-6 text-white h-40 flex flex-col justify-between transition-colors duration-300 group-hover:bg-red-700">
              <h3 className="text-lg font-bold">{gallery.title}</h3>
              <Link to="/gallery" className="font-bold uppercase text-sm underline">
                View Image Gallery →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
