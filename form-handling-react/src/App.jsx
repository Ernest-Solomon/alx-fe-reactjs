import React from 'react';
import ControlledForm from './components/ControlledForm';
import FormikForm from './components/FormikForm';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col items-center justify-center space-y-12">
      <div className="w-full max-w-2xl">
        <ControlledForm />
      </div>
      <div className="w-full max-w-2xl">
        <FormikForm />
      </div>
    </div>
  );
};

export default App;
