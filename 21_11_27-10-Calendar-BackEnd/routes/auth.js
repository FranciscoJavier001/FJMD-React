/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express')
const { check } = require('express-validator') //** Ayuda con validaciones, check-valida un campo en particular */
const { validarCapos } = require('../middlewares/validar-campos')
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')
const { validarJWT } = require('../middlewares/validar-jwt') //** Este lo importamos desde middlewares>validar-jwt */

const router = Router()

router.post( //** Estos son los endpoints, si lo pongo entre llaves es una coleccion de middleware */
    '/new',
    [ //** Middlewares */
        check('name', 'El nombre es obligatorio').not().isEmpty(), //** Validaciones */
        check('email', 'El E-Mail es obligatorio').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCapos //** Asi podemos validar los campos, este lo pusimos para que actue el middleware */
    ],
    crearUsuario ) //** En caso contrario de que no tenga problemas pasa a crear el usuario */

router.post('/', //** Son las validaciones */
    [ //** Middlewares */
        check('email', 'El E-Mail es obligatorio').isEmail(),
        check('password', 'El Password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCapos //** Tiene que pasar por esto para hacer el login */
    ],
    loginUsuario ) //** En caso que todo este bien */

router.get('/renew', validarJWT, revalidarToken) 
//** Postman clone Auth, con esta direccion y get, aqui voy a validarlo es el renue */
//** validarJWT middlewares>validar-jwt, ahi lo configuramos y de ahi lo importamos */
//** revalidarToken controllers>auth, ahi lo configuramos, pero solo tiene instrucciones del arreglo ok y msg  */

module.exports = router //** Exportado hacia controller>auth, que es donde definimos las funciones */