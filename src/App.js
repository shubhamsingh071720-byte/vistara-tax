import React, { useState } from 'react';
import './index.css';

// --- COMPONENTS ---

// 1. Premium GST Calculator with 5, 12, 18, 28% Slabs
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
    <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '30px', borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <h3 style={{ marginBottom: '20px', fontSize: '1.1rem', fontWeight: 'bold', letterSpacing: '1px' }}>PRECISION CALCULATOR</h3>
      
      <p style={{ fontSize: '0.6rem', color: '#9ca3af', marginBottom: '8px', fontWeight: 'bold' }}>BASE AMOUNT (₹)</p>
      <input 
        type="number" 
        placeholder="Enter Amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '100%', padding: '12px', borderRadius: '12px', background: '#050505', border: '1px solid #333', color: 'white', marginBottom: '20px' }}
      />

      <p style={{ fontSize: '0.6rem', color: '#9ca3af', marginBottom: '8px', fontWeight: 'bold' }}>GST SLAB</p>
      <select 
        onChange={(e) => setGstRate(parseFloat(e.target.value))}
        value={gstRate}
        style={{ width: '100%', padding: '12px', borderRadius: '12px', background: '#050505', border: '1px solid #333', color: 'white', marginBottom: '25px', cursor: 'pointer' }}
      >
        {rates.map((rate) => (
          <option key={rate.value} value={rate.value}>{rate.label}</option>
        ))}
      </select>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div style={{ padding: '15px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '15px', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
          <p style={{ fontSize: '0.5rem', color: '#3b82f6', fontWeight: 'bold' }}>TAX AMOUNT</p>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>₹{taxAmount.toLocaleString('en-IN')}</p>
        </div>
        <div style={{ padding: '15px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '15px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <p style={{ fontSize: '0.5rem', color: '#10b981', fontWeight: 'bold' }}>TOTAL INVOICE</p>
          <p style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>₹{total.toLocaleString('en-IN')}</p>
        </div>
      </div>
    </div>
  );
};

// 2. Action Cards for the Dashboard
const ToolCard = ({ title, desc, icon }) => (
  <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '2rem', borderRadius: '2rem', cursor: 'pointer' }}>
    <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{icon}</div>
    <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ color: '#9ca3af', fontSize: '0.8rem', lineHeight: '1.5' }}>{desc}</p>
  </div>
);

// --- MAIN APP COMPONENT ---

