import './App.css';
import {Link} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import StudentProfile from './components/StudentProfile';
import CheckBox from './components/CheckBox';
import RadioBox from './components/Radiobox';
import StudentList from './components/StudentList';

function Sidebar()
{
    return (
        <div className="Container">
            <div className="Sidebar">
                <h2>Sidebar</h2>

                <ul>
                    <li><Link to="/">Home</Link></li><br />
                    <li><Link to="/check-box">Check Box</Link></li><br />
                    <li><Link to="/radio-box">Radio Box</Link></li><br />
                    <li><Link to="/student-list">Student List</Link></li>
                </ul>

            </div>
            <div className="Content">  
                <br></br> 
    

                    <Routes>
                        <Route path="/" element={<StudentProfile />} />
                        <Route path="/check-box" element={<CheckBox />} />
                        <Route path="/radio-box" element={<RadioBox />} />
                        <Route path="/student-list" element={<StudentList />} />
                        <Route path="/student-list/:id" element={<StudentList />} />

                    
                    </Routes>

            </div>
        </div>
    );
}

export default Sidebar;