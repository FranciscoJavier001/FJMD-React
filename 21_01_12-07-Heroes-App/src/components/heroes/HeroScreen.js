import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    //** Si quiero extraer el HeroScreen hay un customHook que se llama useParams, este hook va a extraer los parametros que vallan por el url y los vamos a obtener como params, si necesitamos el heroeId pues vamos a desestructurar el heroeId */
    const { heroeId } = useParams();
    
    //** Ahora voy a sacar toda la informacion del hero y lo voy a sacar con el getHeroeById que esta en nuestros selectores y mandamos el heroe.Id*/
    //** Aqui tambien voy a utilizar el useMemo para que no haya cambios, si no hay cambios en el componente */
    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]); //** Lo primero es la funcion que vamos a llamar y lo segundo es lo que se va a disparar cada vez que el heroeId sea diferente, y quite esta linea de abajo que es lo mismo, pero aqui con el useMemo "const hero = getHeroById( heroeId );" */
    
    //** Si el heroe no existe voy a mandar el Redirect que viene de react-router-dom y lo redirecciono a la pagina de marvel*/
    if ( !hero ) {
        return <Redirect to="/" />
    }

    //** Asi creamos funcionabilidades de los botones */
    const handleReturn = () => { //** No se recibe ningun argumento y este va a ser la funcion del boton */

        //** Asi revisamos el length para hacer una validacion*/
        if ( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
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
        //** Cuando le ponemos en mostrar mas, nos pone la imagen del superheroe en una nueva pagina */
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ `../assets/heroes/${ heroeId }.jpg` }
                    alt={ superhero } //** Lo que se muestra en caso que no se pueda mostrar la imagen */
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter Ego: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First Appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5>
                <p> { characters } </p>

                <button 
                className="btn btn-outline-info"
                onClick={handleReturn}
                >
                    Return
                </button>

            </div>
        </div>
    )
}
