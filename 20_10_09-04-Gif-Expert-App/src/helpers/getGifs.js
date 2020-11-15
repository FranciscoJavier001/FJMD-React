export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=tfRgcwv7vxAyL3vMQapLiD0NQw3148nH`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => { /** Nos envia el arreglo con los parametros solicitdos */
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
