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

const firebaseConfigTesting = {
  apiKey: "AIzaSyD-obXm864QTyUQFRSb_uw2C-RbMWFsNQE",
  authDomain: "fir-1669b.firebaseapp.com",
  projectId: "fir-1669b",
  storageBucket: "fir-1669b.appspot.com",
  messagingSenderId: "92810698387",
  appId: "1:92810698387:web:0d50207562aed9ddc6b766",
  measurementId: "G-4100CM39X9"
};

// console.log( process.env ); //** Para ver si estoy en desarrollo o testing */
if( process.env.NODE_ENV === 'test') {
  // testing
  firebase.initializeApp(firebaseConfigTesting)
} else {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig); //** Esta es la base de datos */
}

const db = firebase.firestore() //** Es una referencia a la base de datos que voy a grabar */
const googleAuthProvider = new firebase.auth.GoogleAuthProvider() //** Este es el primer authProvider para autentificarme con google */

export{ //** Voy a hacer la exportacion de la base de datos, del googeAuthProvider y el firebase */
  db,
  googleAuthProvider,
  firebase
}