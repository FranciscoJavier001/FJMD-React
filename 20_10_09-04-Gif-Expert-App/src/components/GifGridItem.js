import React from 'react'
import PropTypes from 'prop-types' //** impt iimporta los PropTypes */

export const GifGridItem = ({title, url}) => { //** Estos son los parametros que se reciben en el map del GifGrid.js */

    return ( //** Es lo que retorna el arreglo de GifGridItem */
        // Estos son los estilos de bootstrap, y aqui vemos que solo se hace el llamado de los parametros dichos en el getGifs.js
        // Como lo vez aqui el div con el className se nos puso a modo de bootstrap, le ponemos el nombre, que en este caso es card y luego la animamos como queramos
        <div className="card animate__animated animate__fadeIn"> 
            {/* Estos son los parametros que trae cada imagen */}
            <img src={url} alt={title}/> 
            {/* Es el titulo que va abajo */}
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = { //** Aqui los pusimos como requeridos, por eso en el test ya creamos una constante para esto */
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

 /** 
  * 1. Enzyme = Se hace la configuracion en el setupTests.js en terminal ponerle en la carpeta del proyecto "npm i --save-dev enzyme enzyme-adapter-react-16", luego agregarle la configuracion al setupTest que importa Enzyme, el Adapter y el Enzyme.configure({})
  * 2. Enzyme to Json = Se configura en terminal con "npm install --save-dev enzyme-to-json", luego copiamos el import {createSerializer}, y el expect.addSnapshotSerializer en el setupTest
  * 3. Debe de mostrar el componente correctamente = Se crea una nueva carpeta llamada tests>components (porque asi se llama a donde vamos a aplicar las pruebas)> y ahi meter las pruebas
  * shallow = genera algo que se llama wrapper .- "shallow = simulaciones"
  * wrapper " -."me deja hacer simulaciones de que es lo que se va a hacer"-
  * wrapper.toMatchSnapshot = debe de hacer match con el toMatchSnapshot()
 */