import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">

            <NotesAppBar /> {/* Igual no va a recibir ningun argumento */}

            <div className="notes__content"> {/* Este va a ser el agrupador de mi formulario */}

                <input
                    type="text"
                    placeholder="Some Awesome Title"
                    className="notes__title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What Happend Today"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img
                        src="https://image.freepik.com/foto-gratis/silueta-mujer-joven-meditando-practicando-yoga-playa-al-atardecer_35708-291.jpg"
                        alt="siluet"
                    />
                </div>

            </div>
            
        </div>
    )
}
