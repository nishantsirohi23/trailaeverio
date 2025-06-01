"use client";

import React, { useState, useEffect } from "react";
import CustomerCard from "./Card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/src/assets/building.jpg",
    text: "Explore serene beaches and vibrant coastal towns.",
  },
  {
    image: "/src/assets/logo.png",
    text: "Experience the thrill of mountain adventures.",
  },
  {
    image: "/src/assets/Photo.jpg",
    text: "Immerse yourself in rich cultural heritage.",
  },
  {
    image: "/src/assets/building.jpg",
    text: "Discover hidden gems across the globe.",
  },
  {
    image: "/src/assets/building.jpg",
    text: "Craft memories that last a lifetime.",
  },
];

function Base() {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  return (
<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center min-h-screen bg-black text-white px-6 md:px-16 py-16">
{/* Left Section (Text) */}
      <div className="space-y-6 max-w-2xl w-full">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Discover Your <span className="text-purple-500">Dream</span>
          <br /> Adventure with <span className="text-purple-500">Aeverio Holidays</span>
        </motion.h1>

        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            className="text-white/70 text-lg min-h-[60px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {slides[currentIndex].text}
          </motion.p>
        </AnimatePresence>

        <div className="flex gap-4 mt-6">
          <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg">
            Learn More
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg">
            Browse Packages
          </Button>
        </div>

        {/* Responsive Customer Stats Row */}
        <div className="grid grid-cols-3 gap-4 pt-10">
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
        className="hidden lg:flex justify-center items-center w-full h-full"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={slides[currentIndex].image}
            src={slides[currentIndex].image}
            alt="Travel"
            className="w-full max-h-[85vh] h-auto rounded-2xl shadow-2xl object-cover"
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
