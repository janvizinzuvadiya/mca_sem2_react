import '../App.css'
import {useState} from 'react';

function RadioBox()
{
    const [clr, setClr] = useState("");
    const handlecolor = (e) =>
    {
        setClr (e.target.value);
    }


    return(
        <div className='radiobox-div' style = {{ backgroundColor:clr }}>

             <div className="inner-content">

                <h1>Radio Box</h1>
                <h2>Select Background Color</h2>

                <input name="Color" id="Color" className="Color" value="Pink" type="radio" 
                onChange={handlecolor}/>
                <label htmlFor="Color">Pink</label><br/>

                <input name="Color" id="Color" className="Color" value="lightgray" type="radio" 
                onChange={handlecolor}/>
                <label htmlFor="Color">Gray</label><br/>

                <input name="Color" id="Color" className="Color" value="lightgreen" type="radio" 
                onChange={handlecolor}/>
                <label htmlFor="Color">Green</label>

                
            </div>

            
        </div>
    );
}

export default RadioBox;