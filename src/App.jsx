import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';

function App() {

  return (
<div>
  <h1>Controlled Form</h1>
  <ControlledForm />

  <h1>Uncontrolled Form</h1>
  <UncontrolledForm />
</div>
  )
}

export default App
