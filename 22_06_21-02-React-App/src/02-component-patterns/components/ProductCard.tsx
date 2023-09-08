import { createContext, ReactElement } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css' //** Importamos los estilos y defino ese nombre */

//** Voy a crear el contexto, que este objeto le va a proveer esta informacion a todos los hijos el as es para proveerlo como PCP */
export const ProductContext = createContext({} as ProductContextProps) //** El ultimo lo debo de importar, y el primero deo importarlo(refactoring) */
const { Provider } = ProductContext; //** De ProductContext voy a desestructurar el Provider (Provedor del Context) */

export interface Props { //** Defino las props, para asignarle un className a ProductCard */
  product: Product //** Voy a recibir una property que va a ser product de tipo Product(Definido abajo) */
  //** Debo definirme el children, ? opcional sera ReactElement viene como arreglo para mas de 1 debo importar, es interface */ 
  children?: ReactElement | ReactElement[]
  className?: string //** Asi ya puedo usar el className definido aqui */
}

//** Dentro de ({}) voy a desestructurar el children(que recibo) y product para obligar a recibirlo-Tengo las properties con : para obligar recibirlo props */
export const ProductCard = ({ children, product, className }: Props) => { //** Estan aqui definidas */

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