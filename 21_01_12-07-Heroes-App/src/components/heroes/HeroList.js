//** Iniciamos con rafc porque es un functional component */
import React from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => { //** Vamos a recibir el publisher en la funcion de flecha, este lo recibimos de data/heroes.js y publisher es quien publica la historieta, puede ser dc o marvel */

    //** Aqui utilizamos nuestro selector y como no pensamos en mutarlo podemos crear la contante heroes y que sea getHeroesByPublisher y mandamos el publisher y ya tengo la data */

    const heroes = getHeroesByPublisher( publisher );

    return (
        //** Voy a barrer cada uno de los elementos y mostrarlos en pantalla a ver si funciona, voy a cambiar esto por un div, para barrer los heroes.map y parentesis para retornar un objeto y luego voy a colocar un HeroCard y el key eria igual al heroe.id y dentro del li voy a colocar solo el nombre del heroe.superheroe */
        // Esto lo vamos a poner ahora como un div y le vamos a poner una clase de bootstrap
        //** No quiere detectar las columnas de bootstrap, hay que analizar que pasa */
        <div className="card-columns"> 
            {
                heroes.map( hero => (
                    <HeroCard key={ hero.id }
                        /* Como no se mostraba la informacion voy a mandar el operador spred para mostrar los datos, para extraer cada una de las propiedades del heroe  */
                        { ...hero }
                        />
                ))
            } 
        </div>
    )
}

//** Excelente dia, descartamos compromisos */