import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import freeCodeCampoLogo from './imagenes/FreeCodeCamp_logo.png';

import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => { 
    setInput(input + val);
  };

  const calcularResultado = () => {
    if(input) { 
      setInput(evaluate(input));
    } else { 
      alert("Por favor, ingrese valores a calcular...");
    }
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'> 
        <img className='freecodecamp-logo'
          src={freeCodeCampoLogo}
          alt='Esta es una imagen muajaja'
        />
      </div> 
      <div className='contenedor-calculadora'> 
        <Pantalla input={input}/>
        <div className='fila'> 
          <Boton hacerClic={agregarInput}>1</Boton>
          <Boton hacerClic={agregarInput}>2</Boton>
          <Boton hacerClic={agregarInput}>3</Boton>
          <Boton hacerClic={agregarInput}>+</Boton>
          
        </div>
        <div className='fila'> 
          <Boton hacerClic={agregarInput}>4</Boton>
          <Boton hacerClic={agregarInput}>5</Boton>
          <Boton hacerClic={agregarInput}>6</Boton>
          <Boton hacerClic={agregarInput}>-</Boton>
          
        </div>
        <div className='fila'> 
          <Boton hacerClic={agregarInput}>7</Boton>
          <Boton hacerClic={agregarInput}>8</Boton>
          <Boton hacerClic={agregarInput}>9</Boton>
          <Boton hacerClic={agregarInput}>x</Boton>
          
        </div>
        <div className='fila'> 
          <Boton hacerClic={agregarInput}>0</Boton>
          <Boton hacerClic={agregarInput}>.</Boton>
          <Boton hacerClic={calcularResultado}>=</Boton>
          <Boton hacerClic={agregarInput}>/</Boton>
          
        </div>
        <div className='fila'> 
          <BotonClear hacerClear={() => setInput('')}> 
            Clear 
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
