import React, { useState } from 'react';
import './index.css';

function App() {
  const [page, setPage] = useState('landing'); // This tracks which screen to show

  if (page === 'dashboard') {
    return (
      <div className="min-h-screen bg-[#02040a] text-white p-10">
        <h1 className="text-3xl font-bold">Welcome to your Tax Dashboard</h1>
        <p className="mt-4 text-gray-400">You have 0 pending GST alerts.</p>
        <button 
          onClick={() => setPage('landing')}
          className="mt-10 text-blue-500 underline"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#02040a] text-white font-sans">
      <nav className="p-6 flex justify-between items-center border-b border-white/10">
        <div className="text-xl font-bold italic">VISTARA</div>
        <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold">LOG IN</button>
      </nav>

      <div className="max-w-5xl mx-auto text-center pt-20">
        <h1 className="text-6xl font-bold tracking-tighter">Scale Beyond Boundaries.</h1>
        <p className="mt-6 text-gray-400">The premium OS for Indian tax firms.</p>
        
        {/* THIS BUTTON NOW WORKS */}
        <button 
          onClick={() => setPage('dashboard')}
          className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-500 transition-all"
        >
          Start Solo Journey
        </button>
      </div>
    </div>
  );
}

export default App;
