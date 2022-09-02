import { ImageList, ImageListItem } from "@mui/material"; //** Se utilizan en el Codigo */

export const ImageGallery = () => { //** FC */
  return (
    <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}> {/* Componente, tamaño del 100% largo de 500, 4 filas, y largoFila */}
      {itemData.map((item) => ( //** Mapeamos, itemData, es el arreglo de abajo y su nombre es item */
        <ImageListItem key={item.img}> {/* Componente, llave con su nombre del map, y lo que voy a sacar osea el img de arreglo de abajo */}
          <img //** Estas son propiedades de las imagenes */
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`} //** Con esto completamos el patch donde estan con el formato que personalizamos */
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`} //** Para poner imagenes de diferente tamaño */
            alt={item.title} //** Lo que sale cuando la imagen no se puede mostrar */
            loading="lazy" //** Esto me parece muy lazyLoad */
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [ //** El arreglo de las imagenes e itemData lo use arriba */
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];