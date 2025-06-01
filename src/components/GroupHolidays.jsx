import React from 'react';
import { useNavigate } from 'react-router-dom';

const trendingDestinations = [
  {
    name: 'Europe Group Departure',
    image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?q=80&w=1470&auto=format&fit=crop',
    location: 'Europe'
  },
  {
    name: 'Thailand Group Tour',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1439&auto=format&fit=crop',
    location: 'Thailand'
  },
  {
    name: 'Kedarnath Yatra Fixed Group',
    image: 'https://images.unsplash.com/photo-1629981352504-b7f5210501c3?q=80&w=1470&auto=format&fit=crop',
    location: 'India'
  },
  {
    name: 'Vietnam for Senior Citizens',
    image: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1528&auto=format&fit=crop',
    location: 'Vietnam'
  },
  {
    name: 'Char Dham Yatra',
    image: 'https://images.unsplash.com/photo-1601821139314-66a4d14cfc00?q=80&w=1488&auto=format&fit=crop',
    location: 'India'
  },
  {
    name: 'Bhutan Cultural Group Trip',
    image: 'https://images.unsplash.com/photo-1598869012638-f5351b49498f?q=80&w=1470&auto=format&fit=crop',
    location: 'Bhutan'
  },
  {
    name: 'Dubai Expo Group Package',
    image: 'https://plus.unsplash.com/premium_photo-1697730123368-3f4e90f41e91?q=80&w=1374&auto=format&fit=crop',
    location: 'Dubai'
  },
  {
    name: 'Rann of Kutch with Friends',
    image: 'https://images.unsplash.com/photo-1549468057-5b7fa1a41d7a?q=80&w=1471&auto=format&fit=crop',
    location: 'India'
  },
  {
    name: 'Bali Women-Only Group',
    image: 'https://images.unsplash.com/photo-1554481924-0eecea3f21de?q=80&w=1470&auto=format&fit=crop',
    location: 'Bali'
  },
  {
    name: 'Kerala Senior Special Departure',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1632&auto=format&fit=crop',
    location: 'India'
  }
];

export default function GroupHolidays() {
  const navigate = useNavigate();

  const handleCardClick = (name) => {
    navigate(`/package/${encodeURIComponent(name)}`);
  };

  return (
    <section className="bg-black text-white py-6 sm:py-12">
      <div className="w-full px-4 sm:px-8 xl:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex flex-wrap items-center gap-2">
          <span role="img" aria-label="group">🧑‍🤝‍🧑</span>
          <span className="text-white">Group</span>
          <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto]">
            Holidays
          </span>
        </h2>
      </div>

      {/* Scroll Container */}
      <div className="w-full overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-6 px-4 sm:px-8 xl:px-16 snap-x snap-mandatory">
          {trendingDestinations.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(item.name)}
              className="min-w-[250px] max-w-[250px] h-64 rounded-2xl overflow-hidden relative shadow-lg border border-yellow-300 hover:shadow-yellow-400 transition duration-300 snap-start cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
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
