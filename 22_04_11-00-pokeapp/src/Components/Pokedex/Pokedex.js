import React from 'react';
import styles from './styles.css'

function Pokedex(props){
    return (
        props.pokedex.length > 0) ? (
        
        <div className="pokedex container">
            {props.pokedex.map(pokemon =>(
                
                <div className='col'>
                     <div key={pokemon.id}>
                        <h2>Pokemon: {pokemon.name}</h2>
                         <img  alt={pokemon.name}src={pokemon.sprites.front_default}/>
                        <p> #: {pokemon.id}</p>
                     </div>
                </div>
            ))}
        </div>
        ): ( <div></div>)
}

export default Pokedex;