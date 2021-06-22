// Este es un customHook que se va a encargar de los formularios
import { useState } from "react"

export const useForm = ( initialState = {} ) => { /** useForm que recibe un objeto en el cual el objeto tiene las propiedades qu cada una va a ser un campo de texto o un selector o un campo en el formulario que quiero manipular */
    
    const [values, setValues] = useState(initialState);

    const reset = ( newFormState = initialState ) => { //** Voy a recibir el nuevo estado del formulario y si no es enviado que sea el initialState */
        setValues( newFormState ); //** ASi cuando llame esta funcion puedo establecerle los valores que yo quiera al formulario, esta es la clave */
    }

    const handleInputChange = ({ target }) => { /** El handleInputChange me va a permitir para poderlo leer rapidamente, del event voy a extraer el target */

        setValues({
            ...values, //** Para que se muestre */
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ]; /** Lo regresa como un arreglo, el primer valor es el estado del formulario y el segundo es el handleInputChange para cambiar los valores del formulario */
}