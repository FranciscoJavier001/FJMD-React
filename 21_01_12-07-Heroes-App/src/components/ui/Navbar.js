import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'

export const Navbar = () => {

    //** 1. Para esta tarea voy a necesitar acceso al context, en el contextValue voy a ponerle el AuthContext y en el context voy a extraer el user, y en el user voy a extraer el name del objeto */
    const { user:{ name } } = useContext( AuthContext );
    // console.log(name);

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    
                    {/* Aqui voy a crear un parrafo que me diga un nombre */}
                    {/* Otra tarea, que extraigamos el context con el nombre y lo mostremos aqui, esto lo vamos a tener que reemplazar */}
                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}