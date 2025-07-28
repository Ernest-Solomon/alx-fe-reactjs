// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList'; // New: Import FavoritesList
import RecommendationsList from './components/RecommendationsList'; // New: Import RecommendationsList

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>Recipe Sharing Application</h1>
        
        {/* Navigation links */}
        <nav style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
          <Link to="/add" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Add New Recipe</Link>
        </nav>

        {/* Define your routes */}
        <Routes>
          {/* Home page - now includes SearchBar, AddRecipeForm, RecipeList, FavoritesList, and RecommendationsList */}
          <Route path="/" element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
              <FavoritesList /> {/* Display FavoritesList on the home page */}
              <RecommendationsList /> {/* Display RecommendationsList on the home page */}
            </>
          } />
          
          {/* Route for adding a new recipe (can be a dedicated page if desired) */}
          <Route path="/add" element={
            <>
              <AddRecipeForm />
              <Link to="/" style={{ display: 'block', marginTop: '20px', color: '#007bff', textDecoration: 'none', textAlign: 'center' }}>← Back to All Recipes</Link>
            </>
          } />

          {/* Route for individual recipe details */}
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          
          {/* Route for editing an individual recipe */}
          <Route path="/recipes/:recipeId/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
