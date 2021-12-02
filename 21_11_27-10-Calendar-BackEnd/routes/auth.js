/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator') //** Este lo importe porque me va a ayudar con las validaciones, hay que investigar de express, check, valida un campo en particular */
const { validarCapos } = require('../middlewares/validar-campos')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

const router = Router()


router.post( //** Estos son los endpoints, si lo pongo entre llaves es una coleccion de middleware */
    '/new',
    [ //** Middlewares */
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El E-Mail es obligatorio').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCapos //** Asi podemos validar los campos */
    ],
    crearUsuario ) 

router.post('/',
    [ //** Middlewares */
        check('email', 'El E-Mail es obligatorio').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCapos
    ],
    loginUsuario )

router.get('/renew', revalidarToken)

module.exports = router