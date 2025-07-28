// src/components/DeleteRecipeButton.jsx
import useRecipeStore from '../store/recipeStore'; // Adjust path if your store is elsewhere
import { useNavigate } from 'react-router-dom'; // To redirect after deletion

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleDelete = () => {
    // Using a simple confirm for demonstration. In a real app, use a custom modal.
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      navigate('/'); // Navigate back to the home page (RecipeList) after deletion
    }
  };

  return (
    <button
      onClick={handleDelete}
      style={{
        padding: '8px 15px',
        backgroundColor: '#dc3545', // Red color for delete
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px',
        fontSize: '0.9em'
      }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
