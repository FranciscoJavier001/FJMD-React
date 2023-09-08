const nombre = "Francisco"; //* Defino una variable */
const apellido = "Martinez"; //* Defino una variable */

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`; //* Le asigno a esta constante unos parametros definidos arriba (Variables integras) */

console.log(nombreCompleto); //* Muestro en consola el valor de esta variable */

function getSaludo(nombre) {
  //* Creo una funcion llamada getSaludo que recibe un parametro */
  return "Hola " + nombre; //* Retorna al final un hola y luego el nombre */
}

console.log(`Este es un texto: ${getSaludo(nombre)}`); //* Muestro en consola un texto y llamo la funcion llamada getSaludo */
