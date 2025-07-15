// src/MainContent.jsx

// Define a functional component named MainContent
function MainContent() {
  return (
    // The main content area of the application with inline CSS styles
    <main style={{ border: '1px solid lightgray', padding: '15px', margin: '15px', borderRadius: '8px', boxShadow: '1px 1px 3px rgba(0,0,0,0.05)', backgroundColor: '#f9f9f9' }}>
      {/* Paragraph describing favorite cities with enhanced styling */}
      <p style={{ fontSize: '1.1em', color: '#333', lineHeight: '1.6' }}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

// Export the MainContent component so it can be used in other files
export default MainContent;
