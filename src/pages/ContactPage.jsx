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
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Please tell us hwo can we help you';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.perpenny.in/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          requirement: formData.message
        }),
      });

      if (!response.ok) throw new Error('Failed to send message');

      await response.json();
      
      toast.success('Message sent successfully! We will get back to you soon.', {
        duration: 5000,
        position: 'top-center',
        style: {
          background: '#10B981',
          color: '#fff',
          padding: '16px',
          borderRadius: '12px',
        },
      });

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
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Toaster />
      
      {/* Simplified Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-400/10 rounded-full blur-xl"></div>
      </div>

      {/* Mouse Follow Effect */}
      <div 
        className="fixed w-64 h-64 bg-gradient-radial from-pink-500/20 via-pink-500/10 to-transparent rounded-full blur-xl pointer-events-none transition-all duration-300 ease-out z-10"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          opacity: 0.4
        }}
      ></div>

      <div className="relative z-20 container mx-auto px-4 sm:px-6 py-12 max-w-6xl">
        {/* Simplified Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to embark on your dream journey? Let's make it happen together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Contact Information - Simplified */}
          <div className="space-y-6">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h2 className="text-2xl font-semibold text-pink-500 mb-6">
                Get In Touch
              </h2>
              
              <div className="space-y-5">
                {[
                  { icon: Phone, title: "Phone", info: "+1 (555) 123-4567" },
                  { icon: Mail, title: "Email", info: "hello@wanderlusttravel.com" },
                  { icon: MapPin, title: "Office", info: "123 Travel Street\nAdventure City, AC 12345" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-pink-500/10 p-3 rounded-xl border border-pink-500/20">
                      <item.icon className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{item.title}</h3>
                      <p className="text-gray-300 text-sm whitespace-pre-line">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
              <h3 className="text-xl font-semibold text-pink-500 mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span>Monday - Friday</span>
                  <span className="text-pink-400">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-800">
                  <span>Saturday</span>
                  <span className="text-pink-400">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Sunday</span>
                  <span className="text-gray-500">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Simplified */}
          <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-semibold text-pink-500 mb-6 flex items-center">
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </h2>
            
            <div className="space-y-4">
              {[
                { name: 'name', placeholder: 'Your Name', type: 'text' },
                { name: 'email', placeholder: 'Your Email', type: 'email' },
                { name: 'phone', placeholder: 'Phone Number (10 digits)', type: 'tel' }
              ].map((field) => (
                <div key={field.name} className="space-y-1">
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white placeholder-gray-500 ${
                      errors[field.name] ? 'border-red-500' : 'border-gray-700 focus:border-pink-500'
                    }`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-400 text-xs px-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}
              
              <div className="space-y-1">
                <textarea
                  name="message"
                  placeholder="Tell us about your travel plans..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-3 bg-gray-800 border rounded-lg focus:outline-none text-white placeholder-gray-500 resize-none ${
                    errors.message ? 'border-red-500' : 'border-gray-700 focus:border-pink-500'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-xs px-1">{errors.message}</p>
                )}
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 hover:opacity-90 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}