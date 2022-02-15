//**_______________________________________________________________________________________________________________________________________________*/
//** Otro FC "rafc" */
import React from 'react'
import { HeroList } from '../heroes/HeroList' //** Lo importo para usarlo */

export const MarvelScreen = () => {
    return (
        <div>
            <h1>Marvel Screen</h1>
            <hr />
            
            {/* Implemento el HL components/hero/HeroList, dentro de esta pagina mandando el publisher Marvel para retornar los Heroes de aqui */}
            <HeroList publisher="Marvel Comics" /> {/* Esto estaba en la l6 de components/hero/HeroList aqui pongo que quiero mostrar */}
        </div>
    )
}
