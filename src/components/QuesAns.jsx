import React from 'react';

function QuesAns({ question, answer }) {
  return (
    <div className="rounded-xl bg-zinc-900 p-6 shadow-md border border-zinc-800 max-w-md">
      <h3 className="text-white text-lg font-semibold mb-3">{question}</h3>
      <p className="text-zinc-400 text-sm mb-6">{answer}</p>
      <button className="rounded-md border border-zinc-700 px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-white hover:text-black">
        Read More
      </button>
    </div>
  );
}

export default QuesAns;
