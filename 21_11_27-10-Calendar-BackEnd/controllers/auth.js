const { response } = require('express')
const bcrypt = require('bcryptjs') //** Asi importamos el que hace el hash en la contraseña */
const Usuario = require('../models/Usuario')

const crearUsuario = async(req, res = response ) => { 

    //** Aqui voy a desestructurar lo que es el body y voy a extraer las 3 cosas que ocuparia, esto es lo que viene el el body desestructurado */
    const { email, password } = req.body;

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

const loginUsuario = async(req, res = response ) => {

    const { email, password } = req.body;

    try {
        
        const usuario = await Usuario.findOne({ email })
        
        if ( !usuario ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe con ese email'
            })
        }

        // Confirmar los passwords
        const validPassword = bcrypt.compareSync( password, usuario.password )

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Password incorrecto'
            })
        }

        // Generar nuestro JWT

        res.json({
            ok: true,
            uid: usuario.id, 
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

const revalidarToken = (req, res = response ) => {

    res.json({
        ok: true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}