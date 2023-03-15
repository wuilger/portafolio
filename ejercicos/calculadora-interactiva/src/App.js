import './App.css';
import FreeCodeCamp_logo from "./imagenes/FreeCodeCamp_logo.png"
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/Boton-clear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {

  const [input, setInput]= useState('');

  const agregarInput = val =>{
    setInput(input + val);
  };

 const calcularResultado = ()=>{
  if(input){
    setInput(evaluate(input));
  }else{
    alert('Ingrese valores para calcular')
  }
  
 };


  return (
    <div className="App">
     <div className="freecodecamp-logo-contenedor">
      <img 
      src={FreeCodeCamp_logo}
      className="freecodecamp-logo"
      alt="Logo de FreeCodeCamp"/>
     </div>
     <div className="contenedor-calculadora">
      <Pantalla input={input}/>
      <div className="fila">
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
      </div>
      <div className="fila">
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
      </div>
      <div className="fila">
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
      </div>
      <div className="fila">
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
      </div>
      <div className="fila">
        <BotonClear manejarClic={()=> setInput('')}>
          Clear
          </BotonClear>
      </div>
     </div>
    </div>
  );
}

export default App;
