import { useState } from 'react'
import RegistrationForm from './components/RegistrationForm'
import FormikForm from './components/formikForm'
import './App.css'

function App() {
  const [showFormik, setShowFormik] = useState(false)

  return (
    <div className="App">
      <div className="app-header">
        <h1>React Form Handling Demo</h1>
        <div className="form-toggle">
          <button 
            onClick={() => setShowFormik(false)}
            className={!showFormik ? 'active' : ''}
          >
            Controlled Components
          </button>
          <button 
            onClick={() => setShowFormik(true)}
            className={showFormik ? 'active' : ''}
          >
            Formik
          </button>
        </div>
      </div>
      
      <div className="form-container">
        {showFormik ? <FormikForm /> : <RegistrationForm />}
      </div>
    </div>
  )
}

export default App
