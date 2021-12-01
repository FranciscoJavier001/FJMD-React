const { response } = require('express')

const crearUsuario = (req, res = response ) => { 

    //** Aqui voy a desestructurar lo que es el body y voy a extraer las 3 cosas que ocuparia */
    const { name, email, password } = req.body;

    if ( name.length < 5 ) {
        return res.status(400).json({ //** Con el return ya no se ejecuta nada */
            ok: false,
            msg: 'El nombre debe de ser de 5 letras'
        })
    }

    res.json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    })
}

const loginUsuario = (req, res = response ) => {

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