// src/components/EditRecipeForm.jsx
import { useState, useEffect } from 'react';
import useRecipeStore from '../store/recipeStore'; // Adjust path if your store is elsewhere
import { useNavigate } from 'react-router-dom';

const EditRecipeForm = ({ recipeId }) => {
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const recipe = useRecipeStore(state => state.recipes.find(r => r.id === recipeId));
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Populate form fields when the component mounts or recipeId changes
  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) {
      // In a real app, use a custom message box instead of alert
      alert('Please fill in both title and description.');
      return;
    }
    updateRecipe(recipeId, { title, description });
    navigate(`/recipes/${recipeId}`); // Navigate back to the recipe details page
  };

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '400px', margin: '20px 0', border: '1px solid #eee', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        rows="6"
        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          backgroundColor: '#28a745', // Green color for save
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1em'
        }}
      >
        Save Changes
      </button>
      <button
        type="button"
        onClick={() => navigate(`/recipes/${recipeId}`)} // Go back to details without saving
        style={{
          padding: '10px',
          backgroundColor: '#6c757d', // Gray color for cancel
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1em',
          marginTop: '5px'
        }}
      >
        Cancel
      </button>
    </form>
  );
};

export default EditRecipeForm;
