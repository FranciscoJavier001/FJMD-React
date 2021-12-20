/** Esta es la URL que vamos a tener, la checamos con postman, recuerda en el index.js vemos la ruta que asignamos
    Events Routes
    /api/events
*/

const { Router } = require('express') //** Primero importamos esto, despues creamos una constante linea 10 */
const { check } = require('express-validator') //** Necesito el Check para validar los campos */

const { isDate } = require('../helpers/isDate') //** Aqui hicimos la vidacion de fechas, y es custom */
const { validarCapos } = require('../middlewares/validar-campos') //** Asi impedimos que avance si algo no esta correcto */
const { validarJWT } = require("../middlewares/validar-jwt") //** Vamos a tener las validaciones del JWT */
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events') //** Para exportarlas */

const router = Router() //** Continuacion de la importacion del Router */

//** Todas tienen que pasar por la validacion del JWT */
router.use( validarJWT ) //** Para no tener que validar en todos los lugares el JWT, de abajo para donde lo ponga lo va a validar */

// Obtener eventos
router.get('/', getEventos ) //** Llamo el controlador getEventos, debe retornarme controllers>events - ""URL:/"" */

// Crear un nuevo evento
router.post( //** Llamo el controlador crearEvento, debe retornarme controllers>events - ""URL:/"" */
    '/',
    [ //** Al hacer esto se valida en Postman y ahi sale el error, esto es un arreglo */
        check('title','El titulo es obligatorio').not().isEmpty(), //** Para pedir que siempre tenga informacion, vide de express-validator */
        check('start','Fecha de inicio es obligatoria').custom( isDate ), //** Lo primero es lo que pedimos y lo segundo lo que sale */
        check('end','Fecha de finalizacion es obligatoria').custom( isDate ), //** Custom lo definimos en helpers>isDate */
        validarCapos //** Esto viene desde el middleware>validar-campos */
    ],
    crearEvento //** Si todo sale bien se pasa aqui */
)

// Actualizar Evento
router.put('/:id', actualizarEvento ) //** Llamo el controlador actualizarEvento, debe retornarme controllers>events - "URL:/1" */

// Borrar Evento
router.delete('/:id', eliminarEvento ) //** Llamo el controlador eliminarEvento, debe retornarme controllers>events - "URL:/1" */

module.exports = router //** Exportado hacia controller>events, que es donde definimos las funciones */