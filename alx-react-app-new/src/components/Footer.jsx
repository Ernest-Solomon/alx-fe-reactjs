// src/Footer.jsx

// Define a functional component named Footer
function Footer() {
  return (
    // The footer element for the application with inline CSS styles
    <footer style={{
      backgroundColor: '#333', // Dark background for contrast
      color: 'white',        // White text for readability
      textAlign: 'center',   // Center align the text
      padding: '20px',       // Add some padding around the content
      marginTop: '20px',     // Add margin to separate it from content above
      borderRadius: '0 0 8px 8px', // Slightly rounded bottom corners
      fontSize: '0.9em',     // Slightly smaller font size
      borderTop: '1px solid #555' // A subtle top border
    }}>
      {/* Copyright information */}
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

// Export the Footer component so it can be used in other files
export default Footer;
