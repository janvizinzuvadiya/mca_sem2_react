import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';

import './App.css'

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

function App() {
 
  return (
    <>
    <Header />
      <Sidebar />
    <Footer />
    </>
  )
}

export default App
