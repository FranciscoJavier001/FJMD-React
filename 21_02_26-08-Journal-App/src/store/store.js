import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { notesReducer } from '../components/notes/notesReducer';

import { authReducer } from '../reducers/authReducer'
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose; //** Esto viene de Redux DevTools Extension, ya con esto puedo utilizar middleWhere */

const reducers = combineReducers({ //** Abro y cierro llaves para especificar un objeto, este reducer es el que le voy a mandar a mi createStore que esta abajo, si quiero añadirle un nuevo reducer y eso es todo  */
    auth: authReducer, //** Este va a tener la estructira que va a tener nuestro store en general, voy a tener una propiedad llamada auth: que va a ser manejada por mi authReducer */
    ui: uiReducer, //** Asi le hacemos para que salga en Rediux */
    notes: notesReducer //** Wey, aqui combinamos los reducers, bien bien bien no se que pedo, pero ahora si le voy a poner atencion, lo unico que se es que hay que importarlo, wey asi se hace un nuevo nodo en el state */
}) 

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk ) //** Lo importamos y mandamos el thunk, para acciones asincronas */
    )
    ); //** Este recibe un reducer y solo recibe 1 */
//** Hay que decirle que hay una fuente unica de la verdad y hay que ponerlo en el punto mas alto, pero no en el index jajaja, sino en el JournalApp, y el segundo argumento que le pusimos fue para que se habilitara el store en la pestaña */
