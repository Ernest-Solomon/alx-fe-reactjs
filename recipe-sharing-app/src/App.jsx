// src/App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import routing components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails'; // New: RecipeDetails component
import EditRecipeForm from './components/EditRecipeForm'; // New: EditRecipeForm component

function App() {
  return (
    <Router> {/* Wrap your entire application with BrowserRouter */}
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Recipe Sharing Application</h1>
        
        {/* Navigation links */}
        <nav style={{ marginBottom: '20px', textAlign: 'center' }}>
          <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Home</Link>
          <Link to="/add" style={{ margin: '0 10px', textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>Add New Recipe</Link>
        </nav>

        {/* Define your routes */}
        <Routes>
          {/* Home page - shows AddRecipeForm and RecipeList */}
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          
          {/* Route for adding a new recipe (can be a dedicated page if desired) */}
          <Route path="/add" element={<AddRecipeForm />} />

          {/* Route for individual recipe details */}
          {/* :recipeId is a URL parameter that will be available via useParams() */}
          <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
          
          {/* Route for editing an individual recipe */}
          {/* We pass the recipeId from the URL parameter to the EditRecipeForm */}
          <Route path="/recipes/:recipeId/edit" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
