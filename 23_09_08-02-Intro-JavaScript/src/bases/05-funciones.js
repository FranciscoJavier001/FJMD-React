// Funciones en JS

// const saludar = (nombre) => { //* Funcion que recibe un parametro  */
//   return `Hola, ${nombre}`; //* Regresa un hola y el parametro recibido */
// };

const saludar2 = (nombre) => {
  //* Funcion que recibe un parametro  */
  return `Hola, ${nombre}`; //* Regresa un texto junto con el parametro recibido */
};

const saludar3 = (nombre) => `Hola, ${nombre}`; //* Funcion que recibe un parametro y regresa un string y el parametro recibido */
const saludar4 = () => `Hola Mundo`; //* Funcion que no recibe nada y regresa un string */

// console.log(saludar('Goku'));  //* Muestro en consola la funcion saludar con el parametro recibido Goku */

console.log(saludar2("Vegeta")); //* Muestro en consola una funcion que recibe un parametro */
console.log(saludar3("Goku")); //* Muestro en consola una funcion que recibe un parametro */
console.log(saludar4()); //* Muestro en consola una funcion que no recibe ningun parametro */

const getUser = () => ({
  //* Funcion que no recibe nada y regresa un objeto */
  uid: "ABD123", //* Variables del objeto */
  username: "El_Papi102", //* Variables del objeto */
});

const user = getUser(); //* Variable que ejecuta una funcion */

console.log(user); //* Muestro en consola una variable que ejecuta una funcion */

// Tarea
// 1. Transformen a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas

// function getUsuarioActivo(nombre){ //* Funcion que recibe un parametro */
//     return{ //* Regresa */
//         uid: 'ABC567', //* Variables de un objeto */
//         username: nombre //* Variables de un objeto */
//     }
// };

// const usuarioActivo = getUsuarioActivo('Francisco'); //* Variable que ejecuta una funcion que recibe un parametro */
// console.log(usuarioActivo); //* Muestro en consola una variable que ejecuta una funcion que recibe un parametro */

const getUsuarioActivo = (nombre) => ({
  //* Variable que recibe un parametro que devuelve un objeto */
  uid: "ABC678", //* Objeto que devuelve */
  username: nombre,
});

const usuarioActivo = getUsuarioActivo("Francisco"); //* Declaro una variable que ejecuta una funcion, que recibe un parametro */

console.log(usuarioActivo); //* Muestro en consola el resultado de la variable definida */
