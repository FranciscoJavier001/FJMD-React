import React from 'react';
import './login.css'; //** Esto es porque importamos info desde nuestro css */

export const LoginScreen = () => { //** Esto es porque lo exportamos al archivo de rutas */
    return (
        <div className="container login-container"> {/* El Container es el contenedor dentro de la pantalla, para que no abarque todo el espacio de la pantalla, y el login-container es la clase que establecimos en el CSS de el margen superior que tiene en la pantalla */}
            <div className="row"> {/* Esto de Row quiere decir que solo va en una fila */}
                <div className="col-md-6 login-form-1"> {/* El col-md-6 nos dice lo que va a medir el formulario de ingreso y lo demas es la clase que ya definimos */}
                    <h3>Ingreso</h3> 
                    <form>
                        <div className="form-group"> {/* Es un formulario en grupo, osea aqui el correo, pero solo va un espacio */}
                            <input //** Aqui va la info que va por el formulario y luego lo cerramos */
                                type="text"
                                className="form-control" //** Este es todo el espacio, es un formulario de control, donde va el texto */
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group"> {/* Creamos otro formulario pero con lo del password */}
                            <input
                                type="password"
                                className="form-control" //** Este es todo el espacio, es un formulario de control, donde va el texto */
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group"> {/* Igual creamos otro formulario, osea hay que crear uno de cada uno independiente */}
                            <input
                                type="submit"
                                className="btnSubmit" //**--  col-md-6 -- Lo primero es una clase de bootstrap, lo segundo es la distancia que manera en el form-roup */
                                value="Login" 
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2"> {/* Ya entendi que el col-md-x es la distancia que va a tener de las columnas en bootstrap, luego lo otro es la clase que va a manejar */}
                    <h3>Registro</h3>
                    <form>
                        <div className="form-group"> {/* Entonces entendi que el form-group es donde va ordenado el formulario de control */}
                            <input
                                type="text"
                                className="form-control" //** Este es todo el espacio, es un formulario de control, donde va el texto, con esto le damos estilos */
                                placeholder="Nombre"
                            />
                        </div>
                        <div className="form-group"> {/* Entonces entendi que el form-group es donde va ordenado el formulario de control */}
                            <input
                                type="email"
                                className="form-control" //** Este es todo el espacio, es un formulario de control, donde va el texto, con esto le damos estilos */
                                placeholder="Correo"
                            />
                        </div>
                        <div className="form-group"> {/* Entonces entendi que el form-group es donde va ordenado el formulario de control */}
                            <input
                                type="password"
                                className="form-control" //** Este es todo el espacio, es un formulario de control, donde va el texto, con esto le damos estilos */
                                placeholder="Contraseña" 
                            />
                        </div>

                        <div className="form-group"> {/* Entonces entendi que el form-group es donde va ordenado el formulario de control */}
                            <input
                                type="password"
                                className="form-control" //** Este es todo el espacio, es un formulario de control, donde va el texto, con esto le damos estilos */
                                placeholder="Repita la contraseña" 
                            />
                        </div>

                        <div className="form-group"> {/* Entonces entendi que el form-group es donde va ordenado el formulario de control */}
                            <input 
                                type="submit" 
                                className="btnSubmit" //** Asi le dimos estilos a los botones */
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}