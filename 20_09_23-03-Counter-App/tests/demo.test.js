describe('Pruebas en el archivo demo.test.js', () => {  //** Simplemente aqui describo el titulo de la prueba */
    
    test('deben de ser iguales los string ', () => { //** Debe de decir lo que estoy probando, tiene un callback */
       
        // 1. Inicializacion
        const mensaje = 'Hola Mundo';
    
        // 2. Estimulo
        const mensaje2 = `Hola Mundo`;
    
        // 3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2); // === Este es el comparador de equidad, osea que sea el mismo //** Este es el lo que queremos que pase */
    })
});