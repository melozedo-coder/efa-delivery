
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    details: '',
    address: '',
    location: '',
    payment: 'Telebirr'
  });

  const [message, setMessage] = useState('');

  function update(field, value) {
    setForm({ ...form, [field]: value });
  }

  function submitOrder(e) {
    e.preventDefault();
    setMessage(
      'ቅጹ ተሞልቷል። የSupabase ግንኙነትን በቀጣዩ ደረጃ እናገናኛለን።'
    );
  }

  const fieldStyle = {
    width: '100%',
    padding: '12px',
    marginTop: '6px',
    marginBottom: '14px',
    border: '1px solid #cbd5d0',
    borderRadius: '8px'
  };

  return (
    <main style={{ maxWidth: 480, margin: 'auto', padding: 20 }}>
      <header style={{
        background: '#087f5b',
        color: 'white',
        padding: 22,
        borderRadius: 16,
        textAlign: 'center'
      }}>
        <h1>EFA DELIVERY</h1>
        <p>በጊምቢቹ የዴሊቨሪ አገልግሎት</p>
        <b>እርስዎ ባሉበት ሆነው ያዝዙ!</b>
      </header>

      <form onSubmit={submitOrder} style={{
        background: 'white',
        padding: 18,
        marginTop: 18,
        borderRadius: 16
      }}>
        <h2>የትዕዛዝ ቅጽ</h2>

        <label>ሙሉ ስም</label>
        <input
          required
          style={fieldStyle}
          value={form.name}
          onChange={e => update('name', e.target.value)}
          placeholder="ስምዎን ያስገቡ"
        />

        <label>ስልክ ቁጥር</label>
        <input
          required
          type="tel"
          style={fieldStyle}
          value={form.phone}
          onChange={e => update('phone', e.target.value)}
          placeholder="09xxxxxxxx"
        />

        <label>የሚያዙት እቃ / ዝርዝር</label>
        <textarea
          required
          style={fieldStyle}
          value={form.details}
          onChange={e => update('details', e.target.value)}
          placeholder="የሚፈልጉትን ይጻፉ"
        />

        <label>የመድረሻ አድራሻ</label>
        <input
          required
          style={fieldStyle}
          value={form.address}
          onChange={e => update('address', e.target.value)}
          placeholder="አካባቢዎን ይጻፉ"
        />

        <label>የካርታ አገናኝ (ካለ)</label>
        <input
          type="url"
          style={fieldStyle}
          value={form.location}
          onChange={e => update('location', e.target.value)}
          placeholder="Google Maps link"
        />

        <label>የክፍያ ዘዴ</label>
        <select
          style={fieldStyle}
          value={form.payment}
          onChange={e => update('payment', e.target.value)}
        >
          <option value="Telebirr">Telebirr</option>
          <option value="Bank">ባንክ</option>
        </select>

        <button type="submit" style={{
          width: '100%',
          background: '#087f5b',
          color: 'white',
          padding: 14,
          border: 0,
          borderRadius: 8,
          fontWeight: 'bold'
        }}>
          ትዕዛዝ ይላኩ
        </button>

        {message && <p role="status">{message}</p>}
      </form>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);


