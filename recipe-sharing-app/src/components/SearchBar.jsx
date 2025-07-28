// src/components/SearchBar.jsx
import React from 'react';
import useRecipeStore from '../store/recipeStore'; // Adjust path if your store is elsewhere

const SearchBar = () => {
  const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
  const searchTerm = useRecipeStore(state => state.searchTerm); // Get current search term to display

  return (
    <input
      type="text"
      placeholder="Search recipes by title or description..."
      value={searchTerm} // Controlled component: input value is tied to state
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        width: '100%',
        padding: '10px',
        margin: '20px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '1em'
      }}
    />
  );
};

export default SearchBar;
