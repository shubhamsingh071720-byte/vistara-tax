import React, { useState } from 'react';

export default function App() {
  const [isStarted, setIsStarted] = useState(false);

  if (!isStarted) {
    return (
      <div style={{ height: '100vh', background: '#050505', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '900' }}>VISTARA</h1>
        <button 
          onClick={() => setIsStarted(true)} 
          style={{ marginTop: '20px', padding: '12px 30px', borderRadius: '8px', background: '#2563eb', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Initialize System
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#02040a', color: 'white', fontFamily: 'sans-serif', padding: '50px' }}>
      <nav style={{ marginBottom: '50px', borderBottom: '1px solid #222', paddingBottom: '20px' }}>
        <h2 style={{ color: '#2563eb' }}>VISTARA // DASHBOARD</h2>
      </nav>
      <div style={{ background: '#111', padding: '40px', borderRadius: '20px', border: '1px solid #333' }}>
        <h3>System Status: <span style={{ color: '#10b981' }}>Operational</span></h3>
        <p style={{ color: '#666' }}>Welcome to the Vistara Tax Engine. All secure lines are active.</p>
      </div>
    </div>
  );
}
