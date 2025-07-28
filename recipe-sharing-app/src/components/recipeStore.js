// src/store/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Full list of all recipes
  searchTerm: '', // Current search term
  filteredRecipes: [], // Recipes filtered by search term
  favorites: [], // New: Array of recipe IDs that are favorited
  recommendations: [], // New: Array of recommended recipe objects

  /**
   * Adds a new recipe to the 'recipes' array.
   * After adding, it also re-filters the recipes and regenerates recommendations.
   * @param {object} newRecipe - The new recipe object to add.
   */
  addRecipe: (newRecipe) => set(state => {
    const updatedRecipes = [...state.recipes, newRecipe];
    const updatedFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    // Regenerate recommendations as the recipes list has changed
    const recommended = state.generateRecommendationsLogic(updatedRecipes, state.favorites);
    return { recipes: updatedRecipes, filteredRecipes: updatedFilteredRecipes, recommendations: recommended };
  }),
  
  /**
   * Deletes a recipe from the 'recipes' array based on its ID.
   * Also removes it from favorites if it was favorited, and re-filters/recommends.
   * @param {number} recipeId - The ID of the recipe to delete.
   */
  deleteRecipe: (recipeId) => set(state => {
    const updatedRecipes = state.recipes.filter(recipe => recipe.id !== recipeId);
    const updatedFavorites = state.favorites.filter(id => id !== recipeId); // Remove from favorites too
    const updatedFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    // Regenerate recommendations
    const recommended = state.generateRecommendationsLogic(updatedRecipes, updatedFavorites);
    return { recipes: updatedRecipes, favorites: updatedFavorites, filteredRecipes: updatedFilteredRecipes, recommendations: recommended };
  }),

  /**
   * Updates an existing recipe in the 'recipes' array.
   * After updating, it also re-filters the recipes and regenerates recommendations.
   * @param {number} recipeId - The ID of the recipe to update.
   * @param {object} updatedData - An object containing the new data for the recipe.
   */
  updateRecipe: (recipeId, updatedData) => set(state => {
    const updatedRecipes = state.recipes.map(recipe =>
      recipe.id === recipeId ? { ...recipe, ...updatedData } : recipe
    );
    const updatedFilteredRecipes = updatedRecipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    // Regenerate recommendations
    const recommended = state.generateRecommendationsLogic(updatedRecipes, state.favorites);
    return { recipes: updatedRecipes, filteredRecipes: updatedFilteredRecipes, recommendations: recommended };
  }),

  /**
   * Replaces the current 'recipes' array with a new array.
   * @param {Array<object>} recipes - The new array of recipe objects.
   */
  setRecipes: (recipes) => set({ recipes }),

  /**
   * Sets the search term and immediately triggers filtering of recipes.
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

  /**
   * New: Adds a recipe ID to the favorites list.
   * Triggers regeneration of recommendations.
   * @param {number} recipeId - The ID of the recipe to favorite.
   */
  addFavorite: (recipeId) => set(state => {
    // Only add if not already in favorites
    const newFavorites = state.favorites.includes(recipeId) ? state.favorites : [...state.favorites, recipeId];
    // Regenerate recommendations based on updated favorites
    const recommended = state.generateRecommendationsLogic(state.recipes, newFavorites);
    return { favorites: newFavorites, recommendations: recommended };
  }),

  /**
   * New: Removes a recipe ID from the favorites list.
   * Triggers regeneration of recommendations.
   * @param {number} recipeId - The ID of the recipe to remove from favorites.
   */
  removeFavorite: (recipeId) => set(state => {
    const newFavorites = state.favorites.filter(id => id !== recipeId);
    // Regenerate recommendations based on updated favorites
    const recommended = state.generateRecommendationsLogic(state.recipes, newFavorites);
    return { favorites: newFavorites, recommendations: recommended };
  }),

  /**
   * New: Internal logic for generating recommendations.
   * This is a separate function so it can be called from other actions.
   * @param {Array<object>} allRecipes - The full list of recipes.
   * @param {Array<number>} currentFavorites - The current list of favorite recipe IDs.
   * @returns {Array<object>} - An array of recommended recipe objects.
   */
  generateRecommendationsLogic: (allRecipes, currentFavorites) => {
    // Simple mock: Recommend recipes that are NOT favorites but have a random chance to be picked.
    // In a real app, this would involve more complex logic (e.g., tags, ingredients, user history).
    const nonFavorites = allRecipes.filter(recipe => !currentFavorites.includes(recipe.id));
    
    // Pick a few random non-favorite recipes
    const recommendations = [];
    const numRecommendations = Math.min(3, nonFavorites.length); // Max 3 recommendations
    const shuffledNonFavorites = [...nonFavorites].sort(() => 0.5 - Math.random()); // Shuffle
    
    for (let i = 0; i < numRecommendations; i++) {
      recommendations.push(shuffledNonFavorites[i]);
    }
    return recommendations;
  },

  /**
   * New: Action to trigger the generation of recommendations.
   * This can be called explicitly from components if needed.
   */
  generateRecommendations: () => set(state => ({
    recommendations: state.generateRecommendationsLogic(state.recipes, state.favorites)
  })),
}));

export default useRecipeStore;
