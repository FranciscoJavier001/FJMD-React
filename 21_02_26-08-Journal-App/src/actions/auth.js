//** Estas son acciones que vamos a definir */
import { firebase, googleAuthProvider } from '../firebase/firebase-config'
import { types } from '../types/types'

//** Esto es una tarea asincrona, osea que se va a ejecutar todo el proceso, luego se va a encontrar con el dispatch que ejecuta la accion del login que es la que se va a aplicar directamente en el store (la fuente unica de la verdad), que modifica el state y nos regresa todo lo que estamos esperando  */
export const startLoginEmailPassword = (email, password) => { //** Esta funcion va a recibir el email y el password */
    return (dispatch) => { //** Esta funcion va a regresar un callback, osea una funcion a disparar */
        //** Hay que llamar a otro dispatch cuando ya se ejecute todo, cuando ya tenga la data */
        setTimeout(() => {
            dispatch( login( 123, 'Pedro')) //** Aqui voy a hacer un dispatch del login, con el usuario */
        }, 3500);
    }
}

export const startRegisterWithEmailPasswordName = ( email, password, name ) => { //** Esta es una tarea asincrona, asi que voy a tener un callback */
    return ( dispatch ) => { //** Cuando tenga el usuario grabado en firebase voy a hacer el dispatch */
        firebase.auth().createUserWithEmailAndPassword( email, password ) //** Aqui mandamos los parametros de email y password */
        .then( async ({ user }) => { //** Esta va a ser una promesa */

            await user.updateProfile({ displayName: name }) //** que me de el name que estoy recibiendo como argumento de mi funcion y esto me regresa una promesa */

            dispatch( //** Esto es para llamar de nuevo el dispatch */
                login( user.uid, user.displayName)
            )
        })
        .catch( e => { //** Esto es para atrapar el error y mostrarlo */
            console.log(e);
        })
    }
}

export const startGoogleLogin = () => { //** Una funcion de fleca que no recibe nada, pero es una tarea sincrona voy a poner el return y el callback me va a proveer el dispatch, por lo cual cuando tenga la informacion lo voy a llamar */
    return ( dispatch ) => {
    firebase.auth().signInWithPopup( googleAuthProvider ) //** Esto va a retormarme una promesa */
        .then( ({ user }) => { //** Aqui voy a usar la desestructuracion para extraer el user */
            dispatch( //** Que cuando esto se responda voy a hacer el dispatch de la accion que ya tengo definido abajo con el login, donde voy a poder el id que viene del user.uid, y el displayName que viene del user.displayName */
                login( user.uid, user.displayName)
            )
        })
    }
}

export const login = (uid, displayName) => ({ //** Esta es la accion que voy a llamar cuando tenga el uid y el displayNameny esta accion me debe regresar un type.login */
    type: types.login,
    payload: { //** El payload va a ser un objeto que tenga un uid y el displayName */
        uid,
        displayName
    }
})