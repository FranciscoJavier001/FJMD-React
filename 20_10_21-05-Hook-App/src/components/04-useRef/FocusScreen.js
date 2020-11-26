import React, { useRef } from 'react';
import '../02-useEffect/effects.css';


export const FocusScreen = () => {

    const inputRef = useRef(); //** Para que hago el llamado a useRef, es para llamar una variable que cambia  */
    // console.log(ref);

    const handleClick = () => { //** Esta es la funcion y estas son las instrucciones */
        inputRef.current.select(); //** El inputRef esta declarado abajo, mira, si escribo algo, luego lo envio lo selecciona, osea te manda a lo que escribiste en el formulario y seleccionado  */
        console.log(inputRef);
    }

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr />

            <input //** Caja de texto, es para darle seguimiento con la variable declarada arriba, pero no encuentro una mejor explicacion */
                ref={ inputRef } //** Las instrucciones de inputRef son las siguientes  */
                className="form-control" //** Es el formulario donde alguien va a dar datos, es decir un input */
                placeholder="Su nombre" //** Lo que dice */
            />


            <button 
                className="btn btn-outline-primary mt-5" //** El control del formulario, coloreado de azul cuando tiene un el cursor arrba, sino es transparente con letras azules, pero puede cambiar a letras blancas y azules */
                onClick={ handleClick } //** Voy a crear arriba la funcion de handleClick(osea cuando este el click ahi) */
            >
                Focus
            </button>

        </div>
    )
}
