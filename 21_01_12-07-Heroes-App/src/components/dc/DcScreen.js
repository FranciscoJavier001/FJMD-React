//**_______________________________________________________________________________________________________________________________________________*/
//** Esto se va a mostrar en el Router - Esto es un Functional Component "rafc" */
import React from 'react'
import { HeroList } from '../heroes/HeroList' //** Lo importo para usarlo */

export const DcScreen = () => {
    return (
        <div>
            <h1>DC Screen</h1>
            <hr />

            {/* Implemento el HL components/hero/HeroList, dentro de esta pagina mandando el publisher DC para retornar los Heroes de aqui */}
            <HeroList publisher="DC Comics" /> {/* Esto estaba en la l6 de components/hero/HeroList aqui pongo que quiero mostrar */}
        </div>
    )
}