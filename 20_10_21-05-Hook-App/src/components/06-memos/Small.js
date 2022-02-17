// La primera letra mayuscula nos informa que es un componente

import React from 'react'

export const Small = React.memo(({ value }) => { //** Con el memo se queda guardado el cambio para que no se vuelva a renderizar y solo se va a cambiar si las properties cambian */

    console.log(' Me volví a llamar :(  '); //** Cuando se llama el componente small, este mensaje en consola se vuelve a llamar */
    // http?

    return ( //** Esto es lo que se muestra en el DOMS */
        <small> { value } </small>
    )
});

