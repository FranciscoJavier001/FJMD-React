
// Tienen que pasar por la validacion del JWT - Si no mandamos el Token entonces no va a funcionar, pasa por middleware
// Obtener eventos
router.get('/', getEventos ) //** Voy a llamar un controlador llamado getEventos, debe retornarme controllers>events */

// Crear un nuevo evento
router.post('/', crearEvento )

// Actualizar Evento
router.put('/:id', actualizarEvento )

// Borrar Evento
router.delete('/:id', eliminarEvento )