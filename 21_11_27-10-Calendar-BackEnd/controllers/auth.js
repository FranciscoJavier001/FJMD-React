const { response } = require('express')
const bcrypt = require('bcryptjs') //** Asi importamos el que hace el hash en la contraseña */
const Usuario = require('../models/Usuario')
const { generarJWT } = require('../helpers/jwt') //** Importo lo que exporte en helpers>jsw */

const crearUsuario = async(req, res = response ) => { //** Aqui voy a crear el Usuario */

    const { email, password } = req.body; //** Esto es lo que va a necesitar el Campo, para crear el Usuario "req.body-info que se posteo" */

    try {
        let usuario = await Usuario.findOne({ email }) //** Aqui voy a buscar un usuario mediante el email */
        
        if ( usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'Un usuario existe con ese correo'
            })
        }

        usuario = new Usuario( req.body ) //** A el segundo usuario le cabe lo de arriba de la instancia anterior */

        // Encriptar Contraseña
        const salt = bcrypt.genSaltSync() //** Este es un sincrono */
        usuario.password = bcrypt.hashSync( password, salt ) //** Asi le hacemos para encriptar la contraseña */

        await usuario.save()

        // Generar JWT
        const token = await generarJWT( usuario.id, usuario.name ) //** Funcion token, promesa pero lo creamos en helpers, recibe el id y el name */

        res.status(201).json({ //** Si se resolvio de manera correcta */
            ok: true, //** El estado cuando se pudo hcer bien */
            uid: usuario.id, //** Me esta regresando el parametro, y aqui lo muestro extrayendo info del usuario */
            name: usuario.name, //** Aqui lo muestro extrayendo informacion del usuario */
            token //** Esto es el token que se genero, que va a ser igual al valor del token que esta en la linea 29 */
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const loginUsuario = async(req, res = response ) => { //** Vamos a trabajar con esta funcion 211208-3:46a, asincrona por el await espera/respuesta */

    const { email, password } = req.body; //** Esta la hicimos una constante, porque no va a cambiar */

    try { //** Aqui vamos a mandar a buscar el Usuario */
        
        const usuario = await Usuario.findOne({ email }) //** Esta es la instruccion */
        
        if ( !usuario ) { //** Si el Usuario, no existe, mandar esto, osea asi lo retornamos */
            return res.status(400).json({ //** Si el error es 400, es porque el usuario ya existe */
                ok: false, //** Este simplemente es porque asi lo mandamos, si dejo el cursor en el ok me sale el tipo de variable que recibe */
                msg: 'El usuario no existe con ese email' //** Este es el mensaje que mandamos */
            })
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password ) //** Validarmos los passwords de ambos campos, en db y mandamos */

        if ( !validPassword ) { //** Si es diferente al password */
            return res.status(400).json({ //** Me retorna una falla, por eso respuesta en el 400 */
                ok: false, //** El tipo de dato que me retorna es false porque esta mal una validacion */
                msg: 'Password incorrecto' //** Mesaje de que el pass esta mal */
            })
        }

        // Generar JWT
        const token = await generarJWT( usuario.id, usuario.name ) //** Funcion token, promesa recibe id/name, para mandarlo a funcion exportada */

        res.json({ //** Si la validacion del email y pass es correcta entonces esto me retorna */
            ok: true, //** El estado es true */
            uid: usuario.id, //** Mandamos el uid:/id del usuario que son puros numeros */
            name: usuario.name, //** Mandamos el nombre del usuario */
            // password: usuario.password //** Hasta podriamos mandar la contraseña */
            token //** Es el token que se genero, que es igual al de la variable linea73 */
        })

        //** Este puede ser, por fallas mas alla, como por ejemplo que mandemos el ok con otra cosa que no sea un booleano */
    } catch (error) { //** Estas pueden ser fallas en la respuesta del formulario, algun campo mal identificado */
        console.log(error); //** Mandamos el error en consola, pero esto es en la pagina */
        res.status(500).json({ //** Es diferente el campo */
            ok: false, //** Por ser booleano y mandamos la falla */
            msg: 'Por favor hable con el administrador' //** El mensaje que va a retornar */
        })
    }
}

const revalidarToken = async(req, res = response ) => { //** Esta la importamos en routes>auth */

    const { uid, name } = req //** Voy a revalidarToken utilizando la req, que viene linea 93 que tiene el uid y name */

    // Generar un nuevo JWT
    const token = await generarJWT( uid, name ) //** Estos parametros los tengo arriba, vienen desde helpers>jwt */

    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        uid, //** Muestro el uid */
        name, //** Muestro en nane */
        token //** Asi regreso un nuevo token */
    })
}

module.exports = { //** Estos los encontramos el routes>auth, los encontramos en las rutas del navegador, aqui definimos */
    crearUsuario,
    loginUsuario,
    revalidarToken
}