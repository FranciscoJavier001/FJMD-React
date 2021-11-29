
//** Configuracion basica de express */
const express = require('express')
require('dotenv').config()

// Crear el servidor de express
const app = express();

// Directorio Publico
app.use( express.static('public') ) //** Asi le hicimos para mostrar la pagina en el localhost:4000 */

// Rutas
app.use('/api/auth', require('./routes/auth') ) //** Todo lo que este archivo valla a exportar lo va a implementar en esta ruta */
// TODO: CRUD: Eventos

// Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})