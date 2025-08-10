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
 * Fetches data for a single GitHub user.
 * @param {string} username The username of the GitHub user to fetch.
 * @returns {Promise<object>} A promise that resolves to the user's data.
 */
export const fetchUserData = async (username) => {
  try {
    // Make a GET request to the GitHub user endpoint
    const response = await githubApi.get(`/users/${username}`);

    // Return the data from the response
    return response.data;
  } catch (error) {
    // Log the error and re-throw it so the calling component can handle it
    console.error(`Error fetching user data for "${username}" from GitHub:`, error);
    throw error;
  }
};
