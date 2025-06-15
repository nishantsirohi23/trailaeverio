import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SubmitReviewPage = () => {
  const { id } = useParams(); // review request ID
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [requestData, setRequestData] = useState(null);
  const [name, setName] = useState('');
  const [destination, setDestination] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [toast, setToast] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const res = await axios.get(`https://api.perpenny.in/api/request-reviews/${id}`);
        if (res.data.success) {
          setRequestData(res.data.data);
          setName(res.data.data.name);
        }
      } catch (err) {
        console.error('Error fetching review request:', err);
        setToast('❌ Failed to load review request.');
      } finally {
        setLoading(false);
      }
    };
    fetchRequestData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setToast('');

    try {
      const reviewData = {
        name,
        destination,
        review,
        starRating: rating,
      };

      // Post review
      const postRes = await axios.post(
        `https://api.perpenny.in/api/reviews/${requestData.packageId}`,
        reviewData
      );

      // Update status
      await axios.patch(`https://api.perpenny.in/api/request-reviews/${id}/status`, {
        status: 'done',
      });

      if (postRes.data.success) {
        setSuccessMessage('🎉 Thank you for your review!');
        setDestination('');
        setReview('');
        setRating(0);
      }
    } catch (err) {
      console.error('Submission failed:', err);
      setToast('❌ Something went wrong. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-zinc-900 p-6 rounded-lg shadow-lg">
        {loading ? (
          <div className="animate-pulse space-y-4">
            <div className="h-6 bg-zinc-700 rounded w-2/3"></div>
            <div className="h-4 bg-zinc-700 rounded w-1/3"></div>
            <div className="h-48 bg-zinc-800 rounded"></div>
            <div className="h-10 bg-zinc-700 rounded w-full"></div>
          </div>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center text-purple-400 mb-2">
              How was your trip, {requestData?.name}?
            </h1>
            <p className="text-sm text-center text-gray-400 mb-4">
              We'd love to hear your thoughts.
            </p>

            {toast && (
              <p className="text-red-400 text-sm text-center mb-2">{toast}</p>
            )}

            {successMessage && (
              <p className="text-green-400 text-center mb-4">{successMessage}</p>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Destination</label>
                <input
                  type="text"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Your Review</label>
                <textarea
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
                  rows="4"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Rating (1-5)</label>
                <input
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                  className="w-full p-2 rounded bg-zinc-800 text-white border border-zinc-700"
                  min="1"
                  max="5"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className={`w-full ${
                  submitting ? 'bg-purple-400' : 'bg-purple-600 hover:bg-purple-700'
                } text-white py-2 rounded-lg transition`}
              >
                {submitting ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default SubmitReviewPage;
