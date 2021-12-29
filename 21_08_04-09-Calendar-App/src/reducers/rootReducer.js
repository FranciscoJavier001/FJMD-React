import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { calendarReducer } from './calendarReducer';

import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers({
    ui: uiReducer,
    calendar: calendarReducer, //** Con este tenemos nuestro nuevo state en el reducer */
    auth: authReducer //** Importado desde reducers>authReducer, lo tengo Redux>State>auth>checking -Respuesta BD- */
})