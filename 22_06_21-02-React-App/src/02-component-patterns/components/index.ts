//** Para no tener un monton de importaciones */
import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

export { ProductButtons } from './ProductButtons';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';

// export { ProductCard } from './ProductCard';

//** Vamos a exportarlo como un objeto, va a tener una interface que sea ProductCard que va a tener la intrface de PCHOCP */
//** En JS todos son objetos menos los primitivos */
//** A este objeto voy a asignarle nuevas propiedades de PCHOC */
export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, { //** Exporto el PCHOCP  */
    Title: ProductTitle, //** Le asigno estas propiedades y a donde va a apuntar-Capitalizados porque son componentes */
    Image: ProductImage,
    Buttons: ProductButtons
})

export default ProductCard; //** Vamos a exportarlo*/