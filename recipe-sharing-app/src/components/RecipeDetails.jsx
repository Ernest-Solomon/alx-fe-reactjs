// src/components/RecipeDetails.jsx
import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === parseInt(recipeId))
  );

  // New: Get favorite state and actions
  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  // Check if the current recipe is favorited
  const isFavorited = recipe ? favorites.includes(recipe.id) : false;

  const handleToggleFavorite = () => {
    if (recipe) {
      if (isFavorited) {
        removeFavorite(recipe.id);
      } else {
        addFavorite(recipe.id);
      }
    }
  };

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
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', maxWidth: '600px', margin: '20px auto', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h1 style={{ color: '#333' }}>{recipe.title}</h1>
      <p style={{ fontSize: '1.1em', lineHeight: '1.6', color: '#555' }}>{recipe.description}</p>
      
      <div style={{ marginTop: '20px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {/* Link to the edit page for this recipe */}
        <Link to={`/recipes/${recipe.id}/edit`} style={{
          padding: '8px 15px',
          backgroundColor: '#007bff',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '0.9em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          Edit Recipe
        </Link>
        
        {/* Delete button for this recipe */}
        <DeleteRecipeButton recipeId={recipe.id} />

        {/* New: Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          style={{
            padding: '8px 15px',
            backgroundColor: isFavorited ? '#ffc107' : '#6c757d', // Yellow if favorited, gray if not
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '0.9em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px'
          }}
        >
          {/* Using a simple emoji for the heart icon */}
          {isFavorited ? '❤️ Favorited' : '🤍 Add to Favorites'}
        </button>
      </div>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>← Back to All Recipes</Link>
      </div>
    </div>
  );
};

export default RecipeDetails;
