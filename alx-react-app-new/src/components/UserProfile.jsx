/ src/UserProfile.jsx

// Define a functional component named UserProfile that accepts 'props'
function UserProfile(props) {
  return (
    // A div to wrap the user profile information with border, padding, and margin
    <div style={{ border: '1px solid gray', padding: '15px', margin: '15px', borderRadius: '8px', boxShadow: '2px 2px 5px rgba(0,0,0,0.1)' }}>
      {/* Display the user's name using an h2 tag with custom color and font size */}
      <h2 style={{ color: '#3366ff', fontSize: '1.8em', marginBottom: '8px' }}>{props.name}</h2>
      {/* Display the user's age using a paragraph tag with bold styling for the age value */}
      <p style={{ fontSize: '1.1em', marginBottom: '5px' }}>Age: <span style={{ fontWeight: 'bold', color: '#555' }}>{props.age}</span></p>
      {/* Display the user's bio using another paragraph tag with slightly smaller font */}
      <p style={{ fontSize: '1em', color: '#666', lineHeight: '1.5' }}>Bio: {props.bio}</p>
    </div>
  );
}

// Export the UserProfile component so it can be used in other files
export default UserProfile;
