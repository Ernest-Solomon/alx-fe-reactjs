// src/App.jsx
import React from 'react';
// Change this line:
// import UserSearch from './components/UserSearch';
// To this:
import Search from './components/Search';
import './App.css'; 

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Search />
    </div>
  );
}

export default App;
