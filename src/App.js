import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('landing');
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [client, setClient] = useState('Client A');

  // Sidebar Items
  const menuItems = ['Dashboard', 'Vault', 'Audit'];

  if (page === 'landing') {
    return (
      <div style={{ height: '100vh', background: '#050505', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', letterSpacing: '-2px' }}>VISTARA</h1>
        <button 
          onClick={() => setPage('dashboard')} 
          style={{ marginTop: '30px', padding: '15px 40px', borderRadius: '12px', background: '#2563eb', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}
        >
          Initialize Session
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#02040a', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar Navigation */}
      <aside style={{ width: '260px', background: '#050505', borderRight: '1px solid #1a1a1a', padding: '40px 20px' }}>
        <h2 style={{ color: '#2563eb', fontWeight: '900', marginBottom: '50px', fontSize: '1.5rem' }}>VISTARA</h2>
        <nav>
          {menuItems.map((item) => (
            <div 
              key={item} 
              onClick={() => setActiveTab(item)}
              style={{ 
                padding: '15px 20px', 
                borderRadius: '10px', 
                cursor: 'pointer', 
                marginBottom: '10px',
                transition: '0.3s',
                background: activeTab === item ? '#111' : 'transparent',
                color: activeTab === item ? '#fff' : '#555',
                fontWeight: 'bold'
              }}
            >
              {item}
            </div>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main style={{ flex: 1, padding: '50px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{activeTab}</h1>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ color: '#555', fontSize: '0.8rem' }}>SELECT CLIENT:</span>
            <select 
              value={client} 
              onChange={(e) => setClient(e.target.value)}
              style={{ background: '#111', color: '#fff', border: '1px solid #333', padding: '10px 20px', borderRadius: '8px', cursor: 'pointer' }}
            >
              <option value="Client A">Client A</option>
              <option value="Client B">Client B</option>
              <option value="Client C">Client C</option>
            </select>
          </div>
        </header>

        <section style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid #1a1a1a', padding: '40px', borderRadius: '24px' }}>
          <h3 style={{ marginBottom: '10px' }}>{activeTab} Overview</h3>
          <p style={{ color: '#666' }}>Currently managing records for <strong>{client}</strong></p>
          <div style={{ marginTop: '30px', color: '#10b981', fontSize: '0.9rem' }}>
            ● Encrypted Connection Active
          </div>
        </section>
      </main>

    </div>
  );
}
