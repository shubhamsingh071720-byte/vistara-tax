import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [client, setClient] = useState('Client A');
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState(0.18);

  const profiles = {
    'Client A': { status: 'Operational', color: '#10b981', reach: '95%' },
    'Client B': { status: 'Action Required', color: '#f59e0b', reach: '60%' },
    'Client C': { status: 'Critical', color: '#ef4444', reach: '15%' }
  };

  // Math logic - simple and clean
  const tax = Number(amount) * gstRate;
  const total = Number(amount) + tax;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#02040a', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '240px', background: '#050505', borderRight: '1px solid #1a1a1a', padding: '40px 20px' }}>
        <h2 style={{ color: '#2563eb', fontWeight: '900', marginBottom: '40px' }}>VISTARA</h2>
        {['Dashboard', 'Vault'].map(item => (
          <div key={item} onClick={() => setActiveTab(item)} style={{ padding: '12px', cursor: 'pointer', color: activeTab === item ? '#fff' : '#444', fontWeight: 'bold' }}>
            {item}
          </div>
        ))}
      </aside>

      {/* Main Area */}
      <main style={{ flex: 1, padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '1.5rem' }}>{activeTab}</h1>
          <select value={client} onChange={(e) => setClient(e.target.value)} style={{ background: '#111', color: 'white', border: '1px solid #333', padding: '8px', borderRadius: '5px' }}>
            <option>Client A</option>
            <option>Client B</option>
            <option>Client C</option>
          </select>
        </header>

        {activeTab === 'Dashboard' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            
            {/* Status Card */}
            <div style={{ background: '#0a0a0a', padding: '30px', borderRadius: '20px', border: '1px solid #1a1a1a' }}>
              <h2 style={{ marginBottom: '10px' }}>{client}</h2>
              <div style={{ color: profiles[client].color, fontWeight: 'bold', marginBottom: '20px' }}>● {profiles[client].status}</div>
              <div style={{ fontSize: '0.7rem', color: '#555', marginBottom: '8px', letterSpacing: '1px' }}>COMPLIANCE RATE</div>
              <div style={{ height: '6px', background: '#1a1a1a', borderRadius: '10px' }}>
                <div style={{ height: '100%', width: profiles[client].reach, background: profiles[client].color, borderRadius: '10px', transition: '0.5s' }} />
              </div>
            </div>

            {/* Calculator Card */}
            <div style={{ background: 'rgba(37, 99, 235, 0.03)', padding: '30px', borderRadius: '20px', border: '1px solid #2563eb44' }}>
              <h3 style={{ fontSize: '0.8rem', color: '#2563eb', marginBottom: '15px' }}>QUICK GST CALC</h3>
              <input 
                type="number" 
                placeholder="Enter Amount" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                style={{ width: '100%', boxSizing: 'border-box', background: '#000', border: '1px solid #333', padding: '12px', color: 'white', borderRadius: '8px', marginBottom: '10px' }} 
              />
              <select 
                onChange={(e) => setGstRate(parseFloat(e.target.value))} 
                style={{ width: '100%', background: '#000', border: '1px solid #333', padding: '10px', color: 'white', borderRadius: '8px' }}
              >
                <option value="0.18">18% GST (Standard)</option>
                <option value="0.12">12% GST</option>
                <option value="0.05">5% GST</option>
                <option value="0.28">28% GST</option>
              </select>
              <div style={{ marginTop: '20px', borderTop: '1px solid #222', paddingTop: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: '#888' }}>
                  <span>Tax:</span><span>₹{tax.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', marginTop: '5px' }}>
                  <span>Total:</span><span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div style={{ padding: '100px', textAlign: 'center', color: '#333' }}>
            <h2>The Vault</h2>
            <p>Secure storage for {client} active files.</p>
          </div>
        )}
      </main>
    </div>
  );
}
