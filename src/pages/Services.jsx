import React, { useState, useEffect, useRef } from 'react';
import { Plane, Globe, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  const services = [
    {
      title: "Schengen Tourist Visa",
      description: "France, Germany, Switzerland & more",
      duration: "5-15 days",
      popularity: "Most Popular",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Dubai Visa",
      description: "Quick processing in just 48 hours",
      duration: "48 hours",
      popularity: "Express",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Singapore eVisa",
      description: "Electronic visa application",
      duration: "3-5 days",
      popularity: null,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Thailand eVisa",
      description: "Online visa processing",
      duration: "3-7 days",
      popularity: null,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "USA B2 Visa Support",
      description: "Tourist visa assistance",
      duration: "30-60 days",
      popularity: null,
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "UK Tourist Visa",
      description: "Complete application support",
      duration: "15-20 days",
      popularity: null,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Australia Visitor Visa",
      description: "Tourist & business visa",
      duration: "20-30 days",
      popularity: null,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Japan Visa Assistance",
      description: "Complete documentation help",
      duration: "7-10 days",
      popularity: null,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "South Korea Tourist Visa",
      description: "K-ETA & visa processing",
      duration: "5-10 days",
      popularity: null,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Canada Visitor Visa",
      description: "Tourist visa support",
      duration: "20-30 days",
      popularity: null,
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Russia Visa Support",
      description: "Tourist visa assistance",
      duration: "10-15 days",
      popularity: null,
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Vietnam Visa on Arrival",
      description: "Quick visa processing",
      duration: "1-2 days",
      popularity: "Quick",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Turkey eVisa",
      description: "Electronic visa online",
      duration: "24 hours",
      popularity: "Express",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Egypt Visa Support",
      description: "Tourist visa assistance",
      duration: "5-7 days",
      popularity: null,
      icon: <Globe className="w-6 h-6" />
    }
  ];

  const features = [
    "Expert visa consultation",
    "Document verification",
    "Application tracking",
    "24/7 customer support"
  ];

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Extended Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-600/20 via-purple-600/8 via-purple-600/4 via-purple-600/2 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Hero Section */}
      <div className="relative overflow-hidden pb-8">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
            <div className="p-1 bg-purple-600/20 rounded-full backdrop-blur-sm border border-purple-600/30">
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/perwork.appspot.com/o/logo.png?alt=media&token=bae838ca-e626-4bf8-8e14-34a96e7120f2" // Replace with your actual logo path
                    alt="Logo"
                    className="w-16 h-16 object-contain"
                />
                </div>

            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                Visa Services
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Your trusted partner for hassle-free visa processing worldwide
            </p>
            <div className="grid grid-cols-2 sm:inline-flex sm:flex-wrap sm:justify-center gap-1 sm:gap-3 mb-12 mx-auto justify-items-center">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-1 sm:gap-2 bg-purple-600/10 px-2 sm:px-4 py-1 sm:py-2 rounded-full border border-purple-600/30 w-fit">
                  <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-purple-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm lg:text-base text-gray-300 whitespace-nowrap">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose from our comprehensive visa services for destinations worldwide
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-purple-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-600/10 hover:-translate-y-1"
            >
              {service.popularity && (
                <div className="absolute -top-2 sm:-top-3 left-2 sm:left-4">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-semibold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg">
                    {service.popularity}
                  </div>
                </div>
              )}
              
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 bg-purple-600/20 rounded-lg sm:rounded-xl border border-purple-600/30 group-hover:bg-purple-600/30 transition-colors">
                  <div className="w-4 h-4 sm:w-6 sm:h-6 text-purple-400">
                    {service.icon}
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-purple-400 transform group-hover:translate-x-1 transition-all" />
              </div>

              <h3 className="text-sm sm:text-lg font-bold mb-2 group-hover:text-purple-300 transition-colors leading-tight">
                {service.title}
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 sm:gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                  <span className="text-xs sm:text-sm text-gray-300">{service.duration}</span>
                </div>
                <button className="text-purple-400 text-xs sm:text-sm font-medium hover:text-purple-300 transition-colors">
                  Learn More
                </button>
              </div>

              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl sm:rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-black-600/10 to-black-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact our visa experts today for personalized assistance with your travel documentation
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-600/25">
                Get Free Consultation
              </button>
              <button className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 font-semibold px-4 sm:px-8 py-2 sm:py-4 text-sm sm:text-base rounded-lg sm:rounded-xl transition-all duration-300">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <Plane className="w-6 h-6 text-purple-400" />
              <span className="text-lg font-bold">Travel Agency</span>
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 Travel Agency. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;