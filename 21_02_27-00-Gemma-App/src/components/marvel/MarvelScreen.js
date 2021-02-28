import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Servicios</h1>
            <hr />
            
            <HeroList publisher="servicio"  />
        </div>
    )
}
