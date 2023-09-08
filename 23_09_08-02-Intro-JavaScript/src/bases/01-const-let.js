// Variables y Constantes

const nombre = "Francisco"; //* Defino una variable */
const apellido = "Martinez"; //* Defino una variable */

let valorDado = 5; //* Le asigno una variable */
valorDado = 4; //* Como es let puedo modificar esta variable */

console.log(nombre, apellido, valorDado); //* Muestro en Consola */

// var No se debe de usar
if (true) {
  //* Para que esta condicion siempre entre */
  const nombre = "Peter"; //* Cambio el valor de la variable nombre, pero esta fuera del Scope */

  console.log(nombre); //* Va a salir el nombre de Peter */
}

console.log(valorDado); //* Va a salir el Valor asignado al ultimo de esta variable */
console.log(nombre); //* Sale Francisco porque esta definido fuera del Scope */
