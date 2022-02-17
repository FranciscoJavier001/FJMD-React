import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';

import '../02-useEffect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false); //** Creamos un estado con el snipet que se va a llamar show y va a iniciar en false y este show lo que va a hacer es un valor booleano para mostrar conicionalmente el componente definido abajo */

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            {/* Es para renderizar un componente, asi que lo usamos desde el ejercicio anterior de las citas de breaking bad */}
            {show && <MultipleCustomHooks/>}
            {/* La instruccion puesta arriba dice, si show esta en true, entonces muestra el MultipleCustomHooks */}

            <button //** Aqui creamos el boton que le damos clases con bootstrap y con el onClick cambiamos el valor booleano de setShow para que haga el cambio del valor y este se vea reflejado en el useState o el estado del componente */
                className="btn btn-primary mt-5"
                onClick={ () => { //** Al hacer click setShow va a cambiar su valor a negativo, como es un tipo de dato tiene booleano y cambia estado/state */
                    setShow( !show ); //** Va a ser igual al valor opuesto del show */
                }}
            >
                Show/Hide
            </button>

        </div>
    )
}
