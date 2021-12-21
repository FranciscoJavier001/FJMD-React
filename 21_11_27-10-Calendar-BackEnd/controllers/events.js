const { response } = require('express') //** Importamos la response, para usarla abajo */
const Evento = require('../models/Evento') //** La referencia al modelo para guardar evento models>Evento, tiene necesidades */

//** Recuerda que van por los headers, para no olvidarlo en postman */
const getEventos = (req, res = response ) => { //** Esta la importamos en routes>events */
    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        msg: 'getEventos' //** Mensaje */
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
const actualizarEvento = (req, res = response ) => { //** Esta la importamos en routes>events */
    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        msg: 'actualizarEvento'
    })
}
const eliminarEvento = (req, res = response ) => { //** Esta la importamos en routes>events */
    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        msg: 'eliminarEvento'
    })
}

module.exports = { //** Estos los encontramos el routes>events, los encontramos en las rutas del navegador, aqui definimos */
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}