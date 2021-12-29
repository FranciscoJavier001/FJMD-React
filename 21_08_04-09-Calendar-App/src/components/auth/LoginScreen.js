import React from 'react';
import { useDispatch } from 'react-redux'
import { startLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

import './login.css'; //** Esto es porque importamos info desde nuestro css */

export const LoginScreen = () => { //** Esto es porque lo exportamos al archivo de routes>AppRouter */

    const dispatch = useDispatch() //** Hay que hacer el dispatch para la funcion startLogin de actions>auth */

    const [ formLoginValues, handleLoginInputChange ] = useForm({ //** Es de hooks>useForm, cambiamos nombres, porque tendre 2 forms */
        lEmail: 'francisco@mail.com', //** La "l", es porque viene del login */
        lPassword: '123456' //** Es un usuario real de Postman */
    });

    const { lEmail, lPassword } = formLoginValues; //** Voy a extraer estas dos variables, vienen de formLoginValues */
    const handleLogin = ( e ) => { //** Linea 32, funcion que se hace al hacer click */
        e.preventDefault() //** Para que no recarge la pagina */

        // console.log(formLoginValues); //** Para ver lo que trae el formulario al hacer click en login */
        dispatch( startLogin( lEmail, lPassword )  ) //** Aqui voy a disparar startLogin, recibe email y password */
    }

    return (
        //** Container no abarca todo el espacio de la pantalla, login-container(clase) */
        <div className="container login-container">
            <div className="row"> {/* Ingreso y Registro misma fila */}
                {/* El col-md-6 nos dice lo que va a medir el formulario de ingreso y lo demas es la clase que ya definimos */}
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3> {/* Titulo de arriba */}
                    <form onSubmit={ handleLogin }> {/* Que va a ser un formulario, y el onSubmit va a tener un metodo */}
                        <div className="form-group"> {/* Es un formulario en grupo, osea aqui el correo, pero solo va correo */}
                            <input //** Aqui va la info que va por el formulario */
                                type="text" //** Tipo de campo */
                                className="form-control" //** Es el espacio, donde va el texto, (clase_Bootstrap) */
                                placeholder="Correo" //** Lo que viene en gris dentro de la caja */
                                name="lEmail" //** Necesito el email del campo que voy a recibir en el login, useForm */
                                value={ lEmail } //** El valor va a ser el lEmail que recibi */
                                onChange={ handleLoginInputChange } //** Esta es cuando se hacen los cambios */
                            />
                        </div>
                        <div className="form-group"> {/* Creamos otro formulario pero solo con lo del password */}
                            <input
                                type="password" //** Para que se vean estrellitas */
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword" //** Aqui recibo el Password que recibe el useForm */
                                value={ lPassword } //** Lo que viene en el lPassword */
                                onChange={ handleLoginInputChange } //** Esta es cuando se hacen los cambios */
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit" //** Esto significa que se puede hacer click */
                                className="btnSubmit" /* btnSubmit(clase bootstrap) */
                                value="Login" //** Lo que dice el Boton */
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2"> {/* col-md-x= ancho container bootstrap (max_12)-login-form-2(clase_auth>login) */}
                    <h3>Registro</h3>
                    <form> {/* Es otro formulario */}
                        <div className="form-group"> {/* Son las cajitas de texto */}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}