// No se puede hacer un snpshot porque no hay contenido HTML que evaluar, solo vamos a evaluar la logica

import { renderHook, act } from '@testing-library/react-hooks';
import { useCounter } from '../../hooks/useCounter';


describe('Pruebas en useCounter', () => {

    test('debe de retornar valores por defecto', () => {
        
        const { result } = renderHook( () =>  useCounter() ); //** Asi renderizamos el hook y desestructuramos el objeto, con el renderHook, que viene del testing-library de testing hooksy recibe un callback y el useCounter que se va a evaluar */

        expect( result.current.counter ).toBe(10); //** Aqui vemos la informacion que tiene el result, porque no estaba inicializado, y en el useCounter el initialState es de 10 */
        expect( typeof result.current.increment ).toBe('function'); //** Asi comparamos si es una funcion */
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');

    })

    test('debe de tener el counter en 100', () => { //** Iniciamos el contador */
        
        const { result } = renderHook( () =>  useCounter(100) );

        expect( result.current.counter ).toBe(100);

    })
    
    test('debe de incrementar el counter en 1', () => { //** Pruebas en las funciones */
        
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;

        act( () => {

            increment();
        });

        const { counter } = result.current;
        expect( counter ).toBe(101);

    })

    test('debe de decrementar el counter en 1', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {

            decrement();
        });

        const { counter } = result.current;
        expect( counter ).toBe(99);

    })

    test('debe de establecer el valor en 100', () => {
        
        const { result } = renderHook( () => useCounter(100) );
        const { decrement, reset } = result.current;

        act( () => {
            
            decrement();
            reset();
        });

        const { counter } = result.current;
        expect( counter ).toBe(100);

    })
    

    
})
