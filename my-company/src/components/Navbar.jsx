// src/components/Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#263238', // Dark grey background
      padding: '15px 20px',
      display: 'flex',
      justifyContent: 'center', // Center align links
      boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
      borderRadius: '0 0 8px 8px' // Rounded bottom corners
    }}>
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '25px' // Space between links
      }}>
        <li>
          <Link to="/" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            padding: '8px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#455a64'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >Home</Link>
        </li>
        <li>
          <Link to="/about" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            padding: '8px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#455a64'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >About</Link>
        </li>
        <li>
          <Link to="/services" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            padding: '8px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#455a64'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >Services</Link>
        </li>
        <li>
          <Link to="/contact" style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '1.1em',
            fontWeight: 'bold',
            padding: '8px 15px',
            borderRadius: '5px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#455a64'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
