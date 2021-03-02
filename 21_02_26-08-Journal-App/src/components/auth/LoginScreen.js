import React from 'react'

export const LoginScreen = () => {
    return (
        <>
            <h3>Login</h3>  {/* Es lo que esta escrito en la caja blanca definida en el auth__box-container que contiene a los 2 */}

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
                Google
            </form>
        </>
    )
}
