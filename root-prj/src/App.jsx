import './App.css'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom'
import Aboutus from './About'
import Contact from './Contact'
import Product from './Product'
import Home from './Home'
import Car from './Car'
import Bike from './Bike'
function App() {
      return (
          <BrowserRouter>
          <nav>
          <Link to="/">Home</Link> | {" "}
          <Link to="/contact">Contact</Link> | {" "}
          <Link to="/products">Product</Link> | {" "}
          <Link to="/about">About Us</Link>

          </nav>
            <Routes>
              <Route path="/" element={<Home/>} ></Route>
              <Route path="/contact" element={<Contact/>} ></Route>
              <Route path="/products" element={<Product/>} ></Route>
              <Route path="/about" element={<Aboutus/>} >
                <Route path="car" element={<Car></Car>}></Route>
                <Route path="bike" element={<Bike></Bike>}></Route>
              </Route>
          </Routes>
          </BrowserRouter>
      );
}
export default App