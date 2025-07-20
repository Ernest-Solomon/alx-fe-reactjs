// src/pages/Home.jsx

import React from 'react';

function Home() {
  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#e0f7fa', minHeight: 'calc(100vh - 120px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ color: '#00796b', fontSize: '3em', marginBottom: '15px' }}>Welcome to Our Company</h1>
      <p style={{ color: '#333', fontSize: '1.2em', maxWidth: '600px', lineHeight: '1.6' }}>
        We are dedicated to delivering excellence in all our services. Explore our site to learn more about what we offer.
      </p>
    </div>
  );
}

export default Home;
