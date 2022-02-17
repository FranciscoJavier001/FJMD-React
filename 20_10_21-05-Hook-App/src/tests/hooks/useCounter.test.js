// No se puede hacer un snpshot porque no hay contenido HTML que evaluar, solo vamos a evaluar la logica

import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';

describe('Pruebas en useCounter', () => {

    test('debe de retornar valores por defecto', () => {
        
        const { result } = renderHook( () =>  useCounter() ); //** Asi renderizamos el hook y desestructuramos el objeto, con el renderHook, que viene del testing-library de testing hooksy recibe un callback y el useCounter que se va a evaluar */

        expect( result.current.counter ).toBe(10); //** Aqui vemos la informacion que tiene el result, porque no estaba inicializado, y en el useCounter el initialState es de 10 */
        expect( typeof result.current.increment ).toBe('function'); //** Asi comparamos si es una funcion de incrementar */
        expect( typeof result.current.decrement ).toBe('function'); //** Asi comparamos si es una funcion de decrementar */
        expect( typeof result.current.reset ).toBe('function'); //** Asi comparamos si es una funcion de reset */
    })

    test('debe de tener el counter en 100', () => { //** El counter lo inicializamos en 100 */
        
        const { result } = renderHook( () =>  useCounter(100) ); //** Aqui le damos la variable para que sea 100, osea renderizamos el counter */

        expect( result.current.counter ).toBe(100); //** Esperamos que sea 100 y si es 100 porque lo declaramos arriba */
    })
    
    test('debe de incrementar el counter en 1', () => { //** Pruebas en las funciones de incrementar*/
        
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current; //** El increment viene del result.current y estamos extrayendo el increment */

        act( () => { //** Esto es para hacer alguna prueba en las funciones, para llamarlas y lo importamos desde react-hooks, este recibe un callback y luego le ponemos lo que queramos */

            increment(); //** Ahora se va a incrementar y espero que su valor sea 101 */
        });

        const { counter } = result.current; //** Aqui le ponemos elvalor del counter que esta en 100, pero como le incrementamos nos da 101 */
        expect( counter ).toBe(101); //** Afirmativo, nos dio 101 */
    })

    test('debe de decrementar el counter en 1', () => { //** Prueba Decremento */
        
        const { result } = renderHook( () => useCounter(100) ); //** Aqui inicializamos el useCounter, su result es de 100, que ya lo renderizamos */
        const { decrement } = result.current; //** Aqui el decrement se va a al result.current que es el result actual y le vamos a pasar la funcion de decrementar */

        act( () => { //** Para inicializar la funcion usamos el act */

            decrement(); //** La funcion que le vamos a pasar */
        });

        const { counter } = result.current; //** Bien, el counter va a tomar el valor del result.current (actual) */
        expect( counter ).toBe(99); //** El valor es de 99 porque le pusimos el decrement */
    })

    test('debe de establecer el valor en 100', () => { //** Vamos a reestablecer */
        
        const { result } = renderHook( () => useCounter(100) ); //** el result en el useCounter debe de ser de 100 */
        const { decrement, reset } = result.current; //** Estos son los parametros que le vamos a pasar */

        act( () => {
            decrement(); //** Ahora mandamos la funcion de decrementar */
            reset(); //** Ahora mandamos la funcion del reset */
        });

        const { counter } = result.current; //** Ahora el counter es el result actual que es 100 porque ya le pasamos la funcion de reset */
        expect( counter ).toBe(100); //** El resultado es 100 porque asi lo estipulamos al hacer el reset */
    })
})
