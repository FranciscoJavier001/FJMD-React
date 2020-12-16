//** Aqui creamos la funcion todoReducer, que la van a importar en el TodoApp */
//** Aqui ponemos como queremos que interactue con el DOM */

//** todoReducer tiene una funcion que recibe parametros, el state es el arreglo actual y el action sigue las instrucciones que viene a continuacion en el todoApp */
export const todoReducer = ( state = [], action ) => { 


    // Crear las acciones y mandarselas al reducer, el reducer las ejecuta, me regresa un nuevo estado y como estoy trabajando en base a mi useReducer este se va a encargar de redibujar lo que hay que redibujar 
    switch ( action.type ) { /** Wey, esto ya es el boton, con toda la logica para que agrege una nueva tarea */
        case 'add':
            return [ ...state, action.payload ]; /** Como nos damos cuenta, aqui se va a agregar, y la ltima va a ser la primera, manteniendo la fotografia como estaba antes*/

        case 'delete': //** En caso de que el usuario en el TodoApp *///** Este el de borrar, y vamos a hacer un filter que va a regresar un nuevo arreglo del state que cumplan una condicion */

            return state.filter( todo => todo.id !== action.payload ); // 123123123 //** Esto nos dice que el Todo sea diferente al todo.id que quiero borrar, que sea diferente al action.payload (este es donde se guardan las cosas que se van a cambiar porque este cambio el estado a uno nuevo con el payload), mira hay te va mejor la sentencia - En caso*/

            //** es mas sensillo hacer una funcion que tenga un return implicito con un operador ternario, recuerden que el ternario tiene que regresar dos valores que es lo que se necesita uno que seria la modificacion y el otro en caso de que sea igual y no quiera hacer nada. */

        case 'toggle':
            return state.map( todo => //** map barre cada uno de los elementos del arreglo que seria el state y debe de retornar un valor, lo que sea que retorne la funcion o el callback de aqui dentro sera el nuevo valor que va a tener cada uno de los elementos de ese state - aqio vo a tener un todo*/
                ( todo.id === action.payload ) //** action.payload va a venir el id del mismo - si el todo.id es exactamente igual al accion.payload significa que hay que cambiar este elemento  */
                    ? { ...todo, done: !todo.done } //** el operador spreed, que me regresa el arreglo como esta actualmente pero el cambio se viene hasta abajo y lo unico que me interesa cambiar es el todo.done la propiedad done va a tener el valor del todo.done pero quiero hacer la negacion para que sean diferentes */
                    : todo //** si son diferentes solamente voy a retornar el todo */
            );
        
                    case 'toggle-old': //** map barre cada uno de los elementos del arreglo que seria el state y debe de retornar un valor, lo que sea que retorne la funcion o el callback de aqui adentro sera el nuevo valor que va atener cada uno de los elementos de ese state  */
            return state.map( todo => {//** aqui voy a tener un todo  */

                if ( todo.id === action.payload ) { //** action.payload va a venir el id del mismo - si el todo.id es exactamente igual al accion.payload significa que hay que cambiar este elemento  */
                    return {
                        ...todo, done: !todo.done} //** la propiedad done va a tener el valor del todo.done pero quiero hacer la negacion para que sean diferentes */
                } else {
                    return todo; //** en caso contrario no son iguales yse va hacer un retorn del mismo todo  para no mutar y no estruir algo, porque si no regresaramos nada en el mapa entonces va atransformar el todo en un undefine, por eso hay que regresar algo ahi */
                }
            })

        default:
            return state; /** Si vemos que no hay cambio manda el mismo estado */
    }


}