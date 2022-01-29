import React from 'react';
import { useDispatch } from 'react-redux'
import { useForm } from '../../hooks/useForm';
import { startLogin, startRegister } from '../../actions/auth';
import Swal from 'sweetalert2';

import './login.css'; //** Esto es porque importamos info desde nuestro css */

export const LoginScreen = () => { //** Esto es porque lo exportamos al archivo de routes>AppRouter */

    const dispatch = useDispatch() //** Hay que hacer el dispatch para la funcion startLogin de actions>auth */

    const [ formLoginValues, handleLoginInputChange ] = useForm({ //** Es de hooks>useForm, cambiamos nombres, porque tendre 2 forms */
        lEmail: '', //** La "l", es porque viene del login - Quite el autocompletado */
        lPassword: '' //** Es un usuario real de Postman - Quite el autocompletado */
    });

    const { lEmail, lPassword } = formLoginValues; //** Voy a extraer estas dos variables, vienen de formLoginValues */

    const handleLogin = ( e ) => { //** Linea 32, funcion que se hace al hacer click */
        e.preventDefault() //** Para que no recarge la pagina */
        // console.log( lEmail, lPassword); //** Lo confirme en los test */
        // console.log(formLoginValues); //** Para ver lo que trae el formulario al hacer click en login */
        dispatch( startLogin( lEmail, lPassword )  ) //** Aqui voy a disparar startLogin, recibe email y password de actions>auth */
    }

    //** Manejador de Registro, parecido al de login */
    //** formRegisterValues son los campos del formulario de registro, handleRegisterInputChange los valores asignados ya en el formulario */
    const [ formRegisterValues, handleRegisterInputChange ] = useForm({ //** Son los del formRegisterValues, handleRegisterInputChange del useForm */
        rName: 'Frank', //** Estos son los campos */
        rEmail: 'frank@mail.com', //** La "r", es porque viene del login */
        rPassword1: '123456', //** Es un nuevo registro, bueno este es el password */
        rPassword2: '123456' //** La confirmacion del password */
    });

    const { rName, rEmail, rPassword1, rPassword2 } = formRegisterValues //** Desestructuramos loa valores del fRV y esos campos tiene */

    const handleRegister = ( e ) => { //** handleRegister es una funcion que recibe el evento, asignado en el onSubmit */
        e.preventDefault() //** Para evitar que se recargue el navegador */

        if ( rPassword1 !== rPassword2 ) { //** Si rP1 es Diferente a rP2 */
            return Swal.fire('Error', 'Las Contraseñas deben de ser Iguales', 'error') //** Mandamos el error con Swal */
        }
        // console.log('Se Dispara'); //** Para saber si se esta disparando */
        dispatch( startRegister( rEmail, rPassword1, rName ) ) //** Ok validacion, haz el dispatch, pide los 3 argumentos, viene de actions>auth */
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
                                name="lEmail" //** Es el nombre del Campo */
                                value={ lEmail } //** El valor va a ser el lEmail que recibi, desestructurado y esta en useForm */
                                onChange={ handleLoginInputChange } //** Esta es cuando se hacen los cambios */
                            />
                        </div>
                        <div className="form-group"> {/* Creamos otro formulario pero solo con lo del password */}
                            <input
                                type="password" //** Para que se vean estrellitas */
                                className="form-control"
                                placeholder="Contraseña"
                                name="lPassword" //** Aqui recibo el Password que recibe el useForm */
                                value={ lPassword } //** Lo que viene en el lPassword, el que recibi y esta en useForm */
                                onChange={ handleLoginInputChange } //** Esta es cuando se hacen los cambios, en useForm y ahi se guardan */
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
                    <form onSubmit={ handleRegister }> {/* Formulario y el metodo handleRegister es lo que se manda cuando hacemos click */}
                        <div className="form-group"> {/* Son las cajitas de texto */}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="rName" //** Nombre del campo */
                                value={ rName } //** Este es el valor que va a tener ese campo, desestructurado */
                                onChange={ handleRegisterInputChange } //** Es donde se va a quedar los cambios, ahi se quedan */
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="rEmail"
                                value={ rEmail }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="rPassword1"
                                value={ rPassword1 }
                                onChange={ handleRegisterInputChange }
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="rPassword2"
                                value={ rPassword2 }
                                onChange={ handleRegisterInputChange }
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