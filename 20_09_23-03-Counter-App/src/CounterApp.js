//** Para crearlo hay que utilizar rafcp */

import React, {useState} from 'react'; //** Simplemente desestructuramos el useState ese nombre lo pone porque son hooks, pero lo inicializamos en 10 en el index */
import PropTypes from 'prop-types'; //** Los Props */

const CounterApp = ({value = 10}) => { //** Creamos un Props de la App y le asignamos un valor al useState que va a mandar el valor inicial */

    const [counter, setCounter] = useState(value); // [] //** Este es un hook, primer es el nombre de la variable que va a tener el State, la segunda es la forma para establecer ese valor, luego se manda el valor inicial */
    
    // handleAdd Creamos los componentes que va a llevar nuestra app
    const handleApp=(e)=>{ //** El Primer argumento es enviado como primer argumento a una funcion qu eesta adentro, por ejemplo, el 'e' significa event */
        // setCounter(counter + 1)
        setCounter((c)=> c+1); //** El Primer argumento es enviado a una funcion que esta adentro en este caso la 'c' es de conter */
    }

    const handleAppReset=(e)=>{
        // setCounter(counter + 1)
        setCounter(value);
    }

    const handleAppMin=(e)=>{
        // setCounter(counter + 1) //** Son lo mismo */
        setCounter((c)=> c-1); //** Son lo mismo */
    }

    return ( //** Aqui hacemos el return que ocupa a huevo babel */
        <>  {/** El Fragment */}
        <h1>CounterApp</h1> {/** Nombre */}
        <h2>{counter}</h2> {/** Desestructurado el Counter */}

        <button onClick={handleApp}>+1</button> {/** Los Botones no los llames inmediatamente sino hasta que les den click */}
        <button onClick={handleAppReset}>Reset</button>
        <button onClick={handleAppMin}>-1</button>
        </>
    );
}

CounterApp.propTypes = { //** Asi obligamos a recibir el parametro de value */
    value: PropTypes.number
}

export default CounterApp; //** Lo exportamos para que se muestre */