import React from 'react' //** Solamente es un FC */
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'

export const LoginPage = () => {
  return (

    <AuthLayout title="Login"> {/* Recibo el login que desestructire en src/auth/layout/AuthLayout */}
      <form> {/* Formulario */}
        <Grid container> {/* Contenedor */}
          <Grid item xs={ 12 } sx={{ mt: 2 }}> {/* Item, tamaño en pantalla chica y estilos extras */}
            <TextField /* Campo de texto */
              label="Email" //** Mensaje que se muestra en el campo */
              type="email" //** Tipo que es */
              placeholder='email@email.com' //** Mensaje que sale al darle click */
              fullWidth //** Ancho completo */
              />
          </Grid>

          <Grid item xs={ 12 } sx={{ mt: 2 }}> {/* Item, tamaño en pantalla chica y estilos extras */}
            <TextField /* Campo de texto */
              label="Password" //** Mensaje que se muestra en el campo */
              type="password" //** Tipo que es */
              placeholder='Password' //** Mensaje que sale al darle click */
              fullWidth //** Ancho completo */
              />
          </Grid>

          <Grid container spacing={ 2 } sx={{ mb:2, mt:1 }}> {/* Contenedor de elementos, con espacio arriba y abajo */}
            <Grid item xs={ 12 } sm={ 6 }> {/* Tamaño ocupado de cada boton, diferentes display */}
              <Button variant="contained" fullWidth> {/* Boton como contenedor y ocupe todo espacio asignado */}
                Login {/* Lo que dice el boton */}
              </Button>
            </Grid>

            <Grid item xs={ 12 } sm={ 6 }>
              <Button variant="contained" fullWidth>
                <Google />
                  <Typography sx={{ ml:1 }}>Google</Typography> {/* El Texto y un margen hacia la izquierda */}
              </Button>
            </Grid>
          </Grid>
                  
          <Grid container direction="row" justifyContent="end"> {/* Contenedor, fila y mostrar al final */}
            <Link component={ RouterLink } color="inherit" to="/auth/register"> {/* Asigno una ruta */}
              Create Accound
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}