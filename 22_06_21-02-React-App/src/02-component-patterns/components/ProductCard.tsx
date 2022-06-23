import styles from '../styles/styles.module.css' //** Importamos los estilos y defino ese nombre */
import noImage from '../assets/no-image.jpg' //** Importo la imagen */
import { useState } from 'react'; //** Hooks que uso para el contador */

export const ProductCard = () => { //** rafc */

    const [counter, setCounter] = useState(0) //** Un contador, con useState */
    const increaseBy = ( value: number) => { //** Creo una variable que inc/dec que reciba un valor numerico */
        //** Actualizacion del contador recibe el valor previo, que manda funcion, del valor previo que puede +/- pero no baja de 0 */
        setCounter( prev => Math.max( prev + value, 0 )) 
    }

// console.log(styles); //** Para confirmar que importe los estilos */
  return ( //** Renderizar */
    <div className={ styles.productCard }> {/* Definir la clase de la tarjeta */}
        <img className={ styles.productImg } src="./coffee-mug.png" alt="Coffe Mug" />
        {/* <img className={ styles.productImg } src={ noImage } alt="No Found" /> */}

        <span className={ styles.productDescription }>Coffee Mug</span>

        <div className={ styles.buttonsContainer }> {/* Asi pongo los estilos */}
            <button className={ styles.buttonMinus }
            onClick={ () => increaseBy( -1 ) }> - </button> {/* Funcion al hacer click y decrementa */}
            <div className={ styles.countLabel }> { counter }</div>
            <button className={ styles.buttonAdd }
            onClick={ () => increaseBy( +1 ) }> + </button>{/* Funcion al hacer click y decrementa */}
        </div>
    </div>
  )
}
