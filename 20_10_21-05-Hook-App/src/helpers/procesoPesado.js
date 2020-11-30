export const procesoPesado = ( iteraciones ) => { //** Una funcion de fleca que va a hacer algo, voy a recibir las iteraciones que voy a hacer */

    for( let i = 0; i < iteraciones; i ++ ){ //** Ciclo for con el numero de iteraciones definidos en el MemoHook, que le pusimos en 500 */
        console.log('Ahí vamos....');
    }

    return `${ iteraciones } iteraciones realizadas.`; //** Esto lo mostramos en el DOM, como lo importamos ya sale */
}

// 501, 1003, 1506, 2010, 2515, 3021, 3528, 4036, (van aumentando el numero de iteraciones + 500)