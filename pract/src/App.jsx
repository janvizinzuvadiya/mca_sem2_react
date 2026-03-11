import { useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Sections/Home';
import About from './components/Sections/About';
import Portfolio from './components/Sections/Portfolio';
import Projects from './components/Sections/Projects';
import Contact from './components/Sections/Contact';  
import Resume from './components/Sections/Resume';
import Services from './components/Sections/Services';

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Initialize AOS animation
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true
      });
    }
  }, []);

  return (
    <>
    <Sidebar />
    <Home />
    <About />
    <Resume />
    <Portfolio />
    <Services />
    <Projects />
    <Contact />
     
    </>
  )
}

export default App
