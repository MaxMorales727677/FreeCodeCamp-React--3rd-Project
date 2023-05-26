import React from 'react';

import '../hojas-de-estilo/Pantalla.css'

const Pantalla =({ input }) => (
    <div className='input'> 
        {input}
    </div>
);

//En el código de arriba 

// const Pantalla = ({input}) => ();
//Es una función flecha, definida como "Const", que es otra forma de hacer funciones 
//La función se llama "Pantalla" y recibe como parámetros un "input"

// <div className='input'> </div> 
//Es un div con el nombre de clase 'input', el cual va a mostrar informació 
//Dentro de la aplicación 
//Recuerda que es un componente, y ese componente se va a mostrar como una pequeña parte 
//ya dentro de la aplicación 

//{input} 
//Este es el valor que se va a mostrar en dentro del <div> 
//Que en este caso, serían los números de la pantalla 

//Resumen 
// La función "Pantalla" recibe un parámetro llamado "input"
//Ese input son los valores de la calculadora, por ejemplo: 5 u 8 
//Dentro de la función, se pone un <div> para mostrar los datos 
// Y dentro del <div>, va el valor "input" que se recibió como parámetro 

//Fácil =) 


export default Pantalla;