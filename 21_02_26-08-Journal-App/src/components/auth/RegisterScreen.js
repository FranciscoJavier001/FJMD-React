import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

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
        
    }

    const isFormValid = () => {
        
    }

    return (
        <>
        <h3 className="auth__title">Register</h3>  {/* Es lo que esta escrito en la caja blanca definida en el auth__box-container que contiene a los 2 */}

        <form onSubmit={ handleRegister }> {/* Este es la caja de un formulario que va a estar abajo del login */}
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


// Baño