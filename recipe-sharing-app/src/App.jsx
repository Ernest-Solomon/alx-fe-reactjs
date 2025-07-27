// src/App.jsx
import './App.css'; // This line keeps your basic global styles if you have any
import RecipeList from './components/RecipeList'; // Import the RecipeList component
import AddRecipeForm from './components/AddRecipeForm'; // Import the AddRecipeForm component

function App() {
  return (
    // Main container for the application with basic styling
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Application title */}
      <h1>Recipe Sharing Application</h1>
      
      {/* Render the AddRecipeForm component to allow users to add new recipes */}
      <AddRecipeForm />
      
      {/* Render the RecipeList component to display existing recipes */}
      <RecipeList />
    </div>
  );
}

export default App;
