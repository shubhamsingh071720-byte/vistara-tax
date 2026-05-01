import React, { useState } from 'react';

export default function App() {
  const [page, setPage] = useState('landing');
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [client, setClient] = useState('Client A');
  const [amount, setAmount] = useState('');
  const [gstRate, setGstRate] = useState(0.18);

  // --- LOGIC: Dynamic Data per Client ---
  const clientProfiles = {
    'Client A': { filing: 100, audit: 95, color: '#10b981', status: 'Healthy' },
    'Client B': { filing: 65, audit: 40, color: '#f59e0b', status: 'Action Required' },
    'Client C': { filing: 12, audit: 0, color: '#ef4444', status: 'Critical' },
  };

  const currentStats = clientProfiles[client];
  const taxAmount = Number(amount) * gstRate;
  const total = Number(amount) + taxAmount;

  if (page === 'landing') {
    return (
      <div style={{ height: '100vh', background: '#050505', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-3px' }}>VISTARA</h1>
        <p style={{ color: '#444', marginBottom: '30px', letterSpacing: '2px' }}>TAX OPERATING SYSTEM</p>
        <button onClick={() => setPage('dashboard')} style={{ padding: '15px 40px', borderRadius: '12px', background: '#2563eb', color: 'white', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Initialize Session</button>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#02040a', color: 'white', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar */}
      <aside style={{ width: '260px', background: '#050505', borderRight: '1px solid #1a1a1a', padding: '40px 20px' }}>
        <h2 style={{ color: '#2563eb', fontWeight: '900', marginBottom: '50px' }}>VISTARA</h2>
        {['Dashboard', 'Vault', 'Audit'].map((item) => (
          <div key={item} onClick={() => setActiveTab(item)} style={{ padding: '15px 20px', borderRadius: '10px', cursor: 'pointer', marginBottom: '8px', background: activeTab === item ? '#111' : 'transparent', color: activeTab === item ? '#fff' : '#555', fontWeight: 'bold' }}>{item}</div>
        ))}
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '50px' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{activeTab}</h1>
          <select value={client} onChange={(e) => setClient(e.target.value)} style={{ background: '#111', color: '#fff', border: '1px solid #333', padding: '10px', borderRadius: '8px' }}>
            <option value="Client A">Client A</option>
            <option value="Client B">Client B</option>
            <option value="Client C">Client C</option>
          </select>
        </header>

        {activeTab === 'Dashboard' ? (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '30px' }}>
            
            {/* Compliance Section */}
            <div style={{ background: '#0a0a0a', padding: '30px', borderRadius: '24px', border: '1px solid #1a1a1a' }}>
              <h3 style={{ marginBottom: '25px' }}>Compliance: {currentStats.status}</h3>
              
              {/* Progress Bar 1 */}
              <div style={{ marginBottom: '25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '8px' }}><span>GST FILING</span><span>{currentStats.filing}%</span></div>
                <div style={{ height: '6px', background: '#222', borderRadius: '10px' }}><div style={{ height: '100%', width: ${currentStats.filing}%, background: currentStats.color, borderRadius: '10px', transition: '0.5s' }} /></div>
              </div>

              {/* Progress Bar 2 */}
              <div style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '8px' }}><span>AUDIT READINESS</span><span>{currentStats.audit}%</span></div>
                <div style={{ height: '6px', background: '#222', borderRadius: '10px' }}><div style={{ height: '100%', width: ${currentStats.audit}%, background: currentStats.color, borderRadius: '10px', transition: '0.5s' }} /></div>
              </div>
            </div>

            {/* Calculator Section */}
            <div style={{ background: 'rgba(37, 99, 235, 0.05)', padding: '30px', borderRadius: '24px', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
              <h4 style={{ color: '#2563eb', marginBottom: '20px', fontSize: '0.8rem', fontWeight: '900' }}>TAX CALCULATOR</h4>
              <input type="number" placeholder="Enter Amount ₹" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ width: '90%', padding: '12px', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '8px', marginBottom: '15px' }} />
              <select onChange={(e) => setGstRate(parseFloat(e.target.value))} style={{ width: '100%', padding: '12px', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '8px' }}>
                <option value="0.18">GST 18%</option>
                <option value="0.12">GST 12%</option>
                <option value="0.05">GST 5%</option>
                <option value="0.28">GST 28%</option>
              </select>
              <div style={{ marginTop: '25px', borderTop: '1px solid #222', paddingTop: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}><span>Tax:</span><span>₹{taxAmount.toLocaleString('en-IN')}</span></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.2rem' }}><span>Total:</span><span>₹{total.toLocaleString('en-IN')}</span></div>
              </div>
            </div>

          </div>
        ) : (
          <div style={{ border: '2px dashed #222', borderRadius: '24px', padding: '100px', textAlign: 'center', color: '#444' }}>
            <h3>{activeTab} Module Locked</h3>
            <p>Waiting for {client} credentials...</p>
          </div>
        )}
      </main>
    </div>
  );
}
