import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css'

// console.log("Hola Mundo");

// const saludo = <h1>Hola Mundo</h1>;

const divRoot = document.querySelector('#app');

// ReactDOM.render( saludo , divRoot);
// ReactDOM.render( < PrimeraApp saludo="I'm Batman" subtitulo="The dark knight."  /> , divRoot);
// ReactDOM.render( < CounterApp value={10} /> , divRoot);
ReactDOM.render( < CounterApp value={4}/> , divRoot);