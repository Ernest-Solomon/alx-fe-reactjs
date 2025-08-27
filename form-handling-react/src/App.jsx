import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the Yup validation schema for the form fields.
// This schema is a key part of the validation logic.
const validationSchema = Yup.object({
  firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
});

// A new component, FormikForm, to encapsulate the form logic.
const FormikForm = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-bold text-gray-900 text-center mb-6">User Registration</h1>
        
        {/* Formik component wraps the entire form. It handles state, validation, and submission. */}
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '' }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // Simulate an API call
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {/* Form component from Formik manages the form submission. */}
          <Form className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              {/* Field component from Formik binds the input to the state and handles validation. */}
              <Field
                id="firstName"
                name="firstName"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              {/* ErrorMessage component displays validation errors for the field. */}
              <ErrorMessage name="firstName" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <Field
                id="lastName"
                name="lastName"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <ErrorMessage name="lastName" component="div" className="text-red-500 text-xs" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <Field
                id="email"
                name="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <FormikForm />
  );
}
