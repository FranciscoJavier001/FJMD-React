import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css' //** Importamos los estilos y defino ese nombre */
import noImage from '../assets/no-image.jpg' //** Importo la imagen */

interface Props { //** Aqui voy a definir las properties */
  product: Product //** Voy a recibir una property que va a ser product de tipo Product(Definido abajo) */
}

interface Product { //** Voy a definir las caracteristicas del Objeto */
  id: string;
  title: string;
  img?: string //** ?-Para decirle que es opcional */
}

//** Dentro de los ({}) voy a desestructirar el product para obligar a recibirlo -Tengo las properties con : puedo modificar las props */
export const ProductCard = ({ product }: Props) => {

    const { counter, increaseBy } = useProduct() //** Solo mando llamar el Hook - Desestructuro lo que retorna entre llaves */

// console.log(styles); //** Para confirmar que importe los estilos */
  return ( //** Renderizar */
    <div className={ styles.productCard }> {/* Definir la clase de la tarjeta */}

        {/* Si en product.img viene product.img usa esa, si no viene nada entonces usa la imagen vacia */}
        <img className={ styles.productImg } src={ product.img ? product.img : noImage } alt="Coffee Mug" />

        <span className={ styles.productDescription }>{ product.title }</span> {/* Desestructuro el nombre del titulo del producto */}

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