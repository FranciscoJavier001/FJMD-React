const initialState = { //** initialState es un objeto donde voy a definir un par de cosas */
    //** Esta define si el usuario esta autentificado, en false se va al login y en true se queda en la pagina del calendario */
    checking: true, //** Propiedad que en cuanto se cargue va a ser true Redux>State */
    // uid: null, //** Estos dos solo los voy a tener cuando esten autentificados */
    // name: null //** Estos dos solo los voy a tener cuando esten autentificados */
}

//** Ya que tengo el initialState, voy a crear el Reducer */
//** Exporto la funcion, que recibe el initialState(auth>checking-true/false) y la action que tengo en types>types */
export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) { //** Con el action.type ya tenemos listo el reducer */
            
        default:
            return state; //** Voy a mandar el state con los parametros que tenga */
    }
}