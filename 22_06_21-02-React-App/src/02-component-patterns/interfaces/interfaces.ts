//** Refactoring de ProductCard a Interfaces, recuerda exportarlas todas, exportar lo que me de falla */
import { ReactElement } from "react";
import { Props as ProductCardProps } from "../components/ProductCard"; //** Modifico el nombre, asi las renombro aqui */

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
    //** Desestructuro children y product usarlos, son Props(cambie nombre) y vinenen de ProductCard y retornan el tipo JSX... */
    ({ children, product }: ProductCardProps ): JSX.Element //** Indica el retorno son : */
    Title: ({ title }: { title?: string }) => JSX.Element //** Deje cursor sobre title, quito undefine */
    Image: ({ img }: { img?: string }) => JSX.Element
    Buttons: () => JSX.Element
}