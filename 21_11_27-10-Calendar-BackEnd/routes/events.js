/** Esta es la URL que vamos a tener, la checamos con postman, recuerda en el index.js vemos la ruta que asignamos
    Events Routes
    /api/events
*/

const { Router } = require('express') //** Primero importamos esto, despues creamos una constante linea 10 */
const { validarJWT } = require("../middlewares/validar-jwt") //** Vamos a tener las validaciones del JWT */
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events') //** Para exportarlas */

const router = Router() //** Continuacion de la importacion del Router */

//** Todas tienen que pasar por la validacion del JWT */
router.use( validarJWT ) //** Para no tener que validar en todos los lugares el JWT, de abajo para donde lo ponga lo va a validar */

// Obtener eventos
router.get('/', getEventos ) //** Llamo el controlador getEventos, debe retornarme controllers>events - ""/"" */

// Crear un nuevo evento
router.post('/', crearEvento ) //** Llamo el controlador crearEvento, debe retornarme controllers>events - ""/"" */

// Actualizar Evento
router.put('/:id', actualizarEvento ) //** Llamo el controlador actualizarEvento, debe retornarme controllers>events - "/1" */

// Borrar Evento
router.delete('/:id', eliminarEvento ) //** Llamo el controlador eliminarEvento, debe retornarme controllers>events - "/1" */

module.exports = router //** Exportado hacia controller>events, que es donde definimos las funciones */