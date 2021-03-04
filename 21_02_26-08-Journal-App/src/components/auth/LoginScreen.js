import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>  {/* Es lo que esta escrito en la caja blanca definida en el auth__box-container que contiene a los 2 */}

            <form> {/* Este es la caja de un formulario que va a estar abajo del login */}
                <input //** Este crea el primero */
                    type="text"
                    placeholder="email"
                    name="email"
                />

                <input //** Este crea el segundo */
                    type="password"
                    placeholder="password"
                    name="password"
                />

                <button
                    type="submit" //** Que pueda darle click */
                >
                    Login
                </button>

                <hr />
                <div>
                    <p>Login with Social Networks</p>
                    <div 
                        className="google-btn"
                        >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Login with google</b>
                        </p>
                    </div>
                </div>

                <Link to="/auth/register" /* Este lo importamos desde react-router-dom con el link */
                >
                    Create new Account
                </Link>

            </form>
        </>
    )
}