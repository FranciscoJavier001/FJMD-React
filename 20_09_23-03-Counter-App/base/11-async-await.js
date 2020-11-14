

export const getImagen = async() => { 

    try{
        const apiKey = 'tfRgcwv7vxAyL3vMQapLiD0NQw3148nH'; //Creo apiKey
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`); //** Giphy */
        const {data} = await resp.json();  //** Le pido una respuesta */

        const {url} = data.images.original; 

        return url;

    } catch (err){
        // manejo del error
        // console.log(err);
        return 'No existe';
    }
}

getImagen();