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
    const incrementar = useCallback( (num) => { //** Bien, aqui creo una funcion de flecha, con la constante incrementar, que modifica el valor del setValor, y incrementa segun lo que tenga en cada boton */
        setValor( v => v + num )
    }, [ setValor ]); //** Entre corchetes esta la dependencia para que no se vuelva arenderizar la funcion, esta la usamos mas para el memo */



    return (
        <div>
            {/* Esto es lo que mostramos en el DOM */}
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
