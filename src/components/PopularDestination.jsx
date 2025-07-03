import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DestinationTag from './DestinationTag';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fpackages3%2Fgoa%202.png?alt=media&token=6ebf17c6-ad0a-4d16-9794-7a1ec99c3185',
    name: 'Goa Beach & Heritage Escape',
    price: '5D/4N',
    details: 'Discover the perfect blend of sun, sand, and heritage in North and South Goa!',
    tags: ['Baga Beach', 'Calangute Beach', 'Dudhsagar Waterfalls'],
    destid: '684c3fb228ea76669318c63e'
  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fpackages3%2Fthailand%20(%20phuket%20krabi%20)%20-%201.png?alt=media&token=ebc43b22-af39-41a5-9385-655638f4cc30',
    name: 'Thailand – Krabi & Phuket Explorer',
    price: "5D/4N",
    details: 'Sun-kissed islands, cultural wonders, and turquoise adventures',
    tags: ['Phra Nang Cave Beach', 'Phantasea Cultural', 'Phi Phi Islands'],
    destid: '684c409a28ea76669318c885'

  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feastern%20europe.png?alt=media&token=c885f7f3-1db0-4789-ae00-7e52c7b02207',
    name: 'Greece Highlights: Athens, Mykonos & Santorini',
    price: "7D/6N",
    details: 'A spellbinding journey through ancient wonders, sun-soaked beaches, and iconic sunsets.',
    tags: ['Acropolis', 'Parthenon', 'Mykonos'],
    destid: '684c40ca28ea76669318c943'

  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Feurope%2Feruope%206%20japan%20korea.png?alt=media&token=71a68640-305e-4dad-94c9-a2a0d9601edd',
    name: 'Essence of Italy Tour',
    price: "7D/6N",
    details: 'A journey through timeless art, romantic canals, and Tuscan landscapes',
    tags: ['Duomo', 'Uffizi Gallery', 'Ponte Vecchio'],
    destid: '684c40d228ea76669318c95e'

  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fpackages3%2Fkashmir%203.png?alt=media&token=41f9c3d8-f8ad-4d57-94ab-c6d85635f042',
    name: 'Kashmir Delight',
    price: "6D/5N",
    details: 'Explore the breathtaking beauty of Srinagar, Pahalgam, Gulmarg, and traditional experiences',
    tags: ['Srinagar', 'Gulmarg', 'Sonmarg'],
    destid: '684c3fe128ea76669318c67e'

  },
  {
    imageSrc: 'https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Faustralia%2Faus%201%20(12%20nov).png?alt=media&token=0658bda4-53a1-48c3-adaa-27d8082122e8',
    name: 'Australian Delight',
    price: "10D/9N",
    details: 'Experience iconic cities, stunning coastlines, and unforgettable wildlife across Australia',
    tags: ['Warner Bros', 'Sydney Tower Eye', 'Featherdale Wildlife Park'],
    destid: '684b1637743424e7fb1074bc'

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
