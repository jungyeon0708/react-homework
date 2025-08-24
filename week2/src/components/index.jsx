import React from 'react'
import SignUpForm from './sign-up-form/sign-up-form.jsx'
import SignInForm from './sign-in-form/sign-in-form.jsx'
import './index.css'

const App = () => (
  <div className="app-container">
    <SignUpForm />
    <SignInForm />
  </div>
)

export default App
