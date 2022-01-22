//**_______________________________________________________________________________________________________________________________________________*/
import { uiReducer } from "../../reducers/uiReducer"
import { uiCloseModal, uiOpenModal } from '../../actions/ui'

const initState = { //** Estado inicial, va a ser igual a un objeto */
    modalOpen: false //** Este es el estado inicial */
}
describe('Pruebas en uiReducer', () => {
    
    test('debe de retornar el estado por defecto', () => {
        
        //** Voy a tomar el estado del uiReducer y le voy a mandar el initState y la accion a evaluar que es un objeto vacio */
        const state = uiReducer( initState, {} )
        expect( state ).toEqual( initState ) //** Espero que el state sea igual al initState */
    })
    
    test('debe de abrir y cerrar el modal', () => {
        
        const modalOpen = uiOpenModal() //** Creo una constante llamada ModalOpen, que recibe la accion uiOpenModal */
        //** Mando la accion al reducer en una constante llamada state que es igual al uiReducer, tiene el initState y mandamos el ModalOpen  */
        const state = uiReducer( initState, modalOpen )

        // console.log(state); //** Manda el modal en true */

        expect( state ).toEqual({ modalOpen: true }) //** Espero que el state tenga el modalOpen en true que esta dentro del objeto */

        const modalClose = uiCloseModal() //** ModalClose recive la accion del uiCloseModal */
        //** stateClose es igual al uiReducer, mando el estado anterior y la accion que es modalClose */
        const stateClose = uiReducer( state, modalClose) 

        // console.log(stateClose); //** Esta en false */
        expect( stateClose ).toEqual({ modalOpen: false }) //** Que el stateClose sea igual al ModelOpen en false */
    })
})