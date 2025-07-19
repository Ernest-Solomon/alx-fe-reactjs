// src/UserContext.js

import React from 'react';

// Create a new Context.
// This will be used to provide and consume user data throughout the component tree.
const UserContext = React.createContext();

// Export the UserContext so it can be imported and used by other components.
export default UserContext;
