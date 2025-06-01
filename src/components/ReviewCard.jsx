import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ReviewCard = (props) => {
  const {
    username = "Anonymous",
    rating = 5,
    location = "Unknown",
    title = "Review Title",
    review = "Review content goes here...",
    profileUrl = ""
  } = props;

  const stars = Array(5).fill(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="bg-black text-white border border-gray-800 rounded-2xl shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center gap-1 mb-4">
            {stars.map((_, index) => (
              <Star
                key={index}
                className={`w-5 h-5 ${index < rating ? "text-yellow-400" : "text-gray-600"}`}
                fill={index < rating ? "#facc15" : "none"}
              />
            ))}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-300 mb-6">{review}</p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={profileUrl} alt={username} />
              <AvatarFallback>{username.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-white">{username}</p>
              <p className="text-sm text-gray-400">{location}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ReviewCard;
