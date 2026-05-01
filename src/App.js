import React, { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [client, setClient] = useState('Client A');

  // This data object is used to drive the UI
  const profiles = {
    'Client A': { status: 'Operational', color: '#10b981', reach: '95%' },
    'Client B': { status: 'Action Required', color: '#f59e0b', reach: '60%' },
    'Client C': { status: 'Critical', color: '#ef4444', reach: '15%' }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#02040a', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '240px', background: '#050505', borderRight: '1px solid #1a1a1a', padding: '40px 20px' }}>
        <h2 style={{ color: '#2563eb', fontWeight: '900', marginBottom: '40px' }}>VISTARA</h2>
        {['Dashboard', 'Vault'].map(item => (
          <div 
            key={item} 
            onClick={() => setActiveTab(item)}
            style={{ 
              padding: '12px', 
              cursor: 'pointer', 
              color: activeTab === item ? '#fff' : '#444',
              fontWeight: 'bold' 
            }}
          >
            {item}
          </div>
        ))}
      </aside>

      {/* Main Area */}
      <main style={{ flex: 1, padding: '40px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '1.5rem' }}>{activeTab}</h1>
          <select 
            value={client} 
            onChange={(e) => setClient(e.target.value)}
            style={{ background: '#111', color: 'white', border: '1px solid #333', padding: '8px', borderRadius: '5px' }}
          >
            <option>Client A</option>
            <option>Client B</option>
            <option>Client C</option>
          </select>
        </header>

        {activeTab === 'Dashboard' ? (
          <div style={{ background: '#0a0a0a', padding: '30px', borderRadius: '20px', border: '1px solid #1a1a1a' }}>
            <h2 style={{ marginBottom: '10px' }}>{client} Overview</h2>
            <div style={{ color: profiles[client].color, fontWeight: 'bold', marginBottom: '20px' }}>
              ● Status: {profiles[client].status}
            </div>
            
            <div style={{ fontSize: '0.8rem', color: '#555', marginBottom: '8px' }}>COMPLIANCE PROGRESS</div>
            <div style={{ height: '8px', background: '#1a1a1a', borderRadius: '10px' }}>
              <div style={{ 
                height: '100%', 
                width: profiles[client].reach, 
                background: profiles[client].color, 
                borderRadius: '10px',
                transition: '0.5s' 
              }} />
            </div>
          </div>
        ) : (
          <div style={{ padding: '60px', textAlign: 'center', border: '1px dashed #222', borderRadius: '20px' }}>
            <p style={{ color: '#444' }}>Documents for {client} are encrypted.</p>
          </div>
        )}
      </main>
    </div>
  );
}
