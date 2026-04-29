import { Outlet, Link } from 'react-router-dom';
import Car from './Car';
import Bike from './Bike';

function About() {
  return (
    <div >
      <h1>About Us Page</h1>
      <p>Select a category to see more details:</p>
      
      {/* Sub-navigation for nested routes */}
      <nav>
        <Link to="car">Our Cars</Link> | {" "}
        <Link to="bike">Our Bikes</Link>
      </nav>

      <hr />
        
      {
        /* The Outlet component renders the matched child route component */
        
      }
      <Outlet /> 
    </div>
  );
}

export default About;   