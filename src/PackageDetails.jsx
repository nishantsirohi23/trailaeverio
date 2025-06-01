// DestinationPage.jsx or PackageDetails.jsx
import React, { useState, useEffect } from 'react';
import { Bed, Users, Home, Tag } from 'lucide-react';
import UserReviews from './components/UserReview';
import TopHeader from './components/Header';

const images = [
  'https://images.unsplash.com/photo-1725145722645-c4f569b49b6d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675431435428-33c25f818d67?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1663588767606-c91626c4b7f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1734629912226-ef74382aa901?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1659859910985-a3a0a14fa11b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
];

const itinerary = Array.from({ length: 6 }, (_, i) => ({
  day: `Day ${i + 1}`,
  schedule: {
    Morning: 'City exploration & breakfast',
    Afternoon: 'Cultural site visits',
    Evening: 'Shopping or free time',
    Night: 'Dinner & overnight stay',
  },
}));

export default function PackageDetails() {
  const [mainImage, setMainImage] = useState(images[0]);
  const [thumbImages, setThumbImages] = useState(images.slice(1));

  const tags = ['2-Bedroom', '4 People Allowed', 'Resort'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const swapImage = (img) => {
    setThumbImages((prev) => [mainImage, ...prev.filter((i) => i !== img)]);
    setMainImage(img);
  };

  const getIconForTag = (tag) => {
    const lowerTag = tag.toLowerCase();

    if (lowerTag.includes('bedroom')) return <Bed className="w-4 h-4 text-indigo-400" />;
    if (lowerTag.includes('people')) return <Users className="w-4 h-4 text-indigo-400" />;
    if (
      ['resort', 'tour', 'package', 'cabin', 'loft', 'adventure', 'hotel', 'stay'].some((word) =>
        lowerTag.includes(word)
      )
    ) {
      return <Home className="w-4 h-4 text-indigo-400" />;
    }
    return <Tag className="w-4 h-4 text-indigo-400" />;
  };

  return (
    <div className="bg-black text-white min-h-screen p-4">
      <div className="max-w-7xl mx-auto">

       
        <h1 className="text-3xl mt-6 font-bold text-purple-400 mb-2">Tokyo & Mt. Fuji Adventure</h1>

        {/* Tags Section */}
        <div className="flex flex-wrap gap-3 mb-4">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 px-3 py-1 text-xs bg-indigo-900 rounded-full border border-indigo-600 select-none"
            >
              {getIconForTag(tag)}
              <span>{tag}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="mb-6 text-zinc-400">
          Experience the perfect blend of ultra-modern Tokyo city life and the serene natural beauty of Mt. Fuji and its surroundings.
        </p>

        {/* Image Gallery */}
        <div className="mb-4">
          <img src={mainImage} alt="Main" className="w-full rounded-xl mb-4 max-h-[500px] object-cover" />
          <div className="flex gap-3 overflow-x-auto">
            {thumbImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Thumb ${i}`}
                className="w-28 h-20 rounded-lg cursor-pointer object-cover border-2 border-zinc-700 hover:border-purple-500"
                onClick={() => swapImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Itinerary and Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-3/5 w-full">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">Itinerary</h2>
            <div className="space-y-4">
              {itinerary.map(({ day, schedule }, index) => (
                <div key={index} className="bg-zinc-900 p-4 rounded-xl">
                  <h3 className="text-lg font-bold text-purple-300 mb-2">{day}</h3>
                  <div className="relative pl-6 border-l-4 border-purple-700 space-y-4">
                    {Object.entries(schedule).map(([time, activity]) => (
                      <div key={time} className="ml-2">
                        <div className="text-purple-400 font-semibold">{time}</div>
                        <div className="text-white text-sm">{activity}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-semibold mt-12 mb-4 text-purple-400">Reviews</h2>
            <UserReviews />
          </div>

          {/* Sidebar */}
          <div className="lg:w-2/5 w-full sticky top-[72px] h-fit bg-zinc-900 p-6 rounded-xl shadow-md text-white">
            <h2 className="text-xl font-bold mb-2">
              ₹1,61,999.10
              <span className="text-sm text-green-400 line-through ml-2">₹1,79,999</span>
            </h2>
            <p className="text-green-500 mb-4">Save 10%</p>
            <ul className="mb-4 text-sm space-y-1 text-zinc-300">
              <li>✔️ 4-star accommodation</li>
              <li>✔️ Mt. Fuji excursion</li>
              <li>✔️ Bullet train pass</li>
              <li>✔️ Food tour</li>
              <li>✔️ Cultural experiences</li>
            </ul>
            <div className="text-sm mb-2 text-zinc-400">
              Duration: <span className="text-white">8 days</span>
            </div>
            <div className="text-sm mb-2 text-zinc-400">
              Group Size: <span className="text-white">2–20 travelers</span>
            </div>
            <div className="text-sm mb-4 text-zinc-400">
              Start Date: <span className="text-white">Available year-round</span>
            </div>
            <button className="bg-purple-700 hover:bg-purple-600 w-full py-2 text-white rounded-xl font-semibold">
              Book This Trip
            </button>
            <p className="text-xs mt-2 text-zinc-500">
              No booking fees. Free cancellation up to 30 days before departure.
            </p>
          </div>
        </div>

        {/* Photo Gallery */}
        <h2 className="text-2xl font-semibold mt-12 mb-4 text-purple-400">Photo Gallery</h2>
        <div className="columns-3 sm:columns-3 md:columns-4 xl:columns-5 gap-4 space-y-4">
          {images.map((img, idx) => (
            <img key={idx} src={img} alt={`Gallery ${idx}`} className="rounded-lg object-cover w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
