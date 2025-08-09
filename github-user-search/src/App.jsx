// App.jsx
import React from 'react';
import './App.css'; // Assuming you'll have some global styles here
import UserSearch from './components/UserSearch'; // We'll create this component next

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">GitHub User Search</h1>
        <p className="text-lg text-gray-600 mt-2">Find your favorite GitHub profiles!</p>
      </header>
      <main className="w-full max-w-4xl px-4">
        {/* The UserSearch component will contain the search input and display results */}
        <UserSearch />
      </main>
      <footer className="mt-10 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} GitHub User Search App</p>
      </footer>
    </div>
  );
}

export default App;

// components/UserSearch.jsx (Placeholder for the next task)
// This file will be created in the 'components' directory
// You can create an empty file for now, or add a basic functional component:
/*
import React from 'react';

function UserSearch() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Search Users</h2>
      <p className="text-gray-600">This is where the search functionality will go!</p>
    </div>
  );
}

export default UserSearch;
*/

// services/githubService.js (Placeholder for the next task)
// This file will be created in the 'services' directory
// You can create an empty file for now:
/*
// import axios from 'axios';

// const GITHUB_API_BASE_URL = 'https://api.github.com';
// const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY; // Optional, for higher rate limits

// export const searchUsers = async (query) => {
//   try {
//     const response = await axios.get(`${GITHUB_API_BASE_URL}/search/users`, {
//       params: {
//         q: query,
//       },
//       headers: GITHUB_API_KEY ? {
//         Authorization: `token ${GITHUB_API_KEY}`
//       } : {}
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error searching GitHub users:", error);
//     throw error;
//   }
// };
*/
