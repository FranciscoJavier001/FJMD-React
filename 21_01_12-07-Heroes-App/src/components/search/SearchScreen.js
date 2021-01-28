//** Este lo hacemos un FC */
import React from 'react'
import { heroes } from '../../data/heroes'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard'

export const SearchScreen = () => {

    const heroesFiltered = heroes;
    const [ formValues, handleInputChange ] = useForm({
        searchText: '' //** El valor por defecto es un string vacio */
    });

    const { searchText } = formValues; //** Vamos a usar la desestructiracion del searchText */

    const handleSearch = (e) => { //** Tengo que recibir el evento */
        e.preventDefault(); //** Porque es en el formulario */
        console.log(searchText); //** Ya puedo imprimir lo que la persona escribe ahi */
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