import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import freeCodeCampoLogo from './imagenes/FreeCodeCamp_logo.png';


function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'> 
        <img className='freecodecamp-logo'
          src={freeCodeCampoLogo}
          alt='Esta es una imagen muajaja'
        />
      </div> 
      <div className='contenedor-calculadora'> 
        <div className='pantalla'> 
          <Pantalla />
        </div>
        <div className='fila'> 
          <Boton> 1 </Boton>
          <Boton> 2 </Boton>
          <Boton> 3 </Boton>
          <Boton> + </Boton>
          
        </div>
        <div className='fila'> 
          <Boton> 4 </Boton>
          <Boton> 5 </Boton>
          <Boton> 6 </Boton>
          <Boton> - </Boton>
          
        </div>
        <div className='fila'> 
          <Boton> 7 </Boton>
          <Boton> 8 </Boton>
          <Boton> 9 </Boton>
          <Boton> x </Boton>
          
        </div>
        <div className='fila'> 
          <Boton> 0 </Boton>
          <Boton> . </Boton>
          <Boton> = </Boton>
          <Boton> / </Boton>
          
        </div>
        <div className='fila'> 
          <BotonClear> Clear </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
