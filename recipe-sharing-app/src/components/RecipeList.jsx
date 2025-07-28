// src/components/RecipeList.jsx
import { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  // Use filteredRecipes instead of the full recipes list
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes); // Get full recipes to trigger filter on change
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Trigger filterRecipes whenever the main 'recipes' array changes
  // This ensures that if a recipe is added, updated, or deleted,
  // the filtered list is immediately re-calculated.
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]); // Depend on recipes and filterRecipes

  return (
    <div>
      <h2>Recipes</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found matching your search. Try a different term or add a new recipe!</p>
      ) : (
        filteredRecipes.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#007bff' }}>
                {recipe.title}
              </Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
