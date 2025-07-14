// src/App.jsx

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// In this version, we are no longer importing Header, MainContent, or Footer
// because their content is now directly included in this file.
// import Header from './Header';
// import MainContent from './MainContent';
// import Footer from './Footer';

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

      {/* Header Section - content directly included here */}
      <header>
        <h1>My Favorite Cities</h1>
      </header>

      {/* Main Content Section - content directly included here */}
      <main>
        <p>I love to visit New York, Paris, and Tokyo.</p>
      </main>

      {/* Footer Section - content directly included here */}
      <footer>
        <p>© 2023 City Lovers</p>
      </footer>

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
