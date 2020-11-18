import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    //** Esto retorna una promesa por lo cual se pone un then, para tener las imgs y la funcion de fecha y llamamos al setImagenes  */
    useEffect (() => { //** Este lo utilizamos para que no se haga un llamado de todas al agregar una nueva categoria, recibe la funcion que quiero ejecutar  */
        getGifs(category) //** Aqui se hace el llamado a la funcion que queremos */
        .then(imgs => {

                setState({ //** Este codigo significa que solo quiero que se renderize la primera vez que se llama, ya despues no */
                    data: imgs,
                    loading: false
                });
            })
    }, [category]) //** Aqui es un arreglo de dependencias, y solo se va a disparar una unica vez, y se la categoria cambia, entonces solo va a ejecutar otra vez este useEffect */

    return state; //{data:[], loading: true};
}
