import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import '../hojas-de-estilos/ListaDeTareas.css';
import Tarea from './Tareas';


function ListaDeTareas() {
    const [tareas, setTareas]= useState([]);
    
    const agregarTarea = tarea => {
      if(tarea.texto.trim()){
        tarea.texto = tarea.texto.trim();
        const tareasAtualizadas = [tarea, ...tareas];
        setTareas(tareasAtualizadas);
      }else {
        alert('Debes agregar tarea');
      }
    }

    const eliminarTarea = id =>{
      const tareasAtualizadas = tareas.filter(tarea => tarea.id !==id);
      setTareas(tareasAtualizadas);    
    }
    const completarTarea = id => {
      const tareasAtualizadas = tareas.map(tarea => {
        if(tarea.id === id){
          tarea.completada = !tarea.completada;
        }
        return tarea;
      });
      setTareas(tareasAtualizadas);
    }
    return(
        <>
        <TareaFormulario  onSubmit={agregarTarea}/>
        <div className='tareas-lista-contenedor'>
            {
              tareas.map((tarea) =>
              <Tarea 
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea} 
              completarTarea={completarTarea} />

              )   
            }
        </div>
        </>
    )
}

export default ListaDeTareas;