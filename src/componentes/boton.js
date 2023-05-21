import React from "react";

//Función Boton: Serán los botones que se usarán en la calculadora
//Los props permiten importar y exportar valores entre funciones
//Props.children permite pasar valores del JS al HTML
function Boton(props) {

  const esOperador = valor => { 
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };



  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : null}`}>
      {props.children}
    </div>
  );
}

export default Boton;