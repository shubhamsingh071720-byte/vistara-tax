import React, { useState } from 'react';

const GSTCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [gstRate, setGstRate] = useState(0.18);
  const rates = [
    { label: '5% - Essentials', value: 0.05 },
    { label: '12% - Standard', value: 0.12 },
    { label: '18% - Services', value: 0.18 },
    { label: '28% - Luxury', value: 0.28 },
  ];
  const taxAmount = Number(amount) * gstRate;
  const total = Number(amount) + taxAmount;

  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '25px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <h3 style={{ marginBottom: '15px', fontSize: '1rem', fontWeight: 'bold' }}>TAX CALCULATOR</h3>
      <input 
        type="number" placeholder="Base Amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '15px' }}
      />
      <select 
        onChange={(e) => setGstRate(parseFloat(e.target.value))}
        style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '15px' }}
      >
        {rates.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
      </select>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1, padding: '10px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '10px' }}>
          <p style={{ fontSize: '0.6rem', color: '#3b82f6' }}>TAX</p>
          <p style={{ fontWeight: 'bold' }}>₹{taxAmount.toFixed(2)}</p>
        </div>
        <div style={{ flex: 1, padding: '10px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '10px' }}>
          <p style={{ fontSize: '0.6rem', color: '#10b981' }}>TOTAL</p>
          <p style={{ fontWeight: 'bold' }}>₹{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [page, setPage] = useState('landing');
  const commonBg = { minHeight: '100vh', backgroundColor: '#050505', color: 'white', fontFamily: 'sans-serif' };

  if (page === 'landing') {
    return (
      <div style={{ ...commonBg, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '10px' }}>VISTARA</h1>
        <p style={{ color: '#666', marginBottom: '30px' }}>The CA Operating System.</p>
        <button onClick={() => setPage('dashboard')} style={{ padding: '15px 40px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
          Enter Dashboard
        </button>
      </div>
    );
  }

  return (
    <div style={{ ...commonBg, display: 'flex' }}>
      <aside style={{ width: '240px', borderRight: '1px solid #222', padding: '30px' }}>
        <h2 style={{ color: '#2563eb', marginBottom: '40px' }}>VISTARA</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: '#666' }}>
          <div style={{ color: 'white', fontWeight: 'bold' }}>Dashboard</div>
          <div>Vault</div>
          <div>Audit</div>
          <div onClick={() => setPage('landing')} style={{ marginTop: '50px', color: 'red', cursor: 'pointer' }}>Logout</div>
        </div>
      </aside>
      <main style={{ flex: 1, padding: '40px' }}>
        <header style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '2rem' }}>Working Model</h2>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '20px' }}>
          <div style={{ background: '#111', borderRadius: '20px', padding: '30px' }}>
            <h3>Client Status</h3>
            <p style={{ color: '#444', marginTop: '10px' }}>No active filings selected.</p>
          </div>
          <GSTCalculator />
        </div>
      </main>
    </div>
  );
}
