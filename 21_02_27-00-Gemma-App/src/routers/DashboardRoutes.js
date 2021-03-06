//** Este es otro funtional component, pero con un switch */
import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'

import { MarvelScreen } from '../components/marvel/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreen } from '../components/dc/DcScreen'
import { SearchScreen } from '../components/search/SearchScreen'

export const DashboardRoutes = () => { //** Vamos a imprimir las props, para ver la ruta, entonces aqui extraemos el history  */

    // console.log(props);
    
    return (
        <>
        {/* El Navbar es un simple componente que esta ahi, no tiene acceso a las props o en este caso al history, porque no es una ruta, es simplemente un componente que es utilizado dentro de una ruta, por consecuencia aqui no tengo acceso al history, entonces el history que lo extraimos arriba se lo vamos a mandar al Navbar */}
            <Navbar />

            {/* El container es una division de un contenedor */}
            <div className="container mt-2"> 
                <Switch>
                    {/* Aqui tenemos cual queremos renderizar segun la condicion y si no tiene pues nos manda al redirect */}
                    {/* Ahora vamos a definir las rutas en el DashboardRoutes */}
                    {/* En esta ruta el componente que voy a mostrar va a ser el MarvelScreen */}
                    <Route exact path="/marvel" component={ MarvelScreen } />
                    {/* Este componente va a recibir algo por el url y asi se especifica */}
                    <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                    {/* Este es el de DC y no recibe ningun argumento */}
                    <Route exact path="/dc" component={ DcScreen } />
                    {/* Esta es la ruta de busquedas */}
                    <Route exact path="/search" component={ SearchScreen } />


                    {/* Si no viene nada, entonces va a redirecionar automaticamente a marvel */}
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}