function App() {
  const [activePage, setActivePage] = useState('landing'); // 'landing' or 'dashboard'
  const [activeTab, setActiveTab] = useState('Vault');

  // VIEW 1: PREMIUM LANDING PAGE (Attraction)
  if (activePage === 'landing') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px', fontFamily: 'sans-serif' }}>
        <div style={{ position: 'absolute', top: '40px', left: '40px', fontSize: '1.5rem', fontWeight: '900', color: '#3b82f6', letterSpacing: '-1px' }}>VISTARA</div>
        
        <div style={{ marginBottom: '20px', fontSize: '0.7rem', fontWeight: 'bold', trackingSpacing: '3px', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.3)', padding: '8px 20px', borderRadius: '50px', background: 'rgba(59, 130, 246, 0.05)' }}>
          THE OPERATING SYSTEM FOR MODERN TAX FIRMS
        </div>

        <h1 style={{ fontSize: '6rem', fontWeight: '900', letterSpacing: '-0.05em', marginBottom: '20px', lineHeight: '0.9' }}>
          Precision <br /><span style={{ color: '#333' }}>at Scale.</span>
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: '#888', maxWidth: '600px', marginBottom: '40px', lineHeight: '1.6' }}>
          Automate GST reconciliation, ITR filing, and client audits through a single, encrypted command center.
        </p>

        <button 
          onClick={() => setActivePage('dashboard')}
          style={{ backgroundColor: '#2563eb', color: 'white', padding: '18px 45px', borderRadius: '1.2rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1rem', boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2)' }}
        >
          Initialize Command Center →
        </button>
      </div>
    );
  }

  // VIEW 2: WORKING DASHBOARD (Utility)
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#02040a', color: 'white', display: 'flex', padding: '20px', gap: '20px', fontFamily: 'sans-serif' }}>
      
      {/* Sidebar Navigation */}
      <aside style={{ width: '260px', backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '2.5rem', padding: '40px 20px', display: 'flex', flexDirection: 'column', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#3b82f6', marginBottom: '60px', textAlign: 'center' }}>VISTARA</div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {['Vault', 'Audit', 'Filing', 'Ledger'].map(item => (
            <div 
              key={item} 
              onClick={() => setActiveTab(item)}
              style={{ 
                padding: '16px 20px', borderRadius: '1.2rem', 
                color: activeTab === item ? 'white' : '#666', 
                background: activeTab === item ? 'rgba(255,255,255,0.08)' : 'transparent',
                fontWeight: 'bold', cursor: 'pointer', transition: '0.3s', fontSize: '0.9rem'
              }}
            >
              {item}
            </div>
          ))}
        </nav>

        <button 
          onClick={() => setActivePage('landing')} 
          style={{ marginTop: 'auto', background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.8rem', letterSpacing: '1px' }}
        >
          TERMINATE SESSION
        </button>
      </aside>

      {/* Workspace Area */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        <header style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '40px', borderRadius: '2.5rem', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 'bold' }}>{activeTab} Dashboard</h2>
            <p style={{ color: '#3b82f6', fontSize: '0.7rem', fontWeight: 'bold', marginTop: '8px', letterSpacing: '2px' }}>ENCRYPTED CONNECTION // STABLE</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.8rem', color: '#555', fontWeight: 'bold' }}>FIRM ID: VSTR-2026</div>
          </div>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '20px' }}>
          
          {/* Active Logs / Content Area */}
          <section style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', padding: '40px', borderRadius: '2.5rem', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
             <h3 style={{ marginBottom: '25px', fontWeight: 'bold', color: '#eee' }}>Recent Intelligence</h3>
             <div style={{ spaceY: '15px' }}>
               {[
                 { client: 'Reliance Ind.', task: 'GST-R1 Filing', status: 'VERIFIED', color: '#10b981' },
                 { client: 'Tata Motors', task: 'Tax Audit 2026', status: 'PENDING', color: '#f59e0b' },
                 { client: 'Zomato Ltd.', task: 'TDS Reconciliation', status: 'IN REVIEW', color: '#3b82f6' }
               ].map((log, i) => (
                 <div key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', padding: '15px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                   <div>
                     <div style={{ fontWeight: 'bold', fontSize: '0.95rem' }}>{log.client}</div>
                     <div style={{ fontSize: '0.75rem', color: '#555' }}>{log.task}</div>
                   </div>
                   <span style={{ color: log.color, fontSize: '0.7rem', fontWeight: 'bold', border: 1px solid ${log.color}44, padding: '4px 12px', borderRadius: '50px' }}>
                     {log.status}
                   </span>
                 </div>
               ))}
             </div>
          </section>

          {/* Sidebar Tools */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <GSTCalculator />
            <div style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #1e1b4b 100%)', padding: '30px', borderRadius: '2rem', textAlign: 'center' }}>
              <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '10px' }}>SYSTEM UPDATE</p>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>ITR-4 Forms now available for pre-fill.</p>
            </div>
          </div>
        </div>

        {/* Bottom Tool Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <ToolCard title="GST Engine" desc="Automated pull from portal." icon="💎" />
          <ToolCard title="ITR Vault" desc="Secure document storage." icon="⚡" />
          <ToolCard title="Audit AI" desc="Risk assessment for filings." icon="🛡️" />
        </div>
      </main>
    </div>
  );
}

export default App;
