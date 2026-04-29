//  ----------------------------------------------------------------------------------------------
// 08-Apr-2026 Thursday

import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <App></App>
);




















// ------------------------------------------------------------------------------------------------
// 01-Apr-2026 Thursday 
// 06-Apr-2026 Monday

// import react from 'react';
// import ReactDOM from 'react-dom/client';
// import './main.css';
// import { useEffect ,useState} from 'react';

// function Forexample()
// {
//     const [name, setName]  = useState('');
//     const [gender, setGender]  = useState('');

//     const handleNameChange = (event) => {
//         setName(event.target.value);
//     };

//     const handleGenderChange = (event) => {
//         setGender(event.target.value);
//     };

//     const [skills, setSkills] = useState([]);

//     const handleSkillsChange = (event) => {
//         const { value, checked } = event.target;
//         setSkills(prevSkills => {
//             if (checked) {
//                 return [...prevSkills, value];
//             }
//             else {
//                 return prevSkills.filter(skill => skill !== value);
//             }
//         });
//     };

//     const handlerSubmit = (event) => 
//     {
//         event.preventDefault();
//         alert(`Name: ${name} \n Gender: ${gender} \n Skills: ${skills.join(', ')}`);
//     }

//     return (
//         <form onSubmit={handlerSubmit}>
//             <label>Name:</label>
//             <input type="text" value={name} onChange={handleNameChange}></input>
          
//             <br></br>
//             <br></br>

//             <label>Gender:</label>
//             <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={handleGenderChange}></input>
//             <label>Male</label>
//             <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={handleGenderChange}></input>
//             <label>Female</label>
//             <input type="radio" name="gender" value="other" checked={gender === 'other'} onChange={handleGenderChange}></input>
//             <label>Other</label>
//             <br></br>

//             <label>Skills:</label>
//             <input type="checkbox" name="skills" value="react" checked={skills.includes('react')} onChange={handleSkillsChange}></input>
//             <label>React</label>
//             <input type="checkbox" name="skills" value="laravel" checked={skills.includes('laravel')} onChange={handleSkillsChange}></input>
//             <label>Laravel</label>
//             <input type="checkbox" name="skills" value="java" checked={skills.includes('java')} onChange={handleSkillsChange}></input>
//             <label>Java</label>
//             <br></br>

//             <br></br>
//             <br></br>
//             <br></br>
//             <button type="submit">Submit</button>

//         </form>
//     );
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Forexample></Forexample>
// );


// -----------------------------------------------------------------------
// 30-Mar-2026 Monday

// import react from 'react';
// import ReactDOM from 'react-dom/client';
// import './main.css';
// import { useEffect ,useState} from 'react';

// function App()
// {
//     const [counter, setCounter] = useState(0);
//     const [secondCounter, setSecondCounter] = useState(0);

//     useEffect(()=>
//     {
//         const id = setInterval(()=>
//         {
//             setSecondCounter(secondCounter + 1);
//         },1000);
//         console.log("useEffect called");

//         return ()=>
//         {
//             clearInterval(id);
//             console.log("unmounting phase called");
//         }
//     },[]);

//     const incrementCounter = () => {
//         setCounter(counter + 1);
//     }


//     return (<div>
//         <h1>Counter: {counter}</h1>
//         <button onClick={()=> setCounter(counter + 1)}>Increment Counter</button>
//         <h1>Second Counter: {secondCounter}</h1>
//     </div>)
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App></App>
// );


// function App()
// {
//     const [counter, setCounter] = useState(0);
    
//     const incrementCounter = () => {
//         setCounter(counter + 1);
//     }

//     return (<div>
//         <h1>Counter: {counter}</h1>
//         <br></br>
//         <button onClick={incrementCounter}>Increment</button>
//     </div>)
// }

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App></App>
// );


// -----------------------------------------------------------------------
// 05-Mar-2026 Thursday

// import React from 'react';
// import ReactDOM, { createRoot } from 'react-dom/client';
// // external css
// import './main.css';

// React Life Cycle of component
// Mouting Phase
    // constructor
    // static getDerivedStateFromProps()
    // render()
    // componentDidMount()
