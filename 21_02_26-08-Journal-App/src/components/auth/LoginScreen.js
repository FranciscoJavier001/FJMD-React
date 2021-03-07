import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>  {/* Es lo que esta escrito en la caja blanca definida en el auth__box-container que contiene a los 2 */}

            <form> {/* Este es la caja de un formulario que va a estar abajo del login */}
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

                <button
                    type="submit" //** Que pueda darle click */
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                <div className="auth__social-network">
                    <p>Login with Social Networks</p>
                    <div 
                        className="google-btn"
                        >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Login with Google</b>
                        </p>
                    </div>
                </div>

                <div className="link-style"> {/* Asi creamos una clase para implementarla en el SCSS */}
                <Link to="/auth/register" /* Este lo importamos desde react-router-dom con el link */
                >
                    Create New Account
                </Link>
                </div>

            </form>
        </>
    )
}