import configureStore from 'redux-mock-store' //ES6 modules
import thunk from 'redux-thunk'
import { startNewNote } from '../../actions/notes'
import { db } from '../../firebase/firebase-config'
import { types } from '../../types/types'

const middlewares = [thunk] //** thunk es el middleware */
const mockStore = configureStore(middlewares)

//** Voy a crear un store que es un objeto, que es el estado del store en este momento, dentro voy a tener el auth, y dentro del objeto el uid */
const store = mockStore({
    auth: {
        uid: 'TESTING'
    }
})

describe('Pruebas con las acciones de notes', () => {
    
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
})