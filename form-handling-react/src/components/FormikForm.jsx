
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// A basic mock API endpoint for demonstration purposes.
const MOCK_API = "https://example.com/api/register";

/**
 * A user registration form that uses the Formik library for state management and validation.
 */
const FormikForm = () => {

  // Validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .min(3, 'Username must be at least 3 characters')
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  // Submission handler
  const onSubmit = async (values, { setSubmitting, setStatus }) => {
    setStatus({ loading: true, error: null, success: null });

    // Simulate an API call
    try {
      console.log("Submitting form data (Formik):", values);
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
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 rounded-xl shadow-lg bg-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Formik Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <ErrorMessage name="username" component="div" className="mt-1 text-sm text-red-600" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <ErrorMessage name="email" component="div" className="mt-1 text-sm text-red-600" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              <ErrorMessage name="password" component="div" className="mt-1 text-sm text-red-600" />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2 px-4 rounded-md font-semibold text-white transition-colors duration-200 ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
            {status?.error && <p className="mt-4 text-sm text-red-600 text-center">{status.error}</p>}
            {status?.success && <p className="mt-4 text-sm text-green-600 text-center">{status.success}</p>}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
