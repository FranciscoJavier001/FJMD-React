import { ReactElement, createContext, useContext } from 'react';

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

//** Voy a definir la interface del ProductContext */
interface ProductContextProps {
  counter: number;
  increaseBy: ( value: number ) => void; //** Funcion de tipo numero que no regresa nada */
  product : Product; //** product, recibe un Product */
}

//** Voy a crear el contexto, que este objeto le va a proveer esta informacion a todos los hijos el as es para proveerlo como PCP */
const ProductContext = createContext({} as ProductContextProps)
const { Provider } = ProductContext; //** De ProductContext voy a desestructurar el Provider (Provedor del Context) */

export const ProductImage = ({ img = '' }) => { //** Desestructuro el arreglo y mando el img como string vacio para img opcional */

    const { product } = useContext( ProductContext ) //** useContext me va a regresar el contexto, lo voy a usar para el counter */
    let imgToShow: string; //** Voy a definir una variable que va a ser la imagen que voy a mostrar */

    if ( img ) { //** Si, recibo img */
      imgToShow = img; //** iTS va a ser igual a img, la referenciamos */
    } else if ( product.img ) { //** Si hay una imagen muestro una imagen del producto */
      imgToShow = product.img; //** iTS la referenciamos */
    } else { //** Si no hay nada, muestro la imagen por defecto */
      imgToShow = noImage; //** La referencio */}
    }

  return( //** Aqui debo retornar un JSX */
    <img className={ styles.productImg } src={ imgToShow }alt="Product" /> //** Estilos de clase y el src viene de iTS */
  )
}

//** Exporto la funcion, para usarlo en ShoppingPage, que recibe el title : titleString es opcional */
export const ProductTitle = ({ title }: {title?: string }) => {

  const { product } = useContext( ProductContext ) //** Desestructuro el product del PC */
  return(
    //** Regreso el componente, si viene el title muestra el title en caso contartio muestra el titulo definido por default */
    <h3 className={ styles.productDescription }>{ title ? title : product.title }</h3> 
  )
}

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

//** Dentro de ({}) voy a desestructurar el children(que recibo) y product para obligar a recibirlo-Tengo las properties con : para obligar recibirlo props */
export const ProductCard = ({ children, product }: Props) => {

  const { counter, increaseBy } = useProduct() //** Solo mando llamar el Hook - Desestructuro lo que retorna entre llaves, defino en PB L61 */

  // console.log(styles); //** Para confirmar que importe los estilos */

  return ( //** Renderizar */
    /* Se que aqui ya viene todos los hijos, asi que aqui voy a poner el Provider defindo arriba)- Es HOC */
    <Provider value={{ //** Value es la informacion que reciben los hijos */
      counter,
      increaseBy,
      product
    }}>

    
    <div className={ styles.productCard }> {/* Definir la clase de la tarjeta */}

      { children } {/* Voy a imprimir el Children */}

    </div>
    </Provider>
  )
}

ProductCard.Title = ProductTitle; //** Este va a apuntar al componente que exportamos */
ProductCard.Image = ProductImage; //** Este va a apuntar al componente que exportamos */
ProductCard.Buttons = ProductButtons; //** Este va a apuntar al componente que exportamos */