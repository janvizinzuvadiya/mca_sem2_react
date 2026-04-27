import '../App.css';
import {Link} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';
import CheckBox  from './CheckBox';
import RadioBox from './RadioBox';
import StudentList from './StudentList';

function Sidebar()
{
    return (
        <div className='container'>
            <div className='sidebar'>
                <h1>Side bar</h1>

                <ul>
                   <Link to="/checkbox"><li>Check Box</li></Link>
                   <Link to="/radiobox"><li>Radio Box</li></Link>
                   <Link to="/student-list"><li>Dynamic Route</li></Link>
                </ul>


            </div>
            <div className='main'>

                <Routes>
                    <Route path='/checkbox' element={<CheckBox />}/>
                    <Route path='/radiobox' element={<RadioBox />}/>
                    <Route path='/student-list/' element={<StudentList />}/>
                    <Route path='/student-list/:id' element={<StudentList />}/>

                </Routes>

            </div>
        </div>
    );
}

export default Sidebar;