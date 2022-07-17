import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import Botonclear from './componentes/BotonClear';
import { useState } from "react";
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = (valor) =>{
    setInput(input + valor);
  };
  const clearinput = () =>{
    setInput('')
  };
  const calcularResultado = () =>{
    if (input){
    setInput(evaluate(input))}
    else{
      alert("Ingrese un valor a la calculadora")
    }
  };
  return (
    <div className="App">
        <div className='contenedor-principal'>
        <Pantalla 
          input={input}/>
           <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <Botonclear manejarClear = {clearinput}>
              Clear
            </Botonclear>
          </div>
        </div>
    </div>
  );
}

export default App;
