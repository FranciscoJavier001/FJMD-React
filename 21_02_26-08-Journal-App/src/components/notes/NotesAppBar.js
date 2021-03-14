import React from 'react'

export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <span>14 de Marzo del 2021</span>

            <div>
                <button className="btn"> {/* En bootstrap implementamos un boton */}
                    Picture
                </button>

                <button className="btn"> {/* En bootstrap implementamos un boton */}
                    Save
                </button>
            </div>
        </div>
    )
}
