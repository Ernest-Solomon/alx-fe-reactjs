// src/pages/Services.jsx

import React from 'react';

function Services() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#e8f5e9', minHeight: 'calc(100vh - 120px)' }}>
      <h1 style={{ color: '#2e7d32', fontSize: '2.5em', marginBottom: '15px' }}>Our Services</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ backgroundColor: '#c8e6c9', margin: '10px 0', padding: '10px', borderRadius: '5px', fontSize: '1.1em', color: '#333' }}>
          <strong>Technology Consulting:</strong> Expert advice and solutions for your IT infrastructure.
        </li>
        <li style={{ backgroundColor: '#c8e6c9', margin: '10px 0', padding: '10px', borderRadius: '5px', fontSize: '1.1em', color: '#333' }}>
          <strong>Market Analysis:</strong> In-depth research to identify market trends and opportunities.
        </li>
        <li style={{ backgroundColor: '#c8e6c9', margin: '10px 0', padding: '10px', borderRadius: '5px', fontSize: '1.1em', color: '#333' }}>
          <strong>Product Development:</strong> From concept to launch, we build robust and scalable products.
        </li>
        <li style={{ backgroundColor: '#c8e6c9', margin: '10px 0', padding: '10px', borderRadius: '5px', fontSize: '1.1em', color: '#333' }}>
          <strong>Digital Marketing:</strong> Strategies to boost your online presence and reach.
        </li>
      </ul>
    </div>
  );
}

export default Services;
