import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/**
 * The HomePage component displays a responsive grid of recipe cards.
 * It fetches mock data from a local JSON file and renders it.
 */
function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Use a dynamic import for better compatibility with bundlers
    import('../data.json')
      .then(module => {
        setRecipes(module.default);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to load recipes:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading recipes...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
        Our Recipes
      </h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {recipes.map((recipe) => (
          // Wrap each recipe card in a Link component for navigation
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`} // This creates the dynamic link
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 overflow-hidden"
          >
            {/* Recipe Image */}
            <img 
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover object-center"
            />
            <div className="p-4">
              {/* Recipe Title */}
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {recipe.title}
              </h2>
              {/* Recipe Summary */}
              <p className="text-gray-600 text-sm">
                {recipe.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
