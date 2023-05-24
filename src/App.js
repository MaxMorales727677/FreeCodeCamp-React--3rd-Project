import './App.css';
import Boton from './componentes/boton';
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
        <div className='fila'> 
          <Boton> 1 </Boton>
        </div>
        <div className='fila'> 
        <Boton> + </Boton>
        </div>
        <div className='fila'> </div>
        <div className='fila'> </div>
        <div className='fila'> </div>
      </div>
    </div>
  );
}

export default App;
