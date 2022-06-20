import React from 'react';
// import { Counter } from './bases/Counter';
// import { CounterBy } from './bases/CounterBy';
// import { CounterEffect } from './bases/CounterEffect';
import { CounterHook } from './bases/CounterHook';

function App() {
  return (
    <>
      {/* <Counter initialValue={15} /> {/* Aqui defino un valor en duro, sino lo pongo lo manda por default el 0 del Counter */}
      {/* <Counter /> {/* Sino pongo el valor se queda en 0 */}
      {/* <CounterBy /> {/* Lo que renderizo, ya viene los valores desde el Componente */}
      <CounterHook />
    </>
  );
}

export default App;