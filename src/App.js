import React from "react";
import { Shield, Zap, Check, Menu, MessageSquare, BarChart3, ChevronRight, Star } from "lucide-react";
import { motion } from "framer-motion";

const PricingCard = ({ title, price, features, highlighted, cta }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    className={`p-10 rounded-[2.5rem] border transition-all flex flex-col h-full ${
      highlighted 
      ? 'border-blue-500 bg-gradient-to-b from-blue-500/10 to-transparent shadow-[0_20px_50px_rgba(59,130,246,0.2)]' 
      : 'border-white/10 bg-white/5 hover:border-white/20'
    }`}
  >
    <div className="mb-8">
      {highlighted && (
        <span className="bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <div className="flex items-baseline gap-1">
        <span className="text-5xl font-black">₹{price}</span>
        <span className="text-slate-400 text-sm">/month</span>
      </div>
    </div>
    <ul className="space-y-5 mb-10 flex-grow">
      {features.map((feature, i) => (
        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
          <div className="mt-1 bg-blue-500/20 p-0.5 rounded-full">
            <Check size={14} className="text-blue-400" />
          </div>
          {feature}
        </li>
      ))}
    </ul>
    <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
      highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/30' : 'bg-white text-black hover:bg-slate-200'
    }`}>
      {cta}
    </button>
  </motion.div>
);

export default function VistaraApp() {
  return (
    <div className="min-h-screen bg-[#02040a] text-white selection:bg-blue-500/30 overflow-x-hidden font-sans">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50 bg-white/5 backdrop-blur-xl rounded-full px-8 py-4 flex justify-between items-center border border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold italic shadow-lg shadow-blue-600/20">V</div>
          <span className="text-xl font-black tracking-tighter">VISTARA</span>
        </div>
        <button className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs hover:bg-blue-500 hover:text-white transition-all">LOG IN</button>
      </nav>
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.9]">
            Scale Beyond <br/> <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Boundaries.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12">The premium OS for Indian tax firms. Automate GST and ITR with ₹149 brilliance.</p>
        </div>
      </section>
      <section id="pricing" className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <PricingCard title="Genesis" price="0" cta="Free Forever" features={["2 Clients", "Basic GST Alerts"]} />
          <PricingCard title="Solo" price="149" highlighted={true} cta="Start Solo Journey" features={["10 Clients", "WhatsApp Autochase", "SmartVault (5GB)"]} />
          <PricingCard title="Growth" price="499" cta="Scale Your Firm" features={["Unlimited Clients", "Team Dashboards", "White-label Portal"]} />
        </div>
      </section>
    </div>
  );
}
