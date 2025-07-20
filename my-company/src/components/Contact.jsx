// src/pages/Contact.jsx

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handles changes to form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)
    // In a real application, you would send this data to a backend server.
    // For this example, we'll just log it and show a simple message.
    console.log('Form Data Submitted:', formData);
    // Using a simple alert-like message box as per instructions to avoid window.alert()
    // In a real app, you'd use a more sophisticated UI for feedback.
    const messageBox = document.createElement('div');
    messageBox.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #4CAF50;
      color: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
      z-index: 1000;
      font-size: 1.2em;
      text-align: center;
    `;
    messageBox.textContent = 'Form submitted! Check console for data.';
    document.body.appendChild(messageBox);

    // Remove the message box after a few seconds
    setTimeout(() => {
      document.body.removeChild(messageBox);
    }, 3000);

    // Optionally reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#ffebee', minHeight: 'calc(100vh - 120px)' }}>
      <h1 style={{ color: '#d32f2f', fontSize: '2.5em', marginBottom: '20px', textAlign: 'center' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: '0 auto', padding: '20px', border: '1px solid #ef9a9a', borderRadius: '10px', backgroundColor: '#fff' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            display: 'block',
            width: 'calc(100% - 20px)',
            padding: '10px',
            margin: '10px auto',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1em'
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            display: 'block',
            width: 'calc(100% - 20px)',
            padding: '10px',
            margin: '10px auto',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1em'
          }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          style={{
            display: 'block',
            width: 'calc(100% - 20px)',
            padding: '10px',
            margin: '10px auto',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '1em',
            resize: 'vertical'
          }}
          required
        />
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '12px 20px',
            backgroundColor: '#d32f2f',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1.1em',
            marginTop: '15px'
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
