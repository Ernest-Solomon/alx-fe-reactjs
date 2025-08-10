// src/App.jsx
import React from 'react';
import UserSearch from './components/UserSearch';
import './App.css'; // Make sure to import your CSS file

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <UserSearch />
    </div>
  );
}

export default App;
