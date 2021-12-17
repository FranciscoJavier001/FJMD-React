

// {
//     ok: true,
//     msg: 'crearEventos'
// }

// {   /123454321
//     ok: true,
//     msg: 'actualizarEvento'
// }

// {   /123454321
//     ok: true,
//     msg: 'eliminarEvento'
// }

const getEventos = async(req, res = response ) => { //** Esta la importamos en routes>auth */

    const { uid, name } = req //** Voy a revalidarToken utilizando la req, que viene linea 93 que tiene el uid y name */

    // Generar un nuevo JWT
    const token = await generarJWT( uid, name ) //** Estos parametros los tengo arriba, vienen desde helpers>jwt */

    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        msg: 'Obtener eventos',
        uid, //** Muestro el uid */
        name, //** Muestro en nane */
        token //** Asi regreso un nuevo token */
    })
}
const crearEvento = async(req, res = response ) => { //** Esta la importamos en routes>auth */

    const { uid, name } = req //** Voy a revalidarToken utilizando la req, que viene linea 93 que tiene el uid y name */

    // Generar un nuevo JWT
    const token = await generarJWT( uid, name ) //** Estos parametros los tengo arriba, vienen desde helpers>jwt */

    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        msg: 'crearEventos',
        uid, //** Muestro el uid */
        name, //** Muestro en nane */
        token //** Asi regreso un nuevo token */
    })
}
const actualizarEvento = async(req, res = response ) => { //** Esta la importamos en routes>auth */

    const { uid, name } = req //** Voy a revalidarToken utilizando la req, que viene linea 93 que tiene el uid y name */

    // Generar un nuevo JWT
    const token = await generarJWT( uid, name ) //** Estos parametros los tengo arriba, vienen desde helpers>jwt */

    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        msg: 'actualizarEvento',
        uid, //** Muestro el uid */
        name, //** Muestro en nane */
        token //** Asi regreso un nuevo token */
    })
}
const eliminarEvento = async(req, res = response ) => { //** Esta la importamos en routes>auth */

    const { uid, name } = req //** Voy a revalidarToken utilizando la req, que viene linea 93 que tiene el uid y name */

    // Generar un nuevo JWT
    const token = await generarJWT( uid, name ) //** Estos parametros los tengo arriba, vienen desde helpers>jwt */

    res.json({ //** Esto me retorna el arreglo al hacer la peticion en postman */
        ok: true, //** El estado */
        msg: 'eliminarEvento',
        uid, //** Muestro el uid */
        name, //** Muestro en nane */
        token //** Asi regreso un nuevo token */
    })
}

module.exports = { //** Estos los encontramos el routes>auth, los encontramos en las rutas del navegador, aqui definimos */
    getEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
}