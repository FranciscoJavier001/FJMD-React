//**_____________________________________________________________________________________________________________________________________________________________*/
import { Counter } from './components/Counter';
import { Usuario } from './components/Usuario';
import { TimerPadre } from './components/TimerPadre'; //** Importe este componente para renderizarlo en el DOM */

function App() {
  return (
    <>
      <h1>React + TypeScript</h1>
      <hr /> 

      <h2 className='text-center'>UseState</h2>
      <Counter />

      <Usuario />
      <hr />

      <h2 className='text-center'>useEffect - useRef</h2>
      <TimerPadre /> {/* Simplemente mando llamar el componente */}

    </>
  );
}

export default App;