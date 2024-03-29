//** Linea 13 y linea 28 elimine el done */
import cloudinary from 'cloudinary'
import { fileUpload } from "../../helpers/fileUpload"

cloudinary.config({ //** Esto es de la documentacion de Cloudinary */
    cloud_name: 'softtek', 
    api_key: '664954558531537', 
    api_secret: 'AyCFmD78k1M71FcPst_83rG0v40',
  });

describe('Pruebas en fileUpload', () => {

    //** Si borra el archivo, pero me da falla al subirlo porque checa que ya no esta */
    test('debe de cargar un archivo y retornar el URL', async() => { //** Aqui puedo hacer el async, y le digo que aguante hasta que llame al done, elimine el done como en la parte de abajo */
        
        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png') //** fetch me regresa una promesa y el await es como aguantala y copiamos el url de la imagen */
        const blob = await resp.blob()

        const file = new File([blob], 'foto.png')
        const url = await fileUpload( file )

        expect( typeof url ).toBe('string')

        //** Borrar imagen por id */
        const segments = url.split('/')
        const imageId = segments[ segments.length -1 ].replace('.png', '')

        cloudinary.v2.api.delete_resources(imageId, {}, ()=> { //** Para borrar */
            // done(); //** Prueba fallo, asi que mande alv el done del async de arriba para evitar el error, y me funciona */
        });
    })

    test('debe de retornar un error', async() => { //** Aqui puedo hacer el async */

        const file = new File([], 'foto.png')
        const url = await fileUpload( file )

        expect( url ).toBe( null )
    })
})
