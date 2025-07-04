import React from 'react';
import { CheckCircle, Phone, MessageCircle, Mail } from 'lucide-react';

export default function FormSuccessPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon with Animation */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-pink-500 rounded-full animate-ping opacity-20"></div>
            <CheckCircle className="w-24 h-24 text-pink-500 relative z-10" />
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Got Your Request!
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Our team will connect with you shortly. 
            <br />
            Till then, you can contact us anytime through:
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Phone */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="bg-pink-500 bg-opacity-20 p-4 rounded-full mb-4">
                <Phone className="w-8 h-8 text-white" /> {/* White-colored icon */}
              </div>
              <h3 className="text-pink-500 font-semibold text-lg mb-2">Call Us</h3>
              <a 
                href="tel:9837501414"
                className="text-white hover:text-pink-400 transition-colors duration-200 text-lg font-mono"
              >
                9837501414
              </a>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="bg-pink-500 bg-opacity-20 p-4 rounded-full mb-4">
                <MessageCircle className="w-8 h-8 text-white" /> {/* White-colored icon */}
              </div>
              <h3 className="text-pink-500 font-semibold text-lg mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/919837501415"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-200 text-lg font-mono"
              >
                9837501415
              </a>
            </div>
          </div>

          {/* Email */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-pink-500 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex flex-col items-center">
              <div className="bg-pink-500 bg-opacity-20 p-4 rounded-full mb-4">
                <Mail className="w-8 h-8 text-white" /> {/* White-colored icon */}
              </div>
              <h3 className="text-pink-500 font-semibold text-lg mb-2">Email Us</h3>
              <a 
                href="mailto:aeroviaholidays@gmail.com"
                className="text-white hover:text-pink-400 transition-colors duration-200 text-lg break-all"
              >
                aeroviaholidays@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Additional Message */}
        <div className="text-center">
          <p className="text-gray-400 text-lg">
            We appreciate your interest and look forward to serving you!
          </p>
          
          {/* Decorative Element */}
          <div className="mt-8 flex justify-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
              <div className="w-3 h-3 bg-pink-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}