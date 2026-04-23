import { useState } from 'react';
import '../App.css';

function CheckBox()
{
    const [arr , setArr] = useState([]);

    const handleCheck = (e) =>{
        const { value, checked } = e.target;

        if(checked)
        {
            setArr ([...arr, value]);
        }
        else
        {
            setArr (arr.filter((item) => item !== value));
        }
    }

    return(
        <div className="CheckBox">
            <h2>Check Box</h2>

            <hr/>

            <input type="checkbox" id="vehicle1" name="veh" value="Bike"
            onChange={handleCheck}/>
            <label for="vehicle1"> &nbsp; bike</label><br/>

            <input type="checkbox" id="vehicle2" name="veh" value="Car"
            onChange={handleCheck}/>
            <label for="vehicle2"> &nbsp; car</label><br/>

            <input type="checkbox" id="vehicle3" name="veh" value="Boat"
            onChange={handleCheck}/>
            <label for="vehicle3"> &nbsp; boat</label><br/>

            <br></br>
            <br></br>
            <br></br>
            <h2> {"Selected Values:  " + arr.join(", ")}</h2>

        </div>
    );
}

export default CheckBox;