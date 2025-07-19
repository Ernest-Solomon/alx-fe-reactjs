// src/UserProfile.jsx

// Define a functional component named UserProfile that accepts 'props'
function UserProfile(props) {
  return (
    // A div to wrap the user profile information
    <div>
      {/* Display the user's name using an h2 tag */}
      <h2>{props.name}</h2>
      {/* Display the user's age using a paragraph tag */}
      <p>Age: {props.age}</p>
      {/* Display the user's bio using another paragraph tag */}
      <p>Bio: {props.bio}</p>
    </div>
  );
}

// Export the UserProfile component so it can be used in other files
export default UserProfile;
