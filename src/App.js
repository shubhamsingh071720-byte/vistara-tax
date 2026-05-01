import React, { useState } from 'react';

// --- COMPONENTS ---

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
      <h3 style={{ marginBottom: '15px', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '1px', color: '#3b82f6' }}>TAX CALCULATOR</h3>
      <input 
        type="number" placeholder="Base Amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '100%', padding: '12px', borderRadius: '10px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '15px' }}
      />
      <select 
        onChange={(e) => setGstRate(parseFloat(e.target.value))}
        value={gstRate}
        style={{ width: '100%', padding: '12px', borderRadius: '10px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '20px' }}
      >
        {rates.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
      </select>
      <div style={{ display: 'flex', gap: '10px' }}>
        <div style={{ flex: 1, padding: '15px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '15px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
          <p style={{ fontSize: '0.6rem', color: '#3b82f6', fontWeight: 'bold' }}>TAX</p>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>₹{taxAmount.toLocaleString('en-IN')}</p>
        </div>
        <div style={{ flex: 1, padding: '15px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '15px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <p style={{ fontSize: '0.6rem', color: '#10b981', fontWeight: 'bold' }}>TOTAL</p>
          <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>₹{total.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

export default function App() {
  const [page, setPage] = useState('landing');
  const [activeTab, setActiveTab] = useState('Dashboard');
  
  const commonBg = { minHeight: '100vh', backgroundColor: '#02040a', color: 'white', fontFamily: 'Inter, system-ui, sans-serif' };

  if (page === 'landing') {
    return (
      <div style={{ ...commonBg, backgroundColor: '#050505', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <h1 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '-3px', marginBottom: '10px' }}>VISTARA</h1>
        <p style={{ color: '#555', fontSize: '1.2rem', marginBottom: '40px' }}>Precision Architecture for Tax Professionals.</p>
        <button onClick={() => setPage('dashboard')} style={{ padding: '18px 50px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '15px', fontWeight: 'bold', cursor: 'pointer', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(37,99,235,0.3)' }}>
          Initialize Session →
        </button>
      </div>
    );
  }

  return (
    <div style={{ ...commonBg, display: 'flex' }}>
      {/* Sidebar */}
      <aside style={{ width: '280px', borderRight: '1px solid rgba(255,255,255,0.05)', padding: '40px 20px', display: 'flex', flexDirection: 'column', background: '#050505' }}>
        <h2 style={{ color: '#2563eb', fontSize: '1.5rem', fontWeight: '900', marginBottom: '60px', textAlign: 'center' }}>VISTARA</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['Dashboard', 'Vault', 'Audit'].map(item => (
            <div 
              key={item}
              onClick={() => setActiveTab(item)}
              style={{ 
                padding: '15px 25px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem',
                backgroundColor: activeTab === item ? 'rgba(255,255,255,0.05)' : 'transparent',
                color: activeTab === item ? 'white' : '#555',
                transition: '0.3s'
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <button onClick={() => setPage('landing')} style={{ marginTop: 'auto', background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.8rem', opacity: '0.5' }}>LOGOUT</button>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '50px', overflowY: 'auto' }}>
        <header style={{ marginBottom: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 'bold', color: '#2563eb', letterSpacing: '2px', marginBottom: '10px' }}>SYSTEM // {activeTab.toUpperCase()}</p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>{activeTab === 'Dashboard' ? 'Working Model' : activeTab}</h2>
          </div>
          <div style={{ color: '#10b981', fontSize: '0.7rem', fontWeight: 'bold', border: '1px solid #10b98144', padding: '5px 15px', borderRadius: '50px' }}>SECURE LINE ACTIVE</div>
        </header>

        {/* Dynamic Content based on Sidebar */}
        {activeTab === 'Dashboard' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '30px', padding: '40px' }}>
              <h3 style={{ marginBottom: '20px' }}>Client Intelligence</h3>
              <div style={{ color: '#444', fontSize: '0.9rem' }}>No anomalies detected in current batch. All GST filings synced.</div>
            </div>
            <GSTCalculator />
          </div>
        )}

        {activeTab === 'Vault' && (
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '30px', padding: '100px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>📁</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Drop Client Documents Here</h3>
            <p style={{ color: '#555' }}>Supports PDF, XML, and Excel. Auto-encryption enabled.</p>
            <button style={{ marginTop: '30px', padding: '12px 30px', borderRadius: '10px', background: 'white', color: 'black', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>Browse Files</button>
          </div>
        )}

        {activeTab === 'Audit' && (
          <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '30px', padding: '40px' }}>
             <h3 style={{ marginBottom: '20px' }}>Audit History</h3>
             <p style={{ color: '#555' }}>Select a client to view full transaction logs.</p>
          </div>
        )}
      </main>
    </div>
  );
}
