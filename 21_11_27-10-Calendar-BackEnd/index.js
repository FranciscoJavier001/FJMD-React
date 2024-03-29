//** Configuracion basica de express */
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Base de datos
dbConnection()

// CORS
app.use(cors())

// Directorio Publico
app.use( express.static('public') ) //** Asi le hicimos para mostrar la pagina en el localhost:4000 */

// Lectura y Parseo del Body
app.use( express.json() ); //** Aqui voy a procesar las peticiones que vengan en formato JSON */

// Rutas
app.use('/api/auth', require('./routes/auth') ) //** Todo lo que este archivo valla a exportar lo va a implementar en esta ruta */

// TODO: CRUD: Eventos -- Rutas
app.use('/api/events', require('./routes/events') ) //** Paso 1 - Router que voy a exportar en los eventos, se toman como rutas */

// Escuchar peticiones
app.listen( process.env.PORT, () => { //** Configuracion del puerto y del .env */
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
})