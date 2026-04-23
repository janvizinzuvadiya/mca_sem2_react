import { useState } from 'react';
import '../App.css'

function RadioBox()
{

    const [color, SetColor] = useState("");

    const handleCheck = (e) =>
    {
        SetColor(e.target.value);
    };

    return (
        <div className="RadioBox" style={{ backgroundColor: color }}>
            <h2>Radio Box</h2>
            <hr/>
            
            <input type="radio" name="color" value="pink"
            onChange={handleCheck}/>
            <label for="Pink"> &nbsp; Pink</label><br/>

            <input type="radio" name="color" value="lightblue"
            onChange={handleCheck}/>
            <label for="Light Blue"> &nbsp; Light Blue</label><br/>

            <input type="radio" name="color" value="lightgreen"
            onChange={handleCheck}/>
            <label for="Light Green"> &nbsp; Light Green</label><br/>

            <br></br>
            <br></br>
            <br></br>
            <h2>{"Selected Color: " + color}</h2>
        </div>
    );
}

export default RadioBox;
