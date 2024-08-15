// Use this script to drop the database before running the tests
require('dotenv').config();
const mongoose = require('mongoose');

async function dropDatabase() {
    try {
        // Verifica que la URI se haya cargado correctamente
        console.log('MONGODB_URI:', process.env.MONGODB_URI);

        // Conéctate a la base de datos
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // Borra la base de datos
        await mongoose.connection.dropDatabase();
        console.log('Database successfully dropped');

        // Cierra la conexión
        await mongoose.disconnect();
    } catch (error) {
        console.error('Error dropping the database:', error);
    }
}

dropDatabase();