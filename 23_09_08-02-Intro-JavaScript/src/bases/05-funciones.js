// Funciones en JS
// const saludar = function (nombre){
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Goku'));

console.log(saludar2('Vegeta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () => ({
        uid: 'ABD123',
        username: 'El_Papi102'
    })

const user = getUser()
console.log(user);

// Tarea
// 1. Transformen a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas


// function getUsuarioActivo(nombre){
//     return{
//         uid: 'ABC567',
//         username: nombre
//     }
// };

// const usuarioActivo = getUsuarioActivo('Francisco');
// console.log(usuarioActivo);


const getUsuarioActivo = (nombre) => ({
    uid: 'ABC678',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Francisco');
console.log(usuarioActivo);