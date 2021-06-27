import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'

import { useForm } from '../../hooks/useForm'
import { removeError, setError } from '../../actions/ui'
import { startRegisterWithEmailPasswordName } from '../../actions/auth'

export const RegisterScreen = () => {
    
    const dispatch = useDispatch() //** Usamos el dispatch para disparar la accion que queramos */
    const { msgError } = useSelector( state => state.ui) //** Este es un Hook y recibe un callback, en el que tengo el state y me va a regresar el state, y lo desestructire para solamente ver el mensaje de error */


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
            dispatch( startRegisterWithEmailPasswordName(email, password, name) ) //** Vamos a hacer el dispatch de la accion startRegisterWithEmailPasswordName, recuerda tenemos que importarlo y vamos a mandar todo lo que definimos  */
        }
    }

    const isFormValid = () => {
        if ( name.trim().length === 0 ) { //** Esto es si la persona tiene un nombre vacio que salga el mensaje de error*/
            dispatch( setError('Nombre es Requerido') ) //** Lo importamos de los typos */
            return false;
        } else if ( !validator.isEmail( email ) ) { //** Si esto no es un email, quiero que hagas esto */
            dispatch( setError('Email no valido') )
            return false;
        } else if ( password !== password2 || password.length < 5 ) {//** Si los password son diferentes o el password tiene menos de 6 digitos */
            dispatch( setError('Password por lo menos de 6 digitos y tiene que coincidir ambos') )
            return false;
        }
        dispatch( removeError() ) //** El caso opuesto de cuando hay error */
            return true;
    }

    return (
        <>
        <h3 className="auth__title">Register</h3>  {/* Es lo que esta escrito en la caja blanca definida en el auth__box-container que contiene a los 2 */}

        <form 
            onSubmit={ handleRegister }
            className="animate__animated animate__fadeIn animate__faster"
        > {/* Este es la caja de un formulario que va a estar abajo del login */}

            {
                msgError && //** Que solo se muestre si es diferente a null */
                ( //** Esto es el bloque de la condicion */
                    <div className="auth__alert-error"> {/* Que esto salga cuando hay un error en el formulario */}
                        { msgError }
                    </div>
                )
            }

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
                Register
            </button>

            <Link
                to="/auth/login" /* Este lo importamos desde react-router-dom con el link */
                className="link"
            >
                Already Register?
            </Link>

        </form>
    </>
    )
}