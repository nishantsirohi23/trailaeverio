import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const trendingDestinations = [
  { 
    name: 'Island Getaways', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fandaman.png?alt=media&token=a5c44d25-7ad8-4b25-8014-fc65d514ef1b', 
    location: 'Andaman Islands' 
  },
  { 
    name: 'Beach Paradise', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fgoa.png?alt=media&token=c49e88ff-8360-456f-be7c-94456a47b15c', 
    location: 'Goa' 
  },
  { 
    name: 'Mountain Retreat', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkashmir.png?alt=media&token=b70c3176-16f1-460a-9363-65dc7b846d7e', 
    location: 'Kashmir' 
  },
  { 
    name: 'Wellness Escape', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkerala.png?alt=media&token=07488a0a-fb78-4721-971e-aabb2a389834', 
    location: 'Kerala' 
  },
  { 
    name: 'Desert Oasis', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fmount%20abu.png?alt=media&token=17f8105a-8d71-4482-9b8a-1ebf9a9da17a', 
    location: 'Mount Abu' 
  },
  { 
    name: 'Hill Stations', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fnotheast.png?alt=media&token=a0495c9a-bf9a-43fd-acfe-288b6a726882', 
    location: 'Coorg & Ooty' 
  },
  { 
    name: 'Cultural India', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkashmir.png?alt=media&token=b70c3176-16f1-460a-9363-65dc7b846d7e', 
    location: 'Mysore' 
  }
];

// Memoized destination card component
const DestinationCard = memo(({ name, image, location, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer min-w-[250px] max-w-[250px] h-64 rounded-2xl overflow-hidden relative shadow-lg border border-purple-700 hover:shadow-purple-600 transition duration-300 snap-start"
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
          {trendingDestinations.map((item) => (
            <DestinationCard
              key={item.name}
              name={item.name}
              image={item.image}
              location={item.location}
              onClick={() => navigate(`/explorer/India`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}