import React from 'react' //** Solamente es un FC */
import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout'

export const RegisterPage = () => {
  return (

    <AuthLayout title="Register"> {/* Recibo el login que desestructire en src/auth/layout/AuthLayout */}
      <form> {/* Formulario */}
        <Grid container> {/* Contenedor */}
          <Grid item xs={ 12 } sx={{ mt: 2 }}> {/* Item, tamaño en pantalla chica y estilos extras */}
            <TextField /* Campo de texto */
              label="Name" //** Mensaje que se muestra en el campo */
              type="text" //** Tipo que es */
              placeholder='Your Name' //** Mensaje que sale al darle click */
              fullWidth //** Ancho completo */
              />
          </Grid>

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
            <Grid item xs={ 12 } sm={ 12 }> {/* Tamaño ocupado de cada boton, diferentes display */}
              <Button variant="contained" fullWidth> {/* Boton como contenedor y ocupe todo espacio asignado */}
                Create Accound {/* Lo que dice el boton */}
              </Button>
            </Grid>
          </Grid>
                  
          <Grid container direction="row" justifyContent="end"> {/* Contenedor, fila y mostrar al final */}
            <Typography sx={{ mr: 1 }}>Already have an Accound?</Typography> {/* Margen Derecha */}
            <Link component={ RouterLink } color="inherit" to="/auth/login"> {/* Asigno una ruta */}
              Login 
            </Link>
          </Grid>

        </Grid>
      </form>
    </AuthLayout>
  )
}