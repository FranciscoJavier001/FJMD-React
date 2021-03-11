import React from 'react'

export const Sidebar = () => {
    return (
        <aside className="journal__sidebar"> {/* El aside indica que esto esta en un costado y le asignamos una clase para ponerla con scss */}
            
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5"> {/* Hicimos una separacion hacia abajo para que no se viera tan arriba */}
                    <i className="far fa-moon"></i>
                    <span> Francisco</span>
                </h3>

                <button className="btn">
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-5x"></i> {/* Con esto creo un calendario, es de font awesome */}
                <p className="mt-5"> {/* Para hacer una separacion del New Entry hacia arriba */}
                    New Entry
                </p>
            </div>
        </aside>
    )
}
