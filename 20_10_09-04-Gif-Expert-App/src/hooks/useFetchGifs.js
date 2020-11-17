import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect (() => { //** Este lo utilizamos para que no se haga un llamado de todas al agregar una nueva categoria, recibe la funcion que quiero ejecutar  */
        getGifs(category) //** Aqui se hace el llamado a la funcion que queremos */
        .then(imgs => {

                setState({ //** Este codigo significa que solo quiero que se renderize la primera vez que se llama, ya despues no */
                    data: imgs,
                    loading: false
                });
            })
    }, [category]) //** Aqui es un arreglo de dependencias, y solo se va a disparar una unica vez  */

    return state; //{data:[], loading: true};
}
