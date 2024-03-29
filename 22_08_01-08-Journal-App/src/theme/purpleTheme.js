//** No es jsx porque no voy a regresar un FC, sino un objeto de JS */
import { createTheme } from "@mui/material/styles" //** Quiero crearme un theme de material */
import { red } from "@mui/material/colors" //** Para mostrar errores en pantalla */

export const purpleTheme = createTheme({ //** Es un tema por defecto, pero nosotros lo sobreescribimos */
    palette: { //** Paleta de colores */
        primary: { //** Color primario */
            main: "#262254" //** Color purpura, lo llame en auth/pages/LoginPage */
        },
        secondary: { //** Color secundario */
            main: "#543884" //** Color morado */
        },
        error: { //** Color de error */
            main: red.A400 //** Color rojo */
        }
    }
})