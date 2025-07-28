// src/components/FavoritesList.jsx
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const FavoritesList = () => {
  // Get all recipes and favorite IDs, then map to favorite recipe objects
  const allRecipes = useRecipeStore(state => state.recipes);
  const favoriteIds = useRecipeStore(state => state.favorites);

  // Filter all recipes to get only the favorited ones
  const favorites = allRecipes.filter(recipe => favoriteIds.includes(recipe.id));

  return (
    <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>You haven't favorited any recipes yet. Click the heart icon on a recipe to add it!</p>
      ) : (
        favorites.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', backgroundColor: '#f9f9f9' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff', fontWeight: 'bold' }}>
                {recipe.title}
              </Link>
            </h3>
            <p style={{ color: '#555' }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
