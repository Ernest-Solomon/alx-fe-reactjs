// src/components/Search.jsx
import React, { useState } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  // State for the main search query
  const [query, setQuery] = useState('');
  // State for the advanced search filters
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  
  // State for the list of users
  const [users, setUsers] = useState([]);
  // State for the loading status
  const [loading, setLoading] = useState(false);
  // State for any errors during the API call
  const [error, setError] = useState(null);
  
  // State for pagination
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSearch = async (isNewSearch = true) => {
    if (isNewSearch) {
      setUsers([]);
      setPage(1);
      setLoading(true);
      setError(null);
      setTotalCount(0);
    } else {
      setLoading(true);
    }

    try {
      const data = await searchUsers(query, location, minRepos, isNewSearch ? 1 : page + 1);
      
      // The API returns a maximum of 1000 results
      setTotalCount(Math.min(data.total_count, 1000));

      setUsers(prevUsers => isNewSearch ? data.items : [...prevUsers, ...data.items]);
      if (!isNewSearch) {
        setPage(prevPage => prevPage + 1);
      }
      
      // If there are no users, set an error message
      if (data.items.length === 0) {
        setError('No users found matching your criteria.');
      }

    } catch (err) {
      setError('An error occurred while fetching users.');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    handleSearch(false);
  };
  
  const hasMoreUsers = users.length < totalCount;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100 font-inter">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-2xl transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-6">GitHub User Search</h2>
        
        {/* Advanced Search Form */}
        <div className="space-y-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by username or name"
            className="w-full p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          />
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Filter by location (e.g., Nigeria)"
              className="w-full p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
            <input
              type="number"
              value={minRepos}
              onChange={(e) => setMinRepos(e.target.value)}
              placeholder="Min Repositories"
              className="w-full p-3 text-gray-700 bg-gray-50 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            />
          </div>
          <button
            onClick={() => handleSearch(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all duration-200"
          >
            Search
          </button>
        </div>

        {/* Conditional Rendering of Results */}
        <div className="mt-8 text-center">
          {loading && (
            <p className="text-xl text-blue-500 animate-pulse">Loading...</p>
          )}
          {error && (
            <p className="text-xl text-red-500 font-medium">{error}</p>
          )}
          {users.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {users.map(user => (
                <div key={user.id} className="p-4 bg-gray-50 rounded-2xl border border-gray-200 text-center">
                  <img
                    src={user.avatar_url}
                    alt={`${user.login}'s avatar`}
                    className="w-16 h-16 rounded-full mx-auto mb-2 border-2 border-gray-300"
                  />
                  <h3 className="text-lg font-bold text-gray-800">{user.login}</h3>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-blue-600 hover:underline text-sm font-semibold transition-colors"
                  >
                    View Profile
                  </a>
                </div>
              ))}
            </div>
          )}
          
          {hasMoreUsers && !loading && (
            <button
              onClick={handleLoadMore}
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl shadow-md transition-all duration-200"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
