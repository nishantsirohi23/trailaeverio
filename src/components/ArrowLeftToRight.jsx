import React from 'react';

export default function ArrowLeftToRight() {
  const stops = [
    {
      x: 200,
      y: 120,
      img: 'https://plus.unsplash.com/premium_photo-1661962305764-375ef76a3fb5?w=900&auto=format&fit=crop&q=60',
      country: 'France'
    },
    {
      x: 450,
      y: 160,
      img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=900&auto=format&fit=crop&q=60',
      country: 'Italy'
    },
    {
      x: 700,
      y: 200,
      img: 'https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?w=900&auto=format&fit=crop&q=60',
      country: 'Switzerland'
    },
    {
      x: 950,
      y: 240,
      img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&auto=format&fit=crop&q=60',
      country: 'Germany'
    }
  ];

  return (
    <div className="relative w-full h-[30vh] sm:h-[40vh] bg-black">
      <svg
        viewBox="0 0 1000 300"
        className="absolute inset-0 w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="glowGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ec4899" />
            <stop offset="50%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <clipPath id="circleClip">
            <circle cx="36" cy="36" r="36" />
          </clipPath>
          <style>{`
            .animate-glow {
              stroke-dasharray: 10, 8;
              animation: glow 2s linear infinite;
            }
            @keyframes glow {
              0% { stroke-dashoffset: 0; }
              100% { stroke-dashoffset: -36; }
            }
            @keyframes jump-dot {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-1.5px); }
            }
          `}</style>
        </defs>

        <path
          d="M0 0 C 100 150, 300 250, 400 150 C 500 100, 600 200, 700 150 C 800 100, 900 250, 1000 280"
          stroke="url(#glowGradient)"
          strokeWidth="3"
          className="animate-glow"
          fill="none"
        />

        {stops.map((stop, idx) => (
          <g key={idx} style={{ animation: `jump-dot 1s ease-in-out ${idx * 0.2}s infinite` }}>
            <foreignObject
              x={stop.x - 36}
              y={stop.y - 36}
              width="72"
              height="72"
              style={{ zIndex: 20 }}
            >
              <div className="w-full h-full" style={{ clipPath: 'circle(50%)' }}>
                <img
                  src={stop.img}
                  alt={`Stop ${idx + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    </div>
  );
}