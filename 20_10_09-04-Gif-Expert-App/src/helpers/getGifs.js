export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=tfRgcwv7vxAyL3vMQapLiD0NQw3148nH`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => { /** Nos envia el arreglo con los parametros solicitdos */
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    // console.log(gifs); //** Bien, aqui se ponia para ver que arreglo esta regresando, aqui se inicializaron para que se mandara la respuesta */

    return gifs;
    
}
