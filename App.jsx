import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ApplicationForm from './components/ApplicaitonForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
      < ApplicationForm/>
    </div>
    </>
  )
}

export default App
