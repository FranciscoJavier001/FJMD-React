import { ProductCard } from "../components/ProductCard"

const product = { //** Esto va a ser un objeto, defino la interface en PC, va a tener variables necesarias-En Duro */
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png"
}

export const ShoppingPage = () => { //** rafc */
  return ( 
    <div>
        <h1>Shopping Store</h1>
        <hr /> {/* Linea */}

        <div style={{ //** Le voy a dar estilos a este div */
          display: "flex", //** Se queden las tarjetas en fila */
          flexDirection: "row", //** Que la direccion este en fila */
          flexWrap: "wrap", //** Para que todos sigan la linea y si no caben, que vallan para abajo */
        }}>

          <ProductCard product={ product } /> {/* Le mando el producto que tengo aqui y le mando el mismo */}
        </div>
    </div>
  )
}
