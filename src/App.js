import React, { useState, useCallback, useEffect } from 'react';

function App() {
  const [length, setLength] = useState(10);
  const [randomString, setRandomString] = useState('');

  const generateRandomString = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setRandomString(result);
  }, [length]);

  useEffect(() => {
    generateRandomString();
  }, [generateRandomString, length]);

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Random String Generator</h1>
      <div style={{ margin: '20px 0' }}>
        <label htmlFor="length">String Length: </label>
        <input
          id="length"
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          min="1"
          style={{ marginLeft: '10px', padding: '5px', width: '60px' }}
        />
      </div>
      <button
        onClick={generateRandomString}
        style={{
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        Generate String
      </button>
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '4px', minHeight: '60px' }}>
        <h2>Generated String:</h2>
        <p
          style={{
            wordBreak: 'break-all',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
            backgroundColor: '#e9ecef',
            padding: '10px',
            borderRadius: '4px'
          }}
        >
          {randomString || 'Click "Generate String" to create a random string'}
        </p>
      </div>
    </div>
  );
}

export default App;