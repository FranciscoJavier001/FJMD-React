export const types = {

    uiOpenModal: '[ui] Open modal',
    uiCloseModal: '[ui] Close modal',

    eventSetActive: '[event] Set Active',
    eventAddNew: '[event] Add new',
    eventClearActiveEvent: '[event] Clear active event',
    eventUpdated: '[event] Event updated', //** Accion en base de datos y si responde SI dispararo esta accion */
    eventDeleted: '[event] Event deleted',

    //** Voy a definir todos los types que voy a necesitar para la autentificacion */
    authChecking:'[auth] Checking login state', //** Ver estado del usuario */
    authCheckingFinish:'[auth] Finish checking login state', //** Finalizada la accion si esta autentificado */
    authStartLogin:'[auth] Start login', //** Comienzo asyncrono para realizar el posteo */
    authLogin:'[auth] Login', //** Logeado para establecer info del usuario */
    authStartRegister:'[auth] Start Register', //** Comienzo para Registro de nuevo usuario */
    authStartTokenRenew:'[auth] Start token renew', //** Nuevo Token */
    authLogout:'[auth] Logout', //** Salida */
}