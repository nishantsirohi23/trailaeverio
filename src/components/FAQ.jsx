import React, { useEffect, useState } from 'react';
import QuesAns from './QuesAns';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const faqs = [
  {
    question: 'How do I book a travel package on PropTrak?',
    answer: 'Explore our curated packages and use our user-friendly booking system to plan your perfect trip.',
  },
  {
    question: 'What documents do I need to travel internationally?',
    answer: 'Ensure you have a valid passport, visa (if required), and any destination-specific travel documents.',
  },
  {
    question: 'How can I contact a PropTrak travel advisor?',
    answer: 'Our experienced travel advisors are available via chat, phone, or email to help with your plans.',
  },
  {
    question: 'Can I customize a travel package with PropTrak?',
    answer: 'Absolutely! We offer fully customizable travel experiences tailored to your preferences.',
  },
  {
    question: 'Does PropTrak offer group travel discounts?',
    answer: 'Yes! We provide special rates and packages for groups, corporate trips, and family tours.',
  },
];

const getItemsPerSlide = (width) => {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
};

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(getItemsPerSlide(window.innerWidth));

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(getItemsPerSlide(window.innerWidth));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(faqs.length / itemsPerSlide);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  const startIndex = currentIndex * itemsPerSlide;
  const visibleFaqs = faqs.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <section className="w-full px-6 py-12 bg-black text-white">
  <div className="max-w-7xl mx-auto">
    <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
      <div className="max-w-xl">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-zinc-400 mt-2">
          Quick answers about PropTrak’s travel services.
        </p>
      </div>
      <Button variant="outline" className="bg-zinc-800 text-white hover:bg-zinc-700">
        View All FAQ's
      </Button>
    </div>

    <div className={`grid gap-6 mb-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}>
      {visibleFaqs.map((faq, index) => (
        <QuesAns key={index} {...faq} />
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

export default FAQ;
