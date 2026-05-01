import React, { useState } from 'react';
import './index.css';

// Component: Premium Action Card with Glow Effect
const ToolCard = ({ title, desc, icon, color }) => (
  <div className="group relative bg-white/5 border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/[0.07] transition-all duration-500 cursor-pointer overflow-hidden">
    <div className={absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${color}} />
    <div className="text-4xl mb-6">{icon}</div>
    <h3 className="text-2xl font-bold mb-2 text-white/90">{title}</h3>
    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    <div className="mt-6 flex items-center text-sm font-bold tracking-widest text-blue-500 group-hover:gap-2 transition-all">
      LAUNCH MODULE <span className="opacity-0 group-hover:opacity-100">→</span>
    </div>
  </div>
);

function App() {
  const [isLogged, setIsLogged] = useState(false);

  if (!isLogged) {
    return (
      <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 font-sans overflow-hidden">
        {/* Animated Background Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-600/10 blur-[120px]" />

        {/* Premium Navbar */}
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-10 py-8 backdrop-blur-md bg-black/20">
          <div className="text-2xl font-black italic tracking-tighter bg-gradient-to-br from-white to-gray-500 bg-clip-text text-transparent">VISTARA</div>
          <div className="hidden md:flex gap-10 text-xs font-bold tracking-[0.2em] text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">SOLUTIONS</span>
            <span className="hover:text-white cursor-pointer transition-colors">INFRASTRUCTURE</span>
            <span className="hover:text-white cursor-pointer transition-colors">SECURITY</span>
          </div>
          <button onClick={() => setIsLogged(true)} className="bg-white text-black text-[10px] font-black tracking-widest px-8 py-3 rounded-full hover:scale-105 transition-transform">
            CLIENT ACCESS
          </button>
        </nav>

        {/* Hero Section */}
        <main className="relative pt-48 pb-20 px-6 flex flex-col items-center">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-[0.3em] text-blue-400">
            NEXT-GEN TAX ARCHITECTURE
          </div>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-center leading-[0.9] mb-10">
            Precision <br />
            <span className="text-gray-600">at Scale.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl text-center leading-relaxed mb-12">
            Vistara is the intelligence layer for elite tax firms. 
            Automating the complex so you can focus on the strategy.
          </p>
          <div className="flex gap-4">
            <button onClick={() => setIsLogged(true)} className="bg-blue-600 px-10 py-5 rounded-2xl font-bold text-sm shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] hover:bg-blue-500 transition-all">
              Start Building →
            </button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#02040a] text-white flex p-4 gap-4">
      {/* Premium Sidebar */}
      <aside className="w-24 md:w-72 bg-white/5 border border-white/10 rounded-[2.5rem] flex flex-col items-center py-10 px-6">
        <div className="text-2xl font-black italic mb-16 text-blue-500">V</div>
        <div className="space-y-4 w-full">
          {['Vault', 'Audit', 'Filing', 'Ledger'].map((item) => (
            <div key={item} className="w-full py-4 px-6 rounded-2xl text-sm font-bold text-gray-500 hover:text-white hover:bg-white/5 cursor-pointer transition-all">
              {item}
            </div>
          ))}
        </div>
        <button onClick={() => setIsLogged(false)} className="mt-auto text-[10px] font-bold tracking-widest text-red-500/50 hover:text-red-500">TERMINATE SESSION</button>
      </aside>

      {/* Workspace */}
      <main className="flex-1 space-y-6">
        <header className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] flex justify-between items-end">
          <div>
            <p className="text-[10px] font-black tracking-[0.3em] text-blue-500 mb-2 uppercase">Command Center</p>
            <h2 className="text-4xl font-bold">Principal Dashboard</h2>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 font-bold tracking-widest uppercase">System Status</p>
            <p className="text-green-500 font-mono text-xs">ONLINE // ENCRYPTED</p>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ToolCard title="GST Engine" desc="Automated reconciliation & direct portal filing." icon="💎" color="bg-blue-500" />
          <ToolCard title="ITR Automator" desc="Smart extraction from 26AS & AIS documents." icon="⚡" color="bg-purple-500" />
          <ToolCard title="Audit Log" desc="Immutable tracking for every client interaction." icon="🛡️" color="bg-emerald-500" />
        </div>
      </main>
    </div>
  );
}

export default App;
