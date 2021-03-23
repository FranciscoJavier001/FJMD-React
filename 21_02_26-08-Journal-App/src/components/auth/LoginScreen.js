import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

    //** Para hacer un dispatch react ya me dio el hook llamado useDisplatch */
    const dispatch = useDispatch() //** Este le da acceso al dispatch, osea sirve para disparar acciones */

    //** Esto lo voy a implementar desde el useForm de la carpeta Hooks para manejo de formularios */
    const [ formValues, handleInputChange, reset ] = useForm({ //** Esto regresa un arreglo con [] y el objeto que va a ser mi formulario es el siguiente, en [] vamos a desestructurar un objeto que va a ser el formValues y handleInputChanges, los voy a extraer para tenerlos facilmente a la mano */
        email: 'frank@email.com', //** Lo voy a dejar inicializado */
        password: '123456789'
    })

    const { email, password } = formValues //** Estos valores los voy a desestructructurar con {} y de ahi voy a sacar el email y el password */

    //** Asi voy a manejar el submit del formulario */
    const handleLogin = (e) => { //** Esta va a ser una funcion de fleca que no va a recibir nada, despues de poner el form con el submit, le puse que voy a recibir el evento */
        e.preventDefault() //** Para evitar la propagacion del formulario */
        // console.log(email, password);
        dispatch( startLoginEmailPassword(email, password) ) //** La accion que voy a llamar va a ser el login , y recibe el uid y el displayName*/
    }

    //** Hagamos otro componente para darle funciones al boton */
    const handleGoogleLogin = () => { //** No recibe ningun argumento y solo va a hacer el dispatch de esa accion */
        dispatch( startGoogleLogin() ) //** Este metodo se va a llamr cuando alguien toque el boton de google-btn */
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>  {/* Es lo que esta escrito en la caja blanca definida en el auth__box-container que contiene a los 2 */}

            {/* Cuando alguien toque el boton del submit */}
            <form onSubmit={ handleLogin }> {/* Este es la caja de un formulario que va a estar abajo del login */}
                <input //** Este crea el primero */
                    type="text"
                    placeholder="E-Mail"
                    name="email"
                    className="auth__input"
                    autoComplete="off" //** Para que no me este dando sugerencias ni nada al escribir */
                    value={ email }//** Ya desestructurados se los voy a colocar a los respectivos inputs */
                    onChange={ handleInputChange }
                />

                <input //** Este crea el segundo */
                    type="password"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value={ password }//** Ya desestructurados se los voy a colocar a los respectivos inputs */
                    onChange={ handleInputChange }
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
                        onClick={ handleGoogleLogin } //** Asi se llama la accion que haga cuando le damos click */
                        >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Login with Google</b>
                        </p>
                    </div>
                </div>

                {/* <div> Asi creamos una clase para implementarla en el SCSS */}
                <Link
                    to="/auth/register" /* Este lo importamos desde react-router-dom con el link */
                    className="link"
                >
                    Create New Account 
                </Link>
                
                {/* <Link to="/auth/forgot" /* Este lo importamos desde react-router-dom con el link */
                // >
                     /* Forgot your Password */
                /* </Link> */}
                {/* </div> */}
            </form>
        </>
    )
}