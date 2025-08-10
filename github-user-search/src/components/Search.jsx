// src/components/UserSearch.jsx
import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function UserSearch() {
  // State for the username input field
  const [username, setUsername] = useState('');
  // State for the user data fetched from the API
  const [userData, setUserData] = useState(null);
  // State for the loading status
  const [loading, setLoading] = useState(false);
  // State for any errors during the API call
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      // Call the API service to fetch user data
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      // Handle the error and set the error state
      setError('Looks like we cant find the user.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg transition-all duration-300 transform hover:scale-105">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">GitHub User Search</h2>
        
        {/* Search Form */}
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="flex-grow p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            Search
          </button>
        </form>

        {/* Conditional Rendering of Results */}
        <div className="mt-8 text-center">
          {loading && (
            <p className="text-xl text-blue-500 animate-pulse">Loading...</p>
          )}
          {error && (
            <p className="text-xl text-red-500 font-medium">{error}</p>
          )}
          {userData && (
            <div className="mt-6 p-6 bg-gray-50 rounded-2xl border border-gray-200">
              <img
                src={userData.avatar_url}
                alt={`${userData.login}'s avatar`}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-300"
              />
              <h3 className="text-2xl font-bold text-gray-800">{userData.name || userData.login}</h3>
              <p className="text-gray-600 mt-1">@{userData.login}</p>
              <a
                href={userData.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-600 hover:underline font-semibold transition-colors"
              >
                View Profile
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
