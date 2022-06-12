import React from 'react';
import { Counter } from './bases/Counter';

function App() {
  return (
    <>
      {/* <Counter initialValue={15} /> {/* Pero aqui puedo definirle un valor en duro, sino lo pongo lo manda por default el 0 del Counter */}
      <Counter /> {/* Sino pao el valor se queda en 0 */}
    </>
  );
}

export default App;
