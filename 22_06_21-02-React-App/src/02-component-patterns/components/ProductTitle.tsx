import { useContext } from "react"
import { ProductContext } from "./ProductCard"

import styles from '../styles/styles.module.css' //** Importamos los estilos y defino ese nombre */

//** Exporto la funcion, para usarlo en ShoppingPage, que recibe el title : titleString es opcional */
export const ProductTitle = ({ title }: {title?: string }) => {

    const { product } = useContext( ProductContext ) //** Desestructuro el product del PC */
    return(
      //** Regreso el componente, si viene el title muestra el title en caso contartio muestra el titulo definido por default */
      <h3 className={ styles.productDescription }>{ title ? title : product.title }</h3> 
    )
}