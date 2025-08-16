import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

/**
 * The RecipeDetail component displays a single recipe's full details,
 * including ingredients and instructions, based on the ID from the URL.
 */
function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect to find the correct recipe based on the URL ID
  useEffect(() => {
    // Dynamically import the data.json file
    import('../data.json')
      .then(module => {
        const recipesData = module.default;
        const foundRecipe = recipesData.find(r => r.id === parseInt(id));
        setRecipe(foundRecipe);
        setLoading(false);
      })
      .catch(error => {
        console.error("Failed to load recipe data:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <p className="text-xl text-gray-700">Loading recipe...</p>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 text-center">
        <p className="text-xl text-red-500">Recipe not found.</p>
        <Link 
          to="/" 
          className="mt-4 text-blue-500 hover:underline transition-colors duration-200"
        >
          Go back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 bg-gray-100 min-h-screen font-inter">
      {/* Back button */}
      <Link 
        to="/" 
        className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200 mb-6"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Back to Recipes
      </Link>
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        {/* Recipe Image */}
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 sm:h-96 object-cover object-center"
        />
        
        <div className="p-4 sm:p-6 md:p-8">
          {/* Recipe Title and Summary */}
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            {recipe.title}
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            {recipe.summary}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ingredients Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                Ingredients
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="text-base sm:text-lg">{ingredient}</li>
                ))}
              </ul>
            </div>
            
            {/* Instructions Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
                Instructions
              </h2>
              <ol className="list-decimal list-inside space-y-4 text-gray-700">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} className="text-base sm:text-lg">{instruction}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
