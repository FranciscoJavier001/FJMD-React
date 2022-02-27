//**_______________________________________________________________________________________________________________________________________________*/
//** FC con Switch */
import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'

import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => { //** Exportamos este FC que son las rutas de la App - No hay que compartir info a traves de las props */

    // console.log(props);
    
    //** Esto lo mostramos cuando el usuario ya esta autentificado */
    return (
        <> {/* Es un fragment, sirve para colocar mas cosas - Navbar=Componente dentro de una ruta */}
            <Navbar /> {/* Mostramos en Navbar al acceder al login, no es una ruta es un componente que aqui esta - No tiene acceso history */}

            {/* El container es una division de un contenedor */}
            <div className="container mt-2"> {/* container=Que este todo en un contenedor centrado - mt-2=Margen superior */}
                <Switch> {/* Va a cambiar segun el caso */}
                    <Route exact path="/marvel" component={ MarvelScreen } /> {/* Ruta exacta y el componente a renderizar */}
                    {/* Seleccionando a un heroe, sale una pantalla individual, cambia el URL y se renderiza HeroScreen, "nombre del heroe" */}
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } /> {/* Ruta del info del Heroe, components/heroes/HeroCard l35 */}
                    <Route exact path="/dc" component={ DcScreen } /> {/* Ruta exacta y el componente a renderizar */}
                    <Route exact path="/search" component={ SearchScreen } /> {/* Ruta de busqueda y lo que renderizamos */}

                    <Redirect to="/marvel" /> {/* Por default nos manda a marvel */}
                </Switch>
            </div>
        </>
    )
}