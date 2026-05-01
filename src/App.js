import React, { useState } from 'react';
import './index.css';

// Component: Interactive GST Calculator Tool
const GSTCalculator = () => {
  const [amount, setAmount] = useState(0);
  const gstRate = 0.18; // 18% GST

  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '30px', borderRadius: '2rem', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <h3 style={{ marginBottom: '20px', fontSize: '1.2rem', fontWeight: 'bold' }}>Quick GST Calculator</h3>
      <input 
        type="number" 
        placeholder="Enter Base Amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{ width: '100%', padding: '12px', borderRadius: '10px', background: '#050505', border: '1px solid #333', color: 'white', marginBottom: '20px' }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
        <div style={{ padding: '15px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '15px' }}>
          <p style={{ fontSize: '0.7rem', color: '#3b82f6', fontWeight: 'bold' }}>IGST (18%)</p>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>₹{(amount * gstRate).toFixed(2)}</p>
        </div>
        <div style={{ padding: '15px', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '15px' }}>
          <p style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold' }}>TOTAL BILL</p>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>₹{(amount * 1.18).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [activeTab, setActiveTab] = useState('Vault');

  if (!isLogged) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <div style={{ position: 'absolute', top: '40px', left: '40px', fontSize: '1.5rem', fontWeight: '900', color: '#3b82f6' }}>VISTARA</div>
        <h1 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '-0.05em', marginBottom: '20px' }}>Precision at Scale.</h1>
        <button 
          onClick={() => setIsLogged(true)}
          style={{ backgroundColor: '#2563eb', color: 'white', padding: '15px 40px', borderRadius: '1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
        >
          Access Command Center →
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#02040a', color: 'white', display: 'flex', padding: '20px', gap: '20px' }}>
      {/* Sidebar with Navigation Logic */}
      <aside style={{ width: '280px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '2rem', padding: '40px 20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#3b82f6', marginBottom: '60px', textAlign: 'center' }}>VISTARA</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['Vault', 'Audit', 'Filing', 'Ledger'].map(item => (
            <div 
              key={item} 
              onClick={() => setActiveTab(item)}
              style={{ 
                padding: '15px', borderRadius: '1rem', 
                color: activeTab === item ? 'white' : '#9ca3af', 
                background: activeTab === item ? 'rgba(255,255,255,0.1)' : 'transparent',
                fontWeight: 'bold', cursor: 'pointer', transition: '0.3s' 
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <button onClick={() => setIsLogged(false)} style={{ marginTop: 'auto', background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold' }}>LOGOUT</button>
      </aside>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <header style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{activeTab} Dashboard</h2>
          <p style={{ color: '#3b82f6', fontSize: '0.75rem', fontWeight: 'bold', marginTop: '10px' }}>SECURE SESSION ACTIVE</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '20px' }}>
          {/* Main Tool Area */}
          <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '2rem' }}>
             <h3 style={{ marginBottom: '20px' }}>Active Client Logs</h3>
             <div style={{ borderBottom: '1px solid #333', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
               <span>Client_A (GST-R1)</span>
               <span style={{ color: '#10b981' }}>COMPLETED</span>
             </div>
             <div style={{ borderBottom: '1px solid #333', padding: '10px 0', display: 'flex', justifyContent: 'space-between' }}>
               <span>Client_B (ITR-3)</span>
               <span style={{ color: '#f59e0b' }}>IN PROGRESS</span>
             </div>
          </div>

          {/* Calculator Side Tool */}
          <GSTCalculator />
        </div>
      </main>
    </div>
  );
}

export default App;
