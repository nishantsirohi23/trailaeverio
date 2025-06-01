import React from 'react';
import { useNavigate } from 'react-router-dom';

const trendingDestinations = [
  { name: 'Leh Ladakh Expedition', image: 'https://images.unsplash.com/photo-1593118845043-359e5f628214?q=80&w=2940&auto=format&fit=crop', location: 'Jammu & Kashmir' },
  { name: 'Kashmir Paradise', image: 'https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=2942&auto=format&fit=crop', location: 'Srinagar' },
  { name: 'Himachal Hills & Snow', image: 'https://images.unsplash.com/photo-1581791534721-e599df4417f7?q=80&w=3131&auto=format&fit=crop', location: 'Manali' },
  { name: 'Spiti Valley Road Trip', image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=2940&auto=format&fit=crop', location: 'Himachal Pradesh' },
  { name: 'Golden Triangle (Delhi–Agra–Jaipur)', image: 'https://images.unsplash.com/photo-1477586957327-847a0f3f4fe3?q=80&w=2940&auto=format&fit=crop', location: 'North India' },
  { name: 'Kerala Backwaters', image: 'https://plus.unsplash.com/premium_photo-1697729442042-c071ef0415b0?q=80&w=2940&auto=format&fit=crop', location: 'Alleppey' },
  { name: 'Rishikesh Yoga Retreat', image: 'https://images.unsplash.com/photo-1650341259809-9314b0de9268?q=80&w=2940&auto=format&fit=crop', location: 'Uttarakhand' },
];

export default function ExploreIndia() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-6 sm:py-12">
      <div className="w-full px-4 sm:px-8 xl:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex flex-wrap items-center gap-2">
          🇮🇳 <span className="text-white">Explore</span>
          <span className="bg-gradient-to-r from-orange-500 to-green-500 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto]">India</span>
        </h2>
      </div>
      <div className="w-full overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-6 px-4 sm:px-8 xl:px-16 snap-x snap-mandatory">
          {trendingDestinations.map((item, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/package/${encodeURIComponent(item.name)}`)}
              className="cursor-pointer min-w-[250px] max-w-[250px] h-64 rounded-2xl overflow-hidden relative shadow-lg border border-purple-700 hover:shadow-purple-600 transition duration-300 snap-start"
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
