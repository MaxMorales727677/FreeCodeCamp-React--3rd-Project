import React from "react";

import '../hojas-de-estilo/Boton.css'

//Función Boton: Serán los botones que se usarán en la calculadora
//Los props permiten importar y exportar valores entre funciones
//Props.children permite pasar valores del JS al HTML
function Boton(props) {

  const esOperador = valor => { 
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };

  return (
    <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={props.hacerClic(props.children)}>
      
      {props.children}
    </div>
  );
}

export default Boton;