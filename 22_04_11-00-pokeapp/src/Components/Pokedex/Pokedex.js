import React from 'react';
import styles from './styles.css'

function Pokedex(props){
    return (
        props.pokedex.length > 0) ? (
        
        <div className="pokedex container">
            {props.pokedex.map(p =>(
                
                <div className='col'>
                     <div key={p.id}>
                        <h2>Pokemon: {p.name}</h2>
                         <img  alt={p.name}src={p.sprites.front_default}/>
                        <p> #: {p.id}</p>
                     </div>
                </div>
            ))}
        </div>
        ): ( <div></div>)
}

export default Pokedex;