import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1>DC Screen</h1>
            <hr />
            {/* Solamente teniamos que mandar un HeroList mandando un publisher correcto, de los dos elementos que teniamos, y este recibe un publisher y lo puedo mandar en duro porque no voy a cambiar este argumento y sera DC Comics, si no le ponemos la expresion de JS lo va a mandar como un String */}

            <HeroList publisher="DC Comics" />
        </div>
    )
}