import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, Plane } from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }
    
    // Phone validation (10 digits)
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else {
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Phone number must be 10 digits';
      }
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us about your travel plans';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('http://192.168.31.61:5003/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          requirement: formData.message
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      toast.success('Message sent successfully! We will get back to you soon.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      setErrors({ name: '', email: '', phone: '', message: '' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again later.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#EF4444',
          color: '#fff',
          padding: '16px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Toast Notifications */}
      <Toaster />
      
      {/* Animated Background with Glowing Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-600/5 rounded-full blur-2xl animate-bounce"></div>
        
        {/* Vertical Glowing Lines */}
        <div className="absolute top-0 left-1/6 w-px h-full bg-gradient-to-b from-transparent via-pink-500/60 to-transparent animate-pulse shadow-lg shadow-pink-500/50" style={{filter: 'drop-shadow(0 0 6px rgba(236, 72, 153, 0.8))'}}></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400/50 to-transparent animate-pulse delay-500 shadow-lg shadow-pink-400/50" style={{filter: 'drop-shadow(0 0 4px rgba(244, 114, 182, 0.7))'}}></div>
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-pink-600/70 to-transparent animate-pulse delay-1000 shadow-lg shadow-pink-600/60" style={{filter: 'drop-shadow(0 0 8px rgba(219, 39, 119, 0.9))'}}></div>
        <div className="absolute top-0 left-2/3 w-px h-full bg-gradient-to-b from-transparent via-pink-500/55 to-transparent animate-pulse delay-700 shadow-lg shadow-pink-500/45" style={{filter: 'drop-shadow(0 0 5px rgba(236, 72, 153, 0.6))'}}></div>
        <div className="absolute top-0 right-1/6 w-px h-full bg-gradient-to-b from-transparent via-pink-400/45 to-transparent animate-pulse delay-1200 shadow-lg shadow-pink-400/40" style={{filter: 'drop-shadow(0 0 3px rgba(244, 114, 182, 0.5))'}}></div>
        
        {/* Horizontal Glowing Lines */}
        <div className="absolute left-0 top-1/6 w-full h-px bg-gradient-to-r from-transparent via-pink-500/60 to-transparent animate-pulse delay-300 shadow-lg shadow-pink-500/50" style={{filter: 'drop-shadow(0 0 6px rgba(236, 72, 153, 0.8))'}}></div>
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-pink-400/50 to-transparent animate-pulse delay-800 shadow-lg shadow-pink-400/50" style={{filter: 'drop-shadow(0 0 4px rgba(244, 114, 182, 0.7))'}}></div>
        <div className="absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-pink-600/70 to-transparent animate-pulse delay-400 shadow-lg shadow-pink-600/60" style={{filter: 'drop-shadow(0 0 8px rgba(219, 39, 119, 0.9))'}}></div>
        <div className="absolute left-0 top-2/3 w-full h-px bg-gradient-to-r from-transparent via-pink-500/55 to-transparent animate-pulse delay-1100 shadow-lg shadow-pink-500/45" style={{filter: 'drop-shadow(0 0 5px rgba(236, 72, 153, 0.6))'}}></div>
        <div className="absolute left-0 bottom-1/6 w-full h-px bg-gradient-to-r from-transparent via-pink-400/45 to-transparent animate-pulse delay-600 shadow-lg shadow-pink-400/40" style={{filter: 'drop-shadow(0 0 3px rgba(244, 114, 182, 0.5))'}}></div>
      </div>

      {/* Mouse Follow Light Effect */}
      <div 
        className="fixed w-96 h-96 bg-gradient-radial from-pink-500/30 via-pink-500/10 to-transparent rounded-full blur-3xl pointer-events-none transition-all duration-300 ease-out z-10"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          opacity: 0.6
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-6 py-16 max-w-7xl">
        {/* Header with 3D Effect */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent blur-xl rounded-full"></div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 relative">
            <span 
              className="bg-gradient-to-r from-pink-500 via-pink-500 to-pink-500 bg-clip-text text-transparent drop-shadow-2xl"
              style={{
                textShadow: '0 0 30px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)'
              }}
            >
              Contact
            </span>
            <br />
            <span className="text-pink-500 animate-pulse">Us</span>
          </h1>
          <div className="flex items-center justify-center space-x-3 mb-4">
           
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Ready to embark on your dream journey? Let's make it happen together.
            </p>
           
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information - 3D Cards */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-pink-600/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-8 rounded-2xl border border-pink-500/30 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/25">
                <h2 className="text-3xl font-bold text-pink-500 mb-8 flex items-center">
                  <span className="mr-3">✨</span>
                  Get In Touch
                </h2>
                
                <div className="space-y-6">
                  {[
                    { icon: Phone, title: "Phone", info: "+1 (555) 123-4567", color: "from-pink-500 to-pink-600" },
                    { icon: Mail, title: "Email", info: "hello@wanderlusttravel.com", color: "from-pink-400 to-pink-500" },
                    { icon: MapPin, title: "Office", info: "123 Travel Street\nAdventure City, AC 12345", color: "from-pink-600 to-pink-700" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group/item hover:transform hover:translate-x-2 transition-all duration-300">
                      <div className={`bg-gradient-to-r ${item.color} p-4 rounded-2xl shadow-lg group-hover/item:shadow-2xl group-hover/item:shadow-pink-500/50 transition-all duration-300`}>
                        <item.icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white group-hover/item:text-pink-300 transition-colors">{item.title}</h3>
                        <p className="text-gray-300 whitespace-pre-line">{item.info}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Office Hours Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-pink-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl p-6 rounded-2xl border border-pink-500/30 transform hover:scale-105 transition-all duration-500">
                <h3 className="text-2xl font-bold text-pink-500 mb-4 flex items-center">
                  <span className="mr-2">🕒</span>
                  Office Hours
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-pink-500/10 transition-colors">
                    <span>Monday - Friday</span>
                    <span className="text-pink-400 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-pink-500/10 transition-colors">
                    <span>Saturday</span>
                    <span className="text-pink-400 font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center p-2 rounded-lg hover:bg-pink-500/10 transition-colors">
                    <span>Sunday</span>
                    <span className="text-gray-500 font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - 3D Interactive */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-pink-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-2xl p-8 rounded-3xl border border-pink-500/40 transform hover:scale-[1.02] transition-all duration-700 shadow-2xl">
              <h2 className="text-3xl font-bold text-pink-500 mb-8 flex items-center">
                <Send className="w-8 h-8 mr-3 animate-pulse" />
                Send Message
              </h2>
              
              <div className="space-y-6">
                {[
                  { name: 'name', placeholder: 'Your Name', type: 'text' },
                  { name: 'email', placeholder: 'Your Email', type: 'email' },
                  { name: 'phone', placeholder: 'Your Phone Number (10 digits)', type: 'tel' }
                ].map((field, index) => (
                  <div key={field.name} className="relative group/input">
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className={`w-full px-6 py-4 bg-white border-2 rounded-2xl focus:outline-none transition-all duration-300 text-black placeholder-gray-500 transform focus:scale-[1.02] ${
                        errors[field.name] 
                          ? 'border-red-500 focus:border-red-500 shadow-lg shadow-red-500/25' 
                          : 'border-gray-300 focus:border-pink-500 group-hover/input:border-pink-400 focus:shadow-lg focus:shadow-pink-500/25'
                      }`}
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                      }}
                    />
                    {errors[field.name] && (
                      <p className="text-red-400 text-sm mt-2 px-2 animate-pulse">{errors[field.name]}</p>
                    )}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none ${
                      errors[field.name] 
                        ? 'bg-gradient-to-r from-red-500/10 to-transparent' 
                        : 'bg-gradient-to-r from-pink-500/10 to-transparent'
                    }`}></div>
                  </div>
                ))}
                
                <div className="relative group/input">
                  <textarea
                    name="message"
                    placeholder="Tell us about your dream destination... ✈️"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full px-6 py-4 bg-white border-2 rounded-2xl focus:outline-none transition-all duration-300 text-black placeholder-gray-500 resize-none transform focus:scale-[1.02] ${
                      errors.message 
                        ? 'border-red-500 focus:border-red-500 shadow-lg shadow-red-500/25' 
                        : 'border-gray-300 focus:border-pink-500 group-hover/input:border-pink-400 focus:shadow-lg focus:shadow-pink-500/25'
                    }`}
                    style={{
                      animation: 'fadeInUp 0.6s ease-out 0.3s both'
                    }}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-2 px-2 animate-pulse">{errors.message}</p>
                  )}
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover/input:opacity-100 transition-opacity duration-300 pointer-events-none ${
                    errors.message 
                      ? 'bg-gradient-to-r from-red-500/10 to-transparent' 
                      : 'bg-gradient-to-r from-pink-500/10 to-transparent'
                  }`}></div>
                </div>
                
                <button
                  onClick={handleSubmit}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  disabled={isSubmitting}
                  className="relative w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-black font-bold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 group/button overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out 0.4s both'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/button:translate-x-full transition-transform duration-700"></div>
                  {isSubmitting ? (
                    <div className="relative z-10 flex items-center">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      <Send className={`w-6 h-6 transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
                      <span className="relative z-10">Send Message</span>
                    </>
                  )}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/50 to-pink-600/50 blur-xl opacity-0 group-hover/button:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}