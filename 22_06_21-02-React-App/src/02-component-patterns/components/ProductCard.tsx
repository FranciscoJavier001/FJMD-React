import { ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css' //** Importamos los estilos y defino ese nombre */
import noImage from '../assets/no-image.jpg' //** Importo la imagen */

interface Props { //** Aqui voy a definir las properties */
  product: Product //** Voy a recibir una property que va a ser product de tipo Product(Definido abajo) */
  //** Debo definirme el children, ? opcional sera ReactElement viene como arreglo para mas de 1 debo importar, es interface */ 
  children?: ReactElement | ReactElement[]
}

interface Product { //** Voy a definir las caracteristicas del Objeto */
  id: string;
  title: string;
  img?: string //** ?-Para decirle que es opcional */
}

export const ProductImage = ({ img = '' }) => { //** Desestructuro el arreglo y mando el img como string vacio para img opcional */
  return( //** Aqui debo retornar un JSX */
  /* Si en img viene img usa esa, si no viene nada entonces usa la imagen vacia */
    <img className={ styles.productImg } src={ img ? img : noImage }alt="Product" />
  )
}

export const ProductTitle = ({ title }: { title: string }) => { //** Desestructuro el arreglo y mando el title obligatorio */
  return(
    <h3 className={ styles.productTitle }>{ title }</h3> //** Para que mande el titulo(span) */
  )
}

interface ProductButtonsProps {
  increaseBy: (value: number) => void; //** : Defino una funcion que recibe un valor numerico que no regresa nada */
  counter: number; //** Defino una variable que va a ser de valor numerico */
}

//** Desestructuro el arreglo para usarlo abajo y : paso interface que necesito recibir aqui para utilizar y quitar fallas */
export const ProductButtons = ({ increaseBy, counter }: ProductButtonsProps) => {
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

//** Dentro de ({}) voy a desestructurar el children(que recibo) y product para obligar a recibirlo-Tengo las properties con : para obligar recibirlo props */
export const ProductCard = ({ children, product }: Props) => {

  const { counter, increaseBy } = useProduct() //** Solo mando llamar el Hook - Desestructuro lo que retorna entre llaves, defino en PB L61 */

  // console.log(styles); //** Para confirmar que importe los estilos */

  return ( //** Renderizar */
    <div className={ styles.productCard }> {/* Definir la clase de la tarjeta */}

      { children } {/* Voy a imprimir el Children */}

    </div>
  )
}

ProductCard.Title = ProductTitle; //** Este va a apuntar al componente que exportamos */
ProductCard.Image = ProductImage; //** Este va a apuntar al componente que exportamos */
ProductCard.Buttons = ProductButtons; //** Este va a apuntar al componente que exportamos */