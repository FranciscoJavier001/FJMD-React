import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';

import '../02-useEffect/effects.css';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0); //** Este es el useState y el parametro que mandamos es el initial state */

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    //** Para solventar el problema, lo unico que se hizo fue ue creo la funcion incremenentar, que recibe y callback con el valor de numero, y el setValot le asigna el valor al valor ue tiene, y el uiltimo tiene esa dependencia pero entre llaves */
    const incrementar = useCallback( (num) => { //** Bien, aqui creo una funcion de flecha, con la constante incrementar, que modifica el valor del setValor, y incrementa segun lo que tenga en cada boton, usamos el useCallback esto nos regresa una funcion que se va a llamar incrementar, viene la variable num */
        setValor( v => v + num ) //** Declaramos dentro de la funcion de flecha que valor va a se "v" y suma lo que le mandamos en el num de arriba, en la funcion, osea creamos la constante en la funcion y la recibimos como parametro */
    }, [ setValor ]); //** Entre corchetes esta la dependencia para que no se vuelva arenderizar la funcion, esta la usamos mas para el memo, esta es la dependencia qe va a tener, pero como un arreglo que va a ser igual a num */

    return (
        <div>
            {/* Esto es lo que mostramos en el DOM */}
            <h1>Padre</h1>
            <p> Total: { valor } </p>
            <hr />

            {
                numeros.map( n => ( //** map crea un nuevo array con los resultados de la llamada a la funcion indicada aplicados a cada uno de sus elementos, "n" es una props de la funcion, por eso los declaramos abajo */
                    <Hijo 
                        key={ n } //** Esta es la llave de los props, osea todo esto son parametros de los props */
                        numero={ n }
                        incrementar={ incrementar } //** El incrementar color verde viene desde el hijo, es la funcon de incrementar desde el useCallback */
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
