
const initialState = [{ //** Inicializamos el initialState, pero no importa lo que hagamos */
    id: 1,
    tarea: 'Comprar pan',
    lista: false
}];

const listaTareas = ( state = initialState, action ) => { //** Funcion de flecha que recibe el state como primer parametro que esre es igual al initial state */
    
    if ( action?.type === 'agregar' ) { //** El sign de interrogacion nos dice uue si no recibe un parametro no haga nada */
        return [ ...state, action.payload ];
    }

    return state;
}

let tareas = listaTareas();

const nuevaTarea = {
    id: 2,
    tarea: 'Comprar leche',
    lista: false
}

const agregarNuevaTarea = {
    type: 'agregar',
    payload: nuevaTarea
}

tareas = listaTareas( tareas, agregarNuevaTarea );

console.log(tareas);

