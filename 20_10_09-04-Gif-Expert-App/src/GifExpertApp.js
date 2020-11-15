import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Death Note'])

    //     setcategories(cats => [...cats, 'HunterXHunter']); /** El UseState me dio la habilidad de hacerlo directamente con el setcategories */

    /** Para crear nuevos componentes en React debemos de crear una carpeta en "src" llamada components y ponerle un nombre descriptivo como "AddCategory" y escribimos rafc y ahi escribimos lo que tengamos que escribir y se muestra en el dom, luego agrego el componente  */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories}/>
            <hr/>

            <ol>
                {
                    categories.map(category => ( /** El Map barre el arreglo que ahora se llama category, porque esto es una funcion de flecha que ya inicializamos y podemos mandar llamar cuando necesitemos con el return */
                        <GifGrid 
                        key={category}
                        category={category}
                        />
                        // <li key={category}>{category}</li> /** Muestra el arreglo con cada cosa que esta ahi dentro */
                    ))
                }
            </ol>

        </>
    )
}
