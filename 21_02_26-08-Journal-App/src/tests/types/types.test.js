import { types } from "../../types/types"

describe('Pruebas con nuestros tipos', () => {
    
    test('debe de tener estos tipos', () => {
        
        expect( types ).toEqual({ //** Se va a pegar todo el objeto de types */
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
        })
    })
    
})
