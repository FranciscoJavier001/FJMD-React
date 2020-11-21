import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => { //** Agregamos el AddCategory pero va directamente al setCategories y va a volver a renderizar, y se recibe props; setCategories es un componente que recibe una funcion como argumento */

    const [inputValue, setInputValue] = useState('') /** Estas son las dos funciones que tiene el inputvalue (donde escribimos) y abajo ya quedo declarado  */

    const handleInputChange = (e) => { 
        setInputValue(e.target.value) /** Esto me permite cambiar el texto */
        // console.log('handleInputChange llamado');
    }

    const handleSubmit = (e) => { /** Aqui hacemos la peticion para que salga en el DOM, y que se vea reflejado cuando damos enter  */
        e.preventDefault(); /** Esto evita el refresh de la pagina */
        // console.log('handleSubmit', inputValue);

        if(inputValue.trim().length > 0){ //** Solo si el arreglo es mayor de 2 que empieze a buscar */
            //** Asi le hizimos para que la primera saliera arriba */
            setCategories(cats => [inputValue, ...cats,]); //** El primer callback es el estado anterior y luego regresa un nuevo estado con todos los nuevos arreglos, se llama a esta instruccion para tener acceso al arreglo, porque se esta pasando como argumento */
            setInputValue(''); //** Esto nos limpia la caja de texto */
        }
    }

    return ( /** Aqui directamente ya estamos en el DOM */
        // El Form agrupa todo lo demas, por eso no hace falta el fragment
        //** Aqui le decimo que va a responder a handleSubmit, osea cuando de enter */
        // Pongo este parrafo para asegurarme del cambio del inputValue
        <form onSubmit={handleSubmit}>
            <p>{inputValue}</p>
            <input 
                type="text" //** el type, value y onChange son los props */
                value={inputValue}
                onChange={handleInputChange} /** Aqui le doy el valor para cambiarlo */
                />
            </form>
    )
}

AddCategory.propTypes = { /** Para que utilicen nuestro componente con el pequeño candado con los argumentos que estoy esperando, esta es la peticion de los proptypes  */
    setCategories: PropTypes.func.isRequired
}