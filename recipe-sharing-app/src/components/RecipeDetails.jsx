// src/components/RecipeDetails.jsx
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore'; // Adjust path if your store is elsewhere
import DeleteRecipeButton from './DeleteRecipeButton'; // Import the delete button

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get the recipeId from the URL parameters
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId)) // Parse ID to integer for comparison
  );

  if (!recipe) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Recipe Not Found</h2>
        <p>The recipe you are looking for does not exist.</p>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>Go back to Recipe List</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '20px auto', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1>{recipe.title}</h1>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6' }}>{recipe.description}</p>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        {/* Link to the edit page for this recipe */}
        <Link to={`/recipes/${recipe.id}/edit`} style={{
          padding: '8px 15px',
          backgroundColor: '#007bff', // Blue color for edit
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '0.9em'
        }}>
          Edit Recipe
        </Link>
        
        {/* Delete button for this recipe */}
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>

      <div style={{ marginTop: '30px' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>← Back to All Recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
