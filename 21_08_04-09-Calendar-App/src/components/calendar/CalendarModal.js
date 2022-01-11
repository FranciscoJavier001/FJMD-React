//**_______________________________________________________________________________________________________________________________________________*/
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux' //** Este lo importo para que este pendiente de algo */

import moment from 'moment'
import Modal from 'react-modal'; //** Un modal es la ventana donde puedo poner acciones secundarias */
import DateTimePicker from 'react-datetime-picker'; //** Esta es una importacion para el tiempo, para hacerlo mas facil */
import Swal from 'sweetalert2'; //** Para el sweet alert le hacemos "npm i sweetalert2" */

import { uiCloseModal } from '../../actions/ui';
import { eventClearActiveEvent, eventStartAddNew, eventStartUpdate } from '../../actions/events';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1,'hours'); //** Definir valor inicial en moment, momento actual, seg/min en 0 */
const nowPlus1 = now.clone().add(1, 'hours'); //** Este va a ser una hora superior, para el campo del fin */

const initEvent = { //** Este va a ser igual al objeto */

    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlus1.toDate() 
}

export const CalendarModal = () => {

    //** Para estar al pendiente, lo voy a desestructurar para que este en el isOpen del return */
    const { modalOpen } = useSelector( state => state.ui );
    const { activeEvent } = useSelector( state => state.calendar ); //** Para estar al pendiente del calendar, dentro tengo el activeEvent /*
    const dispatch = useDispatch();

    const [titleValid, setTitleValid] = useState(true)
    const [ dateStart, setDateStart ] = useState( now.toDate() ); //** Utilizamos este estado para que lo haga con la fecha actual */
    const [ dateEnd, setDateEnd ] = useState( nowPlus1.toDate() );

    const [formValues, setFormValues] = useState( initEvent ) //** Este va a ser el estado inicial del formulario */)

    const { notes, title, start, end } = formValues; //** Extraigo las notes y title del formValues, luego extraigo el start y el end */

    useEffect(() => { //** Necesita estar pendiente del activeEvent */
        if ( activeEvent ) { //** Si existe quiero llamar el setFormValues y mandarle el activeEvent */
            setFormValues( activeEvent )
        } else {
            setFormValues( initEvent )
        }
        //** Es una dependencia del useEffect, al igual que el setFormValues y si uno cambia va a volver a iniciar este codigo */
    }, [activeEvent, setFormValues])

    const handleInputChange = ({ target }) => { //** Aqui voy a recibir el evento, pero solo va a ser el target */
        setFormValues({ //** Nuevo objeto que tiene los valores del formValues, se va a cambiar el se esta recibiendo en este evento */
            ...formValues,
            [target.name]: target.value //** Voy a computar el nombre de la propiedad luego viene el target.value como valor de esta propiedad */
        });
    }

    const closeModal = () => { //** Con este cerramos la ventana del modal */
        // TODO: cerrar el modal
        dispatch( uiCloseModal() )
        dispatch( eventClearActiveEvent() )
        setFormValues( initEvent )
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

        if ( momentStart.isSameOrAfter( momentEnd ) ) { //** Fecha de inicio despues de la fecha de inicializacion no lo voy a dejar pasar */
            return Swal.fire('Error','La fecha fin debe de ser mayor a la fecha de inicio', 'error'); //** Mensaje error */
        }

        if (title.trim().length < 2 ) { //** Esto es para evitar que el titulo tenga menos de 2 letras */
            return setTitleValid(false);
        }

        //** Si existe el evento, se dispara el eventStartUpdate, se manda en el nuevo evento, que es lo que tengamos en nuestros formValues */
        if ( activeEvent ) { 
            dispatch ( eventStartUpdate( formValues ) )
        } else { //** En caso contrario disparamos la accion que ya teniamos antes */
        dispatch( eventStartAddNew( formValues, ) ) //** El evento disparado esta en events>events, recibo el formulario */
        }

        setTitleValid(true)
        closeModal();
    } 

    return (
            <Modal
            isOpen={ modalOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
            >
                <h1> { (activeEvent)? 'Editar Evento': 'Nuevo Evento'} </h1>
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
                            className={ `form-control ${ !titleValid && 'is-invalid' } `}
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
                            value={ title } //** El valor del titulo y notas es el title que asignamos arriba en la variable del formValues */
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