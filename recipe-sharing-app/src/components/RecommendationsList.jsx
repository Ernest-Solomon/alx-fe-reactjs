// src/components/RecommendationsList.jsx
import { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);
  const recipes = useRecipeStore(state => state.recipes); // Dependency to re-generate on recipe changes
  const favorites = useRecipeStore(state => state.favorites); // Dependency to re-generate on favorite changes

  // Generate recommendations when the component mounts or when recipes/favorites change
  useEffect(() => {
    generateRecommendations();
  }, [recipes, favorites, generateRecommendations]);

  return (
    <div style={{ marginTop: '40px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
      <h2>Recommended for You</h2>
      {recommendations.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666' }}>No recommendations available yet. Try favoriting some recipes!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid #e0e0e0', padding: '10px', margin: '10px 0', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', backgroundColor: '#f9f9f9' }}>
            <h3>
              <Link to={`/recipes/${recipe.id}`} style={{ textDecoration: 'none', color: '#28a745', fontWeight: 'bold' }}>
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

export default RecommendationsList;
