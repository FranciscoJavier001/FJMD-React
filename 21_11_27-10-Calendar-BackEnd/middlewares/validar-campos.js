const { response } = require('express')
const { validationResult } = require('express-validator')

const validarCapos = (req, res = response, next) => { //** El next se llama en el auth.js(routes) y se va pasando, y al final se convierte en el controlador propiamente */

    // Manejo de errores
    const errors = validationResult( req )
    if ( !errors.isEmpty() ) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    next() //** Si no hay errores se llama este */
}

module.exports = {
    validarCapos
}