import React from 'react';
import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';

function App() {
  return (
    <>
      {/* <Counter initialValue={15} /> {/* Pero aqui puedo definirle un valor en duro, sino lo pongo lo manda por default el 0 del Counter */}
      {/* <Counter /> {/* Sino pao el valor se queda en 0 */}
      <CounterBy />
    </>
  );
}

export default App;
