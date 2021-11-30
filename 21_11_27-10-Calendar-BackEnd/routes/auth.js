/*
    Rutas de Usuarios / Auth
    host + /api/auth
*/

const { Router } = require('express')
const router = Router()

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth')

router.post('/new', crearUsuario ) //** Estos son los endpoints */

router.post('/', loginUsuario )

router.get('/renew', revalidarToken)

module.exports = router