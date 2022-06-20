import React from 'react';
// import { Counter } from './bases/Counter';
// import { CounterBy } from './bases/CounterBy';
// import { CounterEffect } from './bases/CounterEffect';
// import { CounterHook } from './bases/CounterHook';
// import { CounterReducerComponent } from './bases/CounterReducer';
import { CounterReducerComponent } from './counter-reducer/CounterReducer';

function App() {
  return (
    <>
      {/* <Counter initialValue={15} /> {/* Aqui defino un valor en duro, sino lo pongo lo manda por default el 0 del Counter */}
      {/* <Counter /> {/* Sino pongo el valor se queda en 0 */}
      {/* <CounterBy /> {/* Lo que renderizo, ya viene los valores desde el Componente */}
      {/* <CounterHook /> */}
      <CounterReducerComponent />
    </>
  );
}

export default App;