//** Iniciamos con rafc porque es un functional component */
import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'

export const HeroList = ( publisher ) => { //** Vamos a recibir el publisher en la funcion de flecha, este lo recibimos de data/heroes.js y publisher es quien publica la historieta, puede ser dc o marvel */

    //** Aqui utilizamos nuestro selector y como no pensamos en mutarlo podemos crear la contante heroes y que sea getHeroesByPublisher y mandamos el publisher y ya tengo la data */

    const heroes = getHeroesByPublisher( publisher );

    return (
        //** Voy a barrer cada uno de los elementos y mostrarlos en pantalla a ver si funciona, voy a cambiar esto por un unorder list, para barrer los heroes.map y parentesis para retornar un objeto y luego voy a colocar un listItem y el key eria igual al heroe.id y dentro del li voy a colocar solo el nombre del heroe.superheroe */
        <ul>
            {
                heroes.map( hero => (
                    <li key={ hero.id }>
                        { hero.superhero }
                    </li>
                ))
            } 
        </ul>
    )
}