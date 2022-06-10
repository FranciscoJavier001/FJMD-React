//**____________________________________________________________________________________________________________________________________________________________*/
import { useState } from "react"

interface User { //** Son reglas que le puedo poner a un objeto */
    uid: string;
    name: string;
}

export const Usuario = () => { //** FC, que la vamos a meter en el App.tsx */

    //** El estado del uS, lo primero es el estado inicial, y lo segundo es la funcion que modifica el estado inicial, lo tercero es valor inicial */
    const [user, setUser] = useState<User>( 
    )

    const login = () => { //** Es una funcion, que en este caso le asigna variables al setUser que modifica valor inicial */
        setUser({ //** Asi se asigna el valor a un objeto */
            uid: 'ABC123',
            name: 'Frank',
        })
    }
    
    return (
        <div className="mt-5"> {/* Margen superior */}
            <h3>Usuario</h3>

            <button //** Boton que va a tener acciones */
            onClick={ login } //** Al hacer click, se va a llamar la funcion de login */
                className="btn btn-outline-primary"> {/* Son clases del boton */}
                    Login {/* Como le asigno valor al nombre del boton */}
                </button>

                { //** Lo que voy a retornar al DOM */
                    (!user) //** En caso que no tenga un usuario, definido */
                    ? <pre> No Hay Usuario </pre> //** ? = Es una condicional, que si se cumple se muestra esto */
                    : <pre>{ JSON.stringify( user ) }</pre> //** := Si no se cumple se muestra esto */
                }
        </div>
    )
}
