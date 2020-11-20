import { getGifs } from '../../helpers/getGifs'

describe('Pruebas con getGifs Fetch', () => {
    test('Debe de traer 50 elementos', async() => { //** Para utilizar el await hay que usar el async() y aqui vemos que si le mandamos algo nos debe regresar 50 elementos */
        
        const gifs = await getGifs('Death Note') //** Por eso pedimos algo, parq que nos regrese algo */

        expect(gifs.length).toBe(50)
    })

    describe('Pruebas con getGifs Fetch', () => {
        test('Debe de traer 50 elementos', async() => { //** Aqui vemos que no mande nada si no mandamos ningun argumento */
            
            const gifs = await getGifs('')
            // console.log(gifs);
    
            expect(gifs.length).toBe(0)
        })
    })
})