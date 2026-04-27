import '../App.css'
import {useState} from 'react';

function CheckBox()
{

    const [hob, setHob] = useState([]);

    const handlehobby = (e) =>
    {
        const {value,checked} = e.target;
        if(checked)
        {
            setHob ([...hob,value]);
        }
        else
        {
            setHob (hob.filter((item) => item !== value));
        }
    }

    return(
        <div>
            
                <div className="inner-content">

                <h1>Check Box</h1>
                <h2>Select Hobbies</h2>

                <input name="Hobby" id="Hobby" className="Hobby" value="Driving" type="checkbox" 
                onChange={handlehobby}/>
                <label htmlFor="Hobby">Driving</label><br/>

                <input name="Hobby" id="Hobby" className="Hobby" value="Singing" type="checkbox" 
                onChange={handlehobby}/>
                <label htmlFor="Hobby">Singing</label><br/>

                <input name="Hobby" id="Hobby" className="Hobby" value="Dancing" type="checkbox" 
                onChange={handlehobby}/>
                <label htmlFor="Hobby">Dancing</label>

                <p>
                    Selected Hobbies : { hob.join(", ") }
                </p>
            </div>

        </div>
    );
}

export default CheckBox;