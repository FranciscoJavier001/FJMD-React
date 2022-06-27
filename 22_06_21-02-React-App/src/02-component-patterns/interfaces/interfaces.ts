//** Refactoring de ProductCard a Interfaces, recuerda exportarlas todas, exportar lo que me de falla */
import { ReactElement } from "react";

export interface ProductCardProps { //** Aqui voy a definir las properties, le cambie el nombre */
    product: Product //** Voy a recibir una property que va a ser product de tipo Product(Definido abajo) */
    //** Debo definirme el children, ? opcional sera ReactElement viene como arreglo para mas de 1 debo importar, es interface */ 
    children?: ReactElement | ReactElement[]
}
  
export interface Product { //** Voy a definir las caracteristicas del Objeto */
    id: string;
    title: string;
    img?: string //** ?-Para decirle que es opcional */
}
  
  //** Voy a definir la interface del ProductContext */
export interface ProductContextProps {
    counter: number;
    increaseBy: ( value: number ) => void; //** Funcion de tipo numero que no regresa nada */
    product : Product; //** product, recibe un Product */
}

export interface ProductCardHOCProps { //** Voy a definirme la misma interface del index.ts */
    ({ children, product }: ProductCardProps ): JSX.Element //** Viene del export default, para indicar el retorno son : */
    Title: ({ title }: { title?: string }) => JSX.Element //** Deje cursor sobre title, quito undefine */
    Image: ({ img }: { img?: string }) => JSX.Element
    Buttons: () => JSX.Element
}