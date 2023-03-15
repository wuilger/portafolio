import './App.css';
import freeCodeCampLogo from '../src/imagenes/FreeCodeCamp_logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
 
  const [numClics, setNumClics] = useState(0);
  
  const manejarClic= () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };
  
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' 
        src={freeCodeCampLogo} 
        alt='Logo de freeCodeCamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonDeclic={true} 
        manejarClic={manejarClic} />
        <Boton 
        texto='Reiniciar'
        esBotonDeclic={false}
        manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
