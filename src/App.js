import React, { useState } from 'react';

// --- MOCK DATABASE ---
const clientData = {
  'Client A': { gstStatus: 'Filed', itrStatus: 'Pending', lastAudit: '2 days ago' },
  'Client B': { gstStatus: 'Pending', itrStatus: 'In Review', lastAudit: '5 days ago' },
  'Client C': { gstStatus: 'Overdue', itrStatus: 'Not Started', lastAudit: 'Never' },
};

// --- CALCULATOR COMPONENT ---
const GSTCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [gstRate, setGstRate] = useState(0.18);
  const taxAmount = Number(amount) * gstRate;
  const total = Number(amount) + taxAmount;

  return (
    <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '25px', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <h3 style={{ marginBottom: '15px', fontSize: '0.8rem', fontWeight: 'bold', color: '#3b82f6' }}>QUICK CALC</h3>
      <input type="number" placeholder="Base ₹" onChange={(e) => setAmount(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#111', border: '1px solid #333', color: 'white', marginBottom: '10px' }} />
      <select onChange={(e) => setGstRate(parseFloat(e.target.value))} style={{ width: '100%', padding: '10px', borderRadius: '8px', background: '#111', border: '1px solid #333', color: 'white' }}>
        <option value="0.05">5%</option>
        <option value="0.12">12%</option>
        <option value="0.18" selected>18%</option>
        <option value="0.28">28%</option>
      </select>
      <div style={{ marginTop: '15px', fontSize: '0.9rem', fontWeight: 'bold' }}>Total: ₹{total.toLocaleString('en-IN')}</div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [page, setPage] = useState('landing');
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [selectedClient, setSelectedClient] = useState('Client A');

  if (page === 'landing') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '20px' }}>VISTARA</h1>
        <button onClick={() => setPage('dashboard')} style={{ padding: '15px 40px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>Initialize Session</button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#02040a', color: 'white', display: 'flex', fontFamily: 'sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: '260px', borderRight: '1px solid #222', padding: '40px 20px', display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ color: '#2563eb', fontWeight: '900', marginBottom: '50px' }}>VISTARA</h2>
        {['Dashboard', 'Vault', 'Audit'].map(item => (
          <div key={item} onClick={() => setActiveTab(item)} style={{ padding: '15px', borderRadius: '10px', cursor: 'pointer', backgroundColor: activeTab === item ? '#111' : 'transparent', color: activeTab === item ? 'white' : '#555', marginBottom: '5px' }}>{item}</div>
        ))}
        <button onClick={() => setPage('landing')} style={{ marginTop: 'auto', background: 'none', border: 'none', color: 'red', cursor: 'pointer' }}>LOGOUT</button>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '50px' }}>
        <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{activeTab}</h2>
          <select onChange={(e) => setSelectedClient(e.target.value)} style={{ padding: '10px', borderRadius: '8px', background: '#111', color: 'white', border: '1px solid #333' }}>
            {Object.keys(clientData).map(name => <option key={name} value={name}>{name}</option>)}
          </select>
        </header>

        {activeTab === 'Dashboard' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '20px' }}>
            <div style={{ background: '#111', padding: '30px', borderRadius: '20px' }}>
              <h3 style={{ marginBottom: '20px' }}>Status for {selectedClient}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>GST Return:</span>
                <span style={{ color: clientData[selectedClient].gstStatus === 'Filed' ? '#10b981' : '#ef4444' }}>{clientData[selectedClient].gstStatus}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span>ITR Status:</span>
                <span>{clientData[selectedClient].itrStatus}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Last Audit:</span>
                <span style={{ color: '#555' }}>{clientData[selectedClient].lastAudit}</span>
              </div>
            </div>
            <GSTCalculator />
          </div>
        )}

        {activeTab === 'Vault' && (
          <div style={{ border: '2px dashed #222', borderRadius: '20px', padding: '100px', textAlign: 'center' }}>
            <p>Upload documents for <strong>{selectedClient}</strong></p>
            <button style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '8px' }}>Select PDF</button>
          </div>
        )}

        {activeTab === 'Audit' && <div style={{ background: '#111', padding: '30px', borderRadius: '20px' }}>No active audit alerts for {selectedClient}.</div>}
      </main>
    </div>
  );
}
