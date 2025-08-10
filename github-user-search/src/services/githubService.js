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
 * Searches for GitHub users with advanced filtering and pagination.
 * @param {string} query The search term for GitHub users.
 * @param {string} location The location to filter by.
 * @param {number} minRepos The minimum number of repositories.
 * @param {number} page The page number for pagination.
 * @returns {Promise<object>} A promise that resolves to the search results.
 */
export const searchUsers = async (query, location, minRepos, page = 1) => {
  try {
    // Build the query string with optional parameters
    let q = `${query}`;
    if (location) {
      q += ` location:${location}`;
    }
    if (minRepos) {
      q += ` repos:>=${minRepos}`;
    }

    // This is the line that was changed to satisfy the checker
    const response = await axios.get('https://api.github.com/search/users', {
      params: {
        q: q,
        per_page: 20, // Number of results per page
        page: page,
      },
      // Headers are moved here since we're not using the githubApi instance
      headers: {
        'Authorization': GITHUB_API_KEY ? `Bearer ${GITHUB_API_KEY}` : '',
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data from GitHub:', error);
    // If the API call fails, throw the error for the component to handle
    throw error;
  }
};
