import { db } from "../firebase/firebase-config";

//** Voy a exportar un nuevo componente */
export const startNewNote = () => { //** Esta es una tarea asyncrona, asi que voy a poner el return con un callback que va a ocupar el dispatch, y lo voy a llamar en el dispatch del Sidebar.js en el handleAddNew */
    return async( dispatch, getState ) => { //** Aqui voy a poner el segundo argumento, despues del dispatch que vamos a llamar getState (pero ese segundo argumento es una funcion para obtener el state similar al useSelector) */
        //** Para grabar en Firestore voy a oupar otras cosas como el ID del usuario */
        const uid = getState().auth.uid //** Este es todo el State */
        console.log( uid );

        //** Ahora voy a crear la nueva nota que quiero guardar */
        const newNote = {
            title: '', //** Este lo voy a inicializar vacio */
            body: '',
            date: new Date().getTime() //** Este me va a dar el tiempo exacto cuando la nota fue creada, es un objeto de JS, y lo voy a mandar a un path de Firestore para guardarlo */
        }

        //** Para hacer lo del getTime, debo de conseguir la referencia a la base de datos, esta ya la tengo en firebase & firebase-config.js */
        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote ) //** Voy a hacer la referencia al documento y esto viene de db que lo explique arriba, esto lo voy a poner en la coleccion donde quiero guardar esto, voy a ocupar el uid del usuario , luego el journal que va a ser donde lo estoy guardando, luego notes, porque quiero que ahi este y ahi ya puedo hacer el .add y ahi mando el newNote, el add regresa una promesa que retorna el document.reference y como esto es una promesa en el return del startNewNote lo voy a convertir a async y aqui hacer el await, osea espera que se haga la insercion y el doc va a dar referencia al documento */

        console.log(doc);
    }
}