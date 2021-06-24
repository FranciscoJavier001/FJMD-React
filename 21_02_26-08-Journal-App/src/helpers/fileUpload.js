
//** Va a exportar una funcion que se llame fileUpload, que va a ser una tarea asincrona que necesito el archivo a subir y voy a retornar el url de la imagen */
export const fileUpload = async ( file ) => {
    //** Necesito el url del cloudinary */
    const cloudUrl = 'https://api.cloudinary.com/v1_1/softtek/upload'
    //** Ahora necesito crearme el formData para enviarlo al Cloudinary */
    const formData = new FormData() //** JavaScript ya nos ayuda con lo que necesitamos esto va a ser igual a un nuevo FormData */
    //** Ahora necesito añadile los campos del file y del upload_preset */
    formData.append('upload_preset', 'react-journal') //** (Que hace el append???), bueno el argumento va a ser lo que tenemos despues a donde apunta */
    formData.append('file', file)//** Ahora otro que va a apuntar al file que estamos subiendo como argumento */

    //** Es probable que falle, entonces le ponemos un try y un catch */
    try {
        const resp = await fetch( cloudUrl, {//** Const respuesta para hacer peticiones con el fetch y voy a mandar el cloudUrl que va a ser donde hago la peticion, pero es un post asi que el segundo argumento va a ser la inicializacion del fetch  */
        //** Osea que hay que ponerle aqui que el method tiene que ser un post */
        method: 'POST',
        body: formData //** Y el body que va a tener va a ser el formData */
        })

        //** Vamos a ponerle un if */
        if ( resp.ok ) {
            const cloudResp = await resp.json() //** Si se hizo correcto voy a ponerle cloudResp va a ser igual al await de la resp.json */
            return cloudResp.secure_url //** En este punto significa que nos regreso una respuesta del secureUrl */
        } else { //** Y en caso contrario pues que nos rerorne un error */
            throw await resp.json() //** Pongo un throw await de la resp.json */
        }
    } catch (err) {
        throw err //** Asi vemos si algo salio mal */
    }
}