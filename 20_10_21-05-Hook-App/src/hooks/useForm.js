import { useState } from "react"


export const useForm = ( initialState = {} ) => { /** useForm que recibe un objeto en el cual el objeto tiene las propiedades qu cada una va a ser un campo de texto o un selector o un campo en el formulario que quiero manipular */
    
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }


    const handleInputChange = ({ target }) => { /** El handleInputChange me va a permitir para poderlo leer rapidamente */

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }

    return [ values, handleInputChange, reset ]; /** Lo regresa como un arreglo, el primer valor es el estado del formulario y el segundo es el handleInputChange para cambiar los valores del formulario */

}
