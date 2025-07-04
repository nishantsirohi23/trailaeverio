import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationTag from './DestinationTag';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  
  { 
    price: '7D / 6N', destid: '684c40f628ea76669318c9b0', name: 'Switzerland Alpine Highlights', 
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feurope%2011%20london.png?alt=media&token=b78f566b-fb9a-4a33-8fa4-1bfb9325684b',
    tags: ['Zurich', 'Lucerne', 'Interlaken'],
    details: 'Capital of Great Britain with iconic landmarks, world-class theaters and royal pageantry creating quintessential British metropolitan experience.'
  },

  { 
    price: '6D / 5N', destid: '684c401828ea76669318c6cd', name: "Kerala – God's Own Country", 
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Findia%2Fkerala.png?alt=media&token=07488a0a-fb78-4721-971e-aabb2a389834',
    tags: ['Kochi', 'Munnar', 'Alleppey'],
    details: 'God\'s Own Country with tranquil backwaters, Ayurvedic treatments and spice plantations creating ultimate wellness and natural rejuvenation experience.'
  },
  
  { 
    price: '7D / 6N', destid: '684c40ab28ea76669318c8b5', name: 'Vietnam Highlights', 
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fvietnam.png?alt=media&token=7f037917-30ed-4dd4-8fe6-2ef7912aeffe',
    tags: ['Hanoi', 'Ho Chi Minh', 'Da Nang'],

    details: 'Hidden dragon with emerald rice terraces, bustling street life and rich history creating unforgettable journey through ancient traditions.'
  },
  { 
    price: '6D / 5N', destid: '684b16b5743424e7fb107501', name: 'Bhutan – Kingdom of Happiness Tour', 
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fasia%2Fbhutan.png?alt=media&token=5946f6a6-33bb-437c-a5b8-2b27759b4963',
    tags: ['Thimphu', 'Paro', 'Punakha'],
    details: 'Last Shangri-La with majestic Himalayas, ancient monasteries and carbon-negative kingdom promoting gross national happiness over GDP.'
  },
  { 
    price: '8D / 7N', destid: '684c408d28ea76669318c849', name: 'Tanzania Safari Adventure', 
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fafrica%2Ftanzania%20(ms%20bhvya.png?alt=media&token=f3fc47ea-3a30-4274-95c7-1f6e2ed1f338',
    tags: ['Arusha', 'Zanzibar', 'Dar es Salaam'],
    details: 'Serengeti paradise with Mount Kilimanjaro, Great Migration and pristine wildlife offering authentic African safari and mountaineering adventures.'
  },
  { 
    price: '13D / 12N', destid: '684c405328ea76669318c782', name: 'New Zealand Wonders', 
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fnewzealand%2Fnew%20zealand%20(16%20july).png?alt=media&token=87ac9fae-e123-49f6-9e0a-c4787fd0b434',
    tags: ['Auckland', 'Queenstown', 'Christchurch'],
    details: 'Land of the long white cloud with breathtaking scenery, adventure sports and Maori culture offering ultimate nature and adrenaline experiences.'
  },

 
];

const getItemsPerSlide = (width) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const PopularDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide(window.innerWidth));
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(destinations.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Auto scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const startIndex = currentIndex * itemsPerSlide;
  const visibleDestinations = destinations.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <section className="w-full px-6 py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold">Featured Packages</h2>
            <p className="text-zinc-400">
              Explore our handpicked selection of featured packages.
            </p>
          </div>
          
        </div>

        <div
          className={`mb-6 flex gap-6 justify-center flex-wrap ${
            itemsPerSlide === 3 ? 'lg:justify-between' : 'sm:justify-center'
          }`}
        >
          {visibleDestinations.map((destination, index) => (
            <div
              key={index}
              className={`w-full ${
                itemsPerSlide === 1
                  ? ''
                  : itemsPerSlide === 2
                  ? 'sm:w-[48%]'
                  : 'lg:w-[30%]'
              }`}
            >
              <DestinationTag {...destination} />
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <Button onClick={handlePrev} variant="outline" className="bg-zinc-800 text-white hover:bg-zinc-700">
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button onClick={handleNext} variant="outline" className="bg-zinc-800 text-white hover:bg-zinc-700">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;
