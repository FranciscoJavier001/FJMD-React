const { response } = require('express')
const bcrypt = require('bcryptjs') //** Asi importamos el que hace el hash en la contraseña */
const Usuario = require('../models/Usuario')

const crearUsuario = async(req, res = response ) => { //** Aqui voy a crear el Usuario */

    //** Aqui voy a desestructurar lo que es el body y voy a extraer las 3 cosas que ocuparia, esto es lo que viene el el body desestructurado */
    const { email, password } = req.body; //** Esto es lo que va a necesitar el Campo, para crear el Usuario */

    try {
        let usuario = await Usuario.findOne({ email })
        
        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            })
        }

        usuario = new Usuario( req.body ) //** A el segundo usuario le cabe lo de arriba de la instancia anterior */

        // Encriptar Contraseña
        const salt = bcrypt.genSaltSync() //** Este es un sincrono */
        //** Asi le hacemos para encriptar la contraseña */
        usuario.password = bcrypt.hashSync( password, salt )

        await usuario.save()

        res.status(201).json({
            ok: true,
            uid: usuario.id, //** Esto me lo esta regresando ahora de la postman, y son parametros ya establecidos */
            name: usuario.name
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const loginUsuario = async(req, res = response ) => { //** Vamos a trabajar con esta funcion 211208-3:46a, es una funcion asincrona por el await, que osea va a esperar una respuesta */

    const { email, password } = req.body; //** Esta la hicimos una constante, porque no va a cambiar */

    try { //** Aqui vamos a mandar a buscar el Usuario */
        
        const usuario = await Usuario.findOne({ email }) //** Esta es la instruccion */
        
        if ( !usuario ) { //** Si el Usuario, no existe, mandar esto, osea asi lo retornamos, el status 400, ok, el estado que esta en falla, y el msg porque esa es la falla que arroja */
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            })
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password ) //** Aqui vamos a validar los passwords, el que estamos mandando y el que tenemos en la base de datos, pero el que ya esta encriptado */

        if ( !validPassword ) { //** Si es diferente al password, entonces mandame el error 400, con su estado que es el ok y el msg que es la falla */
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }

        // Generar nuestro JWT

        res.json({ //** Pero si es usuario correcto, te mando el ok en true, el uid que es igual usuario.id y el nombre, pero, el primero es pura mamada, porque es como yo los quiera llamar */
            ok: true,
            uid: usuario.id, 
            name: usuario.name,
            // password: usuario.password
        })

    } catch (error) { //** Si la falla ya no es del usuario, sino nuestra mandamos la falla que la consola revento, osea como si no pudieramos entrar a la base de datos */
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const revalidarToken = (req, res = response ) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = { //** Estos los encontramos el routes>auth, son los que encontramos en las rutas del navegador, que ya definimos */
    crearUsuario,
    loginUsuario,
    revalidarToken
}