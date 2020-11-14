const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, , p3] = personajes;

export const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();

// Tarea
// 1. El primer valor del arr se llamara nombre
// 1. El segundo valor del arr se llamara setNombre
const useState = (valor) => {
    return [valor, ()=>{ console.log('Hola Mundo')}];
}