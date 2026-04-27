import { useState } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import Sidebar from './component/Sidebar'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
        <Sidebar />
      <Footer />
    </div>
  )
}

export default App
