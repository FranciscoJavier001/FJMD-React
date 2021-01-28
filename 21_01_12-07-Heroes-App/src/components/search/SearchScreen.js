//** Este lo hacemos un FC */
import React from 'react';
import queryString from 'query-string'; //** Aqui voy a buscar el queryString */

import { heroes } from '../../data/heroes';
import { HeroCard } from '../heroes/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';

export const SearchScreen = ({ history }) => { //** Hisory va a estar adentro de un push */

    //** Este es un hook para obtener la location facilmente */
    const location = useLocation();
    // console.log(location.search); //** Pasemos este objeto a lo que nos dice el queryString */
    // console.log(queryString.parse( location.search )); //** Este lo voy a desestructurar por solo lo que ne interesa */
    //** Asi queda */
    const { q = '' } = queryString.parse( location.search ); //** Solamente me interesa el "q" del query */
    console.log(q);

    const heroesFiltered = heroes;
    const [ formValues, handleInputChange ] = useForm({
        searchText: q //** Voy a pasar la "q" como un string vacio y se lo voy a establecer al valor inicial del formulario */
    });

    const { searchText } = formValues; //** Vamos a usar la desestructiracion del searchText */

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