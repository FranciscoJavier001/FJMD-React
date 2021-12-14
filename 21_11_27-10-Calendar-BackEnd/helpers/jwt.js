//** Los Helpers spm controladores, encargados de hacer unas funciones que las vamos a exportar, en este caso al controlers>auth */
//** Instalamos la libreria que nos permite trabajar con esto, "npm i jsonwebtoken" */
const jwt = require('jsonwebtoken') //** Copiamos la libreria */

//** Esta libreria no trabaja con promesas, trabaja con callbacks */
const generarJWT = ( uid, name ) => { //** Creare una funcion generarJWT, que recibe el uid, name, que son los payloads del token */

    //** Quiero retornar una promesa para poder hacer el await y esperar que se genere para continuar */
    return new Promise ( (resolve, reject ) => { //** Las promesas reciben un callback "reslve, reject" */

        const payload = { uid, name } //** Creare el payload sera un objeto que tiene uid y name, son las variables que recibe donde lo importemos */

        //** Voy a generar el toquen */
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {  //** Firmo token, primer argumento recibido es payload(arriba) y palabra secreta en .env */
            expiresIn: '2h' //** El tiempo en el que expira */
        }, (err, token ) => { //** Esto es lo que me puede retornar, el err o el token, aqui los defino */

            if ( err ){ //** Si tengo una falla y recibo el err */
                console.log(err); //** Muestrae la falla en la consola */
                reject('No se pudo generar el token') //** Mandame ese mensaje */
            }

            resolve( token ) //** Si todo sale bien resuelve el token */
        })
    })
}

module.exports = { //** Lo Exportamos, es la funcion que defini en la linea 6 */
    generarJWT
}