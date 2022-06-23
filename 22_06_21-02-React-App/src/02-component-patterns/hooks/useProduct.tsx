import { useState } from 'react';

export const useProduct = () => {

    const [counter, setCounter] = useState(0) //** Importo uS y 1.Contador, 2.Nuevo contador, 3.Valor Inicial */

    const increaseBy = ( value: number) => { //** Creo una variable que inc/dec que reciba un valor numerico */
        //** Actualizacion del contador recibe el valor previo, que manda funcion, del valor previo que puede +/- pero no baja de 0 */
        setCounter( prev => Math.max( prev + value, 0 )) 
    }

  return {
    counter,
    increaseBy
  }
}