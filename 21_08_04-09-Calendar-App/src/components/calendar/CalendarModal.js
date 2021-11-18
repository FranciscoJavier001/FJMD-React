import React, { useState } from 'react'
import moment from 'moment'
import Modal from 'react-modal'; //** Un modal es la ventana donde puedo poner acciones secundarias */
import DateTimePicker from 'react-datetime-picker'; //** Esta es una importacion para el tiempo, para hacerlo mas facil */

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

export const CalendarModal = () => {

    const [ dateStart, setDateStart ] = useState( now.toDate() ) //** Utilizamos este estado para que lo haga con la fecha actual */
    const [ dateEnd, setDateEnd ] = useState( nowPlus1.toDate() ) 

    const closeModal = () => { //** Con este cerramos la ventana del modal */
    
    }

    const handleStartDateChange = ( e ) => { //** Aqui voy a recibir un evento y este sera la fecha */
        setDateStart( e );
        console.log(e);
    }

    const handleEndDateChange = ( e ) => { //** Aqui voy a recibir un evento y este sera la fecha */
        setDateEnd( e );
        console.log(e);
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
                <form className="container">

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
                            className="form-control"
                            placeholder="Título del evento"
                            name="title"
                            autoComplete="off"
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
