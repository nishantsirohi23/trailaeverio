import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    username: 'Anonymous',
    profileUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
    location: 'Tropical Paradise Getaway',
    title: 'Unforgettable Vacation',
    review: 'Everything was perfect, from booking to the resort. Highly recommend this agency!',
    rating: 5,
  },
  {
    username: 'John Doe',
    profileUrl: 'https://randomuser.me/api/portraits/men/33.jpg',
    location: 'City Explorer Tour',
    title: 'Smooth and Easy',
    review: 'The tour was well organized and the guides were friendly. Will book again!',
    rating: 4,
  },
  {
    username: 'Emily Rose',
    profileUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
    location: 'Mountain Adventure Package',
    title: 'Breathtaking Experience',
    review: 'Loved the hiking trails and the cozy cabin stay. Amazing memories made.',
    rating: 4.5,
  },
  {
    username: 'Michael Scott',
    profileUrl: 'https://randomuser.me/api/portraits/men/12.jpg',
    location: 'Urban Culture Immersion',
    title: 'Highly Recommended',
    review: 'Great city tours, excellent accommodations, and superb customer service.',
    rating: 5,
  },
  {
    username: 'Sara Lane',
    profileUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
    location: 'Countryside Relaxation Retreat',
    title: 'Perfect Relaxation',
    review: 'The peaceful countryside and friendly hosts made it a dream vacation.',
    rating: 4,
  },
];



const getItemsPerSlide = (width) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};


const ReviewCard = ({ username, rating, location, title, review, profileUrl }) => (
  <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-lg">
    <div className="flex items-center mb-4 gap-4">
      <img
        src={profileUrl}
        alt={username}
        className="w-12 h-12 rounded-full object-cover border border-zinc-700"
      />
      <div>
        <div className="font-semibold">{username}</div>
        <div className="text-xs text-zinc-400">{location}</div>
      </div>
    </div>
    <div className="text-lg font-bold mb-1">{title}</div>
    <div className="text-sm text-zinc-300 mb-3">"{review}"</div>
    <div className="text-yellow-400 text-sm">Rating: {rating} ★</div>
  </div>
);

const UserReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentIndex * itemsPerSlide;
  const visibleReviews = reviews.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <section className="w-full px-6 py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold">What Users Are Saying</h2>
            <p className="text-zinc-400">Real reviews from happy homeowners and renters.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {visibleReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
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

export default UserReviews;
