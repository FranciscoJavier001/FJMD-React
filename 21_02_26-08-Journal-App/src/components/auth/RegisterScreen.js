import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
        <h3 className="auth__title">Register</h3>  {/* Es lo que esta escrito en la caja blanca definida en el auth__box-container que contiene a los 2 */}

        <form> {/* Este es la caja de un formulario que va a estar abajo del login */}
            <input //** Este crea otro donde la gente puede escribir */
                type="text"
                placeholder="Name"
                name="name"
                className="auth__input"
                autoComplete="off" //** Para que no me este dando sugerencias ni nada al escribir */
            />

            <input //** Este crea el primero */
                type="text"
                placeholder="E-Mail"
                name="email"
                className="auth__input"
                autoComplete="off" //** Para que no me este dando sugerencias ni nada al escribir */
            />

            <input //** Este crea el segundo */
                type="password"
                placeholder="Password"
                name="password"
                className="auth__input"
            />

            <input //** Este crea el segundo */
                type="password"
                placeholder="Confirm Password"
                name="password2"
                className="auth__input"
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
