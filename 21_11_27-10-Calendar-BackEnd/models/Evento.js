//** Este es un modelo para realizar posteos, actualizaciones, para info etc..  */
const { Schema, model } = require('mongoose') //**  */

const EventoSchema = Schema({

    title: {
        type: String,
        require: true
    },
    notes: {
        type: String,
    },
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId, //** Esto le dice a Moongose que va a ser una referencia */
        ref: 'Usuario' //** La referencia de arriba va a ser la del usuario (nombre del otro Schema) */
    }
})

module.exports = model('Evento', EventoSchema ) //** Va a estar en controllers>events */