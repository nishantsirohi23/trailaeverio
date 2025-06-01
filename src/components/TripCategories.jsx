import React from "react";
import {
  Diamond,
  Mountain,
  Users,
  Heart,
  Utensils,
} from "lucide-react";

const categories = [
  {
    icon: Diamond,
    title: "Luxury",
    subtitle: "Premium experiences",
    color: "text-purple-400",
  },
  {
    icon: Mountain,
    title: "Adventure",
    subtitle: "Thrilling activities",
    color: "text-green-400",
  },
  {
    icon: Users,
    title: "Family",
    subtitle: "Kid-friendly trips",
    color: "text-pink-400",
  },
  {
    icon: Heart,
    title: "Romantic",
    subtitle: "Couples getaways",
    color: "text-red-400",
  },
  {
    icon: Utensils,
    title: "Culinary",
    subtitle: "Food experiences",
    color: "text-yellow-400",
  },
];

function TripCategories() {
  return (
    <div className="bg-black text-white py-16 sm:py-20 px-2 sm:px-4">
      <style>
        {`
          .category-scroll {
            display: flex;
            gap: 12px;
            overflow-x: auto;
            padding: 0 8px;
            justify-content: flex-start;
          }

          @media (min-width: 640px) {
            .category-scroll {
              justify-content: center;
              gap: 16px;
              padding: 0 16px;
            }
          }

          .category-scroll::-webkit-scrollbar {
            display: none;
          }

          .category-scroll {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;     /* Firefox */
          }
        `}
      </style>

      <h2 className="text-xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Browse by Category
      </h2>

      <div className="category-scroll">
        {categories.map((category, index) => (
          <div
            key={index}
            className="min-w-[140px] sm:min-w-[180px] bg-zinc-900 border border-zinc-600 rounded-lg px-4 sm:px-6 py-4 sm:py-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-95"
            style={{
              minWidth: window.innerWidth < 640 ? '140px' : '180px',
              backgroundColor: '#18181b',
              border: '1px solid #52525b',
              borderRadius: '12px',
              padding: window.innerWidth < 640 ? '16px' : '24px',
              textAlign: 'center',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <category.icon
              className={category.color}
              style={{
                width: window.innerWidth < 640 ? '20px' : '28px',
                height: window.innerWidth < 640 ? '20px' : '28px',
                marginBottom: window.innerWidth < 640 ? '8px' : '12px',
              }}
            />
            <h3
              className={category.color}
              style={{
                fontSize: window.innerWidth < 640 ? '1rem' : '1.125rem',
                fontWeight: '600',
                marginBottom: '4px',
              }}
            >
              {category.title}
            </h3>
            <p
              style={{
                fontSize: window.innerWidth < 640 ? '0.75rem' : '0.875rem',
                color: '#a1a1aa',
              }}
            >
              {category.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TripCategories;
