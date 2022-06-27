import { useContext } from 'react'
import { ProductContext } from './ProductCard'

import styles from '../styles/styles.module.css' //** Importamos los estilos y defino ese nombre */

export const ProductButtons = () => { //** Exporto esta funcion para poderla usar en ShoppingPage */

//** PB se encuentra dentro del PC */
const { increaseBy, counter } = useContext( ProductContext ) //** Desestructuro lo que necesito-Contexto viene de ProducContext */
  
    return ( //** Aqui debo retornar un JSX */)
      <div className={ styles.buttonsContainer }> {/* Asi pongo los estilos */}
          <button className={ styles.buttonMinus }
          onClick={ () => increaseBy( -1 ) }> - </button> {/* Funcion al hacer click y decrementa */}
          <div className={ styles.countLabel }> { counter }</div>
          <button className={ styles.buttonAdd }
          onClick={ () => increaseBy( +1 ) }> + </button>{/* Funcion al hacer click y decrementa */}
      </div>
    )
}