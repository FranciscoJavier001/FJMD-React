import React, { useEffect, useState } from 'react'

function App() {

    const [state, setState] = useState([]) 
    
    useEffect(() => {
        obtenerDatos()
    }, [])

    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/comments')
        const comments = await data.json()
        // console.log(users);
        setState(comments) //** Aqui va la variable del recurso */
    }

  return (
    <div>
        <h1>Practica</h1>
        <ul>
            {
                state.map(item => (
                    <li key={item.id}>{item.name} - {item.email}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default App