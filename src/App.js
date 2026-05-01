// ... (Keep the clientData and GSTCalculator from before)

// Add this new component for a professional look
const ProgressBar = ({ label, percentage, color }) => (
  <div style={{ marginBottom: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', marginBottom: '5px' }}>
      <span>{label}</span>
      <span>{percentage}%</span>
    </div>
    <div style={{ width: '100%', height: '8px', background: '#222', borderRadius: '10px', overflow: 'hidden' }}>
      <div style={{ width: ${percentage}%, height: '100%', background: color, transition: '0.5s ease-out' }} />
    </div>
  </div>
);

export default function App() {
  const [page, setPage] = useState('landing');
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [selectedClient, setSelectedClient] = useState('Client A');

  // Logic to determine "Health" of a client
  const getStats = (client) => {
    if (client === 'Client A') return { filing: 100, audit: 90, color: '#10b981' };
    if (client === 'Client B') return { filing: 45, audit: 60, color: '#f59e0b' };
    return { filing: 10, audit: 5, color: '#ef4444' }; // Client C
  };

  const stats = getStats(selectedClient);

  if (page === 'landing') {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#050505', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '900', letterSpacing: '-2px' }}>VISTARA</h1>
        <p style={{ color: '#444', marginBottom: '30px' }}>Unified Tax Intelligence.</p>
        <button onClick={() => setPage('dashboard')} style={{ padding: '15px 40px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '12px', fontWeight: 'bold', cursor: 'pointer' }}>Enter System</button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#02040a', color: 'white', display: 'flex', fontFamily: 'sans-serif' }}>
      {/* Sidebar (Same as before) */}
      <aside style={{ width: '260px', borderRight: '1px solid #222', padding: '40px 20px', background: '#050505' }}>
        <h2 style={{ color: '#2563eb', fontWeight: '900', marginBottom: '50px' }}>VISTARA</h2>
        {['Dashboard', 'Vault', 'Audit'].map(item => (
          <div key={item} onClick={() => setActiveTab(item)} style={{ padding: '15px', borderRadius: '10px', cursor: 'pointer', backgroundColor: activeTab === item ? '#111' : 'transparent', color: activeTab === item ? 'white' : '#555', marginBottom: '5px', fontWeight: 'bold' }}>{item}</div>
        ))}
      </aside>

      <main style={{ flex: 1, padding: '50px' }}>
        <header style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{activeTab}</h2>
          <select onChange={(e) => setSelectedClient(e.target.value)} style={{ padding: '12px', borderRadius: '10px', background: '#111', color: 'white', border: '1px solid #333', cursor: 'pointer' }}>
            <option value="Client A">Client A (Active)</option>
            <option value="Client B">Client B (Pending)</option>
            <option value="Client C">Client C (Critical)</option>
          </select>
        </header>

        {activeTab === 'Dashboard' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '30px' }}>
            <div style={{ background: 'rgba(255,255,255,0.02)', padding: '30px', borderRadius: '24px', border: '1px solid #222' }}>
              <h3 style={{ marginBottom: '30px' }}>Compliance Health: {selectedClient}</h3>
              <ProgressBar label="GST Filing Progress" percentage={stats.filing} color={stats.color} />
              <ProgressBar label="Audit Completion" percentage={stats.audit} color={stats.color} />
              <div style={{ marginTop: '40px', padding: '20px', background: '#000', borderRadius: '15px', color: '#666', fontSize: '0.8rem' }}>
                <strong>System Note:</strong> Data last synced with GSTN Portal at 12:00 PM today.
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
               <GSTCalculator />
            </div>
          </div>
        )}

        {activeTab === 'Vault' && (
           <div style={{ border: '2px dashed #222', borderRadius: '30px', padding: '80px', textAlign: 'center', color: '#444' }}>
             <h3>Secure Document Repository</h3>
             <p>Select Client Files for {selectedClient}</p>
           </div>
        )}
        
        {activeTab === 'Audit' && <div style={{ color: '#555' }}>No active alerts for {selectedClient}.</div>}
      </main>
    </div>
  );
}
