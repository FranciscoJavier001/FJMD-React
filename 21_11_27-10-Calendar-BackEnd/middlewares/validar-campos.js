const { response } = require('express')
const { validationResult } = require('express-validator')

const validarCampos = (req, res = response, next) => { //** Next se llama en auth.js(routes), va pasando y se convierte en el controlador */

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

module.exports = { //** Exporte esto en en routes>events */
    validarCampos
}