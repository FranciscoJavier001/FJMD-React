// Este es un customHook que se va a encargar de los formularios
import { useState } from "react"

export const useForm = ( initialState = {} ) => { /** useForm que recibe un objeto en el cual el objeto tiene las propiedades qu cada una va a ser un campo de texto o un selector o un campo en el formulario que quiero manipular */
    
    const [values, setValues] = useState(initialState);

    // const reset = () => { //** Con esto borramos los formularios, es decir el input donde se escribe texto */
    //     setValues( initialState );
    // }

    const handleInputChange = ({ target }) => { /** El handleInputChange me va a permitir para poderlo leer rapidamente, del event voy a extraer el target */

        setValues({
            ...values, //** Para que se muestre */
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange ]; /** Lo regresa como un arreglo, el primer valor es el estado del formulario y el segundo es el handleInputChange para cambiar los valores del formulario */
}