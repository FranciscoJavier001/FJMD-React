import React from 'react' //** Solamente es un FC */
import { Grid, TextField, Typography } from '@mui/material'

export const LoginPage = () => {
  return (
    <Grid
      container //** Es un contenedor, osea lo defino como el background */
      spacing={ 0 } //** Spacio entre columnas hacia la derecha*/
      direction="column" //** Direccio es columnas, osea hacia abajo */
      alignItems="center" //** Centrado de Items en medio */
      justifyContent="center" //** Contenido centrado a la mitad */
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }} //** stylextra=Tengo acceso al theme.provider, src/theme/purpleTheme */
      >
        
        <Grid item /* Caja de en medio */
          className='box-shadw' //** Defino clase en styes.css, es una sobra */
          xs={ 3 } //** Tamaño pantalla pequeña *
          sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}> {/* Para poder renderizar */}
            <Typography variant="h5" sx={{ mb:1 }}>Login</Typography> {/* Variables asignables, margin, bajo, asigno un mensaje */}

            <form> {/* Formulario */}
              <Grid container> {/* Contenedor */}
                <Grid item xs={ 12 } sx={{ mt: 2 }}> {/* Item, tamaño en pantalla chica y estilos extras */}
                  <TextField /* Campo de texto */
                    label="Email" //** Mensaje que se muestra en el campo */
                    type="email" //** Tipo que es */
                    placeholder='correo@email.com' //** Mensaje que sale al darle click */
                    fullWidth //** Ancho completo */
                    />
                </Grid>

                <Grid item xs={ 12 } sx={{ mt: 2 }}> {/* Item, tamaño en pantalla chica y estilos extras */}
                  <TextField /* Campo de texto */
                    label="Contraseña" //** Mensaje que se muestra en el campo */
                    type="password" //** Tipo que es */
                    placeholder='Contraseña' //** Mensaje que sale al darle click */
                    fullWidth //** Ancho completo */
                    />
                </Grid>

                
              </Grid>
            </form>


        </Grid>
    </Grid>
  )
}