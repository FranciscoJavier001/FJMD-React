import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';//** Los importo */

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

          {/* Le mando el producto que tengo aqui y le mando el mismo, lo voy a convertir en un HOC */}
          <ProductCard product={ product } >
            {/* Necesito un Children y estos de abajo cumplen esta funcion el ProductImage */}
            <ProductCard.Image />
            {/* Pide el title por eso lo mando vacio */}
            <ProductCard.Title title={ 'xxx' } />
            {/* Tengo exmportado este componente desde ProductCard */}
            <ProductCard.Buttons />
          </ProductCard>

          {/* Le mando el producto que tengo aqui y le mando el mismo, lo voy a convertir en un HOC */}
          <ProductCard product={ product } >
            {/* Necesito un Children y estos de abajo cumplen esta funcion el ProductImage */}
            <ProductImage />
            {/* Pide el title por eso lo mando vacio */}
            <ProductTitle />
            {/* Exporto este componente */}
            <ProductButtons/>
          </ProductCard>
      
        </div>
    </div>
  )
}
