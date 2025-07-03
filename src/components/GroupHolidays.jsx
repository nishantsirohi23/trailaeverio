import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const trendingDestinations = [
  { 
    name: 'Australia', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Faustralia%2Faus%201%20(12%20nov).png?alt=media&token=0658bda4-53a1-48c3-adaa-27d8082122e8', 
    location: 'Sydney & Outback' 
  },
  { 
    name: 'New Zealand', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fnewzealand%2Fnew%20zealand%20(16%20july).png?alt=media&token=87ac9fae-e123-49f6-9e0a-c4787fd0b434', 
    location: 'North & South Islands' 
  },
  { 
    name: 'Southern Africa', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Fsouth%20africa.png?alt=media&token=88128b78-3078-4a00-b2f9-2fa486b90594', 
    location: 'South Africa' 
  },
  { 
    name: 'East Africa', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%20(ms%20bhvya.png?alt=media&token=f3fc47ea-3a30-4274-95c7-1f6e2ed1f338', 
    location: 'Tanzania Safari' 
  },
  { 
    name: 'North Africa', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%202%20(%2006%20sept).png?alt=media&token=5f484617-de65-4410-8333-cf998092ada9', 
    location: 'Egypt' 
  },
  { 
    name: 'Arabian Gulf', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai.png?alt=media&token=bbe14937-fcc3-4d0b-9f08-d6e68cae1bcb', 
    location: 'Dubai' 
  },
  { 
    name: 'Middle East', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fmiddleeasy%2Fdubai%202.png?alt=media&token=7b237410-1f68-4da5-be66-94d283fc88e1', 
    location: 'Turkey' 
  }
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
    navigate(`/explorer/Australia`);
  };

  return (
    <section className="bg-black text-white py-6 sm:py-12">
      <div className="w-full px-4 sm:px-8 xl:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex flex-wrap items-center gap-2">
          🧑‍🤝‍🧑 <span className="text-white">International</span>
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