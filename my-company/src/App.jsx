// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// All components are now imported from the 'components' directory
// Assuming all your .jsx files (Home, About, Services, Contact, Navbar, Footer)
// are now located directly inside 'src/components/'
import Navbar from './components/Navbar'; // Path to Navbar in src/components
import Footer from './components/Footer'; // Path to Footer in src/components

// Import your page components, now also from the 'components' directory
import Home from './components/Home';      // Path to Home in src/components
import About from './components/About';    // Path to About in src/components
import Services from './components/Services'; // Path to Services in src/components
import Contact from './components/Contact';  // Path to Contact in src/components

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar /> {/* Include the Navbar at the top */}

        <div style={{ flexGrow: 1 }}> {/* Main content area that grows */}
          <Routes>
            {/* Define routes for each page, now pointing to components in src/components */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        <Footer /> {/* Include the Footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;
