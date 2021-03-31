import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import validator from 'validator'

import { useForm } from '../../hooks/useForm'
import { setError } from '../../actions/ui'

export const RegisterScreen = () => {
    
    const dispatch = useDispatch() //** Usamos el dispatch para disparar la accion que queramos */

    const [ formValues, handleInputChange ] = useForm({ //** Aqui usamos el useForm para el formulario */
        name: 'Andrea', //** Voy a mandar un objeto, para hacer el registro de usuario */
        email: 'andrea@email.com',
        password: '123456',
        password2: '123456',
    })

    //** El formValues, son los valores que tenemos en el formulario, y por eso de ahi se extraen y el handleInputChange es lo que va a quedar cuando se haga el cambio */
    const { name, email, password, password2 } = formValues //** ASi voy a tener la desestructuracion de objetos del formValues */

    const handleRegister = (e) => {
        e.preventDefault()
        
        if( isFormValid() ) { //** Hago el llamado a la funcion, que solo se regresa si es true */
            console.log('Formulario correcto');
        }
    }

    const isFormValid = () => {
        if ( name.trim().length === 0 ) { //** Esto es si la persona tiene un nombre vacio que salga el mensaje de error*/
            dispatch( setError ) //** Lo importamos de los typos */
            console.log('Nombre es Requerido');
            return false;
        } else if ( !validator.isEmail( email ) ) { //** Si esto no es un email, quiero que hagas esto */
            console.log('Email no valido');
            return false;
        } else if ( password !== password2 || password.length < 5 ) {//** Si los password son diferentes o el password tiene menos de 6 digitos */
            console.log('Password por lo menos de 6 digitos y tiene que coincidir ambos');
            return false;
        }
            return true;
    }

    return (
        <>
        <h3 className="auth__title">Registrase</h3>  {/* Es lo que esta escrito en la caja blanca definida en el auth__box-container que contiene a los 2 */}

        <form onSubmit={ handleRegister }> {/* Este es la caja de un formulario que va a estar abajo del login */}

            <div className="auth__alert-error"> {/* Que esto salga cuando hay un error en el formulario */}
                ...{/* Aqui poner un mensaje de error */}
            </div>

            <input //** Este crea otro donde la gente puede escribir */
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off" //** Para que no me este dando sugerencias ni nada al escribir */
                value={ name }
                onChange={ handleInputChange }
            />

            <input //** Este crea el primero */
                type="text"
                placeholder="E-Mail"
                name="email"
                className="auth__input"
                autoComplete="off" //** Para que no me este dando sugerencias ni nada al escribir */
                value={ email }
                onChange={ handleInputChange }
            />

            <input //** Este crea el segundo */
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
                value={ password }
                onChange={ handleInputChange }
            />

            <input //** Este crea el segundo */
                type="password"
                placeholder="Confirm Password"
                name="password2"
                className="auth__input"
                value={ password2 }
                onChange={ handleInputChange }
            />

            <button
                type="submit" //** Que pueda darle click */
                className="btn btn-primary btn-block mb-5"
            >
                Registrarse
            </button>

            <Link
                to="/auth/login" /* Este lo importamos desde react-router-dom con el link */
                className="link"
            >
                Iniciar Sesion
            </Link>

        </form>
    </>
    )
}