// src/components/Footer.jsx

import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#263238', // Dark grey background
      color: 'white',
      textAlign: 'center',
      padding: '15px 20px',
      marginTop: 'auto', // Pushes footer to the bottom if content is short
      boxShadow: '0 -2px 4px rgba(0,0,0,0.2)',
      borderRadius: '8px 8px 0 0', // Rounded top corners
      fontSize: '0.9em'
    }}>
      <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
