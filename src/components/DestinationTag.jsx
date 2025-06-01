import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Bed, Users, Home, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const getIconForTag = (tag) => {
  const lowerTag = tag.toLowerCase();

  if (lowerTag.includes('bedroom')) return <Bed className="w-4 h-4 text-indigo-400" />;
  if (lowerTag.includes('people')) return <Users className="w-4 h-4 text-indigo-400" />;
  if (['resort', 'tour package', 'cabin', 'loft', 'adventure'].some(word => lowerTag.includes(word))) {
    return <Home className="w-4 h-4 text-indigo-400" />;
  }
  return <Tag className="w-4 h-4 text-indigo-400" />;
};

const DestinationTag = ({ imageSrc, name, price, details, tags = [] }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <Card className="bg-zinc-900 text-white w-full max-w-sm rounded-2xl shadow-xl overflow-hidden p-0">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />

        <CardContent className="p-5 space-y-4">
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-zinc-400">
              {details}{' '}
              <span className="text-indigo-400 underline cursor-pointer hover:text-indigo-300">
                Read More
              </span>
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
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

          <div className="flex justify-between items-center pt-2">
            <p className="text-lg font-semibold">₹{price.toLocaleString()}</p>
            <Button
              onClick={() => navigate(`/package/${encodeURIComponent(name)}`)}
              className="bg-indigo-600 hover:bg-indigo-700 text-sm px-4 py-2 rounded-xl"
            >
              View Package Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default DestinationTag;
