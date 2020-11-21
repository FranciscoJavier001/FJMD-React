import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counter.css';

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100); //** Con : puedo cambiarle el nombre a estas variables, le mandamos 100, pero en caso que no mande nada se queda con 10 definido en el useCounter */

    return (
        <>
          <h1>Counter with Hook: {state} </h1>
          <hr />

          <button onClick={ () => increment(2) } className="btn-primary"> + 1</button>
          <button onClick={reset} className="btn-warning"> Reset </button>
          <button onClick={ () => decrement(2) } className="btn-danger"> - 1</button>
        </>
    )
}
