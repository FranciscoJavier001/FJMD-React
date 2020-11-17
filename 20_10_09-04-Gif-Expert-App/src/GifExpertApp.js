import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Death Note']) //** Se crea una constante donde vamos a agregar cosas, recuerda este es un hook, setCategories es la instruccion para agregar categorias */

    //setCategories(cats => [...cats, 'HunterXHunter']); /** El UseState me dio la habilidad de hacerlo directamente con el setCategories */

    /** Para crear nuevos componentes en React debemos de crear una carpeta en "src" llamada components y ponerle un nombre descriptivo como "AddCategory" y escribimos rafc y ahi escribimos lo que tengamos que escribir y se muestra en el dom, luego agrego el componente  */

    return ( 
        <>
        {/* Esta es la tarea que dejo */}
            <h2>GifExpertApp</h2> 
            {/* Siempre asegurate que se importe, este ya se importo arriba */}
            {/* setCategories es la instruccion para agregar categorias */}
            {/* Podemos pasarle caegorias por aqui, es decir, le pasamos la referencia a setCategories */}
            <AddCategory setCategories={setCategories}/>
            <hr/>

            {/* Una lista ordenada */}
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
