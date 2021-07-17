 /**
 * @jest-environment node
 */

import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'
import { startLoadingNotes, startNewNote, startSaveNote } from '../../actions/notes'
import { db } from '../../firebase/firebase-config'
import { types } from '../../types/types'

const middlewares = [thunk] //** thunk es el middleware */
const mockStore = configureStore(middlewares)

const initState = { //** Este contiene el estado del store en este momento, dentro voy a tener el auth, y dentro del objeto el uid */
    auth: {
        uid: 'TESTING'
    }
}

//** Voy a crear un store que es un objeto */
let store = mockStore(initState)

describe('Pruebas con las acciones de notes', () => {

    beforeEach( () => { //** Voy a limpiar las pruebas, en un callback que se va a ejecutar antes de cada prueba */
        store = mockStore(initState) //** Aqui lo voy a reinicializar para mandarlo como se encuentra */
    })
    
    test('debe de crar una nueva nota startNewNote', async() => { //** Aqui pongo el async para que lo pueda esperar */

        //** Con este mock puedo hacer dispatch de acciones, asi que voy a llamar el startNewNote */
        await store.dispatch( startNewNote() ) //** Como es asincrona voy a poner el await, la accion que quiero evaluar es startNewNote */

        const actions = store.getActions() //** Estas acciones son para ver que onda con el testing que ya diseñamos */
        // console.log(actions);

        expect( actions[0] ).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })

        expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })

        //** Para borrar y no tener tanta basura */
        const docId = actions[0].payload.id;
        await db.doc(`/TESTING/journal/notes/${ docId }`).delete()
    })

    test('startLoadingNotes debe cargar las notas', async() => { //** Esta va a ser una tarea asyncrona */
        
        await store.dispatch( startLoadingNotes('TESTING') ) //** Como es asincrona voy a poner el await, la accion que quiero evaluar es startLoadingNotes, recibo el uid en startLoadingNotes y ese va a ser el TESTING */
        const actions = store.getActions()
        
        expect( actions[0]).toEqual({ //** Lo voy a comparar contra un objeto */
            type: types.notesLoad,
            payload: expect.any(Array) //** Con que sea un arreglo, de cualquier tipo */
        })

        const expected = { //** Un objeto que tenga todo lo que esperamos */
            id: expect.any(String), //** Para que espere cualquier string */
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect( actions[0].payload[0]).toMatchObject( expected ) //** Esperaria que el primer objeto que viene en las actions en la primera posicion, con el payload, no olvidar que este es un arreglo , y quiero que haga match con el expected */
    })

    test('startSaveNote debe de actualizar la nota', async() => {
        
        const note = { //** Es para actualizar la nota */
            id: 'R5HB60XwmTSJWe6Qro9h',
            title: 'titulo',
            body: 'body'
        }

        await store.dispatch( startSaveNote( note )) //** La accion que de sebe de guardar es el note (osea la nota) */

        const actions = store.getActions()
        // console.log(actions);

        expect( actions[0].type ).toBe( types.notesUpdated) //** Tiene que ser igual a notesUpdated */

        const docRef = await db.doc(`/TESTING/journal/notes/${ note.id }`).get() //** El get me va a regresar la referencia al documento */

        expect( docRef.data().title ).toBe( note.title )
    })
    
})