const nombre = 'Francisco';
const apellido = 'Martinez';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

// console.log(nombreCompleto);

export function getSaludo(nombre = 'Carlos'){ //** Aqui esta recibiendo el nombre de carlos porque se lo estamos pasando como parametro a la funcion */
    return 'Hola ' + nombre + '!';
}

// console.log(`Este es un texto: ${getSaludo(nombre)}`);

