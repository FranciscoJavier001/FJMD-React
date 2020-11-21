import { useFetchGifs } from '../../hooks/useFetchGifs'
// Para hacer pruebas con los hooks react-hooks-testing-library.com
import {renderHook} from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe de retornar el estado inicial', async() => {

        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('Death Note')) /** Crea un componente virtual y ahi crea nuestro customHook, vamos a mandar una funcion anonima y ahi poner el hook, pero ya esta desestructurado */
        const {data, loading} = result.current/** El valor que tenga el customHook, y el result es el valor que tiene ahorita el customHook */

        await waitForNextUpdate();
        // console.log(resp);
        // const {data, loading} = useFetchGifs('Death Note')
        
        // console.log(data, loading);

        expect(data).toEqual([])
        expect(loading).toBe(true)
    });

    test('Debe de retornar un arreglo de imgs y el loading en false', async() => {
        const {result, waitForNextUpdate} = renderHook(()=> useFetchGifs('Death Note')); //** waitForNextUpdate, me va a decir cuando sucedio un cambio en el estado de nuestro customHook */
        await waitForNextUpdate(); //** Asi esperamos que se resuelva la promesa */
        const {data, loading} = result.current;

        // console.log(data.length);

        expect(data.length).toBe(50);
        expect(loading).toBe(false);
    })
    
    
})
