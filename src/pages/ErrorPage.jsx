// src/pages/ErrorPage.jsx
import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-black text-center px-4">
      <div>
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg text-gray-400 mb-6">Oops! The page you’re looking for doesn’t exist.</p>
        <a href="/" className="inline-block px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 transition">Go to Home</a>
      </div>
    </div>
  );
};

export default ErrorPage;
