import { useDispatch, useSelector } from 'react-redux' //** Los hooks que importamos */
import './App.css'
import { increment } from './store/slices/counter/counterSlice' //** La funcion que importamos desde el counterSlice */

function App() {

  const { counter } = useSelector( state => state.counter ) //** Para leer algo del store/selector(seleccionador) */
  const dispatch = useDispatch() //** Para hacer el dispatch lo inicializamos */

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank">
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch( increment()) }> {/* Le doy funcionalidad al boton, llamando una funcion del counterSlice llamando la funcion definida arriba */}
          count is { counter } {/* Esto esta dentro del boton, es una leyenda */}
        </button>
      </div>
    </div>
  )
}

export default App