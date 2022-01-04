//** ________________________________________________________________________________________________________________________________________________ */
//** Esto va a estar en los casos */
export const types = {

    //** reducers>uiReducer */
    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    //** Estos types estan definidos en actions>events y de aqui los importamos */
    eventSetActive: '[event] Set Active', 
    eventAddNew: '[event] Add new', //** Crea un nuevo evento */
    eventClearActiveEvent: '[event] Clear active event',
    eventUpdated: '[event] Event updated', //** Accion en base de datos y si responde SI dispararo esta accion */
    eventDeleted: '[event] Event deleted', //** Accion que elimina el evento de la BD */

    //** Voy a definir todos los types que voy a necesitar para la autentificacion */
    authCheckingFinish:'[auth] Finish checking login state', //** Finalizada la accion confirmo si o no esta autentificado */
    authStartLogin:'[auth] Start login', //** Comienzo asyncrono para realizar el posteo */
    authLogin:'[auth] Login', //** Logeado para establecer info del usuario */
    authStartRegister:'[auth] Start Register', //** Comienzo para Registro de nuevo usuario */
    authStartTokenRenew:'[auth] Start token renew', //** Nuevo Token */
    authLogout:'[auth] Logout', //** Salida Syncrona */
}