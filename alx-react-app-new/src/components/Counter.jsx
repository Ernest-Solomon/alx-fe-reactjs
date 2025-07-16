// src/components/Counter.jsx

// Import the useState hook from React
import { useState } from 'react';

// Define a functional component named Counter
function Counter() {
  // Initialize the 'count' state variable with an initial value of 0
  // setCount is the function used to update the 'count' state
  const [count, setCount] = useState(0);

  return (
    // A div to contain the counter elements
    <div style={{
      border: '1px solid #ccc',
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff',
      textAlign: 'center'
    }}>
      {/* Display the current count */}
      <p style={{ fontSize: '2em', fontWeight: 'bold', color: '#333' }}>Current Count: {count}</p>

      {/* Button to increment the count */}
      {/* When clicked, it calls setCount to add 1 to the current count */}
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#4CAF50', // Green
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1em'
        }}
      >
        Increment
      </button>

      {/* Button to decrement the count */}
      {/* When clicked, it calls setCount to subtract 1 from the current count */}
      <button
        onClick={() => setCount(count - 1)}
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#f44336', // Red
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1em'
        }}
      >
        Decrement
      </button>

      {/* Button to reset the count to 0 */}
      {/* When clicked, it calls setCount to set the count back to 0 */}
      <button
        onClick={() => setCount(0)}
        style={{
          padding: '10px 20px',
          margin: '5px',
          backgroundColor: '#008CBA', // Blue
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '1em'
        }}
      >
        Reset
      </button>
    </div>
  );
}

// Export the Counter component so it can be used in other files
export default Counter;
