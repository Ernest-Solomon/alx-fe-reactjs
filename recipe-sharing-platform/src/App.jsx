import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import './App.css'; // Your project's main CSS file

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Home Page */}
        <Route path="/" element={<HomePage />} />
        {/* Route for the Recipe Detail Page, with a dynamic ID parameter */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
