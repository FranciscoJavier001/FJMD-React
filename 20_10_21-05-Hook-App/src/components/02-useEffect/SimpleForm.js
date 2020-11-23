import React, { useEffect, useState } from 'react';
import { Message } from './Message';

import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({ //** Voy a extraer las funciones desde aqui */
        name: '',
        email: ''
    });

    const { name, email } = formState; //** Aqui desestructuramos las propiedades del formState, que tienen ambas variables declaradas arriba */

    useEffect( () => { //** Es un Hook que nos permite activar un efecto secundario, cuando algo suceda en nuestros componentes, aqui le estamos diciendo.. dispara esto cuando tengas algun cambio */
        // console.log('hey!');
    }, [] ); //** Le pasamos en el segundo parametro en donde queremos que se utilize */

    useEffect( () => { //** Estar ESCUCHANDO LOS CAMBIOS, (es un area de oportunidad) */
        // console.log('formState cambió');
    }, [formState] );

    useEffect( () => {
        // console.log('email cambió');
    }, [email] );

    const handleInputChange = ({ target }) => { //** Se que el target ya esta desestructurado de 'e', es el evento que se dispara cuando hay algun cambio en name */

        setFormState({
            ...formState, //** Lo mostramos por si hay propiedades que nos estan cambiando */
            [ target.name ]: target.value //** Quiero que recibas el valor de name, y lo asignes ahora a target.value */
        });
        // console.log(target.name); //** No se que onda, aqui nomas sale name */
        // console.log(target.value); //** Estas son las teclas que se precionan en cada momento */

    }

    // Aqui se empieza a crear un formulario
    return (
        <>
            <h1>useEffect</h1>
            <hr />
            <div className="form-group">
                {/* Esto es el cuadro de texto */}
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange } 
                />
            </div>

            {/* Esto va a pasar cuando nos vallamos a hacer un evento, osea esto es como el rastreador de lo que hace cada cosa, es decir es la logica del campo, o de la accion */}
            <div className="form-group">
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            {/* Si el name existe vamos a mostrar este Message */}
            { (name === '123') && <Message /> }

        </>
    )
}
