import React from 'react';

/**
 * A simple React component that displays a user's profile card,
 * styled with Tailwind CSS.
 *
 * This version includes responsive design to adapt to different screen sizes,
 * as well as advanced interactivity with hover effects and transitions.
 */
function UserProfile() {
  return (
    // 1. Responsive Container with Enhanced Shadow on Hover
    // The container now has a smooth transition for the shadow, which increases on hover.
    <div className="bg-gray-100 p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      
      {/* 2. Responsive Image with Hover Effect */}
      {/* The image now scales up on hover with a smooth transition. */}
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto transition-transform duration-300 ease-in-out hover:scale-110" 
      />
      
      {/* 3. Responsive Heading with Hover Effect */}
      {/* The heading changes color on hover. */}
      <h1 className="text-center font-bold text-blue-800 my-4 text-lg sm:text-lg md:text-xl transition-colors duration-300 ease-in-out hover:text-blue-500">
        John Doe
      </h1>
      
      {/* 4. Responsive Paragraph */}
      {/* The paragraph's font size scales with the screen size. */}
      <p className="text-gray-600 text-center text-sm sm:text-sm md:text-base">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
