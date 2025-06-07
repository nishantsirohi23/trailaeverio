import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Bed, Users, Home, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button'; // ✅ Import Button

import { useNavigate } from 'react-router-dom'; // ✅ Import navigate

const getIconForTag = (tag) => {
  const lowerTag = tag.toLowerCase();
  
  if (lowerTag.includes('adventure')) return <Bed className="w-4 h-4 text-indigo-400" />;
  if (lowerTag.includes('nature')) return <Users className="w-4 h-4 text-indigo-400" />;
  if (['resort', 'tour package', 'cabin', 'loft', 'adventure'].some(word => lowerTag.includes(word))) {
    return <Home className="w-4 h-4 text-indigo-400" />;
  }
  return <Tag className="w-4 h-4 text-indigo-400" />;
};

const PackageCard = ({ imageSrc, name, details, tags = [] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="w-full"
    >
      <Card className="bg-zinc-900 text-white w-full rounded-2xl shadow-xl overflow-hidden p-0 h-full">
        {/* Increased image height and removed extra spacing */}
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {/* Completely removed CardContent padding and used direct padding */}
        <div className="pl-6 pr-6 ">
            <h3 className="text-lg font-semibold mb-1">{name}</h3>

            <p className="text-sm text-zinc-400 mb-2 line-clamp-2">
                {details}{' '}
                <span className="text-indigo-400 underline cursor-pointer hover:text-indigo-300">
                Read More
                </span>
            </p>

            <div className="flex flex-wrap gap-2 ">
                {tags.map((tag, idx) => (
                <div
                    key={idx}
                    className="flex items-center gap-1 px-2 py-1 text-xs bg-indigo-900 rounded-full border border-indigo-600 select-none"
                >
                    {getIconForTag(tag)}
                    <span>{tag}</span>
                </div>
                ))}
            </div>
            </div>
            <div className="flex justify-between items-center pt-2 pl-6 pr-10 pb-9">
            <p className="text-lg font-semibold">Starting ₹15000</p>
            <Button
              onClick={() => navigate(`/package/`)}
              className="bg-indigo-600 hover:bg-indigo-700 text-sm px-4 py-2 rounded-xl"
            >
              View Package Details
            </Button>
          </div>

      </Card>
    </motion.div>
  );
};

export default PackageCard;