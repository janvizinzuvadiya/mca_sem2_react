import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Header() {
    return (
    <header className="header">
        <div className="welcome-message">
            <h1>Welcome to Sitearea</h1>
        </div>
        <nav>
            <ul className="nav-links">
               
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Student">Student</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/logout">Logout</Link></li>
               
            </ul>
        </nav>
       
        <hr></hr>
    </header>
    )
}

export default Header
