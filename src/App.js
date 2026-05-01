import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [client, setClient] = useState('Client A');
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState(0.18);
  const [hovered, setHovered] = useState(null);

  const profiles = {
    'Client A': { status: 'Operational', color: '#10b981', reach: '95%', files: ['Inv_001.pdf', 'Tax_Summary_Q1.xlsx'] },
    'Client B': { status: 'Action Required', color: '#f59e0b', reach: '60%', files: ['Incomplete_Form_16.pdf'] },
    'Client C': { status: 'Critical', color: '#ef4444', reach: '15%', files: [] }
  };

  const tax = Number(amount) * gstRate;
  const total = Number(amount) + tax;

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#02040a', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', background: '#050505', borderRight: '1px solid #1a1a1a', padding: '40px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '50px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#2563eb' }}></div>
          <h2 style={{ letterSpacing: '4px', fontWeight: '900', margin: 0 }}>VISTARA</h2>
        </div>
        
        {['Dashboard', 'Vault'].map(item => (
          <div 
            key={item} 
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setActiveTab(item)}
            style={{ 
              padding: '14px 20px', 
              cursor: 'pointer', 
              borderRadius: '12px',
              transition: '0.3s',
              marginBottom: '10px',
              background: activeTab === item ? 'rgba(37, 99, 235, 0.1)' : (hovered === item ? 'rgba(255,255,255,0.05)' : 'transparent'),
              color: activeTab === item ? '#2563eb' : '#666',
              fontWeight: activeTab === item ? 'bold' : 'normal'
            }}
          >
            {item}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '60px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{activeTab}</h1>
          <select 
            value={client} 
            onChange={(e) => setClient(e.target.value)} 
            style={{ background: '#111', color: 'white', border: '1px solid #222', padding: '10px 20px', borderRadius: '20px' }}
          >
            <option>Client A</option>
            <option>Client B</option>
            <option>Client C</option>
          </select>
        </header>

        {activeTab === 'Dashboard' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
            
            {/* Status Section */}
            <div style={{ background: '#0a0a0a', padding: '30px', borderRadius: '24px', border: '1px solid #1a1a1a' }}>
              <p style={{ color: '#444', fontSize: '0.7rem', letterSpacing: '1px', marginBottom: '10px' }}>COMPLIANCE</p>
              <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>{profiles[client].reach}</h2>
              <div style={{ height: '4px', background: '#1a1a1a', borderRadius: '10px' }}>
                <div style={{ height: '100%', width: profiles[client].reach, background: profiles[client].color, borderRadius: '10px', transition: 'width 1s' }} />
              </div>
              <p style={{ marginTop: '20px', color: profiles[client].color }}>● {profiles[client].status}</p>
            </div>

            {/* Calculator Section */}
            <div style={{ background: '#0a0a0a', padding: '30px', borderRadius: '24px', border: '1px solid #1a1a1a' }}>
              <h3 style={{ color: '#2563eb', fontSize: '1rem', marginBottom: '20px' }}>Tax Ledger</h3>
              <input 
                type="number" 
                placeholder="Amount ₹" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                style={{ width: '100%', boxSizing: 'border-box', background: '#000', border: '1px solid #222', padding: '12px', color: 'white', borderRadius: '8px', marginBottom: '15px' }} 
              />
              <div style={{ display: 'flex', gap: '5px', marginBottom: '20px' }}>
                {[0.05, 0.12, 0.18, 0.28].map(rate => (
                  <button key={rate} onClick={() => setGstRate(rate)} style={{ flex: 1, padding: '8px', borderRadius: '6px', background: gstRate === rate ? '#2563eb' : '#111', color: 'white', border: 'none', cursor: 'pointer', fontSize: '0.7rem' }}>
                    {rate * 100}%
                  </button>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#444' }}>
                  <span>Tax:</span><span>₹{tax.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', fontWeight: 'bold', marginTop: '5px' }}>
                  <span>Total:</span><span>₹{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div style={{ background: '#0a0a0a', borderRadius: '24px', padding: '30px', border: '1px solid #1a1a1a' }}>
            <h4 style={{ marginBottom: '20px' }}>{client} Documents</h4>
            {profiles[client].files.length > 0 ? profiles[client].files.map(file => (
              <div key={file} style={{ padding: '15px', borderBottom: '1px solid #1a1a1a', color: '#888', display: 'flex', justifyContent: 'space-between' }}>
                {file} <span style={{ color: '#2563eb', fontSize: '0.8rem' }}>SECURE</span>
              </div>
            )) : <div style={{ color: '#333' }}>No files found in vault.</div>}
          </div>
        )}
      </main>
    </div>
  );
}
