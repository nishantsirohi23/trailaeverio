import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const trendingDestinations = [
  { 
    name: 'Eastern Europe', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%203%20(%208%20march).png?alt=media&token=d3626380-50fe-433d-9a31-af50dbbf65e3', 
    location: 'Historic Capitals' 
  },
  { 
    name: 'Western Europe', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%204%20(%2016%20dec).png?alt=media&token=bbd9201b-3c37-43a2-a9f4-2c4a80521b21', 
    location: 'France & Switzerland' 
  },
  { 
    name: 'Alpine Europe', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2F_europe%205%20(%20paris%20swiss).png?alt=media&token=22265c2f-6a1e-4345-9b56-ee77c7be090f', 
    location: 'Swiss Mountains' 
  },
  { 
    name: 'Mediterranean', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feastern%20europe.png?alt=media&token=c885f7f3-1db0-4789-ae00-7e52c7b02207', 
    location: 'Greece Islands' 
  },
  { 
    name: 'Southern Europe', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%206%20japan%20korea.png?alt=media&token=71a68640-305e-4dad-94c9-a2a0d9601edd', 
    location: 'Italy' 
  },
  { 
    name: 'British Isles', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%207%20%20spain.png?alt=media&token=23ae963d-bb67-4658-908f-731e2f279cf9', 
    location: 'London' 
  },
  { 
    name: 'Western Europe', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%208%20%20best%20of%20euro.png?alt=media&token=17f0f144-a734-4955-aa12-38e5f150db2b', 
    location: 'Amsterdam & Paris' 
  },
  { 
    name: 'Nordic Europe', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%209%20%20finland.png?alt=media&token=ae87ce8b-3954-4d74-a74a-c12e11298cd6', 
    location: 'Scandinavia' 
  },
  { 
    name: 'Iberian Peninsula', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2010%20uk.png?alt=media&token=cf597baf-4b76-4bef-b783-0381df90877a', 
    location: 'Spain' 
  },
  { 
    name: 'Central Europe', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2011%20london.png?alt=media&token=b78f566b-fb9a-4a33-8fa4-1bfb9325684b', 
    location: 'Switzerland' 
  }
];
const TrendingCard = memo(({ name, image, location, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer min-w-[250px] max-w-[250px] h-64 rounded-2xl overflow-hidden relative shadow-lg border border-pink-300 hover:shadow-pink-300 transition duration-300 snap-start"
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

export default function TrendingNow() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-6 sm:py-12">
      <div className="w-full px-4 sm:px-8 xl:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex flex-wrap items-center gap-2">
          🔥 <span className="bg-gradient-to-r from-pink-300 to-yellow-400 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto]">Explore</span>
          <span className="text-white">Europe</span>
        </h2>
      </div>
      <div className="w-full overflow-x-auto no-scrollbar pb-4">
        <div className="flex gap-6 px-4 sm:px-8 xl:px-16 snap-x snap-mandatory">
          {trendingDestinations.map((item) => (
            <TrendingCard
              key={item.name}
              name={item.name}
              image={item.image}
              location={item.location}
              onClick={() => navigate(`/explorer/Europe`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}