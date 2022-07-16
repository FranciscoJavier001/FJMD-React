//**_______________________________________________________________________________________________________________________________________________*/
//** Este me permite crear un contexto en toda la aplicacion - La primera mayuscula porque es un HOC */
import { createContext } from 'react'

export const AuthContext =  createContext(); //** Esta en src/HeroesApp y components/login/LoginScreen, lo utilizo con el dispatch */