// src/App.jsx
import React from 'react';
// Corrected import to include the .jsx file extension
import HomePage from './components/HomePage.jsx';
// Changed import to use App.css, which is the default for many Vite templates
import './App.css';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

export default App;
