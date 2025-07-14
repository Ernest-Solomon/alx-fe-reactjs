 // src/App.jsx

    import { useState } from 'react';
    import reactLogo from './assets/react.svg';
    import viteLogo from '/vite.svg';
    import './App.css';

    // Import the new components
    import Header from './Header';
    import MainContent from './MainContent';
    import Footer from './Footer';

    // You can remove the WelcomeMessage import if you no longer need it,
    // or keep it if you plan to use it elsewhere.
    // import WelcomeMessage from './WelcomeMessage';


    function App() {
      const [count, setCount] = useState(0);

      return (
        // Using a React Fragment <>...</> to group multiple top-level elements
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

          {/* Include the new components in the specified order */}
          <Header />
          <MainContent />
          <Footer />

          {/* Original Vite + React content (optional, you can remove this if desired) */}
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
