import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            
            <div 
                className="journal__entry-picture"
                style={{ //** Este tiene que ser un objeto donde especifiquemos toda la informacion del estilo que va a tener este elemento */
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://www.publicdomainpictures.net/pictures/320000/nahled/background-image.png)'
            }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, et?
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
