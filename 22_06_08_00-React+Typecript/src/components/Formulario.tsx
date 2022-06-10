import { ChangeEvent, useState } from 'react';
import { useForm } from '../hooks/useForm';

interface FormData { //** Voy a darle una interface, para definir los parametros del formulario y se los paso al useForm L13 */
    nombre: string;
    email: string;
    edad: number
}

export const Formulario = () => { //** rafc */

    //** Creo una constante, desestructuro un objeto (retornandolo) y mando llamar el customHook */
    // const { formulario, handleChange} = useForm<FormData> ({ //** Desestructuro lo que viene en el formulario y funcion y dentro llamo el mismo objeto */
    // const { formulario, handleChange} = useForm ({ //** Desestructuro lo que viene en el formulario y funcion y dentro llamo el mismo objeto */
        const { nombre, email, edad, handleChange, formulario } = useForm<FormData>({ //** Es el de arriba, pero lo asi tambien lo puedo hacer */
        email: '<tu-email>@mail.com', //** Le puedo pasar parametros con el value en el formulario */
        nombre: '<tu-nombre>',
        edad: 18  //** Le voy a pasar este parametro que es un numero, lo voy a mostrar */
    })

    //** Asi desestructuramos informacion */
    // const { email, nombre, edad } = formulario; //** Desestructuracion del formulario, con el T puedo evitar lo del tipado en useForm */

    // //** Estado del formulario, actualizacion del formulario, estado inicial */
    // const [formulario, setFormulario] = useState({ //** Voy a inicializar un objeto vacio con lo que tiene mi formulario */
    //     email: '',
    //     nombre: ''
    // });

    // //** Funcion que se llamar cuando cambie input, se recibe un evento que cambia, en el HIE */
    // // const handleChange = (ev : ChangeEvent<HTMLInputElement> L14) => { 
    //     //** De este evento voy a desestructurar el target */
    // const handleChange = ( { target } : ChangeEvent<HTMLInputElement> ) => { 
    //     // console.log(ev.target.name, ev.target.value); //** Lanza un nuevo evento cuando presiono una tecla, y extraemos el name y el valir L12 */
    //     const { name , value } = target; //** Desestructuracion de target */
    //     // console.log(target.name, target.value); //** Lanza un nuevo evento cuando presiono una tecla, y extraemos el name y el valir L12 */
    //     // console.log(`Campos: ${value}`); //** Para ver en consola */

    //     setFormulario({ //** Para actualizar el formulario */
    //         ...formulario, //** Copia el estado actual del formulario, pero lo desestructuro */
    //         [name]: value //** Actualizo el estado del formulario, en este caso el email */
    //     })
    // }
    
  return (
    <form autoComplete="off"> {/* Va a ser un formulario, y que no se autocomplete */}
        <div className="mb-3">
            <label className="form-label">Email:</label> {/* Solo es una etiqueta */}
            <input type="email" //** Tipo email, para que pida ponerle correo */
            className="form-control" /* Es el espacio donde se escribe, pero ampliado */
            name="email" /* name es para el uso del formulario, para el uso de su referencia */
            value={ email } //** Asi le estasblezco un valor al formulario desde el inicio */
            onChange={ handleChange } /* Cuando cambie el input mando a llamar a la funcion handleChange */
            />
        </div>

        <div className="mb-3">
            <label className="form-label">Nombre:</label>
            <input type="text" //** Tipo texto para poderle meter texto */
            className="form-control"
            name="nombre"
            value={ nombre }
            onChange={ handleChange } 
            />
            </div>

        <div className="mb-3">
            <label className="form-label">Edad:</label>
            <input type="number" //** Tipo texto para poderle meter texto */
            className="form-control"
            name="edad"
            value={ edad }
            onChange={ handleChange } 
            />
            

            <pre>{ JSON.stringify(formulario) }</pre> {/* Para mostrar el objeto del formulario directamente como un JSON */}
        </div>
    </form>
  )
}
