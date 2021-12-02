const { response } = require('express')
const { validationResult } = require('express-validator')

const crearUsuario = (req, res = response ) => { 

    //** Aqui voy a desestructurar lo que es el body y voy a extraer las 3 cosas que ocuparia */
    const { name, email, password } = req.body;

    // Manejo de errores
    const errors = validationResult( req )
    if ( !errors.isEmpty() ) { //** Si hay errores, quiero hacer un return */
        return res.status(400).json({
            ok: false,
            errors: errors.mapped() //** Los errores vienen de aqui */
        })
    }

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res = response ) => {

    // Manejo de errores
    const errors = validationResult( req )
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
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