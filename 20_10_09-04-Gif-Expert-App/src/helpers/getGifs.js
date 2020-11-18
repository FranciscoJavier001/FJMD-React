//** Esta en la carpeta helpers y esta carpeta son funciones que hacen un trabajo en especifico, pueden recibir argumentos, los procesan y pueden hacer un return */
// Esta es la peticion de getGifs
//** Lo que esto hace es hace la peticion http, trae las imagenes y las procesa y las retorna */

//** Se hace la peticion, pero necesitamos la categoria, por lo cual hay que mandarla como argumento, tenemos el, recuerda como es async esta funcion no es que regresa los gifs, regresa una promesa que resuelve la coleccion de imagenes */
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
