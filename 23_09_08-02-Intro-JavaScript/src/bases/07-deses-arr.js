const personajes = ["Goku", "Vegeta", "Trunks"]; //* Creo un arreglo de arreglos */
const [, , p3] = personajes; //* Defino caracteristicas o arreglos de las variables que estan en personajes */
console.log(p3); //* Solo va a salir Trunks */

//*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */

const retornaArreglo = () => {
  // Funcion que no recibe parametros, que retorna in String y unos numeros, sin return no me retorna nada */
  return ["ABC", 123]; //* Regresame eso en consola, lo que defina */
};

const [letras, numeros] = retornaArreglo(); //* Creo como se llaman las caracteristocas del objeto retornaArreglo */
console.log(letras, numeros); //* Muestro en consola las variables que asigne el numerode 0 a donde sea *

//*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */

// Tarea
// 1. El primer valor del arr se llamara nombre
// 1. El segundo valor del arr se llamara setNombre

//* Defino una variable que reciba un elemento */
//* Y muestra en consola hola mundo */
