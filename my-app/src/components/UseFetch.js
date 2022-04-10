//** Componente que nos ayuda a realizar las conexiones */
import React, { useState, useEffect } from 'react'

export const UseFetch = (url) => {
    const [resultado, setResultado]=useState({cargando:true, data:null})

    useEffect( ()=> {
        getDatos(url)
    },[url])

    function getDatos(url){
        setTesultado({cargando:true, data:null})
        const resp = await fetch(url)
        const data = await resp.json()
        setResultado({cargando:false, data})
    }


  return resultado
}
