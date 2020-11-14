// Desestructuracion
// Asignacion Desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Solado',
};

// const {edad, clave, nombre} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const useContext = ({clave, nombre, edad, rango = 'Capitan'}) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1212,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(nombreClave, anios);
console.log(lat, lng);