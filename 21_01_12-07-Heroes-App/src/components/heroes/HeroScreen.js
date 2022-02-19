//**_______________________________________________________________________________________________________________________________________________*/
import React, { useMemo } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({ history }) => {

    const { heroeId } = useParams(); //** useParams=Extrae parametros del url, lo obtenemos como params que desestructuramos con heroeId */
    // console.log(params); //** l8 tenia params, pero lo desestructuramos, hacemos esto viendo lo que trae en consola y lo puedo traer */
    
    // const hero = getHeroById( heroeId ); //** Funcion de getHeroById que manda el heroId de params"este manda, funcion de flecha recibe" */
    // console.log(hero); //** Vemos que tenemos toda la info del heroe */

    //** useMemo, memoriza para que no haya cambios en el componente */
    //** En la funcion de flecha que se ejecuta, lo primero es la funcion a llamar l8, y lo segundo lo que se dispara si el heroe es diferente */
    const hero = useMemo(() => getHeroById( heroeId ), [ heroeId ]);
    
    console.log('Hero:', hero, 'HeroId:' , heroeId,); //** Viene info del hero, y lo segundo es heroeId, que viene en data/heroes */
    
    if ( !hero ) { //** Si el heroe no existe voy a mandar el Redirect que viene de react-router-dom y lo redirecciono a la pagina de marvel*/
        return <Redirect to="/" />
    }

    const handleReturn = () => { //** Funcionalidad del boton */

        if ( history.length <= 2 ) { //** Si el historial de navegacion es menor o igual a 2 entonces llevame al /=marvel */
            history.push('/');
        } else {
            history.goBack(); //** Si es mayoro igual a 3, entonces solo llevame un historial hacia atras, pagina dc/marvel */
        }
    }
    
    //** Voy a desestructuras las propiedades del heroe y las voy a extraer en el hero, las tengo en data/heroes, solo las copie */
    const { 
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        //** Cuando le ponemos en mostrar mas, nos pone la imagen del superheroe en una nueva pagina */
        <div className="row mt-5"> {/* row=Que salga en filas(hacia la derecha) - mt-5=Distancia del margen superior */}
            <div className="col-4"> {/* Espacio que ocupa la imagen */}
                <img
                    src={ `../assets/heroes/${ heroeId }.jpg` } //** Path que se va a mostrar */
                    alt={ superhero } //** Lo que se muestra en caso que no se pueda mostrar la imagen */
                    //** img-thumbnail=Solo ocupe espacio asignado */
                    //** animate__animated=Activamos la opcion - animate__fadeInLeft=Desvanece desde la izquierda */
                    className="img-thumbnail animate__animated animate__fadeInLeft" 
                    />
            </div>

            {/* col-8=Espacio donde viene la info - animate__animated=activarlo - animate__fadeIn=Efecto aparicion como desvanecido */}
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{ superhero }</h3> {/* Nombre de superheroe como encabezado */}
                <ul className="list-group list-group-flush"> {/* ui=Lista - list-group=En lista con margen - list-group-flush=Quitar ls tablas */}
                    <li className="list-group-item"> <b> Alter Ego: </b> { alter_ego } </li> {/* list-group-item=Quitar el simbolo de lista */}
                    <li className="list-group-item"> <b> Publisher: </b> { publisher } </li>
                    <li className="list-group-item"> <b> First Appearance: </b> { first_appearance } </li>
                </ul>

                <h5> Characters </h5> {/* Encabezado */}
                <p> { characters } </p> {/*  */}

                <button //** Que esto va a ser un boton */
                className="btn btn-outline-info" //** btn=Boton bootstrap - btn-outline-info=Boton transparente, con margen y azul */
                onClick={handleReturn} //** Accion que manda al hacer click */
                >
                    Return {/* Lo que dice */}
                </button>
            </div>
            
        </div>
    )
}