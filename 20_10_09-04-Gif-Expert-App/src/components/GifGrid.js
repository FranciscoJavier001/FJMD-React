import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => { //** Aqui lo exportamos para que lo pueda utilizar GifExpertApp, el argumento es category */

    const {data:images, loading} = useFetchGifs(category); //** Es la peticion http para traer las imagenes que corresponden a la categoria */

    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>

            {loading && <p className="card animate__animated flash">Loading</p>}

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
