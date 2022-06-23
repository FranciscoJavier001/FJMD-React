
import { lazy, LazyExoticComponent } from "react"; 
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JSXComponent = () => JSX.Element //** Esta es la firma de un FC */

interface Route {
    to: string;
    path: string;
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent; //** Para saber que tipo es dejo cursor, copio, anexo final(arriba) */
    name: string;
}

//** Componente cargado bajo demanda, estos ya los exportamos - Con el comentario le puedo cambiar el nombre */
const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../01-lazyload/pages/LazyPage1'))
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../01-lazyload/pages/LazyPage2'))
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [ //** Esta ruta es un arreglo de Route */
    {
        to: '/lazy1',
        path: '/lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        to: '/lazy2',
        path: '/lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/lazy3',
        path: '/lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    }
]