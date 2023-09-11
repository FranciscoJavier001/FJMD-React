// Desestructuracion

// Asignacion Desestructurante
const persona = {
  //* Creo una variable que sea un objeto llamada persona */
  nombre: "Tony", //* Variables dentro del objeto persona */
  edad: 45, //* Variables dentro del objeto persona */
  clave: "Ironman", //* Variables dentro del objeto persona */
  rango: "Solado", //* Variables dentro del objeto persona */
};

const { edad, clave, nombre, rango } = persona; //* Desestructuracion del objeto persona para mostrarlo en consola */
console.log("1", nombre, edad, clave, rango); //* Muestro en consola la informacion del objeto persona desestructurado */

//*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */ //*  */
const hookUseContext = ({
  //* Defino una constante que dentro tiene variables vacias */
  nombre,
  edad,
  clave,
  rango,
  genero,
}) => {
  return {
    //* De los parametros definidos, cambio su nombre de variable y asigno nuevos nombres, con nuevs valores */
    nombreActualizado: (nombre = "Juan"),
    nombreClave: (clave = "SuperxD"),
    anios: (edad = 222),
    rangoActualizado: (rango = "Capitan"),
    estatus: (genero = "Masculino"),
    latlng: {
      lat: 14.1212,
      lng: -12.3232,
    },
  };
};

const {
  //* Defino estos parametros de la variable definida l16 y que reciba parametros de la variable l4 */
  nombreActualizado,
  anios,
  nombreClave,
  rangoActualizado,
  estatus,
  latlng: { lat, lng },
} = hookUseContext(persona); //* Trae los parametros de la l4, pero se modificaron */

console.log("2 Parametros desestructurados" + " " + lat, lng); //* Muestros estos parametros desestructurados */

console.log(
  //* Muestro en consola los parametros renombrados */
  "3",
  nombreActualizado,
  anios,
  nombreClave,
  rangoActualizado,
  estatus,
  lat,
  lng
);

//* Quiero tener un Objeto Persona que tenga parametros, pero luego quiero cambiarlos a nuevos parametros */

const newPersona = (newNombre, newEdad, newTrabajo, newCiudad) => ({
  //* Variable que solo le cambio los nombres de lo que recibe */
  nombre: newNombre,
  edad: newEdad,
  trabajo: newTrabajo,
  ciudad: newCiudad,
});

const newPersonaPepe = newPersona("QAZ", 111, "Obrero", "Mexico"); //* Creo una nueva Variable con lo que recibe la variable de la l64 */
console.log(newPersonaPepe); //* Muestro en consola los resultados de la variable */

const newPersonaCarlos = newPersona("Pepe", 222, "Free", "Canada"); //* Creo una nueva Variable con lo que recibe la variable de la l64 */
console.log(newPersonaCarlos); //* Muestro en consola los resultados de la variable */
