//**_______________________________________________________________________________________________________________________________________________*/
import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({ //** Esta es la informacion que esperamos recibir y la tenemos en data/heroes */
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {

  return (

    <div className="card ms-3" style={{ maxWidth: 540 }}> {/* card=Que se muestren tarjetas, style, es la anchura maxima de las tarjetas */}
      <div className="row no-gutters"> {/* row=Que salgan en columnas(la info alado) no-gutters=Imagenes ocupen todo el largo de la tarjeta */}
        <div className="col-md-4"> {/* col=Columnas que ocupa la tarjeta 4 de 12 */}
          <img //** Para mostrar las imagenes */
            src={`./assets/heroes/${ id }.jpg`} //** Donde se Localizan para añadirlos */
            className="card-img" //** Para que ocupe todo el largo la imagen */
            alt={superhero} //** Para el nombre del superheroe */
          />
        </div>
        <div className="col-md-8"> {/* Espacio que ocupa la info, ya ocupe 4, solo quedan 8 */}
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5> {/* h5=Encabeado 5(tamaño), card-title=Para poner el nombre del superheroe */}
            <p className="card-text">{alter_ego}</p> {/* p=parrafo, card-text=Texto del nombre del superheroe */}
            {/* { ( alter_ego !== characters ) //** alter_ego(nombre en la vida real) es diferente caracter(nombre de sus personajes) */
              // && <p className="card-text">{ characters }</p> //** && renderiza otro p, p=parrafo, card-text=Mostramos el nombre de sus personajes */
            }
            <p className="card-text"> {/* card-text=Texto en la tarjeta */}
              <small className="text-muted"> {first_appearance} </small> {/* small=texto chico, text-muted=texto en gris, historieta que aparecio */}
            </p>
            
            <Link to={ `./hero/${ id }`}> {/* Si le ponen en mas te lleva a un enlace del Heroe con su informacion components/heroes/HeroScreen*/}
                Más...
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
