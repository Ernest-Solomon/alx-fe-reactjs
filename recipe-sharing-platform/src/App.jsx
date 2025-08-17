import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage.jsx'; // Added .jsx
import RecipeDetail from './components/RecipeDetail.jsx'; // Added .jsx
import AddRecipeForm from './components/AddRecipeForm.jsx'; // Added .jsx
import './App.css'; // Make sure to import your CSS file

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Home Page */}
        <Route path="/" element={<HomePage />} />
        {/* Route for the Recipe Detail Page, with a dynamic ID parameter */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        {/* New route for adding a recipe */}
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
