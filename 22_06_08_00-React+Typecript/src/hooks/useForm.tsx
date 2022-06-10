import { useState, ChangeEvent } from 'react';

// export function useForm<T>( initState:T ){ //** Para evitar el error en la linea del useState, la <T> sirve para definirlo como generico */
export const useForm = <T extends Object>( initState: T ) => { //** Es la de arriba, pero lo cambio por esta funcion de flecha, pero con extends */

// export const useForm = ( initState: any ) => { //** Voy a recibir como iS del estado */
// export const useForm = ( initState: any ) => { 

    //** Estado del formulario, actualizacion del formulario, estado inicial */
    const [formulario, setFormulario] = useState(initState); //** Voy a inicializar un objeto que tiene el iS con un estado de tipo any */

    //** Funcion que se llamar cuando cambie input, se recibe un evento que cambia, en el HIE */
    // const handleChange = (ev : ChangeEvent<HTMLInputElement> L14) => { 
        //** De este evento voy a desestructurar el target */
    const handleChange = ( { target } : ChangeEvent<HTMLInputElement> ) => { //** handleChange actualiza el customhooks */
        // console.log(ev.target.name, ev.target.value); //** Lanza un nuevo evento cuando presiono una tecla, y extraemos el name y el valir L12 */
        const { name , value } = target; //** Desestructuracion de target */
        // console.log(target.name, target.value); //** Lanza un nuevo evento cuando presiono una tecla, y extraemos el name y el valir L12 */
        // console.log(`Campos: ${value}`); //** Para ver en consola */

        setFormulario({ //** Para actualizar el formulario */
            ...formulario, //** Copia el estado actual del formulario, pero lo desestructuro */
            [name]: value //** Actualizo el estado del formulario, en este caso el email */
        })
    }

    //** Retorno el objeto con todo lo que necesito del formulario, con la funcion handleChange */
    return {
        formulario,
        handleChange,
        ...formulario //** Para que el formulario tenga todos los campos */
    }
}