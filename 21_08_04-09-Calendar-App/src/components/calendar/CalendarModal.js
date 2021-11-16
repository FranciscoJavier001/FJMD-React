import React, { useState } from 'react'
import Modal from 'react-modal'; //** Un modal es la ventana donde puedo poner acciones secundarias */

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

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true);

    const closeModal = () => { //** Con este cerramos la ventana del modal */
        setIsOpen( false )
    }
    return (
            <Modal
            isOpen={ isOpen }
            onRequestClose={ closeModal }
            style={ customStyles }
            closeTimeoutMS={ 200 }
            className="modal"
            overlayClassName="modal-fondo"
            >
                <h1>Hola Mundo</h1>
                <hr />
                <span>Hola de nuevo...</span>

        </Modal>
    )
}
