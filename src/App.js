import React, { useState } from 'react';
import './index.css';

const ToolCard = ({ title, desc, icon }) => (
  <div style={{
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '2rem',
    borderRadius: '2rem',
    cursor: 'pointer'
  }}>
    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{icon}</div>
    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{title}</h3>
    <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{desc}</p>
  </div>
);

function App() {
  const [isLogged, setIsLogged] = useState(false);

  if (!isLogged) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
        <div style={{ position: 'absolute', top: '40px', left: '40px', fontSize: '1.5rem', fontWeight: '900', italic: 'true', color: '#3b82f6' }}>VISTARA</div>
        <h1 style={{ fontSize: '5rem', fontWeight: '900', letterSpacing: '-0.05em', marginBottom: '20px' }}>Precision at Scale.</h1>
        <p style={{ fontSize: '1.25rem', color: '#9ca3af', maxWidth: '600px', marginBottom: '40px' }}>The intelligence layer for elite tax firms. Automating the complex so you can focus on strategy.</p>
        <button 
          onClick={() => setIsLogged(true)}
          style={{ backgroundColor: '#2563eb', color: 'white', padding: '15px 40px', borderRadius: '1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}
        >
          Enter Command Center →
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#02040a', color: 'white', display: 'flex', padding: '20px', gap: '20px' }}>
      <aside style={{ width: '280px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '2rem', padding: '40px 20px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: '900', color: '#3b82f6', marginBottom: '60px', textAlign: 'center' }}>VISTARA</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {['Vault', 'Audit', 'Filing', 'Ledger'].map(item => (
            <div key={item} style={{ padding: '15px', borderRadius: '1rem', color: '#9ca3af', fontWeight: 'bold', cursor: 'pointer' }}>{item}</div>
          ))}
        </div>
        <button onClick={() => setIsLogged(false)} style={{ marginTop: 'auto', background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', fontWeight: 'bold' }}>LOGOUT</button>
      </aside>

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <header style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '40px', borderRadius: '2rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Principal Dashboard</h2>
          <p style={{ color: '#3b82f6', fontSize: '0.75rem', fontWeight: 'bold', marginTop: '10px' }}>SYSTEM ONLINE // ENCRYPTED</p>
        </header>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          <ToolCard title="GST Engine" desc="Automated reconciliation & filing." icon="💎" />
          <ToolCard title="ITR Automator" desc="Smart extraction from documents." icon="⚡" />
          <ToolCard title="Audit Log" desc="Immutable tracking for interactions." icon="🛡️" />
        </div>
      </main>
    </div>
  );
}

export default App;
