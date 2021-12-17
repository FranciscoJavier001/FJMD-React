
// Tienen que pasar por la validacion del JWT - Si no mandamos el Token entonces no va a funcionar, pasa por middleware
const { Router } = require('express')
const { validarJWT } = require("../middlewares/validar-jwt")
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events')

const router = Router()

// Obtener eventos
router.get('/', validarJWT, getEventos ) //** Voy a llamar un controlador llamado getEventos, debe retornarme controllers>events */

// Crear un nuevo evento
router.post('/', validarJWT, crearEvento )

// Actualizar Evento
router.put('/:id', validarJWT, actualizarEvento )

// Borrar Evento
router.delete('/:id', validarJWT, eliminarEvento )

module.exports = router //** Exportado hacia controller>events, que es donde definimos las funciones */