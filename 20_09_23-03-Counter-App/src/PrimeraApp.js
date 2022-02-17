//** Los componentes se escriben con el UpperCamelCase */
//** Hay dos tipos de componentes, los que estan basados en clases y los que estan basados en funciones (estas se llaman Functional Component) */

import React from 'react';
import PropTypes from 'prop-types'; //** Las Props son las propiedades que el padre manda al hijo */
// import React, { Fragment } from 'react';

const PrimeraApp = ({saludo, subtitulo}) => { //** Functional Components es una funcion */

    return ( //** Como se renderiza a traves de babel es necesario poner el retorno de esta manera para que me regrese algo y despues el fragment (llamado high order component) */
        <> 
        <h1>{saludo}!!!</h1>
            {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */} {/***Si queremos imprimir un arreglo de un objeto esta es la manera de hacerlo */}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired //** Asi forzamos a recibir el props de PrimeraApp */
}

PrimeraApp.defaultProps = {
    subtitulo: 'Soy un subtitulo' //** AQui directamente lo usamos desde aqui */
}

export default PrimeraApp; //** Aqui se exporta para poderla utilizar */