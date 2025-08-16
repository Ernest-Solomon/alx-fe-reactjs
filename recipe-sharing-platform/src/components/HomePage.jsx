import React, { useState, useEffect } from 'react';

/**
 * The HomePage component displays a responsive grid of recipe cards.
 * It fetches mock data from a local JSON file and renders it.
 */
function HomePage() {
  const [recipes, setRecipes] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Importing the JSON file directly. In a real-world app, you'd use a fetch API call.
    import('../data.json')
      .then((module) => {
        setRecipes(module.default);
      })
      .catch((error) => {
        console.error("Failed to fetch recipes:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
        Our Recipes
      </h1>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
        {recipes.map((recipe) => (
          // Recipe Card with interactive hover effects
          <div
            key={recipe.id}
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
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
