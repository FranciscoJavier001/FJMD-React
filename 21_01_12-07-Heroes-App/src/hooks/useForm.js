//**_______________________________________________________________________________________________________________________________________________*/
// Este es un customHook que se va a encargar de los formularios
import { useState } from 'react'

export const useForm = ( initialState = {} ) => { //** uF es un formulario que recibe un IS esta vacio */
    
    const [values, setValues] = useState(initialState); //** uS recibe el iS y este contiene los values y sV */

    const reset = () => { //** Cuando volvemos a entrar esta vacio el campo de busqueda, porque le pasamos el iS con los sV vacio */
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => { //** hIC recibe el tarjet */

        setValues({ //** sV tiene el operador spred para mostrar los values */
            ...values, //** Para que se muestre */
            [ target.name ]: target.value //** El target.name contiene el target.value */
        });
    }

    return [ values, handleInputChange, reset ]; //** Regresamos los valores, la funcion y el reset */
}