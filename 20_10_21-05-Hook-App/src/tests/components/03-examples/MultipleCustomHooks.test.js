import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch'); //** Este esta haciendo la simulacion del useFetch */
jest.mock('../../../hooks/useCounter'); //** Aqui vamos a hacer la simulacion del useCounter */

describe('Pruebas en <MultipleCustomHooks />', () => {

    useCounter.mockReturnValue({  //** No me importa la implementacion, me importa los valores que regresa el customHook que en este caso es el useCounter */
        counter: 10, //** Extraemos el counter */
        increment: () => {} //** Aqui recibe una funcion para que haga el match con el snapshot */
    });

    
    test('debe de mostrarse correctamente', () => { //** Debe de hacer match con el snapshot */

        useFetch.mockReturnValue({  //** Al importarlo debemos de implementarlo para que no nos de ningun error */
            data: null, //** Me regresa lo que manda cuando se inicializa, porque esto es lo que retorna el useFetch */
            loading: true,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> ); //** Para esto importamos react y el shallow, llamamos al componente y no recibe ningun argumento */
        expect( wrapper ).toMatchSnapshot(); //** Hacemos el expect del wrapper con el toMathSnapshot, llamando esta funcion */
    })

    test('should debe de mostrar la información', () => { //** Cuando ya tenemos la frase y el autor de la frase de breaking bad */
        
        useFetch.mockReturnValue({ //** Para esto usamos dos componentes, empezamos con el useFetch, cuando pasamos esto por un mock es decir, no me importa la implementacion, solamente el resultado, y este lo pasamos por el jest.mock y le pasamos el path */
            data: [{ //** Dentro de la data viene un objeto */
                author: 'Francisco',
                quote: 'Hola Mundo'
            }],
            loading: false, //** Asi funciona normalmente */
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks /> ); //** Despues lo mando llamar para compararlo con el snapshot */

        expect( wrapper.find('.alert').exists() ).toBe( false ); //** Asi se buscan las clases, aqui ponemos que no deberia existir por eso el false */
        expect( wrapper.find('.mb-0').text().trim() ).toBe( 'Hola Mundo' ); //** Esto es para compararlo con el test de mostrar informacion */
        expect( wrapper.find('footer').text().trim() ).toBe( 'Francisco' ); //** Aqui es el footer para que tenga el author, como es etiqueta no hace falta el ". / #" */
    })
})


