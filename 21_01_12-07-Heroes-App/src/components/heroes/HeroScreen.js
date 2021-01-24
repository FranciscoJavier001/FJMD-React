import React from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {

    //** Si quiero extraer el HeroScreen hay un customHook que se llama useParams, este hook va a extraer los parametros que vallan por el url y los vamos a obtener como params, si necesitamos el heroeId pues vamos a desestructurar el heroeId */
    const { heroeId } = useParams();
    
    //** Ahora voy a sacar toda la informacion del hero y lo voy a sacar con el getHeroeById que esta en nuestros selectores y mandamos el heroe.Id*/
    const hero = getHeroById( heroeId );
    
    //** Si el heroe no existe voy a mandar el Redirect que viene de react-router-dom y lo redirecciono a la pagina de marvel*/
    if ( !hero ) {
        return <Redirect to="/" />
    }
    
    //** Voy a desestructuras las propiedades del heroe y las voy a extraer en el hero */
    const { 
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div>
            <h1>HeroScreen</h1>
        </div>
    )
}
