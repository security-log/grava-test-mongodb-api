require('dotenv').config();
const mongoose = require('mongoose');

async function dropDatabase() {
    try {
        console.log('MONGODB_URI:', process.env.MONGODB_URI);

        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        await mongoose.connection.dropDatabase();
        console.log('Database successfully dropped');

        await mongoose.disconnect();
    } catch (error) {
        console.error('Error dropping the database:', error);
    }
}

dropDatabase();