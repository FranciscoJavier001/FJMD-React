// Este wey queria que pusieramos la imgen, es decir que hagamos otra peticion de response y que me tajeras una imagen,
// segun yo lo que falta es una madre que se llama data y a esa madre pasarle una url, despues que lance una madre que me cree un elemento en el DOM
// y que sea una img.src = url;
// y que ya aparezca

//** Async se usa para que algo te retorne una promesa */
//** Await nos dice, espera que esta promesa termine, antes de ejecutar lo siguiente */

//** Puedes usar el async, pero no puedes utilizar el await sin el async */
const getImagen = async() => { //Esta es una peticion async que pide que me respondan una variale y que esa variable ponerla en el DOM y que ahi se quede, osea que apareza una imagen 

    try{
        const apiKey = 'tfRgcwv7vxAyL3vMQapLiD0NQw3148nH'; //Creo apiKey
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json(); //** El Objeto JSON regresa una promesa y debo de esperarme a que se resuelta la promesa para obtener la data */

    const {url} = data.images.original; /**Como este wey ya habiamos obtenido la ruta a traves de desesructurar el objeto data */

    const img = document.createElement('img'); 
    img.src = url;
    document.body.append(img);   

    } catch (err){
        // manejo del error
        console.log(err);
    }
}

getImagen();

// ocupaba el url y lo pego abajo de la data = bien


/* option shift a */
/** 
const apiKey = 'tfRgcwv7vxAyL3vMQapLiD0NQw3148nH';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
.then(resp => resp.json())
.then( ({data}) => { 
    const {url} = data.images.original;

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn);
 
 */