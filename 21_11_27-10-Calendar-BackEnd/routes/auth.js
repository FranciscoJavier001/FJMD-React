/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator') //** Este lo importe porque me va a ayudar con las validaciones, hay que investigar de express, check, valida un campo en particular */
const router = Router()

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

router.post( //** Estos son los endpoints, si lo pongo entre llaves es una coleccion de middleware */
    '/new',
    [ //** Middlewares */
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El E-Mail es obligatorio').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres').isLength({ min: 6 }),
    ],
    crearUsuario ) 

router.post('/',
    [ //** Middlewares */
        check('email', 'El E-Mail es obligatorio').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres').isLength({ min: 6 }),
    ],
    loginUsuario )

router.get('/renew', revalidarToken)

module.exports = router