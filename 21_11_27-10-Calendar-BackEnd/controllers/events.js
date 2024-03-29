const { response } = require('express') //** Importamos la response, para usarla abajo */
const Evento = require('../models/Evento') //** La referencia al modelo para guardar evento models>Evento, tiene necesidades */

//** Recuerda que van por los headers, para no olvidarlo en postman, actualizar token y recibir getEventos */
const getEventos = async (req, res = response ) => { //** Esta la importamos en routes>events, por await puse async */

    //** Voy a retornar la lista de todos los eventos */
    const eventos = await Evento.find() //** Asi traigo todos los eventos */
                                .populate('user','name') //** Puedo traer lo que quiera, user tiene campos que me interesan */

    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        eventos //** Asi es como los traigo todos, defini linea 8 */
    })
}
const crearEvento = async (req, res = response ) => { //** Esta la importamos en routes>events, tarea asincrona */
    //** Postman>Even-CrearEvento (Actualiza Token en Auth-Login y pasalo por Header en CrearEvento) */
    // console.log( req.body ); //** Con esto me aseguro que tengo el evento */
    const evento = new Evento( req.body ); //** evento es nuevo, lo importamos y va a recibir los parametros definidos de Evento */

    try {

        evento.user = req.uid; //** Necesitamos el id del usuario y asi lo extraemos, viene en models>Evento en user */
        
        const eventoGuardado = await evento.save() //** Asi lo guardamos, queda guardado en la variable eventoGuardado */

        res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman routes>events */
            ok: true, //** El estado */
            evento: eventoGuardado  //** Lo vamos a mostrar completo */
        })

    } catch (error) { //** En caso de falla asi se configura */
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador...'
        })
    }
}
const actualizarEvento = async(req, res = response ) => { //** Esta la importamos en routes>events */

    //** Tomar el id que viene en postman (final) y lo mandamos por el URL, mandar parametros body y recibir true */
    const eventoId = req.params.id //** Asi tomo el valor del ID que viene por el URL */
    const uid = req.uid //** uid es igual al request  */

    try {

        const evento = await Evento.findById( eventoId ) //** Busco Evento por el ID, es promesa */

        if ( !evento ) { //** Si el evento no existe, retorname que ese ID no tiene eventos */
            return res.status(404).json({ //** En caso que el codigo no existe es 404 */
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        if ( evento.user.toString() !== uid ) { //** Evento es dieferente al usuario que lo creo no dejarlo, confirmamos strings */
            return res.status(401).json({ //** 401 es cuando alguien no esta autorizado */
                ok: false,
                msg: 'No tiene privilegio de editar este evento'
            })
        }
        
        const nuevoEvento = { //** Si paso la validacion de arriba ya lo puede editar */
            ...req.body, //** Mandamos lo que viene en el body (esta en postman>body) */
            user: uid //** El usuario es el uid/id del usuario que lo creo, asi lo mostramos */
        }

        //** Voy a tener los eventos del usuario, el evento pasado y con el evento mas nuevo y el evento que actualizamos */
        const eventoActualizado = await Evento.findByIdAndUpdate( eventoId, nuevoEvento, { new: true} )

        res.json({
            ok: true,
            evento: eventoActualizado //** Aqui muestro los eventos del usuario */
        })
        
    } catch (error) { //** En un caso que no pueda ver la base de datos, por diversos errores */
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

//** Recuerda Actualizar el Token en Postman, El ID ponerlo en el URL, y para confirmar el evento el log del eventoID */
const eliminarEvento = async(req, res = response ) => { //** Promesa Asincrona */
    const eventoId = req.params.id //** ID del evento que viene por el URL */
    const uid = req.uid //** uid que viene en el req.uid */

    try {
        
        const evento = await Evento.findById( eventoId ) //** evento, va a ser buscado y va a regresar el eventoId */

        if ( !evento ) { //** Si el evento no existe, mandame este error en postman */
            return res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        if ( evento.user.toString() !== uid ) { //** Si el eventoId no es el mismo que el uid no dejarlo editar postman */
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio para eliminar este evento'
            })
        }

        // const eventoEliminado = await Evento.findByIdAndDelete( eventoId ) //** Para mostrar evento eliminado */
        await Evento.findByIdAndDelete( eventoId ) //** Pero si todo es correcto, dejalo eliminar el evento */

        res.json({ //** Retorna esto en Postman */
            ok: true,
            // evento: eventoEliminado //** Asi muesreo el evento eliminado */
        })

    } catch (error) { //** Si hay una falla diferente manda esto */
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

module.exports = { //** Estos los encontramos el routes>events, los encontramos en las rutas del navegador, aqui definimos */
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}