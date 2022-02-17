// Este es un componente hijo

import React from 'react'

export const ShowIncrement = React.memo(({increment}) => { //** La funcion que voy a implementar debo recibirla como argumento, de igual manera generamos el memo para ue recuerde el numero y si no hay cambio que asi se quede. */

    console.log(' Me volví a generar :( ');

    return (
        <button
            className="btn btn-primary"
            onClick={ () => {
                increment( 5 ); //** Aqui la llamamos, el increment en 5 */
            }}
        >
            Incrementar + 5
        </button>
    )
})
