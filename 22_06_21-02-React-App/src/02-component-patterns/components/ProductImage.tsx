import { useContext } from "react";
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css' //** Importamos los estilos y defino ese nombre */
import noImage from '../assets/no-image.jpg' //** Importo la imagen porque aqui es donde la utilizo */

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