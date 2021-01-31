//** Recuerda que empieza con mayusculas porque es un HighOrderComponent */
//** Voy a hacer una importacion de createContext */
import { createContext } from 'react'

export const AuthContext =  createContext(); //** Voy a crear una constante que se llame AuthContext donde no le voy a mandar ningun argumento y lo voy a importar */

//** Este lo voy a colocar en HeroesApp ya que ahi empieza a desplegarse toda la aplicacion y aqui voy a poner el HighOrderComponent que va a ser el AuthContext */