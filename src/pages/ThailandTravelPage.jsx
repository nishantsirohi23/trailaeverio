import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Plane, Calendar, Users, Star, ChevronDown, ChevronUp,
  CheckCircle, X, Clock
} from 'lucide-react';
import ReviewCard from '@/components/ReviewCard';
import UserReviews from '@/components/UserReview';
import { toast } from 'react-toastify';

const images = [
  'https://images.unsplash.com/photo-1725145722645-c4f569b49b6d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1675431435428-33c25f818d67?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
  'https://images.unsplash.com/photo-1663588767606-c91626c4b7f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D',
  'https://plus.unsplash.com/premium_photo-1734629912226-ef74382aa901?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8',
  'https://images.unsplash.com/photo-1659859910985-a3a0a14fa11b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxfHx8ZW58MHx8fHx8',
];
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-black text-white min-h-screen flex items-center justify-center">
          <div className="text-center p-8 border border-red-500 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p>We're having trouble loading this page. Please try again later.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const ThailandTourPage = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [expandedDay, setExpandedDay] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [error, setError] = useState(null);
  const [name, setName] = useState('');
  const [numberOfTravellers, setNumberOfTravellers] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.perpenny.in/api/packages/${title}`;
        const response = await axios.get(url);
        setData(response.data.data);
      } catch (err) {
        console.error('Error fetching package data:', err);
        setError('Failed to load package data');
      }
    };

    fetchData();
  }, [title]);

  const handleSendEnquiry = async () => {
    const enquiryData = {
      name,
      numberOfTravellers: parseInt(numberOfTravellers, 10),
      whatsappNumber,
      destination: data?.title,
    };
    console.log("Sending enquiry:", enquiryData);


    try {
      const response = await fetch('https://api.perpenny.in/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(enquiryData),
      });

      const result = await response.json();

      if (result.success) {
        navigate('/formsuccess');
      } else {
        toast.error(result.message || 'Failed to submit enquiry. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
      console.error('Error submitting enquiry:', error);
    }
  };

  const iconMap = {
    plane: <Plane className="w-5 h-5" />,
    arrival: '✈️',
    activity: '🏄‍♂️',
    sightseeing: '🏞️',
    transport: '🚗',
    flight: '✈️',
    default: '🌟'
  };

  const typeColors = {
    activity: 'bg-yellow-900/20 text-yellow-300',
    travel: 'bg-blue-900/20 text-blue-300',
    meal: 'bg-green-900/20 text-green-300',
    entertainment: 'bg-yellow-900/20 text-yellow-300',
    rest: 'bg-orange-900/20 text-orange-300',
    transport: 'bg-cyan-900/20 text-cyan-300',
    arrival: 'bg-purple-900/20 text-purple-300',
    hotel: 'bg-indigo-900/20 text-indigo-300',
    leisure: 'bg-pink-900/20 text-pink-300',
    sightseeing: 'bg-emerald-900/20 text-emerald-300',
    default: 'bg-green-900/20 text-green-300'
  };

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
      </div>
    );
  };

  if (error) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center p-8 border border-red-500 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Error Loading Page</h2>
          <p className="mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!data) return <ShimmerLoading />;

  return (
    <ErrorBoundary>
      <div className="bg-black text-white min-h-screen pb-20">
        <header className="text-center py-12 px-4">
          <h1 className="text-5xl font-bold text-purple-400 mb-4">{data?.title || 'Bali Tropical Escape'}</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">{data?.tagline || 'Unwind in paradise with beach bliss, island adventure, and Balinese culture.'}</p>
        </header>

        <div className="flex flex-col items-center mb-12 px-4">
          {data?.imageUrls?.length > 0 ? (
            <>
              <img
                src={data.imageUrls[selectedImage]}
                alt="Main Preview"
                className="w-full max-w-4xl h-[500px] object-cover rounded-xl mb-4"
              />
              <div className="flex gap-4 justify-center flex-wrap">
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
            </>
          ) : (
            <div className="w-full max-w-4xl h-[400px] bg-purple-900/20 rounded-xl flex items-center justify-center">
              <span>No images available</span>
            </div>
          )}
        </div>

        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto px-4 gap-8">
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: `Adults: ${data?.noOfAdults || 2}`, icon: <Users /> },
                { label: data?.duration || "6 Days / 5 Nights", icon: <Calendar /> },
                { label: 'Premium', icon: <Star /> },
                { label: data?.flightDetails?.airline || "Flight included", icon: <Plane /> }
              ].map((item, idx) => (
                <div key={idx} className="border border-purple-500/30 rounded-xl p-4 flex flex-col items-center bg-purple-900/10">
                  <div className="text-purple-400 mb-2">{item.icon}</div>
                  <p className="text-center text-sm">{item.label}</p>
                </div>
              ))}
            </div>

            <section>
              <h2 className="text-3xl font-bold text-center text-purple-300 mb-8">Day-wise Itinerary</h2>
              <div className="space-y-6">
                {data?.itinerary?.map(day => (
                  <div key={day.day} className="bg-purple-900/10 rounded-xl border border-purple-700/30">
                    <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}>
                      <div className="flex items-center gap-4">
                        <div className="bg-purple-700 p-3 rounded-full text-white">
                          {iconMap[day.icon] || iconMap.default}
                        </div>
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
                          {day?.timeline?.map((item, idx) => (
                            <div key={idx} className="relative pl-6 py-4">
                              <div className="absolute left-[-7px] top-2.5">
                                <div className="w-3 h-3 rounded-full bg-purple-400" />
                              </div>
                              <div className="bg-black/20 p-3 rounded-md border border-purple-800/20">
                                <div className="flex justify-between text-sm">
                                  <span className="text-purple-400 font-mono">{item.time}</span>
                                  <span className={`text-xs px-2 py-0.5 rounded-full ${typeColors[item.type] || typeColors.default}`}>
                                    {item.type}
                                  </span>
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
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-900 border border-purple-700/40 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                placeholder="Number of Travellers"
                value={numberOfTravellers}
                onChange={(e) => setNumberOfTravellers(e.target.value)}
                className="w-full bg-zinc-900 border border-purple-700/40 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                placeholder="WhatsApp Number"
                value={whatsappNumber}
                onChange={(e) => setWhatsappNumber(e.target.value)}
                className="w-full bg-zinc-900 border border-purple-700/40 p-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSendEnquiry}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-lg font-semibold transition duration-200"
              >
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
                {data?.inclusions?.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <CheckCircle className="w-4 h-4 mt-1 text-green-400" />
                    {item}
                  </li>
                )) || <li className="text-gray-400">No inclusions listed</li>}
              </ul>
            </div>
            <div className="bg-red-900/10 p-4 rounded-xl border border-red-700/30">
              <h3 className="text-red-400 font-semibold text-lg mb-2">Not Included</h3>
              <ul className="space-y-2">
                {data?.exclusions?.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start">
                    <X className="w-4 h-4 mt-1 text-red-400" />
                    {item}
                  </li>
                )) || <li className="text-gray-400">No exclusions listed</li>}
              </ul>
            </div>
          </div>
        </section>
            <UserReviews id={title}/>
            

       

        <section className="px-4 py-12 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Explore?</h2>
          <p className="text-purple-300 mb-6">Contact us now to secure your dream vacation</p>
          <div className="flex justify-center gap-6 mb-4">
            <button className="bg-purple-700 hover:bg-purple-600 text-white py-2 px-6 rounded-full">
              Call Now
            </button>
            <button className="bg-black border border-purple-500 text-white py-2 px-6 rounded-full">
              Email Us
            </button>
          </div>
          <div className="bg-orange-900/20 text-orange-300 p-4 rounded-lg border border-orange-500/30">
            <Clock className="inline w-4 h-4 mr-2" />
            This package is fully customizable. Contact us to tailor it to your needs!
          </div>
          <p className="text-sm text-purple-400 mt-6">
            Operated by Aerovia Holidays<br />
            Your trusted travel partner for unforgettable experiences
          </p>
        </section>
      </div>
    </ErrorBoundary>
  );
};

export default ThailandTourPage;