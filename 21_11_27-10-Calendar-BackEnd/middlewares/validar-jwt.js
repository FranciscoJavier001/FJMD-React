const { response } = require('express') //** Para recibir ayuda con la sintaxis, osea el tipado */
const jwt = require('jsonwebtoken') //** Esto me va a servir para validar la info que viene en el token */

const validarJWT = (req, res = response, next) => { //** Funcion que importamos abajo, recibe esos argumentos */
    //** Voy a implementar validarJWT en routes>auth */

    const token = req.header('x-token') //** Recibire el Token, a traves de los headers, y pongo que voy a leer 'x-token' */

    // console.log(token); //** Puedo leer el token, puedo leerlo y recibirlo */

    if ( !token ) { //** Asi validamos el token si viene null o undefine voy a sacar el usuario asi */
        return res.status(401).json({ //** Me va a dar el error 401, y el token me va a dar el sig mensaje */
            ok: false, //** Esto va en el ok */
            msg: 'No hay token en la peticion' //** Mensaje que vamos a mostrar */
        })
    }

    try {
        
        const { uid, name } = jwt.verify( //** Voy a querer exraer el payload, este lo definimos en helpers>jwt */
            token, //** Token que lo extrage en la linea 7, y asi ponemos que debe ser igual como al que fue generado */
            process.env.SECRET_JWT_SEED //** Palabra Secreta que pide, esta en el env */
        )

        //** Voy a tomar el objeto de la req */
        req.uid = uid //** Como ya lo extraje, linea 20, ya puedo extraerlo asi */
        req.name = name //** Como ya lo extraje, linea 20, ya puedo extraerlo asi */

        // console.log(`uid: ${uid}`); //** Solo fue para ver la info */
        // console.log(`name: ${name}`); //** Solo fue para ver la info */


    } catch (error) { //** Si tenemos el error en el try */
        return res.status(401).json({ //** Vamos a retornar el error 401 y mostramos */
            ok: false, //** El ok en false, por ser booleano */
            msg: 'Token no valido' //** El mensaje */
        })
    }

    next()
}

module.exports = {
    validarJWT
}