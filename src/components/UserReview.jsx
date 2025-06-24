import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';

const getItemsPerSlide = (width) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const ReviewCard = ({ username, rating, location, review, profileUrl }) => (
  <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-lg">
    <div className="flex items-center mb-4 gap-4">
      <img
        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${encodeURIComponent(username)}`}
        alt={username}
        className="w-12 h-12 rounded-full object-cover border border-zinc-700"
      />
      <div>
        <div className="font-semibold">{username || 'Anonymous'}</div>
        <div className="text-xs text-zinc-400">{location || 'Not available'}</div>
      </div>
    </div>
    <div className="text-sm text-zinc-300 mb-3">"{review || 'No review provided.'}"</div>
    <div className="text-yellow-400 text-sm">Rating: {rating || 'N/A'} ★</div>
  </div>
);

const UserReviews = ({ id }) => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide(window.innerWidth));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(`https://api.perpenny.in/api/reviews/${id}`);
        if (res.data.success) {
          const transformed = res.data.data.map((item) => ({
            username: item.name || 'Anonymous',
            rating: item.starRating || null,
            location: item.destination || 'Not available',
            review: item.review || '',
            profileUrl: 'https://api.multiavatar.com/Binx%20Bond.png', // placeholder fallback
          }));
          setReviews(transformed);
        }
      } catch (err) {
        console.error('Failed to fetch reviews:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();

    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [id]);

  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const startIndex = currentIndex * itemsPerSlide;
  const visibleReviews = reviews.slice(startIndex, startIndex + itemsPerSlide);

  if (loading || reviews.length === 0) {
    return null; // Hide the entire section if no reviews are available
  }

  return (
    <section className="w-full px-6 py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold">What Users Are Saying</h2>
            <p className="text-zinc-400">Real reviews from our travelers.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {visibleReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>

        {reviews.length > itemsPerSlide && (
          <div className="flex justify-center gap-4">
            <Button onClick={handlePrev} variant="outline" className="bg-zinc-800 text-white hover:bg-zinc-700">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button onClick={handleNext} variant="outline" className="bg-zinc-800 text-white hover:bg-zinc-700">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default UserReviews;
