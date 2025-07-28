
// src/components/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [], // Initial state: an empty array of recipes
  
  /**
   * Adds a new recipe to the 'recipes' array.
   * @param {object} newRecipe - The new recipe object to add.
   */
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  /**
   * Deletes a recipe from the 'recipes' array based on its ID.
   * @param {number} recipeId - The ID of the recipe to delete.
   */
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  /**
   * Updates an existing recipe in the 'recipes' array.
   * @param {number} recipeId - The ID of the recipe to update.
   * @param {object} updatedData - An object containing the new data for the recipe (e.g., { title: 'New Title' }).
   */
  updateRecipe: (recipeId, updatedData) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === recipeId ? { ...recipe, ...updatedData } : recipe
    )
  })),

  /**
   * Replaces the current 'recipes' array with a new array.
   * @param {Array<object>} recipes - The new array of recipe objects.
   */
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;
