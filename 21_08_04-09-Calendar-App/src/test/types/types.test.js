//**_______________________________________________________________________________________________________________________________________________*/
import { types } from "../../types/types"

describe('Pruebas en Types', () => {
    
    test('los types deben de ser iguales', () => {
        
        expect( types ).toEqual({ //** Es para hacer que sea igual a ese objeto */
                
            uiOpenModal: '[ui] Open modal',
            uiCloseModal: '[ui] Close modal',
            
            eventSetActive: '[event] Set Active', 
            eventLogout: '[event] Logout event', 

            eventStartAddNew: '[event] Start add new',
            eventAddNew: '[event] Add new',
            eventClearActiveEvent: '[event] Clear active event',
            eventUpdated: '[event] Event updated',
            eventDeleted: '[event] Event deleted',
            eventLoaded: '[event] Events loaded',

            authCheckingFinish:'[auth] Finish checking login state',
            authStartLogin:'[auth] Start login',
            authLogin:'[auth] Login',
            authStartRegister:'[auth] Start Register',
            authStartTokenRenew:'[auth] Start token renew',
            authLogout:'[auth] Logout',
        })
    })
})
