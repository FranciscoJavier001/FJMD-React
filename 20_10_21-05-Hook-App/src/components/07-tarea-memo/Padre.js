import React, { useCallback } from 'react';
import { Hijo } from './Hijo';
import { useState } from 'react';

import '../02-useEffect/effects.css';


export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    // const incrementar = ( num ) => {
    //     setValor( valor + num )
    // }

    //** Para solventar el problema, lo unico que se hizo fue ue creo la funcion incremenentar, que recibe y callback con el valor de numero, y el setValot le asigna el vlor al valor ue tiene, y el uiltimo tiene esa dependencia pero entre llaves */
    const incrementar = useCallback( (num) => {
        setValor( v => v + num )
    }, [ setValor ]);



    return (
        <div>
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
