
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



