import React, { useState } from 'react'
import moment from 'moment'
import Modal from 'react-modal'; //** Un modal es la ventana donde puedo poner acciones secundarias */
import DateTimePicker from 'react-datetime-picker'; //** Esta es una importacion para el tiempo, para hacerlo mas facil */
import Swal from 'sweetalert2' //** Para el sweet alert le hacemos "npm i sweetalert2" */


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours'); //** Este va a ser para definir el valor inicial con moment, sera este el momento actual, pero lo voy a asignar los seg y minutos en 0 */
const nowPlus1 = now.clone().add(1, 'hours'); //** Este va a ser una hora superior, para el campo del fin */
const [titleValid, setTitleValid] = useState(true)

export const CalendarModal = () => {

    const [ dateStart, setDateStart ] = useState( now.toDate() ) //** Utilizamos este estado para que lo haga con la fecha actual */
    const [ dateEnd, setDateEnd ] = useState( nowPlus1.toDate() )

    const [formValues, setFormValues] = useState({ //** Este va a ser el estado inicial del formulario */
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: now.toDate()
    })

    const { notes, title, start, end } = formValues; //** Voy a extraer las notes y title del formValues, luego extraigo el start y el end */

    const handleInputChange = ({ target }) => { //** Aqui voy a recibir el evento, pero solo va a ser el target */

        setFormValues({ //** Voy a establecer un nuevo objeto que va a tener todos los valores que tiene el formValues, pero voy a cambiar el que estoy rcibiendo en este evento */
            ...formValues,
            [target.name]: target.value //** Quiero computar el nombre de la propiedad luego viene el target.value como valor de esta propiedad */
        })
    }

    const closeModal = () => { //** Con este cerramos la ventana del modal */
        // TODO: cerrar el modsl
    }

    const handleStartDateChange = ( e ) => { //** Aqui voy a recibir un evento y este sera la fecha */
        setDateStart( e );
        setFormValues({ //** Voy a hacer la desestructuracion del formValues, y el start va a ser el evento que recibe */
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = ( e ) => { //** Aqui voy a recibir un evento y este sera la fecha */
        setDateEnd( e );
        setFormValues({ //** Voy a hacer la desestructuracion del formValues, y el start va a ser el evento que recibe */
            ...formValues,
            end: e
        })
    }

    const handleSubmitForm = (e) => { //** Aqui recibo el evento, y este es cuando le den al boton de guardar */
        e.preventDefault(); //** Para evitar la propagacion del formulario */

        const momentStart = moment( start )
        const momentEnd = moment( end )

        if ( momentStart.isSameOrAfter( momentEnd ) ) { //** Si la fecha de inicio esta despues de la fecha de inicializacion no lo voy a dejar pasar */
            return Swal.fire('Error ', 'La fecha fin debe ser mayor a la fecha de inicio', 'error') //** Osea que va a retornarme el mensaje de error */
        }

        if (title.trim( ).length < 2 ) { //** Esto es para evitar que el titulo tenga menos de 2 letras */
            return setTitleValid(false);
        }

        // TODO: realizar grabación

        setTitleValid(true)
        closeModal();
    } 

    return (
            <Modal
            isOpen={ true }
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
            >
                <h1> Nuevo evento </h1>
                <hr />
                <form 
                    className="container"
                    onSubmit={ handleSubmitForm }
                >

                    <div className="form-group">
                        <label>Fecha y hora inicio</label>
                        <DateTimePicker
                            onChange={ handleStartDateChange } //** Esto es que cambio la fecha de inicio y despues toca definirlo */
                            value={ dateStart } 
                            className="form-control"
                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha y hora fin</label>
                        <DateTimePicker
                            onChange={ handleEndDateChange } //** Para esto me toca crear el metodo */
                            value={ dateEnd } 
                            minDate={ dateStart }
                            className="form-control"
                        />
                    </div>

                    <hr />
                    <div className="form-group">
                        <label>Titulo y notas</label>
                        <input 
                            type="text" 
                            className={ `form-control ${ !titleValid && 'is-invalid'} `}
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={ title } //** El valor en el titulo y notas va a ser el title que asignamos arriba en la variable del formValues */
                            onChange={ handleInputChange }
                        />
                        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                    </div>

                    <div className="form-group">
                        <textarea 
                            type="text" 
                            className="form-control"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={ notes } //** El valor en notas va a ser el que asignamos arriba en la variable del formValues */
                            onChange={ handleInputChange }
                        ></textarea>
                        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-outline-primary btn-block"
                    >
                        <i className="far fa-save"></i>
                        <span> Guardar</span>
                    </button>

                </form>

        </Modal>
    )
}
