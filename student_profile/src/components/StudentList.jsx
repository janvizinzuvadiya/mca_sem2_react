import '../App.css'
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';

function StudentList()
{

    const {id} = useParams();
    return (
        <div className="StudentList">
            <h2>Student List</h2>
            <hr/>

            <Link to="/student-list/1">Student 1</Link><br></br>
            <Link to="/student-list/2">Student 2</Link><br></br>
            <Link to="/student-list/3">Student 3</Link><br></br>
            <Link to="/student-list/4">Student 4</Link><br></br>
            <Link to="/student-list/5">Student 5</Link><br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            {id && <h1>ID: {id}</h1>}

        </div>
    );
}

export default StudentList;