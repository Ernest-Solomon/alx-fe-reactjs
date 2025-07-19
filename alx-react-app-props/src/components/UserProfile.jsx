// src/components/UserProfile.jsx

import React, { useContext } from 'react'; // Import React and useContext hook
import UserContext from '../UserContext'; // Import the UserContext from the parent directory (src)

function UserProfile() {
  // Use the useContext hook to access the value (userData) provided by UserContext.Provider
  const userData = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
      {/* Display the user's name from the context */}
      <h2 style={{ color: 'blue', fontSize: '1.8em', marginBottom: '8px' }}>Name: {userData.name}</h2>

      {/* Display the user's email from the context */}
      <p style={{ fontSize: '1.1em', marginBottom: '5px' }}>Email: <span style={{ fontWeight: 'bold', color: '#555' }}>{userData.email}</span></p>

      {/*
        NOTE: The 'age' and 'bio' properties are not available in the current
        'userData' object provided by UserContext (which is { name, email }).
        If you need to display age and bio here, you must:
        1. Add 'age' and 'bio' to the 'userData' object in App.jsx where UserContext.Provider is defined.
           Example in App.jsx: const userData = { name: "Jane Doe", email: "jane.doe@example.com", age: 25, bio: "Loves hiking and photography" };
        2. Then uncomment and use them here:
           <p style={{ fontSize: '1.1em', marginBottom: '5px' }}>Age: <span style={{ fontWeight: 'bold', color: '#555' }}>{userData.age}</span></p>
           <p style={{ fontSize: '1em', color: '#666', lineHeight: '1.5' }}>Bio: {userData.bio}</p>
      */}
    </div>
  );
