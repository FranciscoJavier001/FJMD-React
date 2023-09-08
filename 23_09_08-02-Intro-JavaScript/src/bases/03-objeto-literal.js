const persona = {
  //* Defino un objeto llamado Persona */
  nombre: "Tony", //* Asigno variable nombre con un valor */
  apellido: "Stark", //* Asigno variable apellido con un valor */
  edad: 45, //* Asigno la variable edad con un numero */
  direccion: {
    //* Dentro creo otro objeto */
    ciudad: "New York", //* Variable que es un String */
    zip: 55321321, //* Variable que es un numero */
    lat: 14.3232, //* Variable que es un numero */
    lng: 34.9233321, //* Variable que es un numero */
  },
};

console.table(persona); //* Asi muestro en consola una tabla con la informacion, abajo sale un objeto con variables */

const persona2 = { ...persona }; //* Creo otra variable que tiene la misma info que persona 1, trae toda su info por los 3 puntos */
persona2.nombre = "Peter"; //* Pero le cambio el nombre de la persona */

console.log(persona); //* Muestro en consola la persona  */
console.log(persona2); //* Muestro en consola la persona2 */

console.table(persona2); //* Asi muestro en consola una tabla con la informacio, abajo sale un objeto con variables */
