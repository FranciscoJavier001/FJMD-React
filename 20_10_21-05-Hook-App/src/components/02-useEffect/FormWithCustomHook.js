import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effects.css';

export const FormWithCustomHook = () => { //** Nombre del FunctionalComponent */

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues; //** Desestructuramos las propiedades del formValues */

    useEffect( () => { //** Este efecto va a estar escuchando cuando email cambio */
        console.log('email cambió')
    }, [ email ]);

    const handleSubmit = (e) => { //** Es una funcion que evita que se recarge el navegador */
        e.preventDefault();
        console.log( formValues );
    }

    return ( //** Aqui estan los formularios de nombre, mail y password */
        // On submit quiere decir que cuando le den click al boton dispare handleSubmit
        <form onSubmit={ handleSubmit }>
            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group">
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

            <div className="form-group">
                <input 
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>

            {/* Aqui esta el boton */}
            <button type="submit" className="btn btn-primary">
                Guardar
            </button>

        </form>
    )
}
