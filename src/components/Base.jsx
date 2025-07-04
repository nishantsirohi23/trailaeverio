"use client";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import CustomerCard from "./Card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { X } from 'lucide-react';

const slides = [
  {
    image: "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.52.57%20PM.jpeg?alt=media&token=7899eaa4-6e4e-4dda-84c8-e61c876ea0eb",
    text: "Explore serene beaches and vibrant coastal towns.",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.53.13%20PM.jpeg?alt=media&token=b753b538-b75c-4b2a-a2d1-055185b3a81e",
    text: "Experience the thrill of mountain adventures.",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.53.27%20PM.jpeg?alt=media&token=267d76fd-2a12-47b4-aa24-285a56735c57",
    text: "Immerse yourself in rich cultural heritage.",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.53.46%20PM.jpeg?alt=media&token=01483c8b-e298-4164-be58-26458dc081b6",
    text: "Discover hidden gems across the globe.",
  },
  {
    image: "https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/0aeverioholi%2Fdestinations%2FWhatsApp%20Image%202025-06-02%20at%2010.58.29%20PM.jpeg?alt=media&token=7d479600-49fe-4575-9aac-e537fd2559a1",
    text: "Craft memories that last a lifetime.",
  },
];

function Base() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const content = [
    { message: "7k+", underText: "Happy Customers" },
    { message: "20k+", underText: "Travel Packages" },
    { message: "16+", underText: "Years Experience" },
  ];

  const features = [
    {
      title: "Personalized Itineraries",
      description: "Tailor-made travel plans designed specifically for your preferences and interests."
    },
    {
      title: "Local Expertise",
      description: "Our team includes locals who know hidden gems you won't find in guidebooks."
    },
    {
      title: "Seamless Experience",
      description: "From booking to return, we handle every detail for a stress-free journey."
    },
    {
      title: "Sustainable Travel",
      description: "We prioritize eco-friendly accommodations and responsible tourism practices."
    }
  ];

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center min-h-[90vh] md:min-h-screen bg-black text-white px-4 sm:px-6 md:px-16 py-10 md:py-16 overflow-hidden">
      {/* Learn More Card Overlay */}
      <AnimatePresence>
        {showLearnMore && (
          <motion.div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative w-full max-w-md md:max-w-2xl bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl my-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Dark glass effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-800/90"></div>
              
              {/* Close button */}
              <button 
                onClick={() => setShowLearnMore(false)}
                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-gray-700/80 hover:bg-gray-600/80 transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
              
              {/* Card content */}
              <div className="relative z-0 p-4 sm:p-6 md:p-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                  Why <span className="text-purple-400">Aerovia Holidays</span> Stands Out
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-800/50 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border border-gray-700/50 hover:border-purple-400/50 transition-all"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold text-purple-300 mb-1 sm:mb-2">{feature.title}</h3>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
                
                <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl border border-gray-700/50">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-1 sm:mb-2 md:mb-3">Our Promise</h3>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">
                    At Aerovia Holidays, we don't just plan trips - we craft experiences. 
                    With our 16+ years in the industry, we've perfected the art of travel, 
                    ensuring every journey with us is unforgettable, authentic, and tailored 
                    specifically to your dreams.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Left Section */}
      <div className="space-y-4 sm:space-y-6 max-w-2xl w-full">
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug sm:leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Your <span className="text-purple-500">Dream</span>
          <br /> Adventure with <span className="text-purple-500">Aerovia Holidays</span>
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            className="text-white/70 text-sm sm:text-base md:text-lg min-h-[40px] sm:min-h-[60px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {slides[currentIndex].text}
          </motion.p>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6">
          <Button 
            onClick={() => setShowLearnMore(true)}
            variant="outline" 
            className="bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
          >
            Learn More
          </Button>
          <Button
            onClick={() => navigate('/explorer')}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base"
          >
            Browse Packages
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 pt-6 sm:pt-8 md:pt-10">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <CustomerCard message={item.message} underText={item.underText} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right Section (Image Carousel) */}
      <motion.div
        className="hidden lg:flex justify-center items-center w-full h-[50vh] lg:h-[70vh] xl:h-[80vh]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[currentIndex].image}
            src={slides[currentIndex].image}
            alt="Travel"
            className="w-full h-full object-cover rounded-2xl shadow-2xl"
            initial={{ opacity: 0.3, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Base;