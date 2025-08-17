import React, { useState } from 'react';

/**
 * The AddRecipeForm component provides a responsive form
 * for users to submit new recipes. It includes validation
 * and is styled with Tailwind CSS.
 */
function AddRecipeForm() {
  // State for form fields
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); // Updated from instructions to steps
  
  // State for form validation and status messages
  const [status, setStatus] = useState({ message: '', type: '' });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset status message
    setStatus({ message: '', type: '' });

    // Simple validation checks
    if (!title.trim() || !ingredients.trim() || !steps.trim()) {
      setStatus({ message: 'Please fill in all fields.', type: 'error' });
      return;
    }

    const ingredientsArray = ingredients.split('\n').filter(item => item.trim() !== '');
    const stepsArray = steps.split('\n').filter(item => item.trim() !== ''); // Updated from instructions to steps

    // Check if there are at least two ingredients and two steps
    if (ingredientsArray.length < 2 || stepsArray.length < 2) {
      setStatus({ message: 'Please add at least two ingredients and two steps.', type: 'error' });
      return;
    }

    // Prepare the new recipe object
    const newRecipe = {
      // In a real application, you'd generate a unique ID
      // and handle images/data persistence here.
      id: Date.now(), 
      title,
      ingredients: ingredientsArray,
      steps: stepsArray, // Updated from instructions to steps
      summary: "New recipe added by the user.", // A simple summary for the new recipe
      image: "https://placehold.co/600x400/D1D5DB/1F2937?text=New+Recipe"
    };

    // Log the new recipe to the console
    console.log('New recipe submitted:', newRecipe);

    // Set a success status message and clear the form
    setStatus({ message: 'Recipe submitted successfully!', type: 'success' });
    setTitle('');
    setIngredients('');
    setSteps(''); // Updated from instructions to steps
  };

  return (
    <div className="container mx-auto p-4 sm:p-8 flex justify-center items-center min-h-screen bg-gray-100 font-inter">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-10 w-full max-w-lg">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-6">
          Add a New Recipe
        </h2>
        
        {/* Status Message */}
        {status.message && (
          <div className={`p-3 rounded-lg text-sm text-center font-medium mb-4 ${
            status.type === 'error' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'
          }`}>
            {status.message}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors"
              placeholder="e.g., Spicy Chicken Tacos"
            />
          </div>

          {/* Ingredients Textarea */}
          <div>
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
              Ingredients (one per line)
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="6"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y"
              placeholder="e.g.,&#10;2 chicken breasts&#10;1 teaspoon cumin&#10;1/2 onion"
            />
          </div>

          {/* Steps Textarea */}
          <div>
            <label htmlFor="steps" className="block text-sm font-medium text-gray-700">
              Preparation Steps (one per line)
            </label>
            <textarea
              id="steps" // Updated from instructions to steps
              value={steps} // Updated from instructions to steps
              onChange={(e) => setSteps(e.target.value)} // Updated from instructions to steps
              rows="6"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors resize-y"
              placeholder="e.g.,&#10;1. Cook the chicken.&#10;2. Shred the cooked chicken.&#10;3. Serve on tortillas."
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddRecipeForm;
