import React from 'react'

export const GifGridItem = ({title, url}) => { //** Estos son los parametros que se reciben en el map del GifGrid.js */

    return ( //** Es lo que retorna el arreglo de GifGridItem */
        // Estos son los estilos de bootstrap, y aqui vemos que solo se hace el llamado de los parametros dichos en el getGifs.js
        // Como lo vez aqui el div con el className se nos puso a modo de bootstrap, le ponemos el nombre, que en este caso es card y luego la animamos como queramos
        <div className="card animate__animated animate__fadeIn"> 
            {/* Estos son los parametros que trae cada imagen */}
            <img src={url} alt={title}/> 
            {/* Es el titulo que va abajo */}
            <p>{title}</p>
        </div>
    )
}
