import React from 'react';
// import { Counter } from './bases/Counter';
import { CounterBy } from './bases/CounterBy';

function App() {
  return (
    <>
      {/* <Counter initialValue={15} /> {/* Aqui defino un valor en duro, sino lo pongo lo manda por default el 0 del Counter */}
      {/* <Counter /> {/* Sino pongo el valor se queda en 0 */}
      <CounterBy /> {/* Lo que renderizo, ya viene los valores definidos */}
    </>
  );
}

export default App;
