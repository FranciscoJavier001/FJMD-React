import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css' //** Importamos los estilos y defino ese nombre */
import noImage from '../assets/no-image.jpg' //** Importo la imagen */

export const ProductCard = () => { //** rafc */

    const { counter, increaseBy } = useProduct() //** Solo mando llamar el Hook - Desestructuro lo que retorna entre llaves */

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
