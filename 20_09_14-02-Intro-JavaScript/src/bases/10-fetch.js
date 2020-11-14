// Fetch ya viene incluido en JS, y nos permite hacer peticiones a endpoinds donde podemos conseguiir informacion

const apiKey = 'tfRgcwv7vxAyL3vMQapLiD0NQw3148nH';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(resp => resp.json()) /**JSON retorna una promesa que m retorna lo que yo le pide, en este aso yo le pido, esto es una promesa en cadena, que en caso que me llegue la primera despues viene la segunda que ya es la Data  */
.then( ({data}) => { /**Aqui ya desestructuramos la informacion de la data para recibirla despues en la constanste siguiente que s desestructura como el url en el data.images.original */
    const {url} = data.images.original; //** Aqui creamos una constante que es una URL de lo que vamos a recibir */

    const img = document.createElement('img'); //** Aqui creamos el elemento en el HTML */
    img.src = url;  //** Aqui ahora llamamos la img con su src (Aunque el SRC es opcional) y que esta sea la url */

    document.body.append(img); //** AQui con el Append img pues ya salio porque ya esta listo */
})
.catch(console.warn);