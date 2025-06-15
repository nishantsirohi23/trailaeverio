import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import DestinationTag from './DestinationTag';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const destinations = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    name: 'Seaside Serenity Resort',
    price: 120000,
    details: 'Enjoy a relaxing stay at the beach with unlimited water activities and gourmet dining.',
    tags: ['2-Bedroom', '4 People Allowed', 'Resort'],
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    name: 'City Lights Tour',
    price: 80000,
    details: 'Explore the metropolitan nightlife and iconic landmarks with guided tours included.',
    tags: ['2-Bedroom', '2 People Allowed', 'Tour Package'],
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
    name: 'Rustic Mountain Cabin',
    price: 150000,
    details: 'A cozy cabin nestled in the mountains, perfect for hiking and enjoying nature.',
    tags: ['3-Bedroom', '5 People Allowed', 'Cabin'],
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3',
    name: 'Urban Explorer Experience',
    price: 70000,
    details: 'Stay in a modern loft with rooftop access and explore downtown attractions.',
    tags: ['2-Bedroom', '3 People Allowed', 'Loft Package'],
  },
];

const getItemsPerSlide = (width) => {
  if (width >= 1024) return 3; // Desktop
  if (width >= 640) return 2;  // iPad/Tablets
  return 1;                    // Mobile
};

const PopularDestinations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide(window.innerWidth));
  const navigate = useNavigate(); // Initialize useNavigate

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

  const startIndex = currentIndex * itemsPerSlide;
  const visibleDestinations = destinations.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <section className="w-full px-6 py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold">Featured Packages</h2>
            <p className="text-zinc-400">
              Explore our handpicked selection of featured packages.
            </p>
          </div>
          <Button
            variant="outline"
            className="bg-zinc-800 text-white hover:bg-zinc-700"
            onClick={() => navigate('/explorer')} // Navigate to /explorer on click
          >
            View All Packages
          </Button>
        </div>

        {/* Destination Cards */}
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

        {/* Navigation Arrows */}
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
