const { response } = require('express') //** Importamos la response, para usarla abajo */

//** Recuerda que van por los headers, para no olvidarlo en postman */
const getEventos = (req, res = response ) => { //** Esta la importamos en routes>events */
    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        msg: 'getEventos' //** Mensaje */
    })
}
const crearEvento = (req, res = response ) => { //** Esta la importamos en routes>events */
   res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        msg: 'crearEventos' //** Mensaje */
    })
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