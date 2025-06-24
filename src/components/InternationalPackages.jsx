import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const trendingDestinations = [
  { 
    name: 'Bali', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbali%202.png?alt=media&token=950d060c-bfd0-4e2c-97eb-cbfd578bf039',
    location: 'Indonesia' 
  },
  { 
    name: 'Bhutan', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbhutan.png?alt=media&token=5946f6a6-33bb-437c-a5b8-2b27759b4963',
    location: 'Himalayas' 
  },
  { 
    name: 'Hong Kong', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fhongkong.png?alt=media&token=06cbae91-077b-491c-9afa-b0553c8ce59c',
    location: 'China' 
  },
  { 
    name: 'Malaysia', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmalaysia%20(1).png?alt=media&token=69874139-7a9c-486a-b95a-f8c617fc56e1',
    location: 'Kuala Lumpur' 
  },
  { 
    name: 'Maldives', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmaldives.png?alt=media&token=985aec8a-2c85-4475-ab46-52827cd89acd',
    location: 'Indian Ocean' 
  },
  { 
    name: 'Mauritius', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fmauritius.png?alt=media&token=e0353bb7-ad54-400a-b9da-b7c1fa0a42b7',
    location: 'Indian Ocean' 
  },
  { 
    name: 'Thailand', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fthailand.png?alt=media&token=314b3cfa-b8e2-47ed-ae7c-eda1612cbb8c',
    location: 'Phuket & Krabi' 
  },
  { 
    name: 'Sri Lanka', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fsri%20lanka.png?alt=media&token=03dd9b9e-c8de-4ab9-ab48-76d7b78363f7',
    location: 'Ceylon' 
  },
  { 
    name: 'Vietnam', 
    image: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fvietnam.png?alt=media&token=7f037917-30ed-4dd4-8fe6-2ef7912aeffe',
    location: 'Southeast Asia' 
  }
];

const DestinationCard = memo(({ name, image, location, onClick }) => (
  <div
    onClick={onClick}
    className="cursor-pointer min-w-[250px] max-w-[250px] h-64 rounded-2xl overflow-hidden relative shadow-lg border border-green-300 hover:shadow-green-300 transition duration-300 snap-start"
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

export default function InternationalPackages() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white py-6 sm:py-12">
      <div className="w-full px-4 sm:px-8 xl:px-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 flex flex-wrap items-center gap-2">
          🌍 <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-bold animate-gradient bg-[length:200%_auto]">Explore</span>
          <span className="text-white">Asia</span>
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
              onClick={() => navigate(`/explorer/${item.name}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}