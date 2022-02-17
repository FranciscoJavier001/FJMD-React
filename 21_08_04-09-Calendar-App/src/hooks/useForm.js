// Este es un customHook que se va a encargar de los formularios
import { useState } from "react"

export const useForm = ( initialState = {} ) => { //** I.S. recibe un objeto con propiedades, que lleva un campo del formulario */
    
    const [values, setValues] = useState(initialState); //** Desestructuramos los valores, y lo que escribio el usuario */

    const reset = () => { //** Borramos el formulario, despues de enviarse */
        setValues( initialState ); //** Dejamos los campos vacios */
    }

    const handleInputChange = ({ target }) => { /** handleInputChange me permitirte leer el arreglo, del event voy a extraer el target */

        setValues({
            ...values, //** Para que se muestre */
            [ target.name ]: target.value
        });
    }

    /** Regresa como un arreglo, primer valor es estado del formulario, segundo es handleInputChange para cambiar los valores del formulario */
    return [ values, handleInputChange, reset ]; //** El tercero borra todo */
}