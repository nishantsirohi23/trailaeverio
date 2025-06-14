import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const trendingDestinations = [
  { name: 'Europe', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.53.46%20PM.jpeg?alt=media&token=01483c8b-e298-4164-be58-26458dc081b6', location: 'Maldives' },
  { name: 'Middle East', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.52.57%20PM.jpeg?alt=media&token=7899eaa4-6e4e-4dda-84c8-e61c876ea0eb', location: 'Europe' },
  { name: 'Asia', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.53.13%20PM.jpeg?alt=media&token=b753b538-b75c-4b2a-a2d1-055185b3a81e', location: 'Dubai' },
  { name: 'New Zealand', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.53.21%20PM.jpeg?alt=media&token=8d33f19d-8e25-4a9a-aa33-6f436d622f59', location: 'Bali' },
  { name: 'Australia', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.53.27%20PM.jpeg?alt=media&token=267d76fd-2a12-47b4-aa24-285a56735c57', location: 'Thailand' },
  { name: 'Africa', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.53.37%20PM.jpeg?alt=media&token=1ad52980-fc80-4d1f-bad8-c03e982bb0a7', location: 'Turkey' },
  { name: 'India', image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.58.29%20PM.jpeg?alt=media&token=7d479600-49fe-4575-9aac-e537fd2559a1', location: 'Andaman & Nicobar islands' },
];

// Memoized card component
const GroupCard = memo(({ name, image, location, onClick }) => (
  <div
    onClick={onClick}
    className="min-w-[250px] max-w-[250px] h-64 rounded-2xl overflow-hidden relative shadow-lg border border-yellow-300 hover:shadow-yellow-400 transition duration-300 snap-start cursor-pointer"
  >
    <img
      src={image}
      alt={name}
      loading="lazy"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
    <div className="absolute bottom-0 p-4">
      <h3 className="text-lg font-semibold text-white mb-1">{name}</h3>
      <p className="text-sm text-zinc-300">📍 {location}</p>
    </div>
  </div>
));

export default function GroupHolidays() {
  const navigate = useNavigate();

  const handleCardClick = (name) => {
    navigate(`/package/${encodeURIComponent(name)}`);
  };

  return (
    <section className="bg-black text-white py-6 sm:py-12">
      <div className="w-full px-4 sm:px-8 xl:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex flex-wrap items-center gap-2">
          🧑‍🤝‍🧑 <span className="text-white">Group</span>
          <span className="bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto]">
            Holidays
          </span>
        </h2>
      </div>

      {/* Scrollable Card Row */}
      <div className="w-full overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-6 px-4 sm:px-8 xl:px-16 snap-x snap-mandatory">
          {trendingDestinations.map((item) => (
            <GroupCard
              key={item.name}
              name={item.name}
              image={item.image}
              location={item.location}
              onClick={() => handleCardClick(item.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}