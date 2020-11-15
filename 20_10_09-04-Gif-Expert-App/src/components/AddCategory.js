import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('') /** Estas son las dos funciones que tiene el inputvalue  */

    const handleInputChange = (e) => { 
        setInputValue(e.target.value) /** Esto me permite cambiar el texto */
    }

    const handleSubmit = (e) => { /** Aqui hacemos la peticion para que salga en el DOM  */
        e.preventDefault(); /** Esto evita el refresh de la pagina */

        if(inputValue.trim().length > 2){
            setcategories(cats => [inputValue, ...cats,]);
            setInputValue('');
        }
    }

    return ( /** Aqui directamente ya estamos en el DOM */

        //** Aqui le decimo que va a responder a handleSubmit */
        <form onSubmit={handleSubmit}>  
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange} /** Aqui le doy el valor para cambiarlo */
                />
            </form>

    )
}

AddCategory.prototype = { /** Para que utilicen nuestro componente con el pequeño candado con los argumentos que estoy esperando  */
    setcategories: PropTypes.func.isRequired
}