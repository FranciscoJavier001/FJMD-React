//** Este lo hacemos un FC */
import React, { useMemo } from 'react';
import queryString from 'query-string'; //** Aqui voy a buscar el queryString */

import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }) => { //** Hisory va a estar adentro de un push */

    //** Este es un hook para obtener la location facilmente */
    const location = useLocation();
    // console.log(location.search); //** Pasemos este objeto a lo que nos dice el queryString */
    // console.log(queryString.parse( location.search )); //** Este lo voy a desestructurar por solo lo que ne interesa */
    //** Asi queda */
    const { q = '' } = queryString.parse( location.search ); //** Solamente me interesa el "q" del query */
    // console.log(q); //** Esto era para ver el query en la consola */

    const [ formValues, handleInputChange ] = useForm({
        searchText: q //** Voy a pasar la "q" como un string vacio y se lo voy a establecer al valor inicial del formulario */
    });
    
    const { searchText } = formValues; //** Vamos a usar la desestructiracion del searchText */
    
    const heroesFiltered = useMemo(() => getHeroesByName( q ), [q]) //** Usamos el useMemo para memorizar lo que tengamos en la pagina */
    // const heroesFiltered = getHeroesByName( searchText ); //** Aqui ya tengo la informacion necesaria para procesarlo, lo del query, antes estaba los heroes, pero ahora vamos a cambialo por el filtro de "getHeroesByName" y mando el searchText, vamos a optimizarla con la que tenemos arriba, esto fue lo que mando en function "getHeroesByName( searchText )" y la dependencia que vamos a mandar va a ser el query "[q]", y actualizamos con los q en la function para que se dispare cuando el query cambie */

    const handleSearch = (e) => { //** Tengo que recibir el evento */
        e.preventDefault(); //** Porque es en el formulario, y este sirve para que no se recarge */
        // console.log(searchText); //** Ya puedo imprimir lo que la persona escribe ahi */
        history.push(`?q=${ searchText }`); //** Aqui en la URL ya cambio lo que se busco, osea ya salio lo que tenemos entre vacticks */
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4> Search Form </h4>
                    <hr />

                    {/* Aqui en el form mandamos la referencia */}
                    <form onSubmit={ handleSearch }>
                        <input
                            type="text"
                            placeholder="Find your Hero"
                            className="form-control"
                            name="searchText" //** Este es obligatorio para que funcione el useForm */
                            autoComplete="off"
                            value={ searchText }
                            onChange={ handleInputChange } //** Voy a mandar la funcion que ya tengo definida en el useForm */
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>

                    </form>
                </div>

                <div className="col-7">
                    <h4> Result </h4>
                    <hr />

                    {/* Aqui vamos a poner que si es un string vacio la persona no ha buscado nada */}
                    {
                        (q === '') 
                        && 
                        <div className="alert alert-info">
                            Search a Hero
                        </div>
                    }

                    {/* Ahora pongo si el query es diferente a un string vacio y el espacio de los heroes filtrados es igual a 0 entonces voy a poner que no hay ningun heroe con la info del query que estamos buscando, asi ya tenemos controlada la excepcion */}
                    {
                        (q !== '' && heroesFiltered.length === 0) //** Aqui tenia una falla, que solo mostraba como si no se hibiera encontrado el Heroe, pero era porque faltaba otra variable condicional */
                        && 
                        <div className="alert alert-danger">
                            There is not a hero with "{ q }"
                        </div>
                    }

                    {
                        heroesFiltered.map(hero => (
                            <HeroCard 
                                key={ hero.id }
                                { ...hero } //** Asi mandamos todas las propiedades del heroe */
                            />
                        ))
                    }

                </div>
            </div>
        </div>
    )
}