import Swal from 'sweetalert2'

import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from '../types/types'

// react-journal

//** Voy a exportar un nuevo componente */
export const startNewNote = () => { //** Esta es una tarea asyncrona, asi que voy a poner el return con un callback que va a ocupar el dispatch, y lo voy a llamar en el dispatch del Sidebar.js en el handleAddNew */
    return async( dispatch, getState ) => { //** Aqui voy a poner el segundo argumento, despues del dispatch que vamos a llamar getState (pero ese segundo argumento es una funcion para obtener el state similar al useSelector) */
        //** Para grabar en Firestore voy a oupar otras cosas como el ID del usuario */
        const { uid } = getState().auth //** Este es todo el State */
        // console.log( uid );

        //** Ahora voy a crear la nueva nota que quiero guardar */
        const newNote = {
            title: '', //** Este lo voy a inicializar vacio */
            body: '',
            date: new Date().getTime() //** Este me va a dar el tiempo exacto cuando la nota fue creada, es un objeto de JS, y lo voy a mandar a un path de Firestore para guardarlo */
        }

        //** Para hacer lo del getTime, debo de conseguir la referencia a la base de datos, esta ya la tengo en firebase & firebase-config.js */
        const doc = await db.collection(`${ uid }/journal/notes`).add( newNote ) //** Voy a hacer la referencia al documento y esto viene de db que lo explique arriba, esto lo voy a poner en la coleccion donde quiero guardar esto, voy a ocupar el uid del usuario , luego el journal que va a ser donde lo estoy guardando, luego notes, porque quiero que ahi este y ahi ya puedo hacer el .add y ahi mando el newNote, el add regresa una promesa que retorna el document.reference y como esto es una promesa en el return del startNewNote lo voy a convertir a async y aqui hacer el await, osea espera que se haga la insercion y el doc va a dar referencia al documento */

        //** Aqui voy a mandar llamar la accion que defini abajo */
        dispatch( activeNote( doc.id, newNote ) ) //** Esta pide el id de la nota y este lo tengo en el doc.id, y luego viene la nota que seria el newNote que lo acabo de crear */
    }
}

//** Lo ultimo despues de todo lo que hemos echo es manejar esta accion el noteReducer */
//** Voy a crear una nueva accion que sea syncrona porque ya voy a tener la informacion voy a mandar algo al reducer  */
export const activeNote = ( id, note ) => ({ //** Este va a recibir el id y la nota */
    //** Este objeto va a tener los types */
    type: types.notesActive,
    payload: {
        id,
        ...note //** Que cuando utilizamos un operador spred, se va a colocar todo lo demas que haya */
    }
})

//** Voy a crear una nueva accion para */
export const startLoadingNotes = ( uid ) => { //** Funcion que recibe el uid del usuario */
    return async( dispatch ) => { //** Esta accion va disparar otra accion que va a ser asyncrona, que recibe el dispatch */
         //** Aqui voy a disparar el loadNotes, esta funcion va a regresar las notas y esta funcion va a hacer el dispatch de la accion y voy necesitar almacenar esto en el store */
         const notes = await loadNotes( uid )
         //** Como no estoy viendo las notas voy a asegurarme de haberlo llamado con el dispatch, voy a llamar el setNotes y luego voy a llamar a las notas y asi quedan almacenadas en el store */
         dispatch( setNotes( notes ) )
    }
}

//** Como voy a guardar las notas en el store voy a guardar esto, con esto estoy creando siempre un nuevo arreglo */
export const setNotes = ( notes ) => ({ //** Aqui voy a recibir las notas */
    type: types.notesLoad, //** el type que va a tener esto , va a ser de notesLoad y el paylod va a ser todas las notas que este recibiendo como argumento */
    payload: notes
})

export const startSaveNote = ( note ) => { //** Debe recibir la nota */
    return async ( dispatch, getState  ) => { //** Como esta es una tarea asincrona (promesa), debo trabajar con el middlewherethoung y crearme un nuevo callback que se va a disparar y me va a disponer del dispatch y tambien el getState-lo voy a utilizar porque necesito el getState del usuario */

        const { uid } = getState().auth //** Este es todo el State */

        //** Cuabdo quiero guardar, manda undefine y eso me da un error, esta es la solucion */
        if ( !note.url ) { //** Si no viene el url, entonces voy a borrar el url */
            delete note.url
        }

        //** Voy a crearme una constante que se llame noteToFirestore que es lo que quiero grabar y voy a utilizar el operador spred para separar toda la nota, y con la propiedad delete voy a eliminar el id */
        const noteToFirestore = { ...note }
        delete noteToFirestore.id

        //** El await nos dice, espera a que la base de datos nos mande el path(ruta) completa a donde esta la base de datos a actualizar */
        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFirestore ) //** Asi hacemos la grabacion */

        //** Necesito hacer el dispatch del refreshNote que defini abajo */
        dispatch( refreshNote( note.id, noteToFirestore ))
        Swal.fire('Saved', note.title, 'success') //** Esto es de SweetAlerts */
    }
}

//** Voy a crear una nueva funcion que actualize unicamente del store, pero debe ser sincrona porque toda la informacion la tengo local y no ocupo retornar otra cosa */
export const refreshNote = (id, note) => ({ //** Esta si va a necesitar el id de la nota y la nota, como voy a retornar un objeto pongo los parentesis antes de terminar */
    type: types.notesUpdated,
    payload: {
        id, 
        note: {
            id,
            ...note
        }
    }
})

//** Esta va a ser una accion en caso que si suba un archivo y va a ser una tarea asincrona */
export const startUploading = ( file ) => { //** Si voy a necesitar un archivo */
    return async ( dispatch, getState ) => { //** Osea que va a ser un thong, porque si nos va a regresar algo, osea que tendriamos acceso al dispatch que lo vamos a utilizar para actualizar la nota actual y tambien voy a utilizar el getState para saber la nota actual */
        const { active:activeNote } = getState().notes //** Hacemos una referencia a la nota activa que va a ser igual al getState que nos va a dar el acceso a las notas para ver si estan activas, despues lo reducimos y le pusimos el nombre de activeNote */
        //** Voy a crearme un helper que me ayude con la subida del archivo que se va a llamar fileUpload.js */
        const fileUrl = await fileUpload( file ) //** Voy a hacer una const fileUrl del await, pero a esta funcion le ponemos un async-en-el-return del fileUpload de nuestros helpers y que pida el file que ya lo tengo */
        console.log(fileUrl);
    }
}