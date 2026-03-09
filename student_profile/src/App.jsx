import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import StudentProfile from './components/StudentProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <StudentProfile />
    </>
  )
}

export default App
