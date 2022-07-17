import React from "react";
import "../styles/BotonClear.css"

const Botonclear = (props) => {
  return(
    <button className="Boton-clear" onClick={props.manejarClear}>
      {props.children}
    </button>
  
    )
}
export default Botonclear;