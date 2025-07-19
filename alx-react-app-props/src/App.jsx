// src/App.jsx (Refactored with Context Provider)

import ProfilePage from './ProfilePage';
import UserContext from './UserContext'; // Import the UserContext

function App() {
  // Define user data. This data will be provided via Context.
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    // Wrap the component tree (ProfilePage in this case) with UserContext.Provider.
    // The 'value' prop contains the data that will be available to consuming components.
    <UserContext.Provider value={userData}>
      <ProfilePage /> {/* ProfilePage no longer needs userData as a prop */}
    </UserContext.Provider>
  );
}

export default App;


