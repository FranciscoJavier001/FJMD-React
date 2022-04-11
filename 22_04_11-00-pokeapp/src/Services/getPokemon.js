async function getPokemon(pokemonName){
    const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    )
    const data = await response.json();
    return data;
}

export default getPokemon;