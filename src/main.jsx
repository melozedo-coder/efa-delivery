import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <main style={{
      fontFamily: 'sans-serif',
      maxWidth: '480px',
      margin: 'auto',
      padding: '24px',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#087f5b' }}>EFA DELIVERY</h1>
      <p>በጊምቢቹ የዴሊቨሪ አገልግሎት</p>
      <p>እርስዎ ባሉበት ሆነው ያዝዙ።</p>
      <button
        onClick={() => alert('የትዕዛዝ ቅጹን በቅርቡ እንጨምራለን።')}
        style={{
          background: '#087f5b',
          color: 'white',
          padding: '14px 24px',
          border: 'none',
          borderRadius: '8px',
          fontSize: '16px'
        }}
      >
        ትዕዛዝ ይስጡ
      </button>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

