import '../App.css';
import { useParams, Link } from 'react-router-dom';

function StudentList()
{
    const {id} = useParams();

    return(
        <div>
           <div className="inner-content">

                <h1>Student List</h1>
                <br />
                <hr />
                    <ul>

                        <Link to='/student-list/1'><li>Student 1</li></Link>
                        <Link to='/student-list/2'><li>Student 2</li></Link>
                        <Link to='/student-list/3'><li>Student 3</li></Link>
                        <Link to='/student-list/4'><li>Student 4</li></Link>
                        
                    </ul>

                <p>
                    Student ID: {id}
                </p>

            </div>

            
        </div>
    );
}

export default StudentList;