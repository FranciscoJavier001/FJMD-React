//**_______________________________________________________________________________________________________________________________________________*/
import React, { useMemo } from 'react';
import queryString from 'query-string'; //** Aqui voy a buscar el queryString - "npm install query-string" */

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => { //** Recibe el history, l31, se muestra en el URL */
    
    const location = useLocation(); //** Obtengo la localizacion */
    // console.log(location.search); //** Pasemos este objeto a lo que nos dice el queryString */
    // console.log(queryString.parse( location.search )); //** Con esto solo voy a trabajar con q(queryString)  */
    const { q = '' } = queryString.parse( location.search ); //** Voy a desestructurar y voy a tomar el "q", y si esta vacio que no marque nada */
    // console.log(q); //** Esto era para ver el query en la consola */

    const [ formValues, handleInputChange ] = useForm({ //** Recibe los valores del formulario y la funcion que tiene es la hIC */
        searchText: q //** el "q" lo voy a pasar como valor al sT y lo voy a establecer como valor al formulario */
    });
    
    const { searchText } = formValues; //** Voy a usar la desestructuracion para obetener el searchText */
    
    //** Usamos el useMemo para memorizar lo que tengamos en la pagina */
    //** Para que solo se actualize la busqueda cuando cambie el query del URLy si recargo el URL todo ahi se quede guardado */
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]) //** hf tiene el uM y recibe gHBN con la dependencia q y actualiza si cambia q */
    // const heroesFiltered = getHeroesByName( searchText ); //** hF recibe el gHBN con la dependencia q, pero se actualiza cuando cambie el query */

    const handleSearch = (e) => { //** Funcion que recibe el evento */
        e.preventDefault(); //** Para que no se recarge el formulario, osea que no se elimina la busqueda */
        // console.log(searchText); //** Veo lo que el usuario busco */
        history.push(`?q=${ searchText }`); //** Se modifica la URL para mostrar el Hero que voy a buscar - push da nueva path */
    }

    return (
        <div>
            <h1 className='text-center'>Search Screen</h1> {/* Encabezado */}
            <hr /> {/* Linea */}

            <div className="row"> {/* Nueva Fila */}
                <div className="col-5 text-center"> {/* Lo que mide de anchura */}
                    <h4> Formulario de Busqueda </h4> {/* Otro Encabezado */}
                    <hr /> {/* Otra linea */}

                    {/* Aqui en el form mandamos la referencia */}
                    <form onSubmit={ handleSearch }> {/* Vamos a hacerlo un boton y esta accion se dispara al hacer click */}
                        <input //** Lo que contiene la caja de texto */
                            type="text" //** Tiene es el Heroe */
                            placeholder="Escribe un SuperHeroe" //** Lo que voy a mostrar dentro del input */
                            className="form-control text-center" //** El nombre, y esta es una clase de bootstrap, t-c=Centramos el contenido */
                            name="searchText" //** Si no lo tengo no puedo escribir, obligatorio en el useForm */
                            autoComplete="off" //** Para que no maneje un historial de busqueda en el input */
                            value={ searchText } //** Es el valor que va a recibir el searchText l19 y l22 */
                            onChange={ handleInputChange } //** Funcion definida en useForm */
                        />
                        <button //** Para diseñar un boton */
                            type="submit" //** Para poderle hacer click */
                            //** btn=Boton bootstrap, mt-1=Margen Superior, btn-block=Ocupe todo el espacio, b-o-p=Boton con linea azul por fuera */
                            className="btn mt-1 btn-block btn-outline-primary"
                        >
                            Buscar... {/* Lo que dice el boton */}
                        </button>

                    </form>
                </div>

                <div className='col-1'></div>

                <div className="col-6"> {/* col-6=Espacio donde esta el resultado */}
                    <h4 className='text-center'> Resultado </h4> {/* Lo que dice */}
                    <hr /> {/* La linea de abajo */}

                    {/* Aqui vamos a poner que si es un string vacio la persona no ha buscado nada */}
                    {
                        (q === '') //** Si el query esta vacio no se busca nada y asi controlamos la excepcion */
                        && 
                        <div className="alert alert-info text-center">
                            Resultado del SuperHeroe
                        </div>
                    }

                    {
                        (q !== '' && heroesFiltered.length === 0) //** Si el query es diferente a nada y hFL es 0 entonces muestra esto */
                        && 
                        <div className="alert alert-danger text-center"> {/* alert=mensaje a-d=Barra roja, t-c=mensaje al centro */}
                            No Existe un SuperHeroe con el Nombre <br/>"{ q }" {/* Mostramos este mensaje */}
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => ( //** Vamos a crear un nuevo arreglo con el Map llamado hero */
                            <HeroCard //** Voy a retornar un nuevo objeto que va a ser HeroCard */
                                key={ hero.id } //** La llave va a ser siempre el id, o el que no se puede copear */
                                { ...hero } //** Para que se nos muestren las propiedades del hero */
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}