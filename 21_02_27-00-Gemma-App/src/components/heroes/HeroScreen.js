import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    //** Si quiero extraer el HeroScreen hay un customHook que se llama useParams, este hook va a extraer los parametros que vallan por el url y los vamos a obtener como params, si necesitamos el heroeId pues vamos a desestructurar el heroeId */
    const { heroeId } = useParams();
    
    //** Ahora voy a sacar toda la informacion del hero y lo voy a sacar con el getHeroeById que esta en nuestros selectores y mandamos el heroe.Id*/
    //** Aqui tambien voy a utilizar el useMemo para que no haya cambios, si no hay cambios en el componente */
    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]); //** Lo primero es la funcion que vamos a llamar y lo segundo es lo que se va a disparar cada vez que el heroeId sea diferente, y quite esta linea de abajo que es lo mismo, pero aqui con el useMemo "const hero = getHeroById( heroeId );" */
    // console.log('Hero: ' , hero, 'HeroId: ' , heroeId,); //** Lo removi para que no estuiera muy cargada de console.log las pruebas */
    
    //** Si el heroe no existe voy a mandar el Redirect que viene de react-router-dom y lo redirecciono a la pagina de marvel*/
    if ( !hero ) {
        return <Redirect to="/" />
    }

    //** Asi creamos funcionabilidades de los botones */
    const handleReturn = () => { //** No se recibe ningun argumento y este va a ser la funcion del boton */

        //** Asi revisamos el length para hacer una validacion, por lo que entiendo, el push solo me regresa un escalon, pero solo funciona si es mayor a 2 el historial y si es menor, entonces directamente me lleva al inicio, wey en las herramientas de desarrollo estan estas son desde el push, goback, goforward y demas */
        //** Si el history.length es menor o igual a 2 entonces quiero regresarme a la pagina principal de la aplicacion que seria el history.push y quiero que navege a la pagina de marvel, en caso contrario solo que navege atras */
        if ( history.length <=2 ) {
            history.push('/');
        } else {
            history.goBack();
        }
    }
    
    //** Voy a desestructuras las propiedades del heroe y las voy a extraer en el hero */
    const { 
        superhero,
        alter_ego,
        first_appearance,
        characters,
        tiempo,
    } = hero;

    return (
        //** Cuando le ponemos en mostrar mas, nos pone la imagen del superheroe en una nueva pagina */
        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={ `../assets/heroes/${ heroeId }.jpeg` }
                    alt={ superhero } //** Lo que se muestra en caso que no se pueda mostrar la imagen */
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    />
            </div>

{/* Wey, esto ya es lo que esta dentro de las tarjetas, cuando le damos en mas */}
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Producto: </b> { alter_ego } </li>
                    <li className="list-group-item"> <b> Tiempo: </b> { tiempo } </li>
                    <li className="list-group-item"> <b> Precio: </b> { first_appearance } </li>
                    <li className="list-group-item"><h5> Descripcion: </h5> { characters }</li>
                </ul>


                <button 
                className="btn btn-outline-info btn-group-justified mr-2"
                onClick={handleReturn}
                >
                    Regresar
                </button>


                <button
                className="btn btn-primary btn-group-justified mr-2 active"
                >
                    Reserva
                </button>

                {/* <button
                className="btn btn-danger btn-group-justified mr-2 disabled "
                >
                    Agotado
                </button> */}
            </div>
        </div>
    )
}
