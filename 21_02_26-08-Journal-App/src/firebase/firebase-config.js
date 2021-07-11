//** Asi configuramos Firebase */

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
};

// const firebaseConfigTesting = {
//   apiKey: "AIzaSyD-obXm864QTyUQFRSb_uw2C-RbMWFsNQE",
//   authDomain: "fir-1669b.firebaseapp.com",
//   projectId: "fir-1669b",
//   storageBucket: "fir-1669b.appspot.com",
//   messagingSenderId: "92810698387",
//   appId: "1:92810698387:web:0d50207562aed9ddc6b766",
//   measurementId: "G-4100CM39X9"
// };

// console.log( process.env ); //** Para ver si estoy en desarrollo o testing */
// if( process.env.NODE_ENV === 'test') {
  // testing
  // firebase.initializeApp(firebaseConfigTesting)
// } else {
  // Initialize Firebase
//   firebase.initializeApp(firebaseConfig); //** Esta es la base de datos */
// }

firebase.initializeApp(firebaseConfig); //** Esta es la base de datos */

const db = firebase.firestore() //** Es una referencia a la base de datos que voy a grabar */
const googleAuthProvider = new firebase.auth.GoogleAuthProvider() //** Este es el primer authProvider para autentificarme con google */

export{ //** Voy a hacer la exportacion de la base de datos, del googeAuthProvider y el firebase */
  db,
  googleAuthProvider,
  firebase
}