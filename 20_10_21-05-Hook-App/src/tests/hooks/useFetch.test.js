import { renderHook } from "@testing-library/react-hooks";
import { useFetch } from "../../hooks/useFetch";


describe('Pruebas en useFetch', () => {

    test('debe de retornar la información por defecto', () => {
        
        const { result } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') ); //** Vamos a etraer el result, y el useFetch necesita un URL */

        const { data, loading, error } = result.current; //** Vamos a desestructurar el valor por defecto que regresa el result, esto es sincrono, primero se va a resolver esto antes que el useFetch lo resuelva */
        
        expect( data ).toBe(null); //** Estos son los valores por defecto que creamos en el useFetch */
        expect( loading ).toBe(true);
        expect( error ).toBe(null);
    });

    test('debe de tener la info deseada, loading false, error false', async() => { 
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://www.breakingbadapi.com/api/quotes/1') ); //** Hacemos el llamado al API, el waitForNextUpdate nos regresa una promesa, por eso debe ser async esta funcion */
        await waitForNextUpdate(); //** Primero que haga el update luego extraemos los datos del result que son la data, loading y el error */

        const { data, loading, error } = result.current;

        expect( data.length ).toBe(1); //** Que la data me regrese 1 arreglo */
        expect( loading ).toBe( false ); //** Que se termine de cargar */
        expect( error ).toBe( null ); //** Que el error sea null */
    })

    test('debe de manejar el error', async() => { //** Asi manejamos el catch */
        
        const { result, waitForNextUpdate } = renderHook( () => useFetch('https://reqres.in/apid/users?page=2') ); //** Este es un API de pruebas que maneja la excepcion */
        await waitForNextUpdate(); //** Esperamos el update */

        const { data, loading, error } = result.current; //** Extraemos la data del result que maneja desde el useFetch, pero cuando me da un error */

        expect( data ).toBe(null); //** Es lo que esperamos con el error, estos 3 parametros */
        expect( loading ).toBe( false );
        expect( error ).toBe( 'No se pudo cargar la info' );
    })
})
