import React from "react";
import '../hojas-de-estilo/Boton.css';
function Boton({ texto, esBotonDeclic, manejarClic }){
  return (
    <button 
  className={ esBotonDeclic ? 'boton-clic' : 'boton-reiniciar'}
  onClick={manejarClic}>
      {texto}
    </button>
  )
}



export default Boton;