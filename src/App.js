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
    <div style={{ display: 'flex', minHeight: '100vh', background: 'radial-gradient(circle at top left, #050505, #02040a)', color: 'white', fontFamily: '"Inter", sans-serif' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', background: 'rgba(5, 5, 5, 0.8)', backdropFilter: 'blur(10px)', borderRight: '1px solid #1a1a1a', padding: '40px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '50px' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#2563eb', boxShadow: '0 0 15px #2563eb' }}></div>
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
              transition: '0.3s all ease',
              marginBottom: '10px',
              background: activeTab === item ? 'rgba(37, 99, 235, 0.15)' : (hovered === item ? 'rgba(255,255,255,0.05)' : 'transparent'),
              color: activeTab === item ? '#2563eb' : '#666',
              border: activeTab === item ? '1px solid rgba(37, 99, 235, 0.3)' : '1px solid transparent'
            }}
          >
            {item}
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '60px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: '300' }}>{activeTab} <span style={{ color: '#222' }}>/</span> <span style={{ fontSize: '1rem', color: '#666' }}>{client}</span></h1>
          <select 
            value={client} 
            onChange={(e) => setClient(e.target.value)} 
            style={{ background: '#000', color: 'white', border: '1px solid #222', padding: '12px 20px', borderRadius: '30px', outline: 'none' }}
          >
            <option>Client A</option>
            <option>Client B</option>
            <option>Client C</option>
          </select>
        </header>

        {activeTab === 'Dashboard' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '30px' }}>
            
            {/* Status Section */}
            <div style={{ background: 'rgba(10, 10, 10, 0.4)', padding: '40px', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <p style={{ color: '#444', fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '10px' }}>CURRENT COMPLIANCE</p>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{profiles[client].reach}</h2>
              <div style={{ height: '4px', background: '#111', borderRadius: '10px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: profiles[client].reach, background: profiles[client].color, transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' }} />
              </div>
              <div style={{ marginTop: '30px', padding: '15px', borderRadius: '15px', background: 'rgba(255,255,255,0.02)', borderLeft: 4px solid ${profiles[client].color} }}>
                <span style={{ color: '#888' }}>Engine Status:</span> <span style={{ color: profiles[client].color }}>{profiles[client].status}</span>
              </div>
            </div>

            {/* Calculator Section */}
            <div style={{ background: '#050505', padding: '30px', borderRadius: '32px', border: '1px solid #1a1a1a' }}>
              <h4 style={{ color: '#2563eb', marginBottom: '20px' }}>Quick Ledger</h4>
              <input 
                type="number" 
                placeholder="0.00" 
                value={amount} 
                onChange={(e) => setAmount(e.target.value)} 
                style={{ width: '100%', boxSizing: 'border-box', background: 'transparent', border: 'none', borderBottom: '1px solid #222', fontSize: '1.5rem', color: 'white', padding: '10px 0', marginBottom: '20px', outline: 'none' }} 
              />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '30px' }}>
                {[0.05, 0.12, 0.18, 0.28].map(rate => (
                  <button key={rate} onClick={() => setGstRate(rate)} style={{ flex: 1, padding: '8px', borderRadius: '8px', background: gstRate === rate ? '#2563eb' : '#111', color: 'white', border: 'none', cursor: 'pointer', fontSize: '0.7rem' }}>
                    {rate * 100}%
                  </button>
                ))}
              </div>
              <div style={{ fontSize: '0.9rem', color: '#444' }}>RESULT</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>₹{total.toLocaleString()}</div>
            </div>

          </div>
        ) : (
          /* Vault Section */
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '20px' }}>
            <div style={{ border: '2px dashed #1a1a1a', borderRadius: '24px', padding: '60px', textAlign: 'center', color: '#444' }}>
              Drop files here to upload to {client} Secure Vault
            </div>
            <div style={{ background: '#0a0a0a', borderRadius: '24px', padding: '30px' }}>
              <h4 style={{ marginBottom: '20px' }}>Recent Documents</h4>
              {profiles[client].files.length > 0 ? profiles[client].files.map(file => (
                <div key={file} style={{ padding: '15px', borderBottom: '1px solid #111', color: '#888', display: 'flex', justifyContent: 'space-between' }}>
                  {file} <span>SECURE</span>
                </div>
              )) : <div style={{ color: '#333' }}>No files found for this profile.</div>}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
