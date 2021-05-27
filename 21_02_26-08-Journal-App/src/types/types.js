

export const types = {
    //** Aqui voy a definir los tipos */

    login: '[Auth] Login', //** Este apunta al Auth Login, */
    logout: '[Auth] Logout', //** Este apunta al Auth LogOut, */

    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Remove Error',

    uiStartLoading: '[UI] Start loading',
    uiFinishLoading: '[UI] Finish loading',

    notesAddNew: '[Notes] New note', //** Entre el cuadrado voy a indicar cual es el reducer al cual reacciona esta accion, primero le ponemos quien es el responsable de la accion y en este caso es el notes */
    notesActive: '[Notes] Set active note', //** Me va a indicar cual es la nota activa */
    notesLoad: '[Notes] Load note', //** Esta va a ser para cargar todas las notas */
    notesUpdated: '[Notes] Update note',
    notesFileUrl: '[Notes] Update image url',
    notesDelete: '[Notes] Delete note',
    notesLogoutCleaning: '[Notes] Logout Cleaning',
    //** Teniendo las Accones voy a crear en el la carpeta actions el notes.js */
}