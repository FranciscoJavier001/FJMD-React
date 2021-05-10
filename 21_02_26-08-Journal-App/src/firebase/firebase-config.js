//** Asi configuramos Firebase */

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAezqbJiB3GckGQIXFCenGa0_txRusns9k",
    authDomain: "react-app-cursos-44aba.firebaseapp.com",
    projectId: "react-app-cursos-44aba",
    storageBucket: "react-app-cursos-44aba.appspot.com",
    messagingSenderId: "860276935935",
    appId: "1:860276935935:web:c66a73d52ac953a689d0ca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig); //** Esta es la base de datos */

const db = firebase.firestore() //** Es una referencia a la base de datos que voy a grabar */
const googleAuthProvider = new firebase.auth.GoogleAuthProvider() //** Este es el primer authProvider para autentificarme con google */

export{ //** Voy a hacer la exportacion de la base de datos, del googeAuthProvider y el firebase */
  db,
  googleAuthProvider,
  firebase
}