import React, { useState } from 'react';

// A basic mock API endpoint for demonstration purposes.
const MOCK_API = "https://example.com/api/register";

/**
 * A user registration form that uses controlled components.
 * State is managed manually with React's useState hook.
 */
const ControlledForm = () => {
  // State for each form field and for handling loading/errors
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: null
  });

  // Handle changes to any input field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: null });

    // Basic validation to check for empty fields
    if (!formData.username || !formData.email || !formData.password) {
      setStatus({ loading: false, error: "All fields are required.", success: null });
      return;
    }

    // Simulate an API call
    try {
      console.log("Submitting form data (Controlled Components):", formData);
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          console.log("Mock API Response: Success");
          resolve({ ok: true });
        }, 1500); // Simulate network delay
      });

      if (response.ok) {
        setStatus({ loading: false, error: null, success: "Registration successful!" });
      } else {
        setStatus({ loading: false, error: "Registration failed. Please try again.", success: null });
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus({ loading: false, error: "An unexpected error occurred.", success: null });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-xl shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Controlled Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={status.loading}
          className={`w-full py-2 px-4 rounded-md font-semibold text-white transition-colors duration-200 ${
            status.loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
          }`}
        >
          {status.loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {status.error && <p className="mt-4 text-sm text-red-600 text-center">{status.error}</p>}
      {status.success && <p className="mt-4 text-sm text-green-600 text-center">{status.success}</p>}
    </div>
  );
};

export default ControlledForm;
