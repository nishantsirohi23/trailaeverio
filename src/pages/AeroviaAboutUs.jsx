import React, { useState, useEffect, useRef } from 'react';
import { Plane, MapPin, Users, Award, Star, ArrowRight, Globe, Heart, Camera, Mountain, Sparkles, Send } from 'lucide-react';

const AeroviaAboutUs = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = [
    { icon: Users, number: '10000+', label: 'Happy Travelers', color: 'from-pink-400 to-rose-500' },
    { icon: MapPin, number: '120+', label: 'Destinations', color: 'from-purple-400 to-pink-500' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'from-rose-400 to-pink-600' },
    { icon: Star, number: '4.9', label: 'Average Rating', color: 'from-pink-300 to-rose-400' }
  ];

  const team = [
    { 
      name: 'Kamal JIJU', 
      role: 'Founder & CEO', 
      bio: 'Visionary leader with 20+ years in luxury travel',
      gradient: 'from-pink-400 to-rose-500'
    },
    { 
      name: 'Ashi DIDI', 
      role: 'Travel Director', 
      bio: 'Expert in crafting bespoke travel experiences',
      gradient: 'from-purple-400 to-pink-500'
    },
    { 
      name: 'Poornima', 
      role: 'Experience Designer', 
      bio: 'Creative mind behind our unique journeys',
      gradient: 'from-rose-400 to-pink-600'
    },
    { 
      name: 'Honey', 
      role: 'Adventure Specialist', 
      bio: 'Explorer of hidden gems and untold stories',
      gradient: 'from-pink-300 to-rose-400'
    }
  ];

  const values = [
    { 
      icon: Heart, 
      title: 'Passion First', 
      desc: 'Every journey begins with genuine love for discovery and authentic cultural connections.',
      gradient: 'from-pink-400 to-rose-500'
    },
    { 
      icon: Globe, 
      title: 'Global Excellence', 
      desc: 'Curating extraordinary experiences across six continents with local expertise.',
      gradient: 'from-purple-400 to-pink-500'
    },
    { 
      icon: Camera, 
      title: 'Authentic Stories', 
      desc: 'Creating meaningful moments that become cherished memories for a lifetime.',
      gradient: 'from-rose-400 to-pink-600'
    },
    { 
      icon: Mountain, 
      title: 'Boundless Adventure', 
      desc: 'Pushing beyond ordinary to discover the extraordinary in every destination.',
      gradient: 'from-pink-300 to-rose-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black to-black text-white overflow-hidden relative">
      
      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Gradient Orbs */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full opacity-10 blur-3xl transition-all duration-1000"
          style={{ 
            background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-5 blur-2xl"
          style={{ 
            background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)',
            right: `${100 - mousePosition.x * 0.5}%`,
            bottom: `${100 - mousePosition.y * 0.3}%`,
            transform: 'translate(50%, 50%)'
          }}
        />
        
        {/* Floating Particles */}
        {/* {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float-particle ${5 + Math.random() * 100}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))} */}
      </div>

      {/* Animated Lines Network */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full">
          {[...Array(20)].map((_, i) => (
            <line
              key={i}
              x1={`${(i * 5) % 100}%`}
              y1="0%"
              x2={`${((i * 5) + 20) % 100}%`}
              y2="100%"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              opacity="0.3"
              style={{
                animation: `draw-line ${8 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" stopOpacity="0" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <style jsx>{`
        @keyframes float-particle {
          0% { transform: translateY(100vh) translateX(-10px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100px) translateX(10px); opacity: 0; }
        }
        @keyframes draw-line {
          0%, 100% { stroke-dasharray: 0 100; }
          50% { stroke-dasharray: 100 100; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(236, 72, 153, 0.3), 0 0 40px rgba(236, 72, 153, 0.1); }
          50% { box-shadow: 0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.2); }
        }
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .text-shimmer {
          background: linear-gradient(90deg, #ffffff 0%, #ec4899 50%, #ffffff 100%);
          background-size: 200% 100%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-shimmer 3s ease-in-out infinite;
        }
      `}</style>


      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative z-10 py-20 lg:py-32 px-6 lg:px-8 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="relative inline-block mb-12">
          <div className="p-8 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-rose-500/20 rounded-3xl backdrop-blur-xl border border-pink-500/30 relative">
            <img
                src="src/assets/logo.png" // Replace this with your actual image path
                alt="Globe"
                className="w-24 h-24 mx-auto"
                style={{ animationDuration: '20s' }}
            />
          
            </div>

          </div>
          
          <h2 className="text-7xl lg:text-9xl font-black mb-8 leading-tight">
            <span className="text-shimmer">About</span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent">
              Aerovia
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
            We don't just plan trips—we architect experiences that transform perspectives, 
            forge connections, and create stories worth telling for generations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 rounded-full font-semibold text-lg shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 pulse-glow">
              <span className="flex items-center space-x-3">
                <span>Discover Our Magic</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <button className="px-10 py-5 border-2 border-pink-400/50 rounded-full font-semibold text-lg hover:bg-pink-400/10 hover:border-pink-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Watch Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`group text-center p-8 lg:p-10 bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 rounded-3xl backdrop-blur-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2`}
              >
                <div className={`w-20 h-20 mx-auto mb-6 p-5 bg-gradient-to-br ${stat.color} rounded-2xl shadow-2xl group-hover:shadow-pink-500/30 transition-all duration-300`}>
                  <stat.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                  {stat.number}
                </h3>
                <p className="text-gray-400 font-medium group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full backdrop-blur-sm border border-pink-500/30">
                <Heart className="w-6 h-6 text-pink-400" />
                <span className="text-pink-300 font-semibold">Our Journey</span>
              </div>
              
              <h3 className="text-5xl lg:text-6xl font-bold">
                <span className="text-shimmer">Fifteen Years</span>
                <br />
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  of Wonder
                </span>
              </h3>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  In 2009, we began with a revolutionary idea: travel should be transformative, 
                  not just transactional. What started as a boutique agency in a small office 
                  has evolved into a global network of dream architects.
                </p>
                <p>
                  Today, we've crafted over 50,000 unique journeys, each one meticulously 
                  designed to create profound connections between travelers and the world's 
                  most extraordinary destinations.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full border border-pink-500/20 backdrop-blur-sm">
                  <span className="text-pink-300 font-semibold">Award-Winning Service</span>
                </div>
                <div className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm">
                  <span className="text-purple-300 font-semibold">Global Recognition</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative p-12 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-rose-500/10 rounded-3xl backdrop-blur-xl border border-pink-500/20 gentle-float">
                <div className="absolute top-6 right-6">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-8xl mb-4 animate-bounce" style={{ animationDuration: '3s' }}>🌍</div>
                  <h4 className="text-2xl font-bold text-pink-300 mb-2">Our Global Impact</h4>
                </div>
                
                <div className="space-y-6">
                  {[
                    { year: '2009', milestone: 'Founded with a dream', color: 'bg-pink-400' },
                    { year: '2015', milestone: 'Expanded to 50+ destinations', color: 'bg-purple-400' },
                    { year: '2020', milestone: 'Digital transformation', color: 'bg-rose-400' },
                    { year: '2024', milestone: '50+ adventures crafted', color: 'bg-pink-300' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className={`w-4 h-4 ${item.color} rounded-full shadow-lg group-hover:scale-125 transition-transform duration-300`} 
                           style={{ animation: `pulse 2s ease-in-out infinite`, animationDelay: `${index * 0.5}s` }} />
                      <div className="flex-1">
                        <div className="flex items-center space-x-3">
                          <span className="text-pink-300 font-bold text-lg">{item.year}</span>
                          <span className="text-gray-300">{item.milestone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full backdrop-blur-sm border border-pink-500/30 mb-8">
              <Sparkles className="w-6 h-6 text-pink-400" />
              <span className="text-pink-300 font-semibold">What Drives Us</span>
            </div>
            
            <h3 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-shimmer">Our Core</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Values
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The fundamental principles that guide every adventure we create and every relationship we build
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`group p-10 bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-black/30 rounded-3xl backdrop-blur-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-102 hover:-translate-y-1 gentle-float`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <div className={`w-16 h-16 mb-8 p-4 bg-gradient-to-br ${value.gradient} rounded-2xl shadow-2xl group-hover:shadow-pink-500/30 transition-all duration-300 gentle-float`}>
                  <value.icon className="w-full h-full text-white" />
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">
                  {value.title}
                </h4>
                
                <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full backdrop-blur-sm border border-pink-500/30 mb-8">
              <Users className="w-6 h-6 text-pink-400" />
              <span className="text-pink-300 font-semibold">The Dream Team</span>
            </div>
            
            <h3 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-shimmer">Meet The</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Visionaries
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              The passionate explorers and creative minds who bring your travel dreams to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`group text-center p-8 bg-gradient-to-br from-gray-800/30 via-gray-900/30 to-black/30 rounded-3xl backdrop-blur-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 gentle-float`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${member.gradient} rounded-2xl shadow-2xl group-hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center text-4xl gentle-float`}>
                  {index === 0 && '👩‍💼'}
                  {index === 1 && '👨‍✈️'}
                  {index === 2 && '👩‍🎨'}
                  {index === 3 && '🏔️'}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300">
                  {member.name}
                </h4>
                
                <p className="text-pink-400 font-semibold mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-16 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-rose-500/20 rounded-3xl backdrop-blur-xl border border-pink-500/30 text-center gentle-float">
            
            <div className="absolute top-8 right-8">
              <Heart className="w-8 h-8 text-pink-400 animate-pulse" />
            </div>
            
            <h3 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="text-shimmer">Ready to</span>
              <br />
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                Explore?
              </span>
            </h3>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your extraordinary adventure awaits. Let us craft a journey that will redefine 
              your understanding of what travel can be.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group px-12 py-6 bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-pink-500/30 transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center space-x-3">
                <Send className="w-6 h-6" />
                <span>Start Your Journey</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </span>
            </button>

              <button className="px-12 py-6 border-2 border-pink-400/50 rounded-full font-bold text-lg hover:bg-pink-400/10 hover:border-pink-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Explore Destinations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-16 px-6 lg:px-8 border-t border-pink-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-pink-500 via-rose-500 to-pink-600 rounded-2xl shadow-2xl pulse-glow">
                <Plane className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-shimmer">Aerovia Holidays</h4>
                <p className="text-pink-300 font-light">Crafting Dreams Into Reality</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transforming wanderlust into unforgettable journeys since 2009.
            </p>
            
            <div className="flex justify-center space-x-8 text-sm text-gray-500">
              <span>© 2024 Aerovia Holidays</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Careers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AeroviaAboutUs;