// Updating Phase   
    // static getDerivedStateFromProps()
    // shouldComponentUpdate()
    // render()
    // getSnapshotBeforeUpdate()
    // componentDidUpdate()
// Unmounting Phase
    // componentWillUnmount()


//     class Header extends React.Component
//     {
//         constructor(props)
//         {
//             super(props);
//             this.state = {name: "Header Component"};
//             console.log("constructor called");
//         }

//         static getDerivedStateFromProps(props, state)
//         {
//             console.log("getDerivedStateFromProps called");
//             return null;
//         }

//         componentDidMount()
//         {
//             console.log("componentDidMount called");
//             setTimeout
//             (()=>   
//                 {
//                     this.setState({name: "Header Component Updated"});
//                 }, 1000 
//             );
//         }

//         render()
//         {
//             console.log("render called");
//             return (
                
//                 "this is header component render method"+
//                 <h1>{this.state.name}</h1>
//             );

//         }
//         shouldComponentUpdate()
//         {
//             console.log("shouldComponentUpdate called");
//             return true;
//         }

//         getSnapshotBeforeUpdate(prevProps, prevState)
//         {
//             console.log("getSnapshotBeforeUpdate called");
//             return null;
//         }

//         componentDidUpdate()
//         {
//             console.log("componentDidUpdate called");
//         }
//     }

//     createRoot(document.getElementById('root')).render(
//     <Header></Header>
// );


// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// React Css Types

// external css

// function App() {
//   return (
//     <h1 className='heading1'>Hello World</h1>
// );
// }

// export default App;

// root.render( <App></App> );


// internal css

// function App2()
// {
//     const headingStyle = {
//         fontSize: '200px',
//         color: 'rgb(0, 255, 234)',
//         padding: '100px',
//         fontStyle: 'italic',
//         fontWeight: 700
//     };

//     return (
//         <h1 style={headingStyle}>Hello World</h1>
//     );
// }
// export default App2;

// root.render( <App2></App2> );

// inline css

// function App3()
// {
//     return (
//         <h1 style={{fontSize: '200px', color: 'rgb(76, 0, 255)', padding: '100px', fontStyle: 'italic', fontWeight: 700}}>Hello World</h1>
//     );
// }
// export default App3;

// root.render( <App3></App3> );


// -----------------------------------------------------------------------
// 02-Mar-2026 Monday
// import React from 'react';

// import { createRoot } from 'react-dom/client';
// import './main.css';

// const container = document.getElementById('root');
// const root = createRoot(container);

// function Car(props) {
//     return (<h1> {props.name}  {props.color}  {props.v1} {props.years} {props.info.model} {props.info.company}</h1>);
// }

// //  default props
// function CarS({name="Default Car", speed="100km/h"}) {
//     return (<h1> {name}  {speed} </h1>);
// }


// destructuring using rest operator

// function CarSpeed(name,speed,...rest){

//     // const {name , speed} = procs;
//     return (<h1> {name}  {speed} {rest.info}</h1>);  
// } 

// function start()
// {
//     root.render(<CarSpeed name="Bugadi" speed="200km/h" info={{model:"s1", company:"Bugadi"}}></CarSpeed>);
// }

// const var1="Hello World";
// const years = [1990, 1995, 2000, 2005, 2010, 2015, 2020];
// let a={model:'s1' , company:'Bugadi' };


// passinf props from component to component

// root.render(
 
// );

// pass multiple props in component

// root.render(
//     <Car name="Bugadi" v1={var1} color="Stary Night" years={years} info={a}></Car>
// );



// -----------------------------------------------------------------------

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './main.css';
// // import './public/skates.webp';

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);

// // create Element-----------
// // let h1 = React.createElement('h1',{className:'heading1'},'Root File of Project-> Main.jsx');
// // root.render(h1);

// // let img = React.createElement('image',{className:'img',id:'img',src:'/public/skates.webp'},discription);
// // root.render(img);


// // function component-----------
// function Car(props)
// {
//     return (<h1> {props.name}  {props.color} </h1>);
// }

// root.render
// (
//     <Car name="Bugadi" color="Stary Night"></Car>
// )



