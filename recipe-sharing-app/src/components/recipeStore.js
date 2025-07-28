// src/store/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Initial state: an empty array of recipes
  searchTerm: '', // New state for the search term
  filteredRecipes: [], // New state for the filtered recipes
  
  /**
   * Adds a new recipe to the 'recipes' array.
   * @param {object} newRecipe - The new recipe object to add.
   */
  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    // After adding, re-filter the recipes based on the current search term
    const updatedFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes: updatedRecipes, filteredRecipes: updatedFilteredRecipes };
  }),
  
  /**
   * Deletes a recipe from the 'recipes' array based on its ID.
   * @param {number} recipeId - The ID of the recipe to delete.
   */
  deleteRecipe: (recipeId) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    // After deleting, re-filter the recipes based on the current search term
    const updatedFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes: updatedRecipes, filteredRecipes: updatedFilteredRecipes };
  }),

  /**
   * Updates an existing recipe in the 'recipes' array.
   * @param {number} recipeId - The ID of the recipe to update.
   * @param {object} updatedData - An object containing the new data for the recipe (e.g., { title: 'New Title' }).
   */
  updateRecipe: (recipeId, updatedData) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === recipeId ? { ...recipe, ...updatedData } : recipe
    );
    // After updating, re-filter the recipes based on the current search term
    const updatedFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes: updatedRecipes, filteredRecipes: updatedFilteredRecipes };
  }),

  /**
   * Replaces the current 'recipes' array with a new array.
   * @param {Array<object>} recipes - The new array of recipe objects.
   */
  setRecipes: (recipes) => set({ recipes }),

  /**
   * Sets the search term and immediately triggers filtering of recipes.
   * This is the primary action used by the SearchBar.
   * @param {string} term - The search term entered by the user.
   */
  setSearchTerm: (term) => set(state => {
    const newSearchTerm = term;
    const newFilteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(newSearchTerm.toLowerCase())
    );
    return { searchTerm: newSearchTerm, filteredRecipes: newFilteredRecipes };
  }),

  /**
   * Re-filters recipes based on the current search term and the full recipes list.
   * This action is called when the 'recipes' array itself changes (e.g., after initial load, add, delete, update).
   */
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
}));

export default useRecipeStore;
