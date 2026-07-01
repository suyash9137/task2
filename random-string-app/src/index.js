import React, { useState } from 'https://esm.sh/react@18';
import ReactDOM from 'https://esm.sh/react-dom@18';

function App() {
  const [randomStr, setRandomStr] = useState('');

  const generate = () => {
    const length = 8;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setRandomStr(result);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '2rem', textAlign: 'center' }}>
      <h1>Random String Generator</h1>
      <button onClick={generate} style={{ padding: '0.5rem 1rem', fontSize: '1rem' }}>
        Generate
      </button>
      {randomStr && (
        <div style={{ marginTop: '1rem', fontSize: '1.5rem', wordBreak: 'break-all' }}>
          {randomStr}
        </div>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);