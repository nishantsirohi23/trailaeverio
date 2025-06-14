// Finalized Thailand Tour Page with updated color-coded itinerary and enhanced enquiry form
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import {
  Plane, Calendar, Users, Star, ChevronDown, ChevronUp,
  CheckCircle, X, Clock
} from 'lucide-react';

const ThailandTourPage = () => {
  const { title } = useParams(); // 🧠 fetches 'title' from /exp/:title
  const [data, setData] = useState(null);
  const [expandedDay, setExpandedDay] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [name, setName] = useState('');
  const [passengers, setPassengers] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
    useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
  useEffect(() => {
   
    const url = `http://192.168.31.61:5003/api/packages/${title}`;

    console.log('Fetching from URL:', url); // ✅ Log the URL
    axios.get(`http://192.168.31.61:5003/api/packages/${title}`)
      .then(res => setData(res.data.data))
      .catch(err => console.error(err));
  }, []);

  const iconMap = {
    plane: <Plane className="w-5 h-5" />, waves: '🌊', building: '🏢', heart: '❤️'
  };

  const typeColors = {
    activity: 'bg-yellow-900/20 text-yellow-300',
    travel: 'bg-blue-900/20 text-blue-300',
    meal: 'bg-green-900/20 text-green-300',
    entertainment: 'bg-yellow-900/20 text-yellow-300',
    rest: 'bg-orange-900/20 text-orange-300',
    transport: 'bg-cyan-900/20 text-cyan-300',
    default: 'bg-green-900/20 text-green-300'
  };

  // Shimmer Loading Component
  const ShimmerLoading = () => {
    return (
      <div className="bg-black text-white min-h-screen pb-20 animate-pulse">
        {/* Header Shimmer */}
        <div className="text-center py-12 px-4">
          <div className="h-12 bg-purple-900/30 rounded-full w-3/4 mx-auto mb-6"></div>
          <div className="h-6 bg-purple-900/30 rounded-full w-1/2 mx-auto mb-8"></div>
          <div className="h-4 bg-purple-900/30 rounded-full w-2/3 mx-auto"></div>
        </div>

        {/* Image Gallery Shimmer */}
        <div className="flex flex-col items-center mb-12 px-4">
          <div className="w-4/5 h-[400px] bg-purple-900/30 rounded-xl mb-4"></div>
          <div className="flex gap-4 justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-20 h-16 bg-purple-900/30 rounded-lg"></div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-4 gap-8">
          <div className="flex-1">
            {/* Info Cards Shimmer */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="border border-purple-500/30 rounded-xl p-4 bg-purple-900/10 h-24"></div>
              ))}
            </div>

            {/* Itinerary Shimmer */}
            <section>
              <div className="h-10 bg-purple-900/30 rounded-full w-1/3 mx-auto mb-8"></div>
              <div className="space-y-6">
                {[1, 2, 3].map((day) => (
                  <div key={day} className="bg-purple-900/10 rounded-xl border border-purple-700/30 h-40"></div>
                ))}
              </div>
            </section>
          </div>

          {/* Form Shimmer */}
          <div className="lg:w-1/3 h-fit border border-purple-700/30 bg-gradient-to-b from-purple-900/10 to-black p-6 rounded-2xl shadow-xl">
            <div className="h-8 bg-purple-900/30 rounded-full w-1/2 mx-auto mb-6"></div>
            <div className="space-y-5">
              <div className="w-full bg-zinc-900/30 h-12 rounded-lg"></div>
              <div className="w-full bg-zinc-900/30 h-12 rounded-lg"></div>
              <div className="w-full bg-zinc-900/30 h-12 rounded-lg"></div>
              <div className="w-full bg-purple-900/30 h-12 rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Inclusions/Exclusions Shimmer */}
        <section className="px-4 py-12 max-w-6xl mx-auto">
          <div className="h-10 bg-purple-900/30 rounded-full w-1/3 mx-auto mb-8"></div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-900/10 p-4 rounded-xl border border-green-700/30 h-64"></div>
            <div className="bg-red-900/10 p-4 rounded-xl border border-red-700/30 h-64"></div>
          </div>
        </section>

        {/* Important Info Shimmer */}
        <section className="px-4 py-12 max-w-6xl mx-auto">
          <div className="h-10 bg-purple-900/30 rounded-full w-1/3 mx-auto mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-purple-900/10 p-6 rounded-xl border border-purple-700/30 h-48"></div>
            ))}
          </div>
        </section>

        {/* CTA Shimmer */}
        <section className="px-4 py-12 max-w-4xl mx-auto text-center">
          <div className="h-10 bg-purple-900/30 rounded-full w-1/2 mx-auto mb-6"></div>
          <div className="h-4 bg-purple-900/30 rounded-full w-1/3 mx-auto mb-8"></div>
          <div className="flex justify-center gap-6 mb-4">
            <div className="bg-purple-900/30 h-10 w-32 rounded-full"></div>
            <div className="bg-purple-900/30 h-10 w-32 rounded-full"></div>
          </div>
          <div className="bg-orange-900/20 p-4 rounded-lg border border-orange-500/30 h-16 mb-6"></div>
          <div className="h-3 bg-purple-900/30 rounded-full w-1/4 mx-auto mb-2"></div>
          <div className="h-3 bg-purple-900/30 rounded-full w-1/3 mx-auto"></div>
        </section>
      </div>
    );
  };

  if (!data) return <ShimmerLoading />;

  return (
    <div className="bg-black text-white min-h-screen pb-20">
      <header className="text-center py-12 px-4">
        <h1 className="text-5xl font-bold text-purple-400 mb-4">{data.title}</h1>
        <p className="italic text-purple-300 mb-6 text-lg">"Love is in the air, and so is the scent of Thai food!"</p>
        <p className="text-gray-300 max-w-3xl mx-auto">{data.tagline}</p>
      </header>

      <div className="flex flex-col items-center mb-12">
        <img
          src={data.imageUrls[selectedImage]}
          alt="Main Preview"
          className="w-4/5 h-[400px] object-cover rounded-xl mb-4"
        />
        <div className="flex gap-4 justify-center">
          {data.imageUrls.map((url, i) => (
            <img
              key={i}
              onClick={() => setSelectedImage(i)}
              src={url}
              alt={`Thumb ${i + 1}`}
              className={`w-20 h-16 object-cover rounded-lg cursor-pointer border-2 ${selectedImage === i ? 'border-purple-500' : 'border-transparent'}`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-4 gap-8">
        <div className="flex-1">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[{ label: `Adults: ${data.noOfAdults}`, icon: <Users /> },
              { label: data.duration, icon: <Calendar /> },
              { label: 'Premium', icon: <Star /> },
              { label: data.flightDetails.airline, icon: <Plane /> }].map((item, idx) => (
              <div key={idx} className="border border-purple-500/30 rounded-xl p-4 flex flex-col items-center bg-purple-900/10">
                <div className="text-purple-400 mb-2">{item.icon}</div>
                <p className="text-center text-sm">{item.label}</p>
              </div>
            ))}
          </div>

          <section>
            <h2 className="text-3xl font-bold text-center text-purple-300 mb-8">Day-wise Itinerary</h2>
            <div className="space-y-6">
              {data.itinerary.map(day => (
                <div key={day.day} className="bg-purple-900/10 rounded-xl border border-purple-700/30">
                  <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}>
                    <div className="flex items-center gap-4">
                      <div className="bg-purple-700 p-3 rounded-full text-white">{iconMap[day.icon]}</div>
                      <div>
                        <h3 className="text-xl font-bold">Day {day.day}: {day.title}</h3>
                        <p className="text-sm text-purple-300">{day.highlight}</p>
                      </div>
                    </div>
                    <div className="text-purple-400">
                      {expandedDay === day.day ? <ChevronUp /> : <ChevronDown />}
                    </div>
                  </div>
                  {expandedDay === day.day && (
                    <div className="pl-6 pr-4 pb-4">
                      <div className="relative border-l border-purple-500 ml-5">
                        {day.timeline.map((item, idx) => (
                          <div key={idx} className="relative pl-6 py-4">
                            <div className="absolute left-[-7px] top-2.5">
                              <div className="w-3 h-3 rounded-full bg-purple-400" />
                            </div>
                            <div className="bg-black/20 p-3 rounded-md border border-purple-800/20">
                              <div className="flex justify-between text-sm">
                                <span className="text-purple-400 font-mono">{item.time}</span>
                                <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[item.type] || typeColors.default}`}>{item.type}</span>
                              </div>
                              <p className="text-sm text-gray-200 mt-1">{item.activity}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Enquiry Form */}
        <div className="lg:w-1/3 lg:sticky top-20 h-fit border border-purple-700/30 bg-gradient-to-b from-purple-900/10 to-black p-6 rounded-2xl shadow-xl">
          <h3 className="text-xl font-bold text-purple-400 mb-6 text-center">Plan Your Trip</h3>
          <div className="space-y-5">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full bg-zinc-900 border border-purple-700/40 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              value={passengers}
              onChange={(e) => setPassengers(e.target.value)}
              placeholder="Number of Travellers"
              className="w-full bg-zinc-900 border border-purple-700/40 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              placeholder="WhatsApp Number"
              className="w-full bg-zinc-900 border border-purple-700/40 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-lg font-semibold transition duration-200">
              Send Enquiry
            </button>
          </div>
        </div>
      </div>
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-300 mb-8">What's Included & Excluded</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-900/10 p-4 rounded-xl border border-green-700/30">
            <h3 className="text-green-400 font-semibold text-lg mb-2">Package Inclusions</h3>
            <ul className="space-y-2">
              {data.inclusions.map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><CheckCircle className="w-4 h-4 mt-1 text-green-400" />{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-red-900/10 p-4 rounded-xl border border-red-700/30">
            <h3 className="text-red-400 font-semibold text-lg mb-2">Not Included</h3>
            <ul className="space-y-2">
              {data.exclusions.map((item, i) => (
                <li key={i} className="flex gap-2 items-start"><X className="w-4 h-4 mt-1 text-red-400" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-300 mb-8">Important Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cancellation Policy */}
          <div className="bg-purple-900/10 p-6 rounded-xl border border-purple-700/30">
            <h4 className="text-purple-400 font-semibold mb-2">Cancellation Policy</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>60+ days before: 50% charges</li>
              <li>21-59 days before: 80% charges</li>
              <li>0-20 days before: 100% charges</li>
            </ul>
          </div>

          {/* Payment Schedule */}
          <div className="bg-purple-900/10 p-6 rounded-xl border border-purple-700/30">
            <h4 className="text-purple-400 font-semibold mb-2">Payment Schedule</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>30+ days before: 70% payment</li>
              <li>21-30 days before: 90% payment</li>
              <li>0-20 days before: 100% payment</li>
            </ul>
          </div>

          {/* Important Notes 1 */}
          <div className="bg-purple-900/10 p-6 rounded-xl border border-purple-700/30">
            <h4 className="text-purple-400 font-semibold mb-2">Important Notes</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Valid for Indian Nationals only</li>
              <li>Passport validity: 6+ months from travel date</li>
              <li>Group transfers based on same flight arrival/departure</li>
              <li>Hotel rooms subject to availability</li>
            </ul>
          </div>

          {/* Important Notes 2 */}
          <div className="bg-purple-900/10 p-6 rounded-xl border border-purple-700/30">
            <h4 className="text-purple-400 font-semibold mb-2">Important Notes</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>No refund for unused services</li>
              <li>Visa facilitation provided, approval not guaranteed</li>
              <li>Rates valid for mentioned dates only</li>
              <li>Final vouchers issued after full payment</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 py-12 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore Thailand?</h2>
        <p className="text-purple-300 mb-6">Contact us now to secure your dream vacation</p>
        <div className="flex justify-center gap-6 mb-4">
          <button className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-full">Call Now</button>
          <button className="bg-black border border-purple-500 text-white py-2 px-6 rounded-full">Email Us</button>
        </div>
        <div className="bg-orange-900/20 text-orange-300 p-4 rounded-lg border border-orange-500/30">
          <Clock className="inline w-4 h-4 mr-2" />
          This proposal is valid for only 2 working days. Book now to secure your Thailand adventure!
        </div>
        <p className="text-sm text-purple-400 mt-6">Operated by Aerovia Holidays<br />Your trusted travel partner for unforgettable experiences</p>
      </section>
    </div>
  );
};

export default ThailandTourPage;