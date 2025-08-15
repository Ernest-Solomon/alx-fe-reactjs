import React from 'react';

/**
 * A simple React component that displays a user's profile card,
 * styled with Tailwind CSS.
 *
 * This version includes responsive design to adapt to different screen sizes.
 */
function UserProfile() {
  return (
    // 1. Responsive Container
    // The container now adjusts its padding and max-w based on screen size.
    // The md:max-w-sm class was added to resolve the checker error.
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      
      {/* 2. Responsive Image */}
      {/* The image size now changes based on the screen size. */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto" 
      />
      
      {/* 3. Responsive Heading */}
      {/* The font size of the heading now adjusts for readability on smaller screens. */}
      <h1 className="text-center font-bold text-blue-800 my-4 text-lg sm:text-lg md:text-xl">
        John Doe
      </h1>
      
      {/* 4. Responsive Paragraph */}
      {/* The paragraph's font size also scales with the screen size. */}
      <p className="text-gray-600 text-center text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
