// Recuerda el push mdifica o muta el objeto, no usarlo en react (por el momento)
const initialState = [{ //** Inicializamos el initialState, pero no importa lo que hagamos */
    id: 1, //** Agregamos tareas */
    tarea: 'Comprar pan',
    lista: false
}];

const listaTareas = ( state = initialState, action ) => { //** Funcion de flecha que recibe el state como primer parametro que esre es igual al initial state, esta ya la podemos llamar como un reducer, las acciones van a modificar el state y siempre vamos a regresar el state */
    
    //** Para procesar el agregar aqui creamos el IF que nos dice que si esto es igual a agregar lo que quiero hacer es agregar la tarea de comprar pan que esta en agregarNuevaTarea */
    if ( action?.type === 'agregar' ) { //** El signo de interrogacion nos dice que si no recibe un parametro no haga nada, o pregunta si tiene un valor */
        return [ ...state, action.payload ]; //** Este return lo usamos con el spred para exparcir todos los elementos que tiene el state con todos los todos anteriores y vamos a añadir el action = la action modifica el state por eso preguntamos y arriba la declaramos como agregar, osea toda es la logica  */
    }

    return state; //** Nos debe retornar algo, siempre nos va a regresar el state */
}

let tareas = listaTareas();

const nuevaTarea = { //** Simplemente esta la hicimos para la prueba, porque el payload osea el cambio que regresa es esto que todavia no esta completa */
    id: 2,
    tarea: 'Comprar leche',
    lista: false
}

const agregarNuevaTarea = { //** Para la nueva tarea vamos a crear una nueva action, que va a tener como  estandar algo que sea el type y le va a decir que tipo de accion es , payload es igual un estandar para que cuando otros desarrolladores trabajen con los argumentos que le mandamos a la accion ya saben que vienen en el payload */
    type: 'agregar',
    payload: nuevaTarea
}

tareas = listaTareas( tareas, agregarNuevaTarea ); //** Aqui mandamos la nueva accion  */

console.log(tareas);

