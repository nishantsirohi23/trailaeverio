import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const travelers = ['Number of travelers', '1', '2', '3+'];

function QueryForm() {
  const navigate = useNavigate();
  const [selectedTravelers, setSelectedTravelers] = useState(travelers[0]);
  const [destination, setDestination] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    // Check if all fields are empty/default
    if (
      !name.trim() &&
      !mobile.trim() &&
      !destination.trim() &&
      !email.trim() &&
      selectedTravelers === travelers[0]
    ) {
      toast.error('Please fill in the form before submitting');
      return false;
    }

    if (!name.trim()) {
      toast.error('Please enter your name');
      return false;
    }

    if (!mobile.trim() || !/^\d{10}$/.test(mobile)) {
      toast.error('Please enter a valid 10-digit phone number');
      return false;
    }

    if (!destination.trim()) {
      toast.error('Please enter destination');
      return false;
    }

    if (selectedTravelers === travelers[0]) {
      toast.error('Please select number of travelers');
      return false;
    }

    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    const formData = {
      name,
      email,
      mobile,
      numberOfTravellers: selectedTravelers,
      destination
    };

    try {
      const response = await fetch('https://api.perpenny.in/api/queryform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        navigate('/formsuccess');
      } else {
        toast.error(data.message || 'Failed to submit form. Please try again.');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black px-6 py-10 mx-auto text-center text-white shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Get Personalized Travel Recommendations
      </h2>
      <p className="text-zinc-400 text-sm sm:text-base mb-8">
        Tell us about your travel preferences and we'll send you customized trip ideas on WhatsApp!
      </p>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white w-full placeholder-white"
        />
        <input
          type="text"
          placeholder="WhatsApp number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white w-full placeholder-white"
          maxLength="10"
        />

        <input
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white w-full placeholder-white"
        />

        <select
          value={selectedTravelers}
          onChange={(e) => setSelectedTravelers(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white w-full appearance-none"
        >
          {travelers.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>

        <div className="sm:col-span-2">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white w-full placeholder-white"
          />
        </div>

        <div className="sm:col-span-2 flex justify-center">
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full sm:w-auto ${isSubmitting ? 'bg-purple-800' : 'bg-purple-600 hover:bg-purple-700'} text-white font-medium px-6 py-3 rounded-md transition-colors`}
          >
            {isSubmitting ? 'Submitting...' : 'Get Trips on WhatsApp'}
          </button>
        </div>
      </form>

      <p className="text-xs text-zinc-500 mt-4 max-w-lg mx-auto">
        By submitting this form, you agree to receive trip recommendations via WhatsApp from Aerovia.
      </p>
    </div>
  );
}

export default QueryForm;
