import React from 'react';

export default function App() {
  return (
    <div style={{ 
      backgroundColor: '#050505', 
      color: 'white', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      fontFamily: 'sans-serif',
      margin: 0
    }}>
      <h1 style={{ fontSize: '4rem', fontWeight: '900', marginBottom: '10px' }}>VISTARA</h1>
      <div style={{ width: '40px', height: '2px', background: '#2563eb', marginBottom: '20px' }}></div>
      <p style={{ color: '#666', letterSpacing: '2px' }}>SYSTEM ONLINE</p>
    </div>
  );
}
