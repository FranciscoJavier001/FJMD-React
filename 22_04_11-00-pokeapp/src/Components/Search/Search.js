import React, { useState } from 'react';
import getPokemon from '../../Services/getPokemon';
import Pokedex from '../Pokedex/Pokedex';

function Search (){
    const [pokemonName, setPokemonName] = useState([]);
    const [pokemon, setPokemon] = useState({});
    const [pokedex, setPokedex] = useState([]);

    const onChange = function(e){
        setPokemonName(e.target.value)
    }

    const onClick = async function (pokemonName){
        let pokemon = await getPokemon(pokemonName)
        setPokemon(pokemon);
        setPokedex([...pokedex, pokemon]);
    }

    return(
        <div className='container'>
            <div className='row'>
                <input className='col-11' type="text" name="pokemonName"  onChange={(e)=>onChange(e)} value={pokemonName}/>
                <span className=' col 1 btn btn-primary' onClick={()=>onClick(pokemonName)}>Catch</span> 
            </div>
            
                {
                    !pokemon.sprites ? 
                    <div> No Pokemons Yet </div>
                    : <Pokedex pokedex={pokedex}/>
                }
            
        </div>
    )
}

export default Search;