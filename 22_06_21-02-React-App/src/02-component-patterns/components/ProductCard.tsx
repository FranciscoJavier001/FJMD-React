import { createContext } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css' //** Importamos los estilos y defino ese nombre */

//** Voy a crear el contexto, que este objeto le va a proveer esta informacion a todos los hijos el as es para proveerlo como PCP */
export const ProductContext = createContext({} as ProductContextProps) //** El ultimo lo debo de importar, y el primero deo importarlo(refactoring) */
const { Provider } = ProductContext; //** De ProductContext voy a desestructurar el Provider (Provedor del Context) */

//** Dentro de ({}) voy a desestructurar el children(que recibo) y product para obligar a recibirlo-Tengo las properties con : para obligar recibirlo props */
export const ProductCard = ({ children, product }: ProductCardProps) => { //** Tengo que importar las props, le cambie el nombre en interfaces.ts */

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