// src/UserDetails.jsx (Refactored with Context Consumer)

import React, { useContext } from 'react'; // Import useContext hook
import UserContext from './UserContext'; // Import the UserContext

// UserDetails no longer receives userData as a prop
function UserDetails() {
  // Use the useContext hook to access the value provided by UserContext.Provider
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Details (from Context):</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;
