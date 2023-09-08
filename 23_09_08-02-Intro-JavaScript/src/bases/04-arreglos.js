// Arreglos en JS

// const arreglo = new Array(100); //* Creo un arreglo que tenga 100 espacios (Inicia en 0, sera 101) */
const arreglo = [1, 2, 3, 4]; //* Creo un arreglo con numeros */
// arreglo.push(1); //* Le agrego un 1 */
// arreglo.push(2); //* Le agrego un 2 */
// arreglo.push(3); //* Le agrego un 3 */
// arreglo.push(4); //* Le agrego un 4 */
// arreglo.pop(); //* Elimina un espacio, el ultimo */

let arreglo2 = [...arreglo, 5]; //* Creo otro arreglo igual al 1, pero le agrego un 5 */

// Map crea un nuevo arreglo
const arreglo3 = arreglo2.map((numero) => {
  //* Defino un nuevo arreglo que va a ser igual al 2, que mapea (es igual) al 2, pero recibe un parametro */
  return numero * 2; //* El parametro que recibio, sera todo que se multiplique por 2 */
});

console.log(arreglo); //* Muestro en consola el arreglo 1 */
console.log(arreglo2); //* Muestro en consola el arreglo 2 */
console.log(arreglo3); //* Muestro en consola el arreglo 3 */
