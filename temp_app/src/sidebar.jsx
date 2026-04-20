import './App.css'
import { Link } from 'react-router-dom';


function Sidebar() {
    return (
    <aside className="sidebar">
        <nav>
            <ul className="sidebar-links">
                <li><Link to="/radio">Radio</Link></li>
                <li><Link to="/checkbox">Checkbox</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><Link to="/help">Help</Link></li>
            </ul>
        </nav>
    </aside>
    )
}

export default Sidebar