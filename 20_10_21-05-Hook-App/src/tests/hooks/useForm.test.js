import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";


describe('Pruebas en useForm', () => {

    const initialForm = { //** Con esto inicializamos el formulario, este es igual que el initialState, deben ser estos los values */
        name: 'Francisco',
        email: 'user.streaming.001@gmail.com'
    };


    test('debe de regresar un formulario por defecto', () => {
        
        const { result } = renderHook( () => useForm(initialForm) ); //** Extraemos el result del renderHook y vamos a renderizar el useForm, este necesita un valor inicial, asi que este es el initialForm */
        const [ formValues, handleInputChange, reset ] = result.current; //** Hay que confirmar que el formValues sea el objeto, que el segundo sea una funcion igual que el tercero, como es un arreglo vamos a tener el formValues, handleInputChange y reset  */

        expect( formValues ).toEqual( initialForm ); //** Aqui confirmamos que formValues sea igual a initialForm, toEqual es para un objeto */
        expect( typeof handleInputChange ).toBe( 'function' ); //** Aqui confirmamos que esta sea una funcion */
        expect( typeof reset ).toBe( 'function' ); //** Igual aqui confirmamos que esta sea una funcion */
    });

    test('debe de cambiar el valor del formulario (cambiar name)', () => {
        
        const { result } = renderHook( () => useForm(initialForm) ); //** Extraemos el result del renderHook y vamos a renderizar el useForm, este necesita un valor inicial, asi que este es el initialForm */
        const [ , handleInputChange ] = result.current; //** Como es un arreglo, primero ponemos un espacio, porque solo me interesa el segundo */

        act( () => { //** Con esto vamos a probar la funcion */

            handleInputChange({ //** Llamamos el handleInputChange y va a recibir este evento, que contiene un target y dentro del target tiene el name y el value, se define asi porque esta simulando el evento cuando un input hace la modificacion, extraeos el target y del target nos interesa el name y el value, por eso extraemos solamente eso */
                target: {
                    name: 'name',
                    value: 'Pedro'
                }
            });
        });

        const [ formValues ] = result.current; //** Extraemos formValues de la desestructuracion del result.current, este lo inicimos porque ya cambiamos el nombre a pedro en el handleInputChange de arriba  */
        expect( formValues ).toEqual( { ...initialForm, name: 'Pedro' } ); //** Aqui comprobamos que sean los mismos valores, con los ...initilForm nos aseguramos que los demas valores no cambiaron, solo el nombre a pedro */
    });


    test('debe de re-establecer el formulario con RESET', () => {
        
        const { result } = renderHook( () => useForm(initialForm) ); //** Extraemos el result del renderHook y vamos a renderizar el useForm, este necesita un valor inicial, asi que este es el initialForm */
        const [ , handleInputChange, reset ] = result.current; //** Aqui el primero no me interesa, por eso pongo un espacio, el segundo si me interesa porque ahi se van a hacer lo cambios y el tercero es el que vamos a probar con el reset, donde le vamos a poner el nombre de melissa */

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'juan'
                }
            });

            reset();
        });

        const [ formValues ] = result.current; //** El formValues es igual al result.current */
        expect( formValues ).toEqual( initialForm ); //** Espero que el formValues sea igual al initialForm */
    })  
})
