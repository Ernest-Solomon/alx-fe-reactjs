// src/services/githubService.js
import axios from 'axios';

// Base URL for the GitHub API
const GITHUB_API_URL = 'https://api.github.com';

// Your GitHub Personal Access Token is stored as an environment variable
// The VITE_ prefix is required for Vite to expose the variable to the client-side code
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create an instance of axios with a custom configuration
const githubApi = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    'Authorization': GITHUB_API_KEY ? `Bearer ${GITHUB_API_KEY}` : '',
    'Content-Type': 'application/json',
  },
});

/**
 * Searches for GitHub users based on a query.
 * @param {string} query The search term for GitHub users.
 * @returns {Promise<object>} A promise that resolves to the search results.
 */
export const searchUsers = async (query) => {
  try {
    // Make a GET request to the GitHub search users endpoint
    const response = await githubApi.get('/search/users', {
      params: {
        q: query,
        per_page: 10, // You can adjust the number of results per page
      },
    });

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Log the error and re-throw it so the calling component can handle it
    console.error('Error fetching data from GitHub:', error);
    throw error;
  }
};
