//**_______________________________________________________________________________________________________________________________________________*/
//** Solucion */
import React from 'react';
import { Link } from 'react-router-dom';

//** Esta es la informacion que esperamos recibir */
export const HeroCard = ({ //** Funcion */
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    // El Style lo puedo definir como un objeto para especifiar el el CSS que queramos pero no le podemos poner guiones - porque eso va en contra de las propiedades de los objetos
    <div className="card ms-3" style={{ maxWidth: 540 }}>
      {/* no-gutters es para que ocupen todo el largo de la tarjeta */}
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={`./assets/heroes/${id}.jpg`}
            className="card-img"
            alt={superhero}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            { ( alter_ego !== characters ) && //** Solamente si el alter_ego es diferente al caracter entonces que si se renderize eso */
              <p className="card-text">{ characters }</p>
            }
            <p className="card-text">
              <small className="text-muted"> {first_appearance} </small>
            </p>
            
            <Link to={ `./hero/${ id }`}>
                Mas...
            </Link>

          </div>

        </div>
      </div>
    </div>
  )
}
