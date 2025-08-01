// src/App.jsx

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Import the existing components
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

// Import the new UserProfile component
import UserProfile from './UserProfile';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Existing Vite/React logos section */}
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      {/* Render the existing components */}
      <Header />
      <MainContent />
      <Footer />

      {/* Render the UserProfile component with example props */}
      {/* You can change these values to display different user information */}
      <UserProfile
        name="Alice"
        age="25"
        bio="Loves hiking and photography"
      />

      {/* Another example of UserProfile with different data */}
      <UserProfile
        name="Bob"
        age="30"
        bio="Enjoys coding and gaming"
      />

      {/* Original Vite + React content (optional) */}
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
