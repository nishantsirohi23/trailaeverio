import React, { useState } from 'react';

const budgets = ['Budget per person', '₹5,000 - ₹10,000', '₹10,000 - ₹20,000', '₹20,000+'];
const travelers = ['Number of travelers', '1', '2', '3+'];
const tripTypes = ['Trip type', 'Adventure', 'Relaxation', 'Family', 'Couple'];

function QueryForm() {
  const [selectedBudget, setSelectedBudget] = useState(budgets[0]);
  const [selectedTravelers, setSelectedTravelers] = useState(travelers[0]);
  const [selectedTripType, setSelectedTripType] = useState(tripTypes[0]);

  return (
    <div className="bg-black px-6 py-10 mx-auto text-center text-white shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
        Get Personalized Travel Recommendations
      </h2>
      <p className="text-zinc-400 text-sm sm:text-base mb-8">
        Tell us about your travel preferences and we'll send you customized trip ideas on WhatsApp!
      </p>

      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Your name"
          className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white w-full placeholder-white"
        />
        <input
          type="text"
          placeholder="WhatsApp number"
          className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white w-full placeholder-white"
        />

        <select
          value={selectedBudget}
          onChange={(e) => setSelectedBudget(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white w-full appearance-none"
        >
          {budgets.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>

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
          <select
            value={selectedTripType}
            onChange={(e) => setSelectedTripType(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 rounded-md px-4 py-3 text-sm text-white w-full appearance-none"
          >
            {tripTypes.map((option, idx) => (
              <option key={idx} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </form>

      <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-md transition-colors">
        Get Trips on WhatsApp
      </button>

      <p className="text-xs text-zinc-500 mt-4 max-w-lg mx-auto">
        By submitting this form, you agree to receive trip recommendations via WhatsApp from Aerovia.
      </p>
    </div>
  );
}

export default QueryForm;
