import React, { useEffect, useState } from 'react'
import { SimpleForm } from './SimpleForm';

export const Message = () => {

    const [coords, setCoords] = useState({ x:0, y: 0 }) //** Recuerda que useState es el resultado inicial que se llama, y este man de las coords saxo el x y el y */
    const { x, y } = coords; 

    useEffect(() => { //** Aqui declaramos lo que nos va a ayudar window.. lo que viene por default */
        const mouseMove = (e) =>{ //** Declaramos este evento en cuanto el mouse se empieza a mover */
            const coords = { x: e.x, y: e.y }; //** Una constante que va a ser igual a un objeto, con las propiedades, donde el event va a estar viendo a x y asi se van a mostrar */
            setCoords( coords ); //** Va a tomar las de arriba porque asi esta declarado, al instante */
        }
        
        window.addEventListener('mousemove', mouseMove ); //** Para agregar un evento */

        return () => {
            window.removeEventListener('mousemove', mouseMove ); //** Quero remover el evento, es decir que no se velva a llamar el EventListener */
        }
    }, []) 

    // Mira, Message es una funcion, constate declarada, que si se manda llamar, haga algo con el useEffect que es una funcion, y esto sale cada vez que 
    return (
        <div>
            <h3>Eres genial!</h3>
            <h3>jajaja!</h3>
            {/* Como harias que aqui se mostrara el usuario */}
            <h3>name:123</h3> 
            <p>
                x:{ x } y: { y }
            </p>
        </div>
    )
}
