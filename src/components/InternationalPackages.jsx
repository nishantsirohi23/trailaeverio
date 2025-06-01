import React from 'react';
import { useNavigate } from 'react-router-dom';

const trendingDestinations = [
  { name: 'Europe Summer Sale', image: 'https://images.unsplash.com/photo-1501952476817-d7ae22e8ee4e?q=10', location: 'Europe' },
  { name: 'Dubai Shopping Festival', image: 'https://images.unsplash.com/photo-1554203576-3b7d50b086ee?q=10', location: 'Dubai' },
  { name: 'Bali Couple Special', image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=10', location: 'Bali' },
  { name: 'Thailand Party Package', image: 'https://images.unsplash.com/photo-1560359614-870d1a7ea91d?q=10', location: 'Thailand' },
  { name: 'Turkey with Hot Air Balloon Ride', image: 'https://images.unsplash.com/photo-1559783684-874488c5f42f?q=10', location: 'Turkey' },
  { name: 'Maldives Water Villa Offer', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=10', location: 'Maldives' },
  { name: 'Andaman Summer Escape', image: 'https://plus.unsplash.com/premium_photo-1661962958462-9e52fda9954d?q=10', location: 'Andaman & Nicobar islands' },
];

export default function InternationalPackages() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-6 sm:py-12">
      <div className="w-full px-4 sm:px-8 xl:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex flex-wrap items-center gap-2">
          🌍 <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto]">International</span>
          <span className="text-white">Packages</span>
        </h2>
      </div>
      <div className="w-full overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-6 px-4 sm:px-8 xl:px-16 snap-x snap-mandatory">
          {trendingDestinations.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/package/${encodeURIComponent(item.name)}`)}
              className="cursor-pointer min-w-[250px] max-w-[250px] h-64 rounded-2xl overflow-hidden relative shadow-lg border border-green-300 hover:shadow-green-300 transition duration-300 snap-start"
            >
              <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                <p className="text-sm text-zinc-300">📍 {item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
