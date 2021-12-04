
const mongoose = require('mongoose') 

const dbConnection = async () => { //** Es una funcion que voy a tener que importar en el index */

    try {

        await mongoose.connect( process.env.DB_CNN)
        console.log('DB Online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }
}

module.exports = {
    dbConnection
}