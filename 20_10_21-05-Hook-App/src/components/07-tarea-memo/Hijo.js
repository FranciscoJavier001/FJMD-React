import React from 'react'
// React.memo ya con la funcion de padre evita que se vuelvan a cargar los componentes

export const Hijo = React.memo(({ numero, incrementar }) => { //** Para que no vuelva a mandar la funcion si no hay cambio */

    console.log('  Me volví a generar :(  ');

    return (
        <button
            className="btn btn-primary mr-3"
            onClick={ () => incrementar( numero ) } //** La funcion que llamamos cuando da click */
        >
            {/* creo que estos son los numeros que van a estar en el DOM, con cada valor */}
            { numero }
        </button>
    )
})
