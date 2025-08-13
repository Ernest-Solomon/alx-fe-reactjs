import React from 'react';

/**
 * A simple React component that displays a user's profile card,
 * styled with Tailwind CSS.
 * * The styling is applied directly via utility classes on each JSX element.
 */
function UserProfile() {
  return (
    // 1. Container (div.user-profile)
    // Applying styling for background, padding, max-width, centering, rounded corners, and shadow.
    <div className="bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      
      {/* 2. Image (img) */}
      {/* Making the image circular and setting its size, and centering it. */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-36 h-36 mx-auto" 
      />
      
      {/* 3. Heading (h1) */}
      {/* Styling the heading with a specific font size, color, and vertical margin. */}
      <h1 className="text-xl text-blue-800 my-4 text-center font-bold">John Doe</h1>
      
      {/* 4. Paragraph (p) */}
      {/* Setting the paragraph's font size and color. */}
      <p className="text-gray-600 text-base text-center">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
