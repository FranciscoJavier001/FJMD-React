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

export const ProductImage = ({ img = '' }) => { //** Desestructuro el arreglo y mando el img como string vacio para img opcional */
  return( //** Aqui debo retornar un JSX */
  /* Si en img viene img usa esa, si no viene nada entonces usa la imagen vacia */
    <img className={ styles.productImg } src={ img ? img : noImage }alt="Product" />
  )
}

export const ProductTittle = ({ title }: { title: string }) => { //** Desestructuro el arreglo y mando el title obligatorio */
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

//** Dentro de los ({}) voy a desestructirar el product para obligar a recibirlo -Tengo las properties con : puedo modificar las props */
export const ProductCard = ({ product }: Props) => {

  const { counter, increaseBy } = useProduct() //** Solo mando llamar el Hook - Desestructuro lo que retorna entre llaves, defino en PB L61 */

  // console.log(styles); //** Para confirmar que importe los estilos */

  return ( //** Renderizar */
    <div className={ styles.productCard }> {/* Definir la clase de la tarjeta */}

        <ProductImage img={ product.img } /> {/* Renderizamos la imagen y mando el product.img */}

        <ProductTittle title={ product.title } />

        <ProductButtons //** Componente a Renderizar que necesito proveer los requerimientos que necesito */
          increaseBy={ increaseBy } //** 1. La Funcion que se va a llamar y la que se va a retornar */
          counter={ counter } //** 2. El Counter que se va a llamar y que se va a retornar */
          /> 

    </div>
  )
}