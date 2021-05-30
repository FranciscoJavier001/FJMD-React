import { db } from "../firebase/firebase-config"

//** Voy a crear una funcion, cuando tengo el uid es cuando necesito traerlo */
export const loadNotes = async ( uid ) => { //** Voy a necesitar el uid del usuario para cargar dichas notas, al final hice esta funcion asyncrona, asi al final espero el await */
    //** Tambien voy a necesitar la referencia a la base de datos y para obtener la informacion usamos el .get, esto es una promesa que ya me resuleve la coleccion y el resultado lo voy a guardar en una constante llamada notesSnap */
    const notesSnap = await db.collection(`${ uid }/journal/notes`).get();
    //** Voy a crearme una nueva constante notes que va a ser lo que voy a retornar, por ejemplo si no tengo nada va a regresar un arreglo vacio */
    const notes = []

    notesSnap.forEach( snapHijo => { //** Asi voy a tener un snap del hijo que se encuentra dentro de la coleccion, ahora voy a hacer un notes.push y voy a añardir un elemento que de id va a tener el snapHijo.id y el body va a ser el snapHijo.data() */
        notes.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })

    return notes
}