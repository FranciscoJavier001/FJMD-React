import React from 'react'

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <span className="navbar-brand">
                Juan!!
            </span>

            <button className="btn btn-outline-danger"> {/* La clase btn es de bootstrap, y outline es que tenga linea por fuera y el danger es color rojo */}
            <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>
        </div>
    )
}
