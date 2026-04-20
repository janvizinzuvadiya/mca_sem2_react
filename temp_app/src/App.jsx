import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './header'
import Footer from './footer'
import Sidebar from './sidebar'
import Home from './Home'
import Contact from './Contact'
import Student from './Student'

import Radio from './radio';
import Checkbox from './checkbox';

// import Logout from './logout'


function App() {

  return (
    <BrowserRouter>
      <div className="App">  
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
          <Route path="/Student" element={<Student/>} ></Route>
          {/* <Route path="/logout" element={<Logout/>} ></Route> */}

          <Route path="/radio" element={<Radio/>}></Route>
          <Route path="/checkbox" element={<Checkbox/>}></Route>
          {/* <Route path="/help" element={<help/>}></Route>
          <Route path="/settings" element={<settings/>}></Route> */}
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
   
  )
}

export default App
