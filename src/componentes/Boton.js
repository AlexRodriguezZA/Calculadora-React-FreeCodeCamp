import React from "react";
import '../styles/Boton.css';


function Boton(props){
  const esOperador = (valor)=>{
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
  return(
    <button className={`boton-contenedor ${esOperador(props.children)? 'operador' : ''}`.trimEnd()}
    // funcion que llama a otra funcion
    onClick={() => props.manejarClick(props.children)}>
      
      {props.children}
    </button>

  )
}
export default Boton; 