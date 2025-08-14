// App.jsx
import React from 'react';
import './App.css';
// 1. Import the UserProfile component
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">GitHub User Search</h1>
        <p className="text-lg text-gray-600 mt-2">Find your favorite GitHub profiles!</p>
      </header>
      <main className="w-full max-w-4xl px-4">
        {/* The UserSearch component will contain the search input and display results */}
        {/* We'll replace this with the UserProfile component for this task. */}
        {/* <UserSearch /> */}
        
        {/* 2. Render the UserProfile component here */}
        <UserProfile />
      </main>
      <footer className="mt-10 text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} GitHub User Search App</p>
      </footer>
    </div>
  );
}

export default App;
