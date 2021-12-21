//** Este es un modelo para realizar posteos, actualizaciones, para info etc..  */
const { Schema, model } = require('mongoose') //**  */

//** Estos son parametros que necesita el evento para crearse, lo defini en crearEvento en controllers>events confirmo Postman */
const EventoSchema = Schema({

    title: {
        type: String,
        required: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId, //** Esto le dice a Moongose que va a ser una referencia */
        ref: 'Usuario', //** La referencia de arriba va a ser la del usuario (nombre del otro Schema) */
        required: true //** Voy a pedir que el usuario sea requerido */
    }
})

//** Asi definimos como queremos que se muestre en Postman */
EventoSchema.method('toJSON', function() {
    //** La referencia al objeto que se esta serializa, voy a extraer cosas, y lo demas va a estar en object*/
    const { __v, _id, ...object } = this.toObject()
    object.id = _id //** Ahora quiero que se llame id y lo segundo es lo que es */
    return object //** Voy a retornr object como nuevo */
})

module.exports = model('Evento', EventoSchema ) //** Va a estar en controllers>events */