import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required')
});

const FormikForm = () => {
  // Initial values for the form
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      console.log('Submitting registration data:', values);
      
      // Mock API call simulation
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Registration successful:', result);
        setStatus({ type: 'success', message: 'User registered successfully!' });
        
        // Reset form after successful submission
        resetForm();
        
        // Show success alert
        alert('User registered successfully!');
      } else {
        throw new Error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setStatus({ type: 'error', message: 'Registration failed. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="registration-form-container">
      <h2>User Registration Form (Formik)</h2>
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, status }) => (
          <Form className="registration-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
              />
              <ErrorMessage name="username" component="span" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="span" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage name="password" component="span" className="error-message" />
            </div>

            {status && (
              <div className={`status-message ${status.type}`}>
                {status.message}
              </div>
            )}

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
