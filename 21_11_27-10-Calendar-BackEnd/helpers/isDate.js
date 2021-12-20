const moment = require('moment') //** Para asegurarme que sea una fecha valida "npm i moment*/

// const isDate = ( value, { req, location, path } ) => { //** Esta venia ya desestructurada (0) */
// const isDate = ( value, rest ) => { //** Esta viene completa, pero voy a cambiarla (1) */
const isDate = ( value ) => { //** Value son los argumentos que esto recibe */

    if ( !value ) { //** Voy a confirmar que value existe y si no existe retorno false */
        return false; //** Osea que esto dice a express-validator que este campo no es correcto */
    }

    const fecha = moment( value ) //** fecha va a ser el valor de moment (mandando el valor) */
    if (fecha.isValid() ) { //** Moment va a indicar si es fecha correcta o no, funcion moment */
        return true; //** Valida true */
    } else {
        return false //** Falsa false */
    }

    // console.log( value ); //** (0)(1) es lo que trae el value */ 
    // console.log(req, location, path); //** (0) son cosas que trae el argumento */
    // console.log( rest ); //** (1) es todo lo que trae */
}

module.exports = { //** Lo importo en routes>events */
    isDate